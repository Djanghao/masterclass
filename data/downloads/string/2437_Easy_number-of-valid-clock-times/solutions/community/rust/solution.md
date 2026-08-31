# Rust Solution

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/2707258/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/2707258/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashSet;

impl Solution {
    pub fn count_time(time: String) -> i32 {
        let time = time.chars().collect::<Vec<char>>();
        let mut data = time.clone();
        let mut s = HashSet::<String>::new();

        for c1 in '0'..='9' {
            if time[0] == '?' { data[0] = c1; } 
            for c2 in '0'..='9' {
                if time[1] == '?' { data[1] = c2; }
                for c3 in '0'..='9' {
                    if time[3] == '?' { data[3] = c3; }
                    for c4 in '0'..='9' {
                        if time[4] == '?' { data[4] = c4; }
                        let a = (data[0] as u8 - '0' as u8) * 10 + data[1] as u8 - '0' as u8;
                        let b = (data[3] as u8 - '0' as u8) * 10 + data[4] as u8 - '0' as u8;
                        if a <= 23 && b <= 59 { s.insert(data.iter().collect()); }
                    }
                }
            }
        }

        s.len() as _
    }
}
```