# Very Simple Solution

**Author:** drcole
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-modular-exponentiation/solutions/5113512/](https://leetcode.com/problems/double-modular-exponentiation/solutions/5113512/)

---

# Intuition
Instead of doing pow, just do repeated multiplication and moding.

# Code
```
impl Solution {
    pub fn get_good_indices(variables: Vec<Vec<i32>>, target: i32) -> Vec<i32> {
        let mut answer = Vec::new();

        for (index, &ref group) in variables.iter().enumerate() {
            let a = group[0] % 10; // We can % 10 here since we really only care about the 1s place
            let b = group[1];
            let c = group[2];
            let d = group[3];

            let mut total = a;

            for _ in 1..b {
                total *= a;
                total %= 10;
            }
            total %= 10;

            let mut final_total = total;

            for _ in 1..c {
                final_total *= total;
                final_total %= d;
            }
            final_total %= d;

            if final_total == target {
                answer.push(index as i32);
            }
        }

        answer
    }
}

```