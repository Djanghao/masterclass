# Elixir Sort DP Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3123159/](https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3123159/)

---

```
defmodule Solution do
  @spec best_team_score(scores :: [integer], ages :: [integer]) :: integer
  def best_team_score(scores, ages) do
    teams =
      Enum.zip(ages, scores)
      |> Enum.sort_by(fn {a, s} -> {-a, -s} end)
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {{_, s}, i}, acc ->
        Map.put(acc, i, s)
      end)


    for i <- 0..(map_size(teams) - 1), reduce: {%{}, 0} do
      {dp, ans} ->
        score = teams[i]
        dp = Map.put(dp, i, score)

        for j <- 0..(i - 1)//1, reduce: dp do
          dp ->
            older_score = teams[j]

            if older_score >= score do
              Map.update!(dp, i, &max(&1, dp[j] + score))
            else
              dp
            end
        end
        |> then(fn dp ->
          {dp, max(ans, dp[i])}
        end)
    end
    |> elem(1)
  end
end

```