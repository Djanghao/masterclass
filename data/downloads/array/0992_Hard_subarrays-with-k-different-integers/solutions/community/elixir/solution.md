# [Rust / Elixir] three-pointer sliding window

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4944525/](https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4944525/)

---

The right-most pointer is not used to calculate answer, so its index is not maintained. We only see the other two pointers `i` and `j`.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```Rust []
impl Solution {
    pub fn subarrays_with_k_distinct(nums: Vec<i32>, mut k: i32) -> i32 {
        let mut count = vec![0; nums.len() + 1];
        let mut i = 0;
        let mut j = 0;
        let mut ans = 0;
        for &x in nums.iter() {
            count[x as usize] += 1;
            if count[x as usize] == 1 {
                k -= 1;
            }
            if k == -1 {
                loop {
                    count[nums[j] as usize] -= 1;
                    j += 1;
                    if count[nums[j - 1] as usize] == 0 {
                        break;
                    }
                }
                i = j;
                k = 0;
            }
            if k == 0 {
                while count[nums[j] as usize] > 1 {
                    count[nums[j] as usize] -= 1;
                    j += 1;
                }
                ans += j - i + 1;
            }
        }
        ans as i32
    }
}
```
```Elixir []
defmodule Solution do
  @spec subarrays_with_k_distinct(nums :: [integer], k :: integer) :: integer
  def subarrays_with_k_distinct(nums, k) do
    slide(nums, nums, :right, %{}, k, 0, 0, 0)
  end

  defp slide(nums1, [x | nums2], :right, map, k, i, j, ans) do
    {c, map} = Map.get_and_update(map, x, fn
      nil -> {1, 1}
      c -> {c + 1, c + 1}
    end)
    k = if c == 1, do: k - 1, else: k
    if k <= 0 do
      slide(nums1, nums2, :left, map, k, i, j, ans)
    else
      slide(nums1, nums2, :right, map, k, i, j, ans)
    end
  end

  defp slide([x | nums1], nums2, :left, map, -1, i, j, ans) do
    {c, map} = Map.get_and_update!(map, x, fn
      c -> {c - 1, c - 1}
    end)
    k = if c == 0, do: 0, else: -1
    slide(nums1, nums2, :left, map, k, j + 1, j + 1, ans)
  end
  
  defp slide([x | nums1], nums2, :left, map, 0, i, j, ans) do
    if Map.get(map, x) > 1 do
      map = Map.update!(map, x, &(&1 - 1))
      slide(nums1, nums2, :left, map, 0, i, j + 1, ans)
    else
      slide([x | nums1], nums2, :right, map, 0, i, j, ans + j - i + 1)
    end
  end
  defp slide(_, [], :right, _, _, _, _, ans), do: ans
end
```