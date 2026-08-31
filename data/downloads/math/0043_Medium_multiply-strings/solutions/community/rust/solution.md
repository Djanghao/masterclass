# Rust - Parsing String

**Author:** idiotleon
**Votes:** 3
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/1563649/](https://leetcode.com/problems/multiply-strings/solutions/1563649/)

---

Solution - [github](https://github.com/An7One/leetcode-solutions-rust-an7one/tree/main/src/leetcode/lvl4/lc0043)

<b>Problem List</b>
#ParsingString - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/string/by_topic/parsing_string.txt)

```
/// https://leetcode.com/problems/multiply-strings/
/// Time Complexity:    O(`len1` + `len2`)
/// Space Complexity:   O(`len1` + `len2`)
/// Referenec:
/// https://leetcode.com/problems/multiply-strings/discuss/241287/Rust-0ms-solution
impl Solution {
    pub fn multiply(num1: String, num2: String) -> String {
        let len1 = num1.len();
        let len2 = num2.len();
        let digits = {
            let mut digits = vec![0; len1 + len2];
            for (idx1, ch1) in num1.chars().rev().enumerate() {
                for (idx2, ch2) in num2.chars().rev().enumerate() {
                    let n1 = ch1 as i32 - '0' as i32;
                    let n2 = ch2 as i32 - '0' as i32;
                    let res = n1 * n2 + digits[idx1 + idx2];
                    digits[idx1 + idx2] = res % 10;
                    digits[idx1 + idx2 + 1] += res / 10;
                }
            }       
            while digits.len() > 1 && digits.last() == Some(&0){
                digits.pop();
            }
            digits
        };
        digits.into_iter().rev().map(|d| d.to_string()).collect::<String>()
    }
}
```