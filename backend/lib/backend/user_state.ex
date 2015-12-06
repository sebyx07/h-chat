defmodule Backend.UserState do
  use GenServer

  def start_link do
    GenServer.start_link(__MODULE__, %{sebi: 0, bianca: 0})
  end

  def init(initial_val) do
    {:ok, initial_val}
  end

  def users(pid) do
    GenServer.call(pid, :users)
  end

  def online(pid, username) do
    GenServer.cast(pid, {:online, username})
  end

  def offline(pid, username) do
    GenServer.cast(pid, {:offline, username})
  end

  def handle_call(:users, _from, users) do
    {:reply, users, users}
  end

  def handle_cast({:online, username}, state) do
    {:noreply, Map.put(state, username, 1)}
  end

  def handle_cast({:offline, username}, state) do
    {:noreply, Map.put(state, username, 0)}
  end
end