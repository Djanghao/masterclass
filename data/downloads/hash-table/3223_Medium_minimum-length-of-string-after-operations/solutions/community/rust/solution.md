# Rust solution with clear and easy to understand code

**Author:** bazinga29
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5619016/](https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5619016/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
On careful inspection we will observe positons of a character does not have importance since we only need the length. And for every 3 same characters regardless of positions we will have 1 character left after remaining other two

# Approach
<!-- Describe your approach to solving the problem. -->
We will store the frequency of all the characters in a hashmap, since we are only interested in the frequency and not the positions or the character. For every occurence of a char we will always have one char left as much as we try to delete. So we do +1 to ans for every character. For even frequency we will always have 2 characters left while for odd frquency we will only have one character left.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn minimum_length(s: String) -> i32 {
        let mut m: HashMap<char,i32> = HashMap::new();
        let mut ans = 0;
        for c in s.chars() {
            if let Some(value) = m.get(&c) {
                m.insert(c, m[&c]+1);
            } else {
                m.insert(c,1);
            }
        }
        for (key, value) in &m {
            ans+=1;
            if value%2==0{
                ans+=1;
            }
        }
        ans
    }
}
```