# Rust/Python O(n^2) with detailed explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/3639276/](https://leetcode.com/problems/3sum-smaller/solutions/3639276/)

---

# Intuition
The most important observation in this problem is that you can sort the original array. You might ask yourself why as this will break the ordering and it might break condition $i < j < k$. But lets look at some array:

$... a_i ... a_j ... a_k ... $ where $i, j, k$ indices were selected. No matter how we will rearrange the array (not just sorting), we can still get those values as there is a bijection (one-to-one correspondece) between indices.

------

Now taht array is sorted, we can easily do in $O(n^2 \\log n)$. To do this we fix one element, then fix another and then use binary search to find the cut off point to where sum is smaller than target.

But lets look how to do this in quadratic time.

Lets look at an array `[1, 1, 2, 3, 3, 6, 7]` and target `7`

Lets fix some number. For example number 1 at position `pos=0`. Which other two numbers can give you desired sum? Potentially we start with all possible numbers from position `lo = pos + 1` till `hi = len(nums) - 1`

Now lets look at their sum: `nums[pos] + nums[lo] + nums[hi] = 1 + 1 + 7`. Which is bigger than target which is not good. We can't increase `lo` to fix it (the sum will be just bigger). So we need to decrease `hi`.  And now `hi = 5`, whose value is 6. So `nums[pos] + nums[lo] + nums[hi] = 1 + 1 + 6` whichs is still > target.

But next one will be `hi = 4` and sum `1 + 1 + 3` which fits out goal. Of course we can do this for all other elements until `lo < hi` but we do not need it as all of them will fit as the sum will be either decreasing or stay the same. How many of such elements will it be? It will be `hi - lo`. So we increase the res by this number and move on to the next value lo = lo + 1




# Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(sort)$, which can be $O(1)$ for sorting in place or $O(n)$ otherwise

# Code
```Rust []
impl Solution {
  pub fn three_sum_smaller(mut nums: Vec<i32>, target: i32) -> i32 {
    if nums.len() < 3 {
      return 0;
    }
    nums.sort_unstable();

    let (mut res, n) = (0, nums.len());
    for i in 0 .. n - 2 {
      let (mut j, mut k) = (i + 1, n - 1);
      while j < k {
        if nums[i] + nums[j] + nums[k] >= target {
          k -= 1;
        } else {
          res += k - j;
          j += 1;
        }
      }
    }

    return res as i32;
  }
}
```
```python []
class Solution:
  def threeSumSmaller(self, nums: List[int], target: int) -> int:
    nums.sort()
    
    res, n = 0, len(nums)
    for i in range(n - 2):
      j, k = i + 1, n - 1
      while j < k:
        if nums[i] + nums[j] + nums[k] >= target:
          k -= 1
        else:
          res += k - j
          j += 1

    return res
```