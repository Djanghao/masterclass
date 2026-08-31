# check whether number of misalignments is 2

**Author:** user5285Zn
**Votes:** 1
**Link:** [https://leetcode.com/problems/buddy-strings/solutions/4815016/](https://leetcode.com/problems/buddy-strings/solutions/4815016/)

---


```
impl Solution {
    pub fn buddy_strings(s: String, goal: String) -> bool {
        if s.len() != goal.len() {return false}
        let p = s.as_bytes().into_iter().zip(goal.as_bytes().into_iter())
            .filter(|(x,y)|x!=y).collect::<Vec<_>>();
        
        if s == goal && s.len() > s.as_bytes().iter().cloned().collect::<std::collections::HashSet<_>>().len() {return true}

        p.len() == 2 && p[0].0 == p[1].1 && p[0].1 == p[1].0
    }
}
```