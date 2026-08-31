# Rust Solution

**Author:** joonyeongee
**Votes:** 0
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/4635014/](https://leetcode.com/problems/one-edit-distance/solutions/4635014/)

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
impl Solution {
    pub fn is_one_edit_distance(s: String, t: String) -> bool {
        let mut ret = true;

        if s == t || (s.len() as i32 - t.len() as i32).abs() > 1 {
            ret = false;
        } else {
            let mut s = s;
            let mut t = t;
            if s.len() > t.len() {
                core::mem::swap(&mut s, &mut t);
            }

            let tmp = s.chars().zip(t.chars()).enumerate().find(|(i, (c1, c2))| c1 != c2);
            
            match tmp {
                Some((i, (c1, c2))) => {
                    if s.len() == t.len() {
                        ret = s.chars().skip(i+1).collect::<String>() == t.chars().skip(i+1).collect::<String>();
                    } else {
                        ret = s.chars().skip(i).collect::<String>() == t.chars().skip(i+1).collect::<String>();
                    }
                },
                None => {},
            }
        }

        ret
    }
}
```