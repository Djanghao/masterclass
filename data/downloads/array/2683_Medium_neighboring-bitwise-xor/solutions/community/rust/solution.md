# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/neighboring-bitwise-xor/solutions/4164374/](https://leetcode.com/problems/neighboring-bitwise-xor/solutions/4164374/)

---


```
impl Solution {
    pub fn does_valid_array_exist(derived: Vec<i32>) -> bool {
        derived.iter().fold(0, |a, c| a + c) % 2 == 0
    }
}

```