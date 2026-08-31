# [Rust / Elixir] DFS solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/combinations/solutions/3845423/](https://leetcode.com/problems/combinations/solutions/3845423/)

---

Many things are different between 2 solutions, but they are both DFS.
# Code
```Rust []
impl Solution {
    pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
        let mut ans = Vec::<Vec<i32>>::new();
        Self::dfs(
            1, n, k,
            &mut Vec::with_capacity(k as usize), &mut ans);
        ans
    }

    fn dfs(
    i: i32, n: i32, k: i32,
    v: &mut Vec<i32>, ans: &mut Vec<Vec<i32>>) {
        let j = n - k + v.len() as i32 + 1;
        for x in i..=j {
            v.push(x);
            if v.len() == k as usize {
                ans.push(v.clone());
            }
            else {
                Self::dfs(x + 1, n, k, v, ans);
            }
            v.pop();
        }
    }
}
```
```Elixir []
defmodule Solution do
  @spec combine(n :: integer, k :: integer) :: [[integer]]
  def combine(n, k) do
    dfs(n, k, [], [])
  end

  defp dfs(_, 0, list, ans), do: [list | ans]
  defp dfs(hi, k, list, ans) do
    Enum.reduce(k..hi//1, ans, fn x, ans ->
      dfs(x - 1, k - 1, [x | list], ans)
    end)
  end
end
```