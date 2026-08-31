# [Rust / Elixir] Sorting & Binary Search

**Author:** Minamikaze392
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/2848765/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/2848765/)

---

# Approach
Maintain a Vec `v: Vec<(i32, i32)>` such that `v[i][0]` represent the maximum profit we can get at time `v[i][1]`.
Iterate the jobs in ascending order of end_time, and check whether including each job can result in larger maximum profit at the job's end_time.
Using binary search on `v` can improve time from O(n^2) to O(n logn).

# Complexity
- Time complexity: O(n logn)

- Space complexity: O(n)

# Rust
```rust
impl Solution {
    pub fn job_scheduling(start_time: Vec<i32>, end_time: Vec<i32>, profit: Vec<i32>) -> i32 {
        let mut jobs: Vec<usize> = (0..profit.len()).collect();
        jobs.sort_unstable_by_key(|&i| end_time[i]);
        let mut v: Vec<(i32, i32)> = vec![(0, i32::MIN)];
        for &i in jobs.iter() {
            let left = match v.binary_search_by_key(&start_time[i], |&(_, t)| t) {
                Ok(j) => j,
                Err(j) => j - 1,
            };
            if v[left].0 + profit[i] > v.last().unwrap().0 {
                if end_time[i] == v.last().unwrap().1 {
                    v.last_mut().unwrap().0 = v[left].0 + profit[i];
                }
                else {
                    v.push((v[left].0 + profit[i], end_time[i]));
                }
            }
        }
        v.last().unwrap().0
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec job_scheduling(start_time :: [integer], end_time :: [integer], profit :: [integer]) :: integer
  def job_scheduling(start_time, end_time, profit) do
    Enum.zip(start_time, end_time)
    |> Enum.zip(profit)
    |> Enum.sort_by(fn {{_, e}, _} -> e end)
    |> Enum.reduce({{0, -1}}, fn {{t_start, t_end}, prof}, tuple ->
      size = tuple_size(tuple)
      prof2 = binary_search(0, size - 1, tuple, t_start)
      {max_prof, last_time} = last_elem(tuple)
      if prof + prof2 > max_prof do
        if t_end == last_time do
          put_elem(tuple, size - 1, {prof + prof2, last_time})
        else
          Tuple.append(tuple, {prof + prof2, t_end})
        end
      else
        tuple
      end
    end)
    |> last_elem()
    |> elem(0)
  end

  defp last_elem(tuple) do
    elem(tuple, tuple_size(tuple) - 1)
  end

  defp binary_search(lo, lo, tuple, _) do
    elem(tuple, lo)
    |> elem(0)
  end
  defp binary_search(lo, hi, tuple, t) do
    mid = ceil((lo + hi) / 2)
    {_, t2} = elem(tuple, mid)
    if t2 > t do
      binary_search(lo, mid - 1, tuple, t)
    else
      binary_search(mid, hi, tuple, t)
    end
  end
end
```