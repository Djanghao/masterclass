# [Rust / Elixir] group by size

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4029085/](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4029085/)

---

# Code
```Rust []
impl Solution {
    pub fn group_the_people(group_sizes: Vec<i32>) -> Vec<Vec<i32>> {
        let mut groups: Vec<Vec<Vec<i32>>> =
            vec![Vec::new(); group_sizes.len() + 1];
        for (i, &x) in group_sizes.iter().enumerate() {
            if let Some(v) = groups[x as usize].last_mut() {
                if v.len() < x as usize {
                    v.push(i as i32);
                    continue;
                }
            }
            groups[x as usize].push(vec![i as i32]);
        }
        groups.concat()
    }
}
```
```Elixir []
defmodule Solution do
  @spec group_the_people(group_sizes :: [integer]) :: [[integer]]
  def group_the_people(group_sizes) do
    Enum.with_index(group_sizes)
    |> Enum.group_by(&elem(&1, 0))
    |> Enum.flat_map(fn {x, list} ->
      Enum.map(list, &elem(&1, 1))
      |> Enum.chunk_every(x)
    end)
  end
end
```