defmodule Backend.UserController do
  use Backend.Web, :controller

  plug :action

  def index(conn, _params) do
    users = [
      %{id: 1, username: "Sebi", status: 0},
      %{id: 2, username: "Bianca", status: 0}
    ]
    render conn, contacts: users
  end
end