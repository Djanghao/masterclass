# Easy Solution in Rust

**Author:** sub1ect
**Votes:** 0
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/2926711/](https://leetcode.com/problems/incremental-memory-leak/solutions/2926711/)

---

# Code
```
impl Solution {
    pub fn mem_leak(mut memory1: i32, mut memory2: i32) -> Vec<i32> {
        let mut i: i32 = 1;
        while memory1 >= i || memory2 >= i {
            if memory1 >= memory2 || (memory1 == memory2 && memory1 >= i) {
                memory1 -= i;
            } else {
                if memory2 >= i {
                    memory2 -= i;
                }
            }
            i += 1;
        }
        vec![i, memory1, memory2]
    }
}
```