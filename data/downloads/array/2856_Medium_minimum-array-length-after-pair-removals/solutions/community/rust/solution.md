# Rust/Python linear solution, constant space with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4141198/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4141198/)

---

# Intuition
Lets assume we are going to remove as many pairs as we possibly can from this array and this value is $k$. Which values would you remove. The best way to remove is to take the from the left (as they are the smallest).

How many removals can be theoretically done? It will be `n // 2` where `n` is the length of the array. 

So reserve the first part of the array and initialize two pointers: `i = 0` and `j = (len(nums) + 1) // 2`

Now try to remove as many values as possible (until `j < len(nums)`. Removal will happen if `nums[i] < nums[j]`. In this case increase two pointers and count 2 removed elements.  But if this is not the case you still have a chance by increasing `j` and trying again. This gives us an easy solution.


# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn min_length_after_removals(nums: Vec<i32>) -> i32 {
    let (mut i, mut j, mut res) = (0, (nums.len() + 1) / 2, nums.len());
    while j < nums.len() {
      if nums[i] < nums[j] {
        i += 1;
        j += 1;
        res -= 2;
      } else {
        j += 1;
      }
    }
    return res as i32;
  }
}
```
```python []
class Solution:
  def minLengthAfterRemovals(self, nums: List[int]) -> int:
    i, j, num = 0, (len(nums) + 1) // 2, 0
    while j < len(nums):
      if nums[i] < nums[j]:
        i += 1
        j += 1
        num += 2
      else:
        j += 1
    
    return len(nums) - num
```

