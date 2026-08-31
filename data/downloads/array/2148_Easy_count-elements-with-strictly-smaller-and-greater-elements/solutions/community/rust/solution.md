# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/1715518/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/1715518/)

---

```
impl Solution {
    pub fn count_elements(nums: Vec<i32>) -> i32 {
        let (mut min_val, mut max_val) = (i32::MAX, i32::MIN);
        nums.iter().for_each(|&x| {
            if x < min_val {
                min_val = x
            }
            if x > max_val {
                max_val = x
            }
        });
        nums.iter().filter(|&&x| x > min_val && x < max_val).count() as _
    }
}
```