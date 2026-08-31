# Rust: 1+2+3 summation algo

**Author:** jatinderasingh
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/1852752/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/1852752/)

---

```
impl Solution {
    pub fn count_letters(s: String) -> i32 {
        let mut p = ' ';
        let (mut cnt, mut tots) = (0, 0);

        for c in s.chars(){
            if p == c { 
                cnt +=1;
            } else {
                tots += (cnt*(1+cnt))>>1;
                p = c;
                cnt = 1;
            }
        }
        tots += (cnt*(1+cnt))>>1;
        
        tots
    }
}
```