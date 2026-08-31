# 🔥 [LeetCode The Hard Way] 🔥 Rust - BinaryHeap

**Author:** tr1nity
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/2805701/](https://leetcode.com/problems/find-median-from-data-stream/solutions/2805701/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.

---

```rs
use std::collections::BinaryHeap;
use std::cmp::Reverse;

#[derive(Default)]
struct MedianFinder {
    lo: BinaryHeap<i32>,
    hi: BinaryHeap<Reverse<i32>>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MedianFinder {

    fn new() -> Self {
        Default::default()
    }
    
    fn add_num(&mut self, num: i32) {
        self.lo.push(num);
        self.hi.push(Reverse(*self.lo.peek().unwrap()));
        self.lo.pop();
        if (self.lo.len() < self.hi.len()) {
            self.lo.push(self.hi.peek().unwrap().0);
            self.hi.pop();
        }
    }
    
    fn find_median(&self) -> f64 {
        if self.lo.len() > self.hi.len() {
            return *self.lo.peek().unwrap() as f64;
        } 
        (self.lo.peek().unwrap() + self.hi.peek().unwrap().0) as f64 / 2.0
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * let obj = MedianFinder::new();
 * obj.add_num(num);
 * let ret_2: f64 = obj.find_median();
 */
```