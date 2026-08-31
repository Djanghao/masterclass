# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4332497/](https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4332497/)

---


```
impl Solution {
    pub fn beautiful_substrings(s: String, k: i32) -> i64 {
        let k = k as i64;
        let s = s.chars().collect::<Vec<_>>();
        let n = s.len();
        let mut v = 0_i64;
        let mut l = 1;
        while l * l % (k * 4) != 0 {
            l += 1;
        }
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let mut seen = vec![std::collections::HashMap::new(); l as usize];
        seen[(l - 1) as usize].insert(0, 1);
        let mut res = 0;
        for i in 0..n {
            if vowels.contains(&s[i]) {
                v += 1;
            } else {
                v -= 1;
            }
            if let Some(x) = seen[i % l as usize].get(&v) {
                res += *x;
            }
            *seen[i % l as usize].entry(v).or_insert(0) += 1;
        }
        res
    }
}
```