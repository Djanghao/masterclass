# rust faster 100%

**Author:** kennylong
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/1879201/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/1879201/)

---

```rust
impl Solution {
    pub fn to_hex(num: i32) -> String {
        let mut num = num as u32; // shift without sign, the bits are same
        if num == 0 {
            return "0".to_string();
        }
        let mut bytes = vec![];
        while num != 0 {
            let v = (num & 0xf) as u8;
            match v {
                0..=9 => bytes.push(b'0' + v),
                _ => bytes.push(b'a' + v - 10), // 10..=15 only
            }
            num >>= 4;
        }
        bytes.reverse();
        String::from_utf8(bytes).unwrap()
    }
}
```