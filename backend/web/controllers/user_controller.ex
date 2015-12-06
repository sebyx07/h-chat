defmodule Backend.UserController do
  use Backend.Web, :controller

  plug :action

  def index(conn, _params) do
    users = [
      %{id: 1, username: "Sebi"},
      %{id: 2, username: "Bianca"}
    ]
    render conn, contacts: users
  end
end