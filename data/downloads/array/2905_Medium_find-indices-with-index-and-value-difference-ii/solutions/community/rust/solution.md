# Python/Rust/Go, O(n) time, O(1) space with explanation

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4169817/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4169817/)

---

# Intuition

Lets look at some array $v_0, v_1, v_2, ... v_n$ and take a look at some position $v_i$. How can we tell that index $i$ will be a part of the result? For this to happen, there should be some position `j <= i - diff_i` for which `|nums[j] - nums[i]| >= diff_v`.

To not check for every index, we can just store the indexes of minimum and maximum value so far and check against them. So all we need is to check every position i in array and:
 - update `min_i` if `nums[i - diff_i] < nums[min_i]`
 - update `max_i` if `nums[i - diff_i] > nums[max_i]`
 - return `i, min_i` if `nums[i] - nums[min_i] >= diff_v`
 - return `i, max_i` if `nums[max_i] - nums[i] >= diff_v`

Otherwise we have not found it.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Go []
func findIndices(nums []int, diff_i int, diff_v int) []int {
  min_i, max_i := 0, 0
  for i := diff_i; i < len(nums); i++ {
    if nums[i - diff_i] < nums[min_i] {
      min_i = i - diff_i
    }
    if nums[i - diff_i] > nums[max_i] {
      max_i = i - diff_i
    }

    if nums[i] - nums[min_i] >= diff_v {
      return []int{i, min_i}
    }

    if nums[max_i] - nums[i] >= diff_v {
      return []int{i, max_i}
    }
  }

  return []int{-1, -1}
}
```
```python []
class Solution:
  def findIndices(self, nums: List[int], diff_i: int, diff_v: int) -> List[int]:
    min_i, max_i = 0, 0
    for i in range(diff_i, len(nums)):
      if nums[i - diff_i] < nums[min_i]:
        min_i = i - diff_i
      if nums[i - diff_i] > nums[max_i]:
        max_i = i - diff_i
      
      if nums[i] - nums[min_i] >= diff_v:
        return [min_i, i]
      if nums[max_i] - nums[i] >= diff_v:
        return [max_i, i]
    
    return [-1, -1]
```
```Rust []
impl Solution {
  pub fn find_indices(nums: Vec<i32>, diff_i: i32, diff_v: i32) -> Vec<i32> {
    let diff_i = diff_i as usize;
    let (mut min_i, mut max_i) = (0, 0);

    for i in diff_i .. nums.len() {
      if nums[i - diff_i] < nums[min_i] {
        min_i = i - diff_i;
      }
      if nums[i - diff_i] > nums[max_i] {
        max_i = i - diff_i;
      }

      if nums[i] - nums[min_i] >= diff_v {
        return vec![i as i32, min_i as i32];
      }
      if nums[max_i] - nums[i] >= diff_v {
        return vec![i as i32, max_i as i32];
      }
    }

    return vec![-1, -1];
  }
}
```
