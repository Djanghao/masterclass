# Elixir with List.foldr

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-swap/solutions/5924597/](https://leetcode.com/problems/maximum-swap/solutions/5924597/)

---

# Approach
1. Iterate through the digits from right to left.
2. Keep track of the *largest digit* (`r`) and also its *unit* (`r_u`).
eg. `r` of "2431" is *4* with its unit (`r_u`) being *100*.
3. Swap the digit `r` with the first digit (`l`) from the left which is smaller than `r`. (The unit of `l` is `l_u`)
4. The "swap" can be performed by adding `num` with:
`r * l_u - l * l_u - r * r_u + l * r_u`
`= (r - l) * (l_u - r_u)`
# Complexity
- Time complexity: $$O(log(n))$$

- Space complexity: $$O(log(n))$$

# Code
```Elixir []
defmodule Solution do
  @spec maximum_swap(num :: integer) :: integer
  def maximum_swap(num) do
    Integer.digits(num)
    |> List.foldr({0, 0, 0, 1}, fn l, {swap, r, r_u, l_u} ->
      cond do
        l > r -> {swap, l, l_u, l_u * 10}
        l == r -> {swap, r, r_u, l_u * 10}
        true -> {(r - l) * (l_u - r_u), r, r_u, l_u * 10}
      end
    end)
    |> elem(0)
    |> Kernel.+(num)
  end
end
```