# Rust - No DP

**Author:** AaronCodes
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iv/solutions/5184068/](https://leetcode.com/problems/palindrome-partitioning-iv/solutions/5184068/)

---

1: generate a set with the indices of all palindromes 
2: go through every combination of start and end, the middle will be the rest, and check if all 3 indice-ranges are inside the set of palindromes, if so, return True
# Code
```
use std::collections::HashSet;
impl Solution {
    pub fn check_partitioning(s: String) -> bool {
        let s = s.as_bytes();
        let mut palindromes: HashSet<(i32, i32)> = HashSet::new();
        // now find all palindromes
        for i in 0..s.len() {
            for j in i..s.len() {
                if s[i..j + 1] == s[i..j + 1].iter().rev().cloned().collect::<Vec<u8>>() {
                    palindromes.insert((i as i32, j as i32 + 1));
                }
            }
        }
        
        for end_first in 1..s.len() - 1 {
            for start_end in end_first + 1..s.len() {
                let start_middle = end_first;
                let end_middle = start_end;
                if palindromes.contains(&(0, end_first as i32))
                    && palindromes.contains(&(start_middle as i32, end_middle as i32))
                    && palindromes.contains(&(start_end as i32, s.len() as i32))
                {
                    return true;
                }
            }
        }

        false
    }




}
```