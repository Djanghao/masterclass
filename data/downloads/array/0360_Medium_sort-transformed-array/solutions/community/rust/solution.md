# Rust sorting. No need for overcomplication

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-transformed-array/solutions/3666753/](https://leetcode.com/problems/sort-transformed-array/solutions/3666753/)

---

# Intuition
In my opinion there is no need to overcomplicate things for just to get rid of sorting

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(n)$

# Code
```
impl Solution {

  pub fn sort_transformed_array(nums: Vec<i32>, a: i32, b: i32, c: i32) -> Vec<i32> {
    let mut res = vec![0; nums.len()]      ;
    for i in 0 .. nums.len() {
      res[i] = a * nums[i] * nums[i] + b * nums[i] + c;
    }

    res.sort_unstable();
    return res;
  }
}
```