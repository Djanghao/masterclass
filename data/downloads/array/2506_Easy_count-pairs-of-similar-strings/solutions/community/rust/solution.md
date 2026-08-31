# Rust | bitmask | 0ms | beats 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/5388896/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/5388896/)

---

# Intuition
Encode chars in a bitmask from 0-25 bits and check if there are matches.

# Approach
For each word create a mask of the chars that are present in it. This creates a number which indicates which alphabet is present in that word. Similar strings will have same mask.

# Complexity
- Time complexity: $$O(n^2 + n|word|)$$

- Space complexity: $$O(n)$$

# Code
```
impl Solution {
    pub fn similar_pairs(words: Vec<String>) -> i32 {
        let mut wb = words.iter().map(|w| {
            let mut mask = 0;
            for b in w.clone().into_bytes() {
                mask |= 1 << (b - b'a');
            }
            mask
        }).collect::<Vec<_>>();
        let mut ans = 0;
        for i in 0..wb.len()-1 {
            for j in i+1..wb.len() {
                if wb[i] == wb[j] {
                    ans += 1;
                }
            }
        }
        ans
    }
}
```