# Rust fp

**Author:** Sanzenin_Aria
**Votes:** 1
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3142696/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3142696/)

---

```
impl Solution {
    pub fn separate_digits(nums: Vec<i32>) -> Vec<i32> {
        nums.iter().map(|&(mut x)| {
            let mut v = vec![];
            while x > 0 {
                v.push(x%10);
                x /= 10;
            }
            v.reverse();
            v
        }).flatten().collect::<Vec<i32>>()
    }
}
```