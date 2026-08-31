# Rust, HashMap counter, split(' '), O(n)

**Author:** goodgoodwish
**Votes:** 1
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/2100494/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/2100494/)

---

```
use std::collections::HashMap;
impl Solution {
    pub fn largest_word_count(messages: Vec<String>, senders: Vec<String>) -> String {
        let n = senders.len();
        let mut xs = HashMap::new();
        let mut hi = 0;
        let mut ans = String::new();
        for (i, x) in senders.into_iter().enumerate() {
            let cnt = messages[i].split(" ").collect::<Vec<&str>>().len();
            *xs.entry(x.clone()).or_insert(0) += cnt;
            if xs[&x] > hi || (xs[&x] == hi && x > ans) {
                hi = xs[&x];
                ans = x;
            }
        }
        ans
    }
}
```