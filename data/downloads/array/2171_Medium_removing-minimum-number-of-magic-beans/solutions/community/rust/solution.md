# Rust Solution

**Author:** Esmail_2
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/5259681/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/5259681/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn minimum_removal(beans: Vec<i32>) -> i64 {
        let mut beans: Vec<i32> = beans;
        let mut sum: i64 = 0;
        for v in beans.iter() {sum += *v as i64;}
        let mut ans: i64 = i64::MAX;
        let size: usize = beans.len();
        beans.sort();
        for (i, v) in beans.into_iter().enumerate() {
            ans = ans.min(sum - (v as i64) * (size - i) as i64);
        }
        return ans;
    }
}
```