# 100% Rust | Typescript ✅

**Author:** Kay-79
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/6121875/](https://leetcode.com/problems/sum-multiples/solutions/6121875/)

---

# Code
```rust []
impl Solution {
    pub fn sum_of_multiples(n: i32) -> i32 {
        let mut result = 0;
        for i in 1..(n + 1) {
            if (i % 3 == 0) || (i % 5 == 0) || (i % 7 == 0) {
                result += i;
                continue;
            }
        }
        result
    }
}
```
```typescript []
function sumOfMultiples(n: number): number {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (!(i % 3) || !(i % 5) || !(i % 7)) {
            result += i;
            continue;
        }
    }
    return result;
}
```