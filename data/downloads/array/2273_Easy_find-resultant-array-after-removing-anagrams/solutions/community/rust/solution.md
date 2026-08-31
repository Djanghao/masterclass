# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2041397/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2041397/)

---

```
impl Solution {
    pub fn remove_anagrams(words: Vec<String>) -> Vec<String> {
        let mut res = vec![];
        let mut prev_count = [0; 26];
        for word in words {
            let mut count = [0; 26];
            word.bytes().for_each(|b| count[(b - b'a') as usize] += 1);
            
            if prev_count != count {
                res.push(word);
            }
            prev_count = count;
        }
        res
    }
}
```