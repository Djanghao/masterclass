# Two pointers with Queue, 0ms, beats 100%

**Author:** germanov_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/5469343/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/5469343/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::VecDeque;
impl Solution {
    pub fn shortest_to_char(s: String, c: char) -> Vec<i32> {
        let mut c_pos:VecDeque<i32> = VecDeque::from_iter(s.chars().enumerate()
            .map(|item| item)
            .filter(|item| item.1 == c)
            .map(|item| item.0 as i32));
        let (mut left, mut right) = (-1,c_pos[0]);
        s.chars().enumerate().map(|(idx,ch)| {
            if ch == c {
                left = c_pos.pop_front().unwrap();
                right = if c_pos.is_empty() { -1 } else { c_pos[0] };                
                return 0                
            }
            if left == -1 {
                i32::abs(right - idx as i32)
            } else if right == -1 {
                i32::abs(left - idx as i32)
            } else {
                i32::abs(left-idx as i32).min(i32::abs(right-idx as i32)) as i32
            }            
        }).collect() 
    }
}
```