# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/expressive-words/solutions/2921083/](https://leetcode.com/problems/expressive-words/solutions/2921083/)

---

# Code
```
impl Solution {
    pub fn expressive_words(s: String, words: Vec<String>) -> i32 {
        let mut ret = 0;
        let s = s.chars().collect::<Vec<char>>();
        let n = s.len();
        
        for word in words {
            println!["{}", word];
            let word = word.chars().collect::<Vec<char>>();
            let m = word.len();
            let mut valid = true;
            let (mut i, mut j) = (0, 0);
            while j < m {
                let (mut cnt1, mut cnt2) = (0, 0);
                while i + cnt1 < n && s[i + cnt1] == word[j] { cnt1 += 1; }
                while j + cnt2 < m && word[j + cnt2] == word[j] { cnt2 += 1; }
                if cnt1 < cnt2 || (cnt1 != cnt2 && cnt1 < 3) {
                    valid = false;
                    break
                }
                i += cnt1;
                j += cnt2;
            }
            
            if valid == false || i != n { continue }
            ret += 1;
        }
        
        ret
    }
}
```