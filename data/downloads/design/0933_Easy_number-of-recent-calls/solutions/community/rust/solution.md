# In Rust

**Author:** lettty17
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/743058/](https://leetcode.com/problems/number-of-recent-calls/solutions/743058/)

---

```
struct RecentCounter {
    pings: Vec<i32>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RecentCounter {

    fn new() -> Self {
        RecentCounter { pings: vec!() }
    }
    
    fn ping(&mut self, t: i32) -> i32 {
        self.pings.push(t);
        return match self.pings.binary_search(&(t - 3000)) {
            Ok(i) => (self.pings.len() - i) as i32,
            Err(i) => (self.pings.len() - i) as i32,
        };
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * let obj = RecentCounter::new();
 * let ret_1: i32 = obj.ping(t);
 */
 ```