# rust ugly but 0ms

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/5434934/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/5434934/)

---

# Code
```
use regex::Regex;
impl Solution {
    pub fn min_operations(n: i32) -> i32 {
        let mut digits = format!("{n:b}").chars().collect::<Vec<char>>();
        digits.push('0');
        digits.reverse();
        digits.push('0');
        let mut digits = digits.into_iter().collect::<String>();
        let mut ops = 0;
        while let Some(r) = digits.find("110") {
            let Some(l) = digits.find("011") else { break };
            digits = digits
                .chars()
                .enumerate()
                .map(|(i, c)| {
                    if i > l && i < r + 3 {
                        match c {
                            '0' => '1',
                            '1' => '0',
                            Other => unreachable!()                        }
                    } else {
                        c
                    }
                })
                .collect::<String>();
                ops += 1;
        }
        ops + digits
            .chars()
            .filter(|&c| c == '1')
            .count() as i32
    }
}
```