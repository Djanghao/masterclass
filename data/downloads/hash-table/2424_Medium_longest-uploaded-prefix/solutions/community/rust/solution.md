# Rust, HashSet, O(n)

**Author:** goodgoodwish
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/2670820/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/2670820/)

---

Only record the current end of the prefix [1..i].  Keep extending it while can be extended.
```
use std::collections::HashSet;

struct LUPrefix {
    points: HashSet<i32>,
    far: i32,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl LUPrefix {

    fn new(n: i32) -> Self {
        Self {
            points: HashSet::new(),
            far: 0
        }
    }
    
    fn upload(&mut self, video: i32) {
        self.points.insert(video);
        while self.points.len() > 0 {
            let post = self.far + 1;
            if self.points.contains(&post) {
                self.far += 1;
                self.points.remove(&post);
            } else {
                break;
            }
        }
    }
    
    fn longest(&self) -> i32 {
        self.far
    }
}
```