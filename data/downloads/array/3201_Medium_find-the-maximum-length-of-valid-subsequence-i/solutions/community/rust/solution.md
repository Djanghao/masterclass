# Rust/Python linear solution, one pass constant space with explanation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5393855/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5393855/)

---

# Intuition

Lets in the beginning look at the reasoning, then see how we can do this in multiple passes with some memory and rewrite it in one pass and constant memory.

The value of `(sub[i] + sub[i + 1]) % 2` can be either 0 or 1. As we take modulo of 2 we can preprocess the array to store only 0 or 1.

Now to get zero you should either have: all values equal to one or all values equal to zero. And you can just count how many of each of them exist.

To get the value of 1 you need to have alternating 0/1. So you go through the numbers and check when you have alternating number from your previous number. This gives you a linear solution which uses linear time to store array of `0/1` and uses a 4 passes (one for each check). See **Python** implementation for it.

But you do not need this. You can just calculate 0/1 on the fly, count number of zeros/ones and flips in one pass. See **Rust** implementation.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```python []
class Solution:
  def maximumLength(self, nums: List[int]) -> int:
    nums = [v % 2 for v in nums]
    v1, v2 = nums.count(0), nums.count(1)
    
    v3, prev = 1, nums[0]
    for i in range(1, len(nums)):
      if nums[i] != prev:
        v3 += 1
        prev = nums[i]
        
    return max(v1, v2, v3)
```
```Rust []
impl Solution {
  pub fn maximum_length(nums: Vec<i32>) -> i32 {
    let mut prev = 2;
    let (mut cnt0, mut cnt1, mut cnt2) = (0, 0, 0);
    for i in 0 .. nums.len() {
      let curr = nums[i] % 2;
      if curr == 1 {
        cnt0 += 1;
      } else {
        cnt1 += 1;
      }

      if curr != prev {
        cnt2 += 1;
        prev = curr;
      }
    }

    return cnt0.max(cnt1).max(cnt2);
  }
}
```
