# Idiomatic Rust one-liner. (enumerate,find)

**Author:** chris-ha458
**Votes:** 0
**Link:** [https://leetcode.com/problems/fixed-point/solutions/4330314/](https://leetcode.com/problems/fixed-point/solutions/4330314/)

---

# Intuition
An idiomatic solution using iterators enumerate,find

# Approach
Self explanatory per line

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn fixed_point(arr: Vec<i32>) -> i32 {
    arr.iter()
        .enumerate()
        .find(|(idx, &num)| *idx as i32 == num)
        .map_or(-1, |(idx, _)| idx as i32)
    }
}
```