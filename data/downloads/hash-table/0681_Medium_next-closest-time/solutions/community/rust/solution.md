# Rust: Easy to Read Solution

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/2718134/](https://leetcode.com/problems/next-closest-time/solutions/2718134/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use an ordered set to track all valid times 
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::BTreeSet;

impl Solution {
    pub fn next_closest_time(time: String) -> String {
        let s = time.chars().collect::<Vec<char>>();
        let mut st = BTreeSet::new();
        
        for i1 in 0..5 {
            if i1 == 2 { continue }
             for i2 in 0..5 {
                 if i2 == 2 { continue }
                  for i3 in 0..5 {
                      if i3 == 2 { continue }
                       for i4 in 0..5 {
                           if i4 == 2 { continue }
                           
                           let a = (s[i1] as u8 - '0' as u8)  * 10 + s[i2] as u8 - '0' as u8;
                           let b = (s[i3] as u8 - '0' as u8)  * 10 + s[i4] as u8 - '0' as u8;
                           if a > 23 || b > 59 { continue }
                           
                           let mut str = String::new();
                           
                           str.push(s[i1]);
                           str.push(s[i2]);
                           str.push(':');
                           str.push(s[i3]);
                           str.push(s[i4]);
                           
                           st.insert(str);
                      }
                 }
            }
        }
        
        if *st.iter().next_back().unwrap() == time {
            return (*st.iter().next().unwrap()).to_string()
        }
        
        let mut last = String::new();
        let mut ret = String::new();  
        for a in st.iter() {
            ret = a.clone();
            if last == time { break }
            last = a.clone();
        }
        
        ret
    }
}
```