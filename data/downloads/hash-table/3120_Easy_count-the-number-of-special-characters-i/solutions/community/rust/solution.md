# 0ms One liner beats 100%

**Author:** marktyrkba
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5054981/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5054981/)

---

# Code
```
impl Solution {
    pub fn number_of_special_chars(word: String) -> i32 {
        word.chars().fold([0; 26], |mut map, c| {
            let i = c.to_ascii_lowercase() as usize - 97; // 'a'
            if c.is_uppercase() {
                map[i] |= 0b10;
            } else {
                map[i] |= 0b01;
            } map
        }).iter().filter(|x| x.eq(&&0b11)).count() as i32
    }
}
```