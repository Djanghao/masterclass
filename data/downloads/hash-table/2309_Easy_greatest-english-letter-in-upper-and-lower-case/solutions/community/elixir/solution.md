# Elixir, uses MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/4653163/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/4653163/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec greatest_letter(s :: String.t) :: String.t
  def greatest_letter(s) do 
    {_, res} = for <<x <- s>>, {lower, upper} = upper_lower(x), reduce: {MapSet.new, 0} do
      {set, res} -> cond do
        upper < res -> {set, res}
        true -> set = MapSet.put(set, x)
                if (MapSet.member?(set, lower) && MapSet.member?(set, upper)),
                do: {set, upper}, else: {set, res} 
      end    
    end
    if res == 0, do: <<>>, else: <<res>>
  end

  defp upper_lower(cp) do
    cond do
      cp >= ?A && cp <= ?Z -> {cp + (?a - ?A) , cp}
      true -> {cp, cp - (?a - ?A)}
    end
  end
end
```