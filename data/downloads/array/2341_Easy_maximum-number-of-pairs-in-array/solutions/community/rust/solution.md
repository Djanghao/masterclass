# Rust solution

**Author:** BigMih
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/2294316/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/2294316/)

---

```
impl Solution {
    pub fn number_of_pairs(nums: Vec<i32>) -> Vec<i32> {
        let mut counter = [0; 101];
        nums.iter().for_each(|&x| counter[x as usize] += 1);
        counter.into_iter().fold(vec![0, 0], |mut acc, x| {
            acc[0] += x / 2;
            acc[1] += x % 2;
            acc
        })
    }
}
```