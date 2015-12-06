require IEx
defmodule Backend.ChatChannel do
  use Backend.Web, :channel
  alias Timex.Date
  alias Timex.DateFormat

  def join("chat", _params, socket) do
    {:ok, assign(socket, :chat, "chat")}
  end

  def handle_in("new_message", params, socket) do
    {:ok, time} = Timex.Date.now |> Timex.DateFormat.format("{ISO}")
    broadcast! socket, "new_message", %{
      message: %{
        id: time,
        user: %{username: "anon"},
        payload: params["payload"]
      }
    }
    {:reply, :ok, socket}
  end
end