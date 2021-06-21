defmodule GbalbeatWeb.PageController do
  use GbalbeatWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
