# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-awesome-substring/solutions/3167295/](https://leetcode.com/problems/find-longest-awesome-substring/solutions/3167295/)

---

# Code
```
impl Solution {
    pub fn longest_awesome(s: String) -> i32 {
        use std::collections::HashMap;
        let mut map: HashMap<i32, i32> = HashMap::new();
        let mut mask = 0;
        let mut ans = 0;
        map.insert(0, -1);
        for (i, c) in s.bytes().enumerate() {
            mask ^= 1 << (c - b'0');
            if let Some(&j) = map.get(&mask) {
                ans = ans.max(i as i32 - j);
            }
            for k in 0..10 {
                let mask2 = mask ^ (1 << k);
                if let Some(&j) = map.get(&mask2) {
                    ans = ans.max(i as i32 - j);
                }
            }
            map.entry(mask).or_insert(i as i32);
        }
        ans
    }
}
```