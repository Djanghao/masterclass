# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5114228/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5114228/)

---


```
impl Solution {
    pub fn min_anagram_length(s: String) -> i32 {
        let n = s.len();
        for i in 1..=n {
            if n % i == 0 && Self::is_anagram(s.as_str(), i) {
                return i as i32;
            }
        }
        n as i32
    }

    fn is_anagram(s: &str, k: usize) -> bool {
        let n = s.len();
        let mut cnt = [0; 26];
        for i in 0..k {
            cnt[s.as_bytes()[i] as usize - b'a' as usize] += 1;
        }
        for i in (k..n).step_by(k) {
            let mut cnt2 = [0; 26];
            for j in i..i + k {
                cnt2[s.as_bytes()[j] as usize - b'a' as usize] += 1;
            }
            if cnt != cnt2 {
                return false;
            }
        }
        true
    }
}
```