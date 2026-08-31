# [Rust / Elixir] ignore n

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4242958/](https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4242958/)

---

`n` is not used in code, as all `target[i] <= n`.
# Code
```Rust []
impl Solution {
    pub fn build_array(target: Vec<i32>, n: i32) -> Vec<String> {
        let mut i = 1;
        let mut ans = Vec::new();
        for &x in target.iter() {
            for _ in i..x {
                ans.push("Push".to_owned());
                ans.push("Pop".to_owned());
            }
            ans.push("Push".to_owned());
            i = x + 1;
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec build_array(target :: [integer], n :: integer) :: [String.t]
  def build_array(target, n) do
    build(target, 1, [])
  end

  defp build([], _, ans), do: Enum.reverse(ans)
  defp build([x | target], x, ans) do
    build(target, x + 1, ["Push" | ans])
  end
  defp build(target, x, ans) do
    build(target, x + 1, ["Pop", "Push" | ans])
  end
end
```