# [Rust / Elixir] sorting & stacking

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/5468154/](https://leetcode.com/problems/robot-collisions/solutions/5468154/)

---

# Code
```Rust []
impl Solution {
    pub fn survived_robots_healths(positions: Vec<i32>, healths: Vec<i32>, directions: String) -> Vec<i32> {
        let mut robots: Vec<usize> = (0..positions.len()).collect();
        robots.sort_unstable_by_key(|&i| positions[i]);

        let mut survive = Vec::<(usize, i32)>::new();
        let mut stack = Vec::<(usize, i32)>::new();
        for &i in robots.iter() {
            if directions.as_bytes()[i] == b'L' {
                let mut hp = healths[i];
                while hp != 0 && !stack.is_empty() {
                    let last = stack.len() - 1;
                    if stack[last].1 < hp {
                        stack.pop();
                        hp -= 1;
                    }
                    else if stack[last].1 > hp {
                        stack[last].1 -= 1;
                        hp = 0;
                    }
                    else {
                        stack.pop();
                        hp = 0;
                    }
                }
                if hp != 0 {
                    survive.push((i, hp));
                }
            }
            else {
                stack.push((i, healths[i]));
            }
        }
        survive.append(&mut stack);
        survive.sort_unstable();
        survive.iter()
            .map(|&(_, hp)| hp)
            .collect()
    }
}
```
```Elixir []
defmodule Solution do
  @spec survived_robots_healths(positions :: [integer], healths :: [integer], directions :: String.t) :: [integer]
  def survived_robots_healths(positions, healths, directions) do
    Enum.zip([positions, healths, String.to_charlist(directions), 1..length(positions)])
    |> Enum.sort()
    |> Enum.reduce({[], []}, &do_reduce/2)
    |> then(fn {survive, stack} -> survive ++ stack end)
    |> Enum.sort()
    |> Enum.map(&elem(&1, 1))
  end

  defp do_reduce({p, h, ?R, i}, {survive, stack}) do
    {survive, [{i, h} | stack]}
  end
  defp do_reduce({p, h, ?L, i}, {survive, [{j, h} | stack]}) do
    {survive, stack}
  end
  defp do_reduce({p, h, ?L, i}, {survive, [{j, h2} | stack]}) when h > h2 do
    do_reduce({p, h - 1, ?L, i}, {survive, stack})
  end
  defp do_reduce({p, h, ?L, i}, {survive, [{j, h2} | stack]}) do
    {survive, [{j, h2 - 1} | stack]}
  end
  defp do_reduce({p, h, ?L, i}, {survive, []}) do
    {[{i, h} | survive], []}
  end
end
```