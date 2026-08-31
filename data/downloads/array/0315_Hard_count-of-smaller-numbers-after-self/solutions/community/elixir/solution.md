# Elixir Fenwick Tree & Rust MergeSort Solutions

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/2324770/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/2324770/)

---

```
defmodule Solution do
  defmodule FenwickTree do
    use Bitwise
    defstruct v: %{}, n: 0

    def new(n) do
      %FenwickTree{n: n}
    end

    def add(%FenwickTree{v: v, n: n} = t, i, val) when i > n, do: t

    def add(t, i, val) do
      nv = Map.update(t.v, i, val, &(&1 + val))
      add(%FenwickTree{t | v: nv}, i + lowbit(i), val)
    end

    def query(t, i) do
      query(t, i, 0)
    end

    def query(%FenwickTree{v: v, n: n}, i, sum) when i <= 0, do: sum

    def query(t, i, sum) do
      query(t, i - lowbit(i), sum + Map.get(t.v, i, 0))
    end

    defp lowbit(n) do
      n &&& -n
    end
  end

  @spec count_smaller(nums :: [integer]) :: [integer]
  def count_smaller(nums) do
    offset = 10000

    nums
    |> Enum.reverse()
    |> Enum.reduce({[], FenwickTree.new(2 * offset + 10)}, fn n, {ans, t} ->
      {[FenwickTree.query(t, n + offset) | ans], FenwickTree.add(t, n + offset + 1, 1)}
    end)
    |> elem(0)
  end
end
```

```
fn merge_sort(nums: &mut Vec<(usize, i32)>, l: usize, r: usize, ans: &mut Vec<i32>) {
    if l < r - 1 {
        let m = l + (r - l) / 2;
        merge_sort(nums, l, m, ans);
        merge_sort(nums, m, r, ans);
        merge(nums, l, m, r, ans);
    }
}

fn merge(nums: &mut Vec<(usize, i32)>, l: usize, m: usize, r: usize, ans: &mut Vec<i32>) {
    let mut arr = Vec::with_capacity(r - l);
    let mut i  = l;
    let mut j = m;
    let mut ct = 0;
    while i < m && j < r {
        if nums[i].1 <= nums[j].1 {
            ans[nums[i].0] += ct;
            arr.push(nums[i]);
            i += 1;
        } else {
            ct += 1;
            arr.push(nums[j]);
            j += 1;
        }
    }
    while i < m {
        ans[nums[i].0] += (r - m) as i32;
        arr.push(nums[i]);
        i += 1;
    }
    while j < r {
        arr.push(nums[j]);
        j += 1;
    }

    for (i, n) in arr.into_iter().enumerate() {
        nums[l + i] = n;
    }
}

impl Solution {
    pub fn count_smaller(nums: Vec<i32>) -> Vec<i32> {
        let len = nums.len();
        let mut ans = vec![0; len];
        let mut nums = nums.into_iter().enumerate().collect();
        merge_sort(&mut nums, 0, len, &mut ans);
        ans
    }
}
```