# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/cracking-the-safe/solutions/2910739/](https://leetcode.com/problems/cracking-the-safe/solutions/2910739/)

---

# Code
```
impl Solution {
    pub fn crack_safe(n: i32, k: i32) -> String {
        let mut ans = vec!['0'; n as usize].into_iter().collect::<String>();
        let mut s = std::collections::HashSet::new();
        s.insert(ans.clone());
        for _ in 0..(k.pow(n as u32)) {
            let pre = ans[(ans.len() - n as usize + 1)..].to_string();
            for j in (0..k).rev() {
                let now = format!("{}{}", pre, j);
                if !s.contains(&now) {
                    s.insert(now.clone());
                    ans.push_str(&j.to_string());
                    break;
                }
            }
        }
        ans.chars().rev().collect::<String>()
    }
}
```