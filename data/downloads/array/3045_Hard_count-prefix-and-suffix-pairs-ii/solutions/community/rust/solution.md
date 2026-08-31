# O(nlogn) hash map and brute force

**Author:** asherlau
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/5639306/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/5639306/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
the total length of the word is 5 * 10^5, we can expect each of the word length is 5, so we can brute force the question, by finding all the current word's prefix and suffix to see how many in the hash map and sum them together.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::BTreeMap;
impl Solution {
    pub fn count_prefix_suffix_pairs(mut words: Vec<String>) -> i64 {
        let n = words.len();
        let words: Vec<&[u8]> = words.iter_mut().map(|a| a.as_bytes()).collect();
        let mut btm: BTreeMap<&[u8], i64> = BTreeMap::new();
        let mut res = 0;
        for i in 0..n{
            let word = words[i];
            let wn = word.len();
            for j in 0..wn{
                if let Some(&prefix) = btm.get(&word[0..=j]){
                    if let Some(&suffix) = btm.get(&word[(wn - j - 1)..]){
                        if word[0..=j] == word[(wn - j - 1)..]{
                            res += prefix;
                        }
                    }
                }
            }
            btm.entry(words[i]).and_modify(|val| *val += 1).or_insert(1);
        }
        return res;
    }
}
```