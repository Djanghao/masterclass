# Elixir sort then O(n^2)

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/5236061/](https://leetcode.com/problems/recover-the-original-array/solutions/5236061/)

---

# Code
```
defmodule Solution do
  @spec recover_array(nums :: [integer]) :: [integer]
  def recover_array(nums) do
    n = length(nums) |> div(2)
    list = Enum.sort(nums)
    find_original(list, list, n)
  end

  defp find_original(list = [a | _], [prev, b | tail], n) do
    with true <- b > prev,
    true <- rem(b - a, 2) == 0,
    k = div(b - a, 2),
    {ans, _, _} <- Enum.reduce_while(list, {[], :queue.new(), 0}, fn x, {ans, q, len} ->
      cond do
        {:value, x - k} == :queue.peek(q) ->
          {:cont, {[x - k | ans], :queue.drop(q), len}}
        len == n ->
          {:halt, nil}
        true ->
          {:cont, {ans, :queue.in(x + k, q), len + 1}}
      end
    end) do
      Enum.reverse(ans)
    else
      _ -> find_original(list, [b | tail], n)
    end
  end
end
```