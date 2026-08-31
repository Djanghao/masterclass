# Rust Simple Solution || 0ms || beats 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/5281879/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/5281879/)

---

# Complexity
- Time complexity: $$O(26^2 + |word1| + |word2|)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn is_it_possible(word1: String, word2: String) -> bool {
        let mut counts1 = [0; 26];
        for &b in word1.as_bytes() {
            counts1[(b - b'a') as usize] += 1;
        }
        let count1 = counts1.iter().filter(|&c| *c > 0).count();
        let mut counts2 = [0; 26];
        for &b in word2.as_bytes() {
            counts2[(b - b'a') as usize] += 1;
        }
        let count2 = counts2.iter().filter(|&c| *c > 0).count();

        for (i,&c1) in counts1.iter().enumerate() {
            if c1 > 0 {
                for (j,&c2) in counts2.iter().enumerate() {
                    if c2 > 0 {
                        if i == j {
                            // if both the letters are same
                            // swapping them won't change the counts
                            if count1 == count2 {
                                return true;
                            }
                            // else continue
                            continue;
                        }
                        // if letters are different, calculate distinct letters
                        let d1 = count1 - (if c1 == 1 {1} else {0}) + (if counts1[j] == 0 {1} else {0});
                        let d2 = count2 - (if c2 == 1 {1} else {0}) + (if counts2[i] == 0 {1} else {0});
                        // if distinct count is same after swapping
                        if d1 == d2 {
                            return true;
                        }
                    }
                }
            }
        }
        false
    }
}
```