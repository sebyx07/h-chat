defmodule Backend.UserView do
  use Backend.Web, :view

  def render("index.json", %{contacts: users}) do
    users
  end
end