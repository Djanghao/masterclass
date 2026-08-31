# Sort and try grow to MAX

**Author:** SergeyFrancev
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289745/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289745/)

---

# Code
```
impl Solution {
    pub fn maximum_element_after_decrementing_and_rearranging(arr: Vec<i32>) -> i32 {
      let mut n_arr = arr;
      n_arr.sort_unstable();
      n_arr.into_iter().fold(0, |acc, x| {
        match x > acc {
            true => acc + 1,
            false => acc,
        }
      })
    }
}
```