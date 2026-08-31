# [Rust / Elixir] Sorting

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/5792553/](https://leetcode.com/problems/minimum-time-difference/solutions/5792553/)

---

# Approach
After sorting add the (smallest time + 24 hours) at the end.
# Code
```Rust []
impl Solution {
    pub fn find_min_difference(time_points: Vec<String>) -> i32 {
        let mut v = Vec::with_capacity(time_points.len() + 1);
        for s in time_points.iter() {
            v.push(s[..2].parse::<i32>().unwrap() * 60
                + s[3..].parse::<i32>().unwrap());
        }
        v.sort_unstable();
        v.push(v[0] + 24 * 60);
        v.windows(2).map(|w| w[1] - w[0]).min().unwrap()
    }
}
```
```Elixir []
defmodule Solution do
  @spec find_min_difference(time_points :: [String.t]) :: integer
  def find_min_difference(time_points) do
    Enum.map(time_points, fn s ->
      String.split(s, ":")
      |> Enum.map(&(Integer.parse(&1) |> elem(0)))
      |> then(fn [h, m] -> h * 60 + m end)
    end)
    |> Enum.sort()
    |> then(&Enum.chunk_every(&1, 2, 1, [hd(&1) + 24 * 60]))
    |> Enum.map(fn [a, b] -> b - a end)
    |> Enum.min()
  end
end
```