# Rust stack solution, concise

**Author:** user4435YF
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/4137413/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/4137413/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$ 

# Code
```
impl Solution {
    pub fn most_competitive(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut stack = Vec::with_capacity(k as usize);
        let mut skippable = (nums.len() as i32) - k;
        for &x in nums.iter() {
            while stack.len() > 0 && *stack.last().unwrap() > x && skippable > 0 {
                stack.pop();
                skippable -= 1;
            }
            stack.push(x);
        }
        stack.truncate(k as usize);
        stack
    }
}
```