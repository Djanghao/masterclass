# Rust - Parsing String

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1244132/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1244132/)

---

Solution - [github](https://github.com/idiotleon/lc_soln_rust_leon/tree/main/src/leetcode/lvl1/lc1880)

<b>Problem List</b>
#ParsingString - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/blob/main/txt/by_data_structure/string/by_topic/parsing_string.txt)

```
/// @author: Leon
/// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
/// Time Complexity:    O(`_len_rw` + `_len_sw`) + O(`_len_tw`) ~ O(max(`_len_rw`, `_len_sw, `_lentw`))
/// Space Complexity:   O(1)
impl Solution {
    pub fn is_sum_equal(first_word: String, second_word: String, target_word: String) -> bool {
        Self::str_to_num(first_word) + Self::str_to_num(second_word) == Self::str_to_num(target_word)
    }
    fn str_to_num(word: String) -> u8{
        let mut num: u8 = 0;
        for ch in word.chars(){
            num = num * 10 + (ch as u8 - 'a' as u8);
        }
        num
    }
}
```