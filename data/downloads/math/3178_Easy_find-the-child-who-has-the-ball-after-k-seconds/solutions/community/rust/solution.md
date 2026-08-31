# Simple solution using Math || O(1)

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5286419/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5286419/)

---

# Intuition
After $$2 * (n-1)$$ seconds, ball ends up with the first child. After $$n-1$$ seconds, the ball is with the last child.

# Approach
So take reminder of k with $$2 * (n-1)$$. If k is less than $$n-1$$ return k, else return $$(n-1) - (k - (n-1))$$ as the ball reaches the end $$n-1$$ seconds and runs backward.

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn number_of_child(n: i32, k: i32) -> i32 {
        let k = k % (2 * (n - 1));
        if k > (n-1) {
            (n << 1) - 2 - k
        } else {
            k
        }
    }
}
```