# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/4172174/](https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/4172174/)

---

```
impl Solution {
    pub fn make_the_integer_zero(num1: i32, num2: i32) -> i32 {
        let num1 = num1 as i64;
        let num2 = num2 as i64;
        if num1 < num2 {
            return -1;
        }

        for i in 0..=100 {
            let diff = num1 - (num2 * i);
            let bbbiiiiittttsss = Self::count_bits(diff);
            if bbbiiiiittttsss <= i && i <= diff {
                return i as _;
            }
        }

        -1
    }

    fn count_bits(mut num: i64) -> i64 {
        let mut counter = 0;
        while num > 0 {
            counter += num & 1;
            num >>= 1;
        }
        counter
    }
}
```