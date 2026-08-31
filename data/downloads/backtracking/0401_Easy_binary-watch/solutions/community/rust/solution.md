# Rust solution

**Author:** BigMih
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-watch/solutions/1950999/](https://leetcode.com/problems/binary-watch/solutions/1950999/)

---

1. Simple solution with cycles.
```
impl Solution {
    pub fn read_binary_watch(turned_on: i32) -> Vec<String> {
        let nu = turned_on as u32;
        let mut result = Vec::new();
        for i in 0i32..12 {
            for j in 0i32..60 {
                if (i.count_ones() + j.count_ones()) == nu {
                    result.push(format!("{}:{:02}", i, j));
                }
            }
        }
        result
    }
}
```
2. Functional one-liner.
```
impl Solution {
    pub fn read_binary_watch(turned_on: i32) -> Vec<String> {
        (0i32..1023)
            .map(|n| (n.count_ones() as i32, n >> 6, n & 0b111111))
            .filter_map(|(count, h, m)| {
                if count == turned_on && h < 12 && m < 60 {
                    Some(format!("{}:{:02}", h, m))
                } else {
                    None
                }
            })
            .collect()
    }
}
```