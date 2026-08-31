# Rust another iterative solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/water-bottles/solutions/1248765/](https://leetcode.com/problems/water-bottles/solutions/1248765/)

---

```
impl Solution {
    pub fn num_water_bottles(mut num_bottles: i32, num_exchange: i32) -> i32 {
        let mut res = num_bottles;
        while num_bottles >= num_exchange {
            res += num_bottles / num_exchange;
            num_bottles = num_bottles / num_exchange + num_bottles % num_exchange;
        }
        res
    }
}
``