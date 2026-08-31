# Rust/Linear solution with full math explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5007159/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5007159/)

---

# Intuition

As you can select any indices i/j, the positions of the values in the array does not matter. Also you might notice that for any two elements `a < b` you can remove the bigger element. So you can remove all elements until the smallest. 

So if you have 1, 1, 1, and any other elements. You can remove all those elements and leave only ones. Now if you end up with k minimum elements you can remove some of them by converting a pair into 0. So you will get `k // 2` zeros and `k % 2`  elemtn left. 

But can you do better? Lets assume that your minimum value is $m$. Then the question is whether it is possible to somehow reduce this minimum? If $v % m$ is not equal to zero it means that you can get a smaller number (which will be $v % m$). Of course it will be just one such minimum (otherwise we would have seen them).

So the solution is. Just find the minimum. Then check if any number `v % m` is not zero. If yes, then return 1. Otherwise count how many minimums you have and result is `(cnt + 1) // 2`

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code


```python []
class Solution:
  def minimumArrayLength(self, nums: List[int]) -> int:
    m = min(nums)
    for v in nums:
      if v % m != 0:
        return 1
    
    return (nums.count(m) + 1) // 2
```
```rust []
impl Solution {
  pub fn minimum_array_length(nums: Vec<i32>) -> i32 {
    let mut m = *nums.iter().min().unwrap();
    for &v in &nums {
      if v % m != 0 {
        return 1;
      }
    }
    
    let mut cnt = 0;
    for v in nums {
      if v == m {
        cnt += 1;
      }
    }

    return (cnt + 1) / 2;
  }
}
```