# O(N) solution

**Author:** jkvargas
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/5561505/](https://leetcode.com/problems/valid-palindrome-iv/solutions/5561505/)

---

# Intuition
every time an error comes up, I decrease a counter...

# Approach
every time an error comes up, I decrease a counter...

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
impl Solution {
    pub fn make_palindrome(s: String) -> bool {
        if s.is_empty() { return true; }

        let letters = s.chars().collect::<Vec<char>>();
        let mut ops = 2;

        let mut beg = 0;
        let mut end = letters.len() as i32 - 1;

        loop {
            if beg > end {
                return true;
            }

            if letters[beg as usize] == letters[end as usize] {
                beg += 1;
                end -= 1;
            } else {
                if ops > 0 {
                    beg += 1;
                    end -= 1;
                    ops -= 1;
                } else {
                    return false;
                }
            }
        }
    }
}
```