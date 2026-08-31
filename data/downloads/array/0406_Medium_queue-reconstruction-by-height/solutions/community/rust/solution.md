# [Rust] sort + greedy insert. (4 ms, faster than 100%.)

**Author:** marccarre
**Votes:** 3
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/673002/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/673002/)

---

#### Performance

> Runtime: 4 ms, faster than 100.00% of Rust online submissions for Queue Reconstruction by Height.
> Memory Usage: 2.1 MB, less than 75.00% of Rust online submissions for Queue Reconstruction by Height.

#### Solution

```rust
const Height: usize = 0;
const Rank: usize = 1;

impl Solution {
    pub fn reconstruct_queue(mut people: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        // Sort people by decreasing height, and increasing rank:
        people.sort_by_key(|p| (-p[Height], p[Rank]));
        // Reconstruct the queue:
        let mut queue = Vec::with_capacity(people.len());
        for person in people.iter() {
            queue.insert(person[Rank] as usize, person.to_vec());
        }
        queue
    }
}
```