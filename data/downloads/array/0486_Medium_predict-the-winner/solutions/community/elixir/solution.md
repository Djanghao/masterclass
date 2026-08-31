# Elixir - incomprehensible bottom-up DP

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/3826539/](https://leetcode.com/problems/predict-the-winner/solutions/3826539/)

---

# Code
```
defmodule Solution do
  @spec predict_the_winner(nums :: [integer]) :: boolean
  def predict_the_winner(nums) do
    think(nums, nums, tl(nums))
  end

  defp think([ans], _, _), do: ans >= 0
  defp think(scores, take_l, take_r) do
    Enum.chunk_every(scores, 2, 1, :discard)
    |> then(&[&1, take_l, take_r])
    |> Enum.zip_with(fn [[s1, s2], left, right] ->
      max(left - s2, right - s1)
    end)
    |> think(take_l, tl(take_r))
  end
end
```