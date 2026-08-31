# simple check:  letter by letter

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/5295113/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/5295113/)

---


```
impl Solution {
    pub fn greatest_letter(s: String) -> String {

        if let Some(c) = ('A'..='Z').rev()
         .filter(|x|s.contains(*x) && s.contains(*&((*x as u8 + 32)as char)))
         .next() {
            format!("{}",c)
         } else {"".to_string()}
               
    }
}
```