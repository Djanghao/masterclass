# Rust Stream Solution

**Author:** michielbaird
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/957911/](https://leetcode.com/problems/linked-list-random-node/solutions/957911/)

---

This solution solves it with O(1) extra space. This is not the most efficient solution, but will work for any list or stream(even those you don't know the size of). 

When we start start off by picking the first item. If the list is of size 1 that has probability of 1 being picked. Going through the stream, you replace the picked value with a probability of `1/n`

We can prove this inductively:
P(n) = 1/n
P(n+1) = P(n)*(n/n+1)
P(n+1) = 1/n * n/n+1
P(n+1) = n/n(n+1)
             = 1/ n+1
P(1) = 1
P(2) = 1/2

Meaning that at the end every item has a chance of 1/n to be picked.
```
use rand::{thread_rng, Rng};

struct Solution {
    head: Option<Box<ListNode>>
}
impl Solution {
    fn new(head: Option<Box<ListNode>>) -> Self {
        Self{
            head    
        }
    }
    fn get_random(&self) -> i32 {
        let mut rng = thread_rng();
        let mut c = self.head.as_ref().unwrap();
        let mut count = 1;
        let mut r = c.val;
        while let Some(v) = c.next.as_ref() {
            count += 1;
            if rng.gen_range(0, count) == 0 {
                r = v.val;
            }
            c = v;
        }
        r
    }
}
```