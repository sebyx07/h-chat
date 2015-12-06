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
        createdAt: time,
        user: params["username"] |> get_id,
        payload: params["payload"]
      }
    }
    {:reply, :ok, socket}
  end

  defp get_id("bianca") do
    2
  end

  defp get_id(_) do
    1
  end
end