defmodule Backend.ChatChannel do
  use Backend.Web, :channel

  def join("chat", _params, socket) do
    {:ok, assign(socket, :chat, "chat")}
  end
end