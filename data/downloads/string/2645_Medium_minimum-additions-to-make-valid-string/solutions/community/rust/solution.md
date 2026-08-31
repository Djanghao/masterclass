# State machine, linear

**Author:** sashme
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3424647/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3424647/)

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
    pub fn next(c: char) -> char {
        match c {
            'a' => { 'b' }
            'b' => { 'c' }
            'c' => { 'a' } 
            _ => { ' ' }
        }
    }
    pub fn diff(e: char, g: char) -> (i32,char) {
        match (e,g) {
            ('a','b') => (1, 'c'),
            ('a','c') => (2, 'a'),
            ('b','a') => (2, 'b'),
            ('b','c') => (1, 'a'),
            ('c','a') => (1, 'b'),
            ('c','b') => (2, 'c'),
            (_,_) => (0, 'a'),
        }
    }
    pub fn add_minimum(word: String) -> i32 {
        let mut cnt: i32 = 0;
        let mut n: char = 'a';
        for c in word.chars() {
            if c != n {
                let (d,f) = Solution::diff(n, c);
                cnt += d;
                n = f;
            }
            else {
                n = Solution::next(n);
            }
        }
        match word.chars().last().unwrap() {
            'a' => cnt += 2,
            'b' => cnt += 1,
            _ => {}
        }
        cnt
    }
}
```