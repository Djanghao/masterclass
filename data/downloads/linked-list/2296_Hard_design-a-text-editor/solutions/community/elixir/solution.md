# Elixir double stack

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/3122001/](https://leetcode.com/problems/design-a-text-editor/solutions/3122001/)

---

# Code
```elixir
defmodule TextEditor do
  use GenServer

  @spec init_() :: any
  def init_() do
    GenServer.start_link(__MODULE__, nil, [name: __MODULE__])
    GenServer.call(__MODULE__, :reset)
  end

  @spec add_text(text :: String.t) :: any
  def add_text(text) do
    GenServer.call(__MODULE__, {:add, text})
  end

  @spec delete_text(k :: integer) :: integer
  def delete_text(k) do
    GenServer.call(__MODULE__, {:delete, k})
  end

  @spec cursor_left(k :: integer) :: String.t
  def cursor_left(k) do
    GenServer.call(__MODULE__, {:goLeft, k})
  end

  @spec cursor_right(k :: integer) :: String.t
  def cursor_right(k) do
    GenServer.call(__MODULE__, {:goRight, k})
  end

  @impl true
  def init(_) do
    {:ok, nil}
  end

  @impl true
  def handle_call(:reset, _, _) do
    {:reply, true, {[], []}}
  end

  def handle_call({:add, text}, _, state) do
    state =
      String.codepoints(text)
      |> Enum.reduce(state, fn ch, {back, front} ->
        {[ch | back], front}
      end)
    {:reply, true, state}
  end

  def handle_call({:delete, k}, _, state) do
    {i, state} = delete(state, 0, k)
    {:reply, i, state}
  end

  def handle_call({:goLeft, k}, _, state) do
    {back, front} = go_left(state, k)
    {:reply, print_last_10(back), {back, front}}
  end

  def handle_call({:goRight, k}, _, state) do
    {back, front} = go_right(state, k)
    {:reply, print_last_10(back), {back, front}}
  end

  defp delete(state, k, k), do: {k, state}
  defp delete({[], _} = state, i, _), do: {i, state}
  defp delete({[_ | back], front}, i, k) do
    delete({back, front}, i + 1, k)
  end

  defp go_left(state, 0), do: state
  defp go_left({[], _} = state, _), do: state
  defp go_left({[ch | back], front}, k) do
    go_left({back, [ch | front]}, k - 1)
  end

  defp go_right(state, 0), do: state
  defp go_right({_, []} = state, _), do: state
  defp go_right({back, [ch | front]}, k) do
    go_right({[ch | back], front}, k - 1)
  end

  defp print_last_10(back) do
    Enum.take(back, 10)
    |> Enum.reverse()
    |> to_string()
  end
end

# Your functions will be called as such:
# TextEditor.init_()
# TextEditor.add_text(text)
# param_2 = TextEditor.delete_text(k)
# param_3 = TextEditor.cursor_left(k)
# param_4 = TextEditor.cursor_right(k)

# TextEditor.init_ will be called before every test case, in which you can do some necessary initializations.
```