# [Elixir] || Tail Recursion || Pattern Matching || Linear Time

**Author:** KettelBear
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4116791/](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4116791/)

---

# Intuition

There is some intuition here before starting the problem. That is to deeply analyze the rules of the game. For a move to be valid, the token that the player wants to remove must have their own token on either side. The detail to extract here is that neither player influences the game for the other.

Knowing that, we can begin to start solving. The base case is that Alice has no moves and Bob wins. So now we know that Alice wins if and only if she has strictly more moves than Bob.

# Approach

I prefer to work with lists, and I'm positive one could pattern match with strings.

So, my solution is to count the total number of Alice's moves and the total number of Bob's moves, and then compare when there are no colors left.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
defmodule Solution do
  @spec winner_of_game(colors :: String.t) :: boolean
  def winner_of_game(colors) do
    colors |> String.graphemes() |> winner_of_game(0, 0)
  end

  defp winner_of_game([], alice, bob), do: alice > bob
  defp winner_of_game(["A", "A", "A" | _] = colors, alice, bob), do: colors |> tl() |> winner_of_game(alice + 1, bob)
  defp winner_of_game(["B", "B", "B" | _] = colors, alice, bob), do: colors |> tl() |> winner_of_game(alice, bob + 1)
  defp winner_of_game(colors, alice, bob), do: colors |> tl() |> winner_of_game(alice, bob)
end
```