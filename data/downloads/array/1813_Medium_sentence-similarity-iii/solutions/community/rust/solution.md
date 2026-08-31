# Rust with iterators

**Author:** Minamikaze392
**Votes:** 5
**Link:** [https://leetcode.com/problems/sentence-similarity-iii/solutions/5875492/](https://leetcode.com/problems/sentence-similarity-iii/solutions/5875492/)

---

Use`Peekable`such that the first unmatched prefix words do not get consumed.
# Code
```Rust []
impl Solution {
    pub fn are_sentences_similar(sentence1: String, sentence2: String) -> bool {
        let mut iter1 = sentence1.split(' ').peekable();
        let mut iter2 = sentence2.split(' ').peekable();
        while let (Some(s1), Some(s2)) = (iter1.peek(), iter2.peek()) {
            if s1 != s2 {
                break;
            }
            iter1.next();
            iter2.next();
        }
        while let (Some(s1), Some(s2)) = (iter1.next_back(), iter2.next_back()) {
            if s1 != s2 {
                return false;
            }
        }
        true
    }
}
```