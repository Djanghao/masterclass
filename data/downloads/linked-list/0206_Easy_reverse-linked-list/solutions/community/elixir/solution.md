# Elixir - Let's make simple things complicated xD

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/4904116/](https://leetcode.com/problems/reverse-linked-list/solutions/4904116/)

---

Since this problem is too easy, I took the chance to practice Elixir's powerful protocols `Enumerable` and `Collectable`. But in order to use protocols, I have to have a struct, so I wrap the raw linked list into a module `LinkedList`

```elixir
defmodule LinkedList do
  @type t :: %__MODULE__{
    head: nil | ListNode.t
  }

  defstruct [:head]
end
```

Then I implemented the `Enumerable` protocol for it:

```elixir
defimpl Enumerable, for: LinkedList do
  def count(_), do: {:error, __MODULE__}
  def member?(_, _), do: {:error, __MODULE__}
  def slice(_), do: {:error, __MODULE__}

  def reduce(_linked_list, {:halt, acc}, _fun) do
    {:halted, acc}
  end

  def reduce(linked_list, {:suspend, acc}, fun) do
    {:suspended, acc, &reduce(linked_list, &1, fun)}
  end

  def reduce(linked_list, {:cont, acc}, fun) do
    do_reduce(linked_list.head, {:cont, acc}, fun)
  end

  defp do_reduce(nil, {:cont, acc}, _fun) do
    {:done, acc}
  end

  defp do_reduce(%ListNode{val: val, next: next}, {:cont, acc}, fun) do
    reduce(%@for{head: next}, fun.(val, acc), fun)
  end
end
```

And the `Collectable` protocol as well:

```elixir
defimpl Collectable, for: LinkedList do
  def into(initial_acc) do
    {initial_acc, &collect/2}
  end

  defp collect(%@for{head: head}, {:cont, elem}) do
    %@for{
      head: %ListNode{val: elem, next: head}
    }
  end

  defp collect(%@for{} = acc, :done) do
    acc
  end

  defp collect(%@for{}, :halt) do
    :ok
  end
end
```

Finally, it's time to solve the problem.

```elixir
defmodule Solution do
  @spec reverse_list(head :: ListNode.t | nil) :: ListNode.t | nil
  def reverse_list(head) do
    %LinkedList{head: head}
    |> Enum.into(%LinkedList{})
    |> then(& &1.head)
  end
end
```