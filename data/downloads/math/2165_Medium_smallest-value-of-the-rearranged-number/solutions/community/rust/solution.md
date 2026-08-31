# rust solution 0 ms 2.1 mb

**Author:** grbnv
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5778102/](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5778102/)

---

# Code
```rust []
impl Solution {
    pub fn smallest_number(num: i64) -> i64 {
        let mut negative = false;

        if num == 0 {
            return 0;
        } else if num < 0 {
            negative = true;
        }

        let mut temp = num.abs();
        let mut digits = Vec::new();
        let mut count_zero = 0;

        while temp > 0 {
            if temp % 10 == 0 {
                count_zero += 1;
            } else {
                digits.push(temp % 10);
            }
            temp /= 10;
        }

        digits.sort_unstable();
        
        if negative {
            digits.reverse();
        }

        for i in 0..count_zero {
            if negative {
                digits.push(0);
            } else {
                digits.insert(1, 0);
            }
        }

        let result: i64 = digits.iter().map(|x| x.to_string()).collect::<String>().parse().unwrap();

        if negative {
            return result * (-1);
        }

        result
    }
}
```