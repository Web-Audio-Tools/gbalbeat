defmodule GbalbeatWeb.MusicChannel do
    use Phoenix.Channel
    require Logger
    alias GbalbeatWeb.Presence
    
    def join("music:" <> id, _message, socket) do
        send(self(), :after_join)
        {:ok, socket}
    end

    def handle_in("new:msg", msg, socket) do
        broadcast!(socket, "new:msg", msg)
        {:noreply, socket}
    end

    def handle_info(:after_join, socket) do
        {:ok, _} = Presence.track(socket, socket.assigns.user_id, %{
          online_at: inspect(System.system_time(:second))
        })
    
        push(socket, "presence_state", Presence.list(socket))
        {:noreply, socket}
      end

  end