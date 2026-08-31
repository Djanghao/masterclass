# Simple rust solution

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2900572/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2900572/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity:$$O(1)$$
# Code
```
impl Solution {
    pub fn maximum_value(strs: Vec<String>) -> i32 {
        strs.iter().fold(0, |max_val, s| {
            max_val.max(s.parse::<i32>().unwrap_or(s.len() as i32))
        })
    }
}
```