# Elixir using lists

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/5011457/](https://leetcode.com/problems/multiply-strings/solutions/5011457/)

---

# Approach
1. The 2 strings are converted to 2 lists of digits, and multiplication is done using these 2 lists.
2. Intermediate result is allowed to contain values >= 10, and the `div(_, 10)` and `rem(_, 10)` operations will be only done at last to obtain the list of digits representing the product.
3. Convert it back to string.

# Code
```
defmodule Solution do
  @spec multiply(num1 :: String.t, num2 :: String.t) :: String.t
  def multiply(num1, num2) do
    multiply_lists(to_digits(num1), to_digits(num2))
    |> back_to_string()
  end

  defp to_digits(num) do
    String.to_charlist(num)
    |> Enum.reverse()
    |> Enum.map(fn ch -> ch - ?0 end)
  end

  defp multiply_lists(list1, list2) do
    Enum.reduce(list1, {[], []}, fn val1, {product, acc} ->
      Enum.reduce(list2, {[], acc}, fn
        val2, {acc2, [x | acc]} -> {[val1 * val2 + x | acc2], acc}
        val2, {acc2, []} -> {[val1 * val2 | acc2], []}
      end)
      |> then(fn {acc2, acc} ->
        Enum.reverse(acc2, acc)
      end)
      |> then(fn [head | tail] ->
        {[head | product], tail}
      end)
    end)
    |> then(fn {product, acc} ->
      Enum.reverse(product, acc)
    end)
  end

  defp back_to_string(list, carry \\\\ 0, ans \\\\ [])
  defp back_to_string([x | tail], carry, ans) do
    sum = x + carry
    back_to_string(tail, div(sum, 10), [rem(sum, 10) | ans])
  end
  defp back_to_string([], carry, ans) do
    [carry | ans]
    |> Enum.drop_while(&(&1 == 0))
    |> then(fn
      [] -> "0"
      list -> Enum.join(list)
    end)
  end
end
```