# Rust idiomatic solution

**Author:** pierrewang
**Votes:** 6
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/2280095/](https://leetcode.com/problems/flatten-2d-vector/solutions/2280095/)

---

```
use std::iter::{Peekable, Flatten};
use std::vec::IntoIter;
struct Vector2D {
    it: Peekable<Flatten<IntoIter<Vec<i32>>>>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Vector2D {

    fn new(vec: Vec<Vec<i32>>) -> Self {
        Self {
            it: vec.into_iter().flatten().peekable(),
        }
    }
    
    fn next(&mut self) -> i32 {
        self.it.next().unwrap()
    }
    
    fn has_next(&mut self) -> bool {
        self.it.peek().is_some()
    }
}
```