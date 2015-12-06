defmodule Backend.ChatChannel do
  use Backend.Web, :channel

  def join("chat", _params, socket) do
    {:ok, assign(socket, :chat, "chat")}
  end

  def handle_in("new_message", params, socket) do
    broadcast! socket, "new_message", %{
      message: %{
        id: 1,
        user: %{username: "anon"},
        payload: params["payload"]
      }
    }
    {:reply, :ok, socket}
  end
end