# *.ext -- what an ugly idea

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/5957526/](https://leetcode.com/problems/longest-absolute-file-path/solutions/5957526/)

---

filename extensions -- what an ugly idea for the seventies or eighties!


```rust []
impl Solution {
    pub fn length_longest_path(input: String) -> i32 {
        let mut r = vec![0];
        let mut best = 0;
        
        for line in input.lines() {
            let f = line.replace('\	',"");
            let level = (line.len() - f.len());
            println!("{} {} {:?}", f, level, r);
            if f.contains('.') {
                best = best.max(*r.get(level).unwrap_or(&0) + level + f.len());
                continue
            } else {
                if level + 2 > r.len() {
                    r.push(*r.last().unwrap() + f.len())
                } else {
                    r[level + 1] = r[level] + f.len()
                }
            }
        }
        best as _
    }
}
```