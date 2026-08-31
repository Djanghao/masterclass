# Elixir Permutation Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/24-game/solutions/3045655/](https://leetcode.com/problems/24-game/solutions/3045655/)

---

```
defmodule Solution do
  @spec judge_point24(cards :: [integer]) :: boolean
  def judge_point24(cards) do
    ops = all_ops()

    cards
    |> permutations()
    |> Enum.any?(fn [a, b, c, d] ->
      ops
      |> Enum.any?(fn [op1, op2, op3] ->
        [
          op3.(op1.(a, b), op2.(c, d)),
          op3.(op2.(op1.(a, b), c), d),
          op1.(a, op3.(op2.(b, c), d)),
          op1.(a, op2.(b, op3.(c, d)))
        ]
        |> Enum.find(&(Float.round(&1 / 1, 2) == 24))
        |> then(&(&1 != nil))
      end)
    end)
  end

  def all_ops() do
    d = fn a, b -> if b == 0, do: 0, else: a / b end
    ops = [&+/2, &-/2, &*/2, d]
    combo(ops ++ ops ++ ops, 3)
  end

  def combo(_, 0), do: [[]]
  def combo([], _), do: []

  def combo([h | t], n) do
    for(l <- combo(t, n - 1), do: [h | l]) ++ combo(t, n)
  end

  def permutations([]), do: [[]]

  def permutations(list),
    do: for(elem <- list, rest <- permutations(list -- [elem]), do: [elem | rest])
end

```