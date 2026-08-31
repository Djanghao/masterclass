# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2950648/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2950648/)

---

# Code
```
impl Solution {
    pub fn capture_forts(forts: Vec<i32>) -> i32 {
        let (mut result, mut counter, mut prev_fort) = (0, 0, 0);
        for &x in &forts {
            match x {
                0 => counter += 1,
                _ => {
                    if prev_fort == -x {
                        result = result.max(counter);
                    }
                    counter = 0;
                    prev_fort = x;
                }
            }
        }
        result
    }
}
```