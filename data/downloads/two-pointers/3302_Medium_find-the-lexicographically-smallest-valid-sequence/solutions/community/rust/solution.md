# Iterative Greedy Solution (56ms)

**Author:** yuzisserman
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5879285/](https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5879285/)

---

# Approach
1. For each index/suffix in word2 identify and store last opportunity in word1 (i.e. biggest index) to match the word1 suffix to word2 suffix.
2. Iterate through word1 while keeping track if the 1-time allowed deviation has been used. In case of match iterate both pointers in word1 and word2 and append word1 pointer to the resulting sequence. In case 1-time allowed deviation has not been used, also increment both pointers and append first pointer to the resulting sequence. However in this case it needs to be checked that pointer1 has not exceeded the last opportunity identified in step 1 or that there's no more character in word2 to match.

# Complexity
- Time complexity: O(n) with n = length of word1
- Space complexity: O(m) with m = length of word2

# Code
```rust []
impl Solution {
    pub fn valid_sequence(word1: String, word2: String) -> Vec<i32> {
        //find last chance of an index in word1 to match a index in word2
        let mut last: Vec<usize> = vec![0; word2.len()];
        let mut i2: usize = word2.len() - 1;
        for i1 in (0..word1.len()).rev() {
            if i2 >= 0 && word1.bytes().nth(i1) == word2.bytes().nth(i2) {
                last[i2] = i1;
                i2 -= 1;
            }
        }

        //find the subsequence of indices in word1
        let mut res: Vec<i32> = vec![-1; word2.len()];
        let mut changed: bool = false;
        i2 = 0;
        for i1 in (0..word1.len()) {
            if word1.bytes().nth(i1) == word2.bytes().nth(i2) || (!changed && (i2 == word2.len() - 1 || i1 < last[i2 + 1])) {
                res[i2] = i1 as i32;
                changed |= word1.bytes().nth(i1) != word2.bytes().nth(i2);
                i2 += 1;
                if i2 >= word2.len() { break; }
            }
        }
        if i2 < word2.len() { return vec![]; }
        res
    }
}
```