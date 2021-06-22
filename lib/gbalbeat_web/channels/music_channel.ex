defmodule GbalbeatWeb.MusicChannel do
    use Phoenix.Channel
  
    def join("music:lobby", _message, socket) do
      {:ok, socket}
    end

  end