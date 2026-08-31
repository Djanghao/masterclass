# Functional Rust: iterators + fold(), 100% faster, one pass, no extra memory used

**Author:** llivejo
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3486667/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3486667/)

---

# Intuition
Rust iterators + fold()

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
fn is_vowel(ch: u8) -> bool {
    match ch {
        105 | 111 | 97 | 117 | 101 => true,
        _ => false,
    }
}

impl Solution {
    pub fn max_vowels(s: String, k: i32) -> i32 {
        let s = s.as_bytes();
        let k = k as usize;
        let count: usize = s.iter().take(k).filter(|&x| is_vowel(*x)).count();
        s.iter()
         .skip(k)
         .zip(s.iter())
         .fold(
             (count, count),
             |a, x| {
                 let (max, count) = a;
                 let (cur, left) = x;
                 match (is_vowel(*left), is_vowel(*cur)) {
                     (false, true) => (max.max(count + 1), count + 1),
                     (true, false) => (max, count - 1),
                     _ => (max, count),
                 }
             }
         ).0 as i32
    }
}
```