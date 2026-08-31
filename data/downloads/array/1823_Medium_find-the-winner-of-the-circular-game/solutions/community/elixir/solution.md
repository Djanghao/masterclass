# Elixir - Recursive

**Author:** lreid295
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5443245/](https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5443245/)

---

# Approach
Recursivley play and eliminate until the list size is 1.

We must reshuffle list for this approach to work. 
The index after the player eliminated should be at the start of the list for the next round. This implementation does not involve keeping track of the index of the next player to start.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec find_the_winner(n :: integer, k :: integer) :: integer
  def find_the_winner(n, k) do
    1..n
    |> Enum.to_list()
    |> play(k)
  end

  defp play(list, _) when length(list) == 1, do: hd(list)
  defp play(list, k) do
    index =
      cond do 
        k <= length(list) -> k - 1 
        k > length(list) -> rem(k, length(list)) - 1
      end

    new_list = list -- [Enum.at(list, index)]
    
    new_list
    |> re_shuffle_list(index)
    |> play(k)
  end

  defp re_shuffle_list(new_list, index) do
    new_end = Enum.take(new_list, index)
    new_list = new_list -- new_end
    new_list ++ new_end
  end
end
```