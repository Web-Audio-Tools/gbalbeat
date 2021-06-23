defmodule GbalbeatWeb.MusicChannel do
    use Phoenix.Channel
  
    def join("music:" <> id, _message, socket) do
        {:ok, socket}
    end

    def handle_in("new:msg", msg, socket) do
        broadcast!(socket, "new:msg", msg)
        {:noreply, socket}
    end

  end