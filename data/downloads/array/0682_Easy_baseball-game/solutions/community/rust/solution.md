# Rust solution

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/baseball-game/solutions/1676251/](https://leetcode.com/problems/baseball-game/solutions/1676251/)

---

```
impl Solution {
    pub fn cal_points(ops: Vec<String>) -> i32 {
        let mut res = Vec::new();
        for s in ops.iter() {
            match s.as_str() {
                "C" => res.truncate(res.len() - 1),
                "D" => res.push(*res.last().unwrap() * 2),
                "+" => res.push(res.iter().rev().take(2).sum()),
                d => res.push(d.parse::<i32>().unwrap()),
            }
        }
        res.iter().sum::<i32>()
    }
}
```