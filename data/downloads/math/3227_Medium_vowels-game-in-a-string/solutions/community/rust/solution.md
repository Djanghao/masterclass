# check whether there is any vowel

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-game-in-a-string/solutions/5559332/](https://leetcode.com/problems/vowels-game-in-a-string/solutions/5559332/)

---


```
impl Solution {
    pub fn does_alice_win(s: String) -> bool {
        for c in s.chars() {
            match &c {
                    'a'|'e'|'i'|'o'|'u' => return true,
                    _ => ()
                }
        }
        false
    }
}
```