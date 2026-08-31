# Elixir with :ets

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/4826164/](https://leetcode.com/problems/find-all-people-with-secret/solutions/4826164/)

---

`:ets` ends up with an acceptable runtime, while `Map` will have TLE with the same algorithm.
# Code
```
defmodule Solution do
  @spec find_all_people(n :: integer, meetings :: [[integer]], first_person :: integer) :: [integer]
  def find_all_people(n, meetings, first_person) do
    parent = :ets.new(:user_lookup, [:set])
    [[0, first_person, 0] | meetings]
    |> Enum.group_by(fn [_, _, t] -> t end)
    |> Enum.sort()
    |> Enum.each(fn {_, list} ->
      Enum.each(list, fn [x, y, _] ->
        x_root = find_set(x, parent)
        y_root = find_set(y, parent)
        cond do
          x_root < y_root -> :ets.insert(parent, {y_root, x_root})
          x_root > y_root -> :ets.insert(parent, {x_root, y_root})
          true -> nil
        end
      end)
      Enum.flat_map(list, fn [x, y, _] -> [x, y] end)
      |> Enum.uniq()
      |> Enum.each(fn i ->
        if find_set(i, parent) != 0 do
          :ets.delete(parent, i)
        end
      end)
    end)
    Enum.filter(0..n - 1, fn i ->
      find_set(i, parent) == 0
    end)
  end

  defp find_set(i, parent) do
    case :ets.lookup(parent, i) do
      [] -> i
      [{_, p}] ->
        root = find_set(p, parent)
        :ets.insert(parent, {i, root})
        root
    end
  end
end
```