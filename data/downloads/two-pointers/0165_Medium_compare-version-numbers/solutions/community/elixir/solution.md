# Elixir - Simple - Pattern Matching

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/5106157/](https://leetcode.com/problems/compare-version-numbers/solutions/5106157/)

---



# Code
```
defmodule Solution do
  @spec compare_version(version1 :: String.t, version2 :: String.t) :: integer
  def compare_version(version1, version2) do
    v1 = String.split(version1, ".") 
    v2 = String.split(version2, ".") 
    diff(v1, v2)
  end

  defp diff([], []), do: 0
  defp diff([], v2), do: diff(["0"], v2)
  defp diff(v1, []), do: diff(v1, ["0"])
  defp diff([v1 | t1], [v2 | t2]) do
    with v1 <- Integer.parse(v1),
         v2 <- Integer.parse(v2) do
      cond do
        v1 < v2 -> -1
        v1 > v2 -> 1
        true -> diff(t1, t2)
      end
    end
  end
end
```