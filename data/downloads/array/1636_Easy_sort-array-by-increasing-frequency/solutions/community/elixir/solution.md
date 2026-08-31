# [Rust / Elixir] 2 approaches

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5520511/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5520511/)

---

# Approach
Rust: Customized counting sort.
1. Count the frequencies of integers.
2. For each frequency, find the pointer of where to write the integers into the `ans` Vec.
3. Write the integers into `ans`, starting from largest integers to smallest integers, with the help of the pointers.

Elixir: Short and simple with sorting.

# Complexity
- Time complexity:
Rust: $$O(n + diff)$$.
Elixir: $$O(n*log(n))$$.

- Space complexity:
Rust: $$O(n + diff)$$.
Elixir: $$O(n)$$.

Where $$O(diff) = O(max(n) - min(n))$$.

# Code
```Rust []
impl Solution {
    pub fn frequency_sort(nums: Vec<i32>) -> Vec<i32> {
        let min = *nums.iter().min().unwrap();
        let max = *nums.iter().max().unwrap();
        let mut count = vec![0usize; (max - min + 1) as usize];
        let mut max_c = 0;
        for i in nums.iter().map(|&x| (x - min) as usize) {
            count[i] += 1;
            max_c = max_c.max(count[i]);
        }

        let mut ptrs = vec![0usize; max_c + 1];
        for &c in count.iter() {
            if c != 0 {
                ptrs[c] += 1;
            }
        }
        for i in 1..max_c - 1 {
            ptrs[i + 1] = ptrs[i] + ptrs[i + 1] * (i + 1);
        }
        
        let mut ans = vec![0; nums.len()];
        for i in (0..count.len()).rev() {
            if count[i] != 0 {
                let c = count[i];
                let x = i as i32 + min;
                for j in ptrs[c - 1]..ptrs[c - 1] + c {
                    ans[j] = x;
                }
                ptrs[c - 1] += c;
            }
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec frequency_sort(nums :: [integer]) :: [integer]
  def frequency_sort(nums) do
    Enum.frequencies(nums)
    |> Enum.sort_by(fn {x, c} -> {c, -x} end)
    |> Enum.flat_map(fn {x, c} -> List.duplicate(x, c) end)
  end
end
```