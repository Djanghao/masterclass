# Elixir - Regex & Stack

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-atoms/solutions/5473333/](https://leetcode.com/problems/number-of-atoms/solutions/5473333/)

---

# Approach
1. Normalize the formula so that there's a number following each atom and each group of atom (e.g. $$CH_2(OH)(COOH)$$ becomes $$C_1H_2(O_1H_1)_1(C_1O_1O_1H_1)_1$$)
2. Split the formula into a list of "tokens". A token can be an atom, a number, a `"("` or a `")"`.
3. Walk through the tokens,
    - when seeing a `"("`, push a new empty atoms counter (a map) to the stack
    - when seeing a `")"` followed by a number `n`, pop the top counter, multiply its values by `n`, then merge it to the new top counter.
    - when seeing an atom and a number `n`, update the top counters.
4. In the end, there should be only one counter in the stack. Then we just need to format that counter according to the rule.

# Code
```Elixir
defmodule Solution do
  @spec count_of_atoms(formula :: String.t) :: String.t
  def count_of_atoms(formula) do
    formula
    |> normalize()
    |> tokenize()
    |> reduce([%{}])
    |> format()
  end

  defp normalize(formula) do
    String.replace(formula, ~r/(?<!^|\\(|\\d)(?=[A-Z]|\\(|\\)|$)/, "1", global: true)
  end

  defp tokenize(formula) do
    Regex.split(~r/\\W|\\d+/, formula, trim: true, include_captures: true)
  end

  defp reduce(["(" | rest], stack) do
    reduce(rest, [%{} | stack])
  end

  defp reduce([")", n | rest], [head1, head2 | tail]) do
    n = String.to_integer(n)

    stack =
      head1
      |> Map.new(fn {atom, count} -> {atom, count * n} end)
      |> Map.merge(head2, fn _atom, count1, count2 -> count1 + count2 end)
      |> then(&[&1 | tail])

    reduce(rest, stack)    
  end

  defp reduce([atom, n | rest], [head | tail]) do
    n = String.to_integer(n)
    
    stack =
      head
      |> Map.update(atom, n, fn count -> count + n end)
      |> then(&[&1 | tail])

    reduce(rest, stack)
  end

  defp reduce([], [freqs]) do
    freqs
  end

  defp format(freqs) do
    freqs
    |> Enum.sort()
    |> Enum.map(fn
      {atom, 1} -> atom
      {atom, n} -> "#{atom}#{n}"
    end)
    |> Enum.join()
  end
end
```