# [Rust] Ugly but it works

**Author:** youmin1017
**Votes:** 1
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/2423331/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/2423331/)

---

* ascii code
* reversed peekable iterator
```rust
impl Solution {
    pub fn freq_alphabets(s: String) -> String {
        let mut iter = s.chars().rev().peekable();
        let mut res = String::new();
        loop {
            match iter.next() {
                Some('#') => {
                    let c1 = iter.next().unwrap().to_digit(10).unwrap() as u8;
                    let c2 = iter.next().unwrap().to_digit(10).unwrap() as u8;
                    res.push((c2*10 + c1 -1 + 'a' as u8) as char)
                },
                Some(x)   => {
                    let c = x.to_digit(10).unwrap() as u8;
                    res.push((c -1 + 'a' as u8) as char);
                },
                _   => {}
            }
            if iter.peek() == None {
                break;
            }
        }
        res.chars().rev().collect()
    }
}
```