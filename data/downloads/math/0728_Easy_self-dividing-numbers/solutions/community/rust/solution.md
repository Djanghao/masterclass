# Rust solution

**Author:** BigMih
**Votes:** 4
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/1627505/](https://leetcode.com/problems/self-dividing-numbers/solutions/1627505/)

---

```
impl Solution {
    pub fn self_dividing_numbers(left: i32, right: i32) -> Vec<i32> {
        let mut res = Vec::new();
        'outer: for num in left..=right {
            let mut n = num;
            while n > 0 {
                let rem = n % 10;
                if rem == 0 || num % rem > 0 {
                    continue 'outer;
                }
                n /= 10;
            }
            res.push(num);
        }
        res
    }
}
```