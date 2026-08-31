# O(n) Solution | Rust

**Author:** Prog_Jacob
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886256/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886256/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn minimum_deletions(word: String, k: i32) -> i32 {
        let mut map = [0; 26];
        let mut ans = i32::MAX;

        for ch in word.chars() {
            map[ch as usize - 97] += 1;
        }
        
        
        for &x in map.iter() {
            let high = x + k;
            
            ans = ans.min(
                map.iter().map(|&y| {
                    if y > high { y - high }
                    else if y < x { y }
                    else { 0 }
                }).sum()
            );
        }
        
        ans
    }
}
```