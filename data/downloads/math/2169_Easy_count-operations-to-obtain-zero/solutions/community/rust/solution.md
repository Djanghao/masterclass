# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/1769134/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/1769134/)

---

1. Simple simulation
```
impl Solution {
    pub fn count_operations(mut num1: i32, mut num2: i32) -> i32 {
        let mut ops = 0;
        while num1 > 0 && num2 > 0 {
            match num1 < num2 {
                true => num2 -= num1,
                false => num1 -= num2,
            }
            ops += 1;
        }
        ops
    }
}
```
2. Optimal solution
```
impl Solution {
    pub fn count_operations(mut num1: i32, mut num2: i32) -> i32 {
        let mut ops = 0;
        while num1 > 0 && num2 > 0 {
            if num1 > num2 {
                std::mem::swap(&mut num1, &mut num2);
            }
            ops += num2 / num1;
            num2 %= num1;
        }
        ops
    }
}
```