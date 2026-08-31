# Rust/Py one pass linear solution / constant space with explanation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5657546/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5657546/)

---

# Intuition

Lets look at some array:

`[2, 3, 4, 1, 7, 8, 9, 10, 11, 6, 7, 5, 4, 5, 6, 7]`

Using this array it is hard to track those increasing consequitive arrays. So we need to somehow transform the array so we can easily see it. And the transformation is `nums[i] - nums[i - 1]` as it gives 1 in those examples. Technically we do not care about any other delta except 1 so I will not even bother to calculate it and just put `x`:

`[x, 1, 1, x, x, 1, 1,  1,  1, x, 1, x, x, 1, 1, 1]`

So now you see that you need to count how many consequitive 1 you have and if it is >= k then find the number in the array at that position.

In reality you do not even need to store that array of deltas and you can calculate it on the fly.


# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Python []
class Solution:
  def resultsArray(self, nums: List[int], k: int) -> List[int]:
    cnt, res = 1, []
    for i in range(1, k - 1):
      if nums[i] - nums[i - 1] == 1:
        cnt += 1
      else:
        cnt = 1


    for i in range(k - 1, len(nums)):
      if nums[i] - nums[i - 1] == 1:
        cnt += 1
      else:
        cnt = 1
      
      if cnt >= k:
        res.append(nums[i])
      else:
        res.append(-1)
    
    return res
```
```Rust []
impl Solution {
  pub fn results_array(nums: Vec<i32>, k: i32) -> Vec<i32> {
    if k == 1 {
      return nums;
    }

    let k = k as usize;
    let mut cnt = 1;
    let mut res = Vec::with_capacity(nums.len() - k + 1);

    for i in 1.. k - 1 {
      if nums[i] - nums[i - 1] == 1 {
        cnt += 1;
      } else {
        cnt = 1;
      }
    }

    for i in k - 1 .. nums.len() {
      if nums[i] - nums[i - 1] == 1 {
        cnt += 1;
      } else {
        cnt = 1;
      }

      if cnt >= k as usize {
        res.push(nums[i]);
      } else {
        res.push(-1);
      }
    }

    res
  }
}
```