# Python/Rust: From n^3 to n^2 to n. With explanation

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4111911/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4111911/)

---

# Intuition
You can easily do this in $O(n^3)$ by trying all the triplets. You can also quickly notice that you can do this in $O(n^2)$ by checking two values `i` and `j` and by looking at the `max(arr[j + 1,...)` which you can easily pre-calculate with a max of a suffix (see `max_arr` calculation).

From here you are just one step away from finding the efficient $O(n)$ solution. The missing observation is can be found by thinking what can be the best value when you look at some index `j`. 

It will be max value of all the numbers before `j` minus `nums[j]` and this is multiplied by maximum value after `j`.

This gives us a solution where we try each j position:

# Code
```Rust []
impl Solution {
  pub fn maximum_triplet_value(nums: Vec<i32>) -> i64 {
    let n = nums.len();
    let (mut max_arr, mut res) = (vec![-1; n], 0);
    max_arr[n - 1] = nums[n - 1];
    for i in (0 .. n - 1).rev() {
      max_arr[i] = max_arr[i + 1].max(nums[i]);
    }
    
    let mut max_v = nums[0];
    for i in 1 .. n - 1 {
      res = res.max(((max_v - nums[i]) as i64) * (max_arr[i + 1]) as i64);
      max_v = max_v.max(nums[i]);
    }
    
    return res;
  }
}
```
```python []
class Solution:
  def maximumTripletValue(self, nums: List[int]) -> int:
    max_arr, res = [-1] * len(nums), 0
    max_arr[-1] = nums[-1]
    for i in range(len(nums) - 2, -1, -1):
      max_arr[i] = max(max_arr[i + 1], nums[i])

    max_v = nums[0]
    for i in range(1, len(nums) - 1):
      tmp = (max_v - nums[i]) * max_arr[i + 1]
      res = max(res, tmp)
      max_v = max(max_v, nums[i])

    return res
```

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$