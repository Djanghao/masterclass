# Elixir - what a mess

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/2437909/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/2437909/)

---

It just works.

```elixir
defmodule Solution do
  @spec get_distances(arr :: [integer]) :: [integer]
  def get_distances(arr) do
    arr
    |> Enum.with_index()
    |> Enum.group_by(&elem(&1, 0), &elem(&1, 1))
    |> Enum.flat_map(fn {_, indices} ->
      l = length(indices)
      b = Enum.sum(indices) - hd(indices) * l
      indices
      |> Enum.chunk_every(2, 1, :discard)
      |> Enum.reduce({[{hd(indices), b}], 0}, fn [a0, a1], {acc, k} ->
        {_, prev} = hd(acc)
        curr = prev + (2 * k - l + 2) * (a1 - a0)
        {[{a1, curr} | acc], k + 1}
      end)
      |> elem(0)
    end)
    |> Enum.sort_by(&elem(&1, 0))
    |> Enum.map(&elem(&1, 1))
  end
end
```

## Explanation

### Overall

1. Group the indices by the value at that index, for example, `[2,1,3,1,2,3,3]` will be grouped as  
```elixir
%{
  1 => [1, 3],  # The integer 1 appears at position 1 and 3
  2 => [0, 4],  # The integer 2 appears at position 0 and 4
  3 => [2, 5, 6]  # The integer 3 appears at position 2, 5 and 6
}
```
2. For each group of indices, do the calculation (see below), and create an unsorted list of `{index, calculated_value}`
3. Sort the list returned in step 2 by `index`, then keep only the `calculated_value`

### Calculation in step 2

Note that each group of indices is the indices of the same integer, and each group of indices is strictly increasing.

We note the indices in each group as `a[0]`, `a[1]` ... `a[L-1]` where `L` is the length of that group.

We note the calculated values as `b[0]`, `b[1]` ... `b[L-1]`.

The first calculated value `b[0]` of that group is given by the formula

```
b[0] = (a[1] - a[0]) + (a[2] - a[0]) + ... + (a[L-1] - a[0])
       = (a[0] - a[0]) + (a[1] - a[0]) + (a[2] - a[0]) + ... + (a[L-1] - a[0])
	   = (a[0] + a[1] + ... + a[L-1]) - L * a[0]
	   = sum(a) - L * a[0]
```

Calculating `b[0]` takes O(L) time.

The k-th calculated value `b[k]` is given by the formula

```
b[k] = (a[k] - a[0]) + (a[k] - a[1]) + ... + (a[k] - a[k-1]) +
	   (a[k+1] - a[k]) + (a[k+2] - a[k]) + ... + (a[L-1] - a[k])  
	 = -(a[0] + ... + a[k-1]) + k*a[k]
	   +(a[k+1] + ... + a[L-1]) - (L - k - 1)*a[k]
	 = -(a[0] + ... + a[k-1]) + (a[k+1] + ... + a[L-1]) + (2k - L + 1)*a[k]
```

so

```
b[k+1] = -(a[0] + ... + a[k]) + (a[k+2] + ... + a[L-1]) + (2(k+1) - L + 1)*a[k+1]
       = -(a[0] + ... + a[k-1]) - a[k] + (a[k+1] + ... + a[L-1]) - a[k+1] + (2k - L + 1)*a[k] - + (2k - L + 1)*a[k] + (2k - L + 3)*a[k+1]
	   = -(a[0] + ... + a[k-1]) + (a[k+1] + ... + a[L-1]) + (2k - L + 1)*a[k] + (2k - L + 2)*(a[k+1] - a[k])
	   = b[k] + (2k - L + 2)*(a[k+1] - a[k])
```

Now we got the recursive formula and the first element `b[0]`, we can then get all `b[k]` in O(L) time.