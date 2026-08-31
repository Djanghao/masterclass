# Rust simple solution 3ms

**Author:** N0fail
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/4728038/](https://leetcode.com/problems/frog-jump-ii/solutions/4728038/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn max_jump(stones: Vec<i32>) -> i32 {
        stones.windows(3).fold(stones[1] - stones[0], |res, elems|{
            res.max(elems[2] - elems[0])
        })
    }
}
```