# Rust: 100% RT - 12ms

**Author:** seandewar
**Votes:** 5
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/1319847/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/1319847/)

---

```rust
impl Solution {
    pub fn min_set_size(arr: Vec<i32>) -> i32 {
        let mut counts = vec![0; 100_000];
        arr.iter().for_each(|&x| counts[x as usize - 1] += 1);
        let mut heap = std::collections::BinaryHeap::from(counts);
        let (mut count, mut res) = (0, 0);
        while count * 2 < arr.len() {
            count += heap.pop().unwrap();
            res += 1;
        }
        res
    }
}
```