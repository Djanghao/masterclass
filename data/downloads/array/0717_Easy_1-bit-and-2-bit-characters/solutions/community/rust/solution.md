# rust iterators

**Author:** zakharovvi
**Votes:** 1
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/1675204/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/1675204/)

---

```
impl Solution {
    pub fn is_one_bit_character(bits: Vec<i32>) -> bool {
        let ones = bits
            .iter()
            .rev()
            .skip(1)
            .take_while(|&&b| b == 1)
            .count();

        ones % 2 == 0
    }
}
```