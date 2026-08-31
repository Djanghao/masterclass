# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1578147/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1578147/)

---

```
impl Solution {
    pub fn check_almost_equivalent(word1: String, word2: String) -> bool {
        let get_count = |s: &str| -> [i32; 26] {
            let mut count = [0; 26];
            s.as_bytes()
                .iter()
                .for_each(|&b| count[(b - b'a') as usize] += 1);
            count
        };
        let count_1 = get_count(&word1);
        let count_2 = get_count(&word2);

        count_1
            .iter()
            .zip(count_2.iter())
            .all(|(n1, n2)| (n1 - n2).abs() <= 3)
    }
}
```