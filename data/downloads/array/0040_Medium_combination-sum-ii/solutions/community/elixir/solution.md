# Elixir - Memoization using process dictionary (~270ms / ~72MB)

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/5628693/](https://leetcode.com/problems/combination-sum-ii/solutions/5628693/)

---

# Intuition
Subset Sum

# Code
Process dictionaries in Erlang/Elixir is something like thread-locals in some other languages, except that its memory is immediately freed when the process finished running.

In order not to pollute the calling process, I just spawned a child process to handle the memoization, and awaits the result.

```elixir
defmodule Solution do
  @spec combination_sum2(candidates :: [pos_integer], target :: pos_integer) :: [[pos_integer]]
  def combination_sum2(candidates, target) do
    candidates
    |> Enum.sort()
    |> Enum.with_index()
    |> then(&Task.async(fn -> subset_sum(&1, target) end))
    |> Task.await()
  end

  @spec subset_sum([{pos_integer, non_neg_integer}], pos_integer) :: [[pos_integer]]

  # Because `target` is always positive,
  # if there are no numbers in the list,
  # then there are no solutions
  defp subset_sum([], _target) do
    []
  end

  # Because the list is sorted,
  # if the current number is equal to the target,
  # there is only one possible solution `[target]`
  # because the rest numbers in the list are either equal to `target`, which yields duplicate solutions,
  # or are greater than `target`, which yields no solutions.
  defp subset_sum([{target, _i} | _], target) do
    [[target]]
  end

  # If the current number is greater than `target`,
  # then there's no solution
  # because the rest numbers in the list are all greater than `target`.
  defp subset_sum([{n, _i} | _], target) when n > target do
    []
  end

  # If the current number is smaller than `target`,
  # then we try both taking the number and skipping the number.
  defp subset_sum([{n, i} | rest], target) do
    memoized({i, target}, fn ->
      a = Enum.map(subset_sum(rest, target - n), &[n | &1])
      b = subset_sum(rest, target)
      Enum.uniq(a ++ b)
    end)
  end

  @spec memoized(key, (-> result)) :: result
        when key: any(), result: any()
  defp memoized(key, fun) do
    with :miss <- Process.get(key, :miss) do
      fun.() |> tap(&Process.put(key, &1))
    end
  end
end
```