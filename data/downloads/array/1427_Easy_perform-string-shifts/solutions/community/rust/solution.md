# Rust

**Author:** vladimirdjokic76
**Votes:** 0
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/5480450/](https://leetcode.com/problems/perform-string-shifts/solutions/5480450/)

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
    pub fn string_shift(s: String, shift: Vec<Vec<i32>>) -> String {
        if s.len() == 0 {
            return s;
        }
        let mut left:i32 = 0;
        for shift_item in shift {
           if shift_item[0] == 0 {
                left -= shift_item[1];
           }else{
                left += shift_item[1];
           }
        }
        let is_left = left < 0;
        let left = left.abs() % s.len() as i32;
        if left == 0 {
            return s;
        }
        let mut result = String::with_capacity(s.len());
         let len = left as usize;
        let first;
        let second;
        if is_left {
            first = len..;
            second = ..len;
        }else{
            first = (s.len()-len)..;
            second = ..(s.len()-len);
        }

        let a1 =  &mut s[first].chars();
        let a2 =  &mut s[second].chars();
        while let Some(leter) = a1.next() {
            result.push(leter);
        }
        while let Some(leter) = a2.next() {
            result.push(leter);
        }

        return result;
    }
}
```