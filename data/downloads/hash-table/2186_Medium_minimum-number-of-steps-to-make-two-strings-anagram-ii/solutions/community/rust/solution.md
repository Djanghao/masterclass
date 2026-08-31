# Rust - Counting Frequencies

**Author:** idiotleon
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/1803106/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/1803106/)

---

Solution - [github](https://github.com/An7One/lc_soln_rust_leon/tree/main/src/leetcode/lvl1/lc2186)

<b>Problem List</b>
#LinearScan-String - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/string/by_technique/n_pointers/linear_scan.txt)
#FreqArray - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/string/by_technique/freqs_array.txt)

```
/// @author: Leon
/// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/
/// Time Complexity:    O(max(`_len_s`, `_len_t`))
/// Space Complexity:   O(1)
impl Solution {
    pub fn min_steps(s: String, t: String) -> i32 {
        let freqs_s: Vec<u32> = {
            let mut freqs: Vec<u32> = vec![0; 26];
            for ch in s.chars(){
                freqs[ch as usize - 'a' as usize] += 1;
            }
            freqs
        };
        let freqs_t: Vec<u32> = {
            let mut freqs: Vec<u32> = vec![0; 26];
            for ch in t.chars(){
                freqs[ch as usize - 'a' as usize] += 1;
            }
            freqs
        };
        let mut cnt: i32 = 0;
        for idx in 0..26{
            cnt += (freqs_s[idx] as i32 - freqs_t[idx] as i32).abs();
        }
        cnt
    }
}
```