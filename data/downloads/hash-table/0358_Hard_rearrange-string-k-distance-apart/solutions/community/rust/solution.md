# Heap + queue

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/4041884/](https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/4041884/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We prioritize the most frequent characters to fill the output string, so we use a heap to track them. A queue helps with meeting the *k characters apart* constraint.

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::{VecDeque, BinaryHeap};

impl Solution {
    pub fn rearrange_string(s: String, k: i32) -> String {
        let mut freq = [0; 26];
        s.bytes().map(|b| (b - b'a') as usize).for_each(|i| freq[i] += 1);

        let mut heap = BinaryHeap::new();
        freq.into_iter()
            .enumerate()
            .filter(|(i, &c)| c > 0)
            .map(|(i, &c)| (c, i as u8 + b'a'))
            .for_each(|e| heap.push(e));

        let mut q = VecDeque::new();
        let mut ans = Vec::with_capacity(s.len());
        while let Some((c, b)) = heap.pop() {
            ans.push(b);
            if c > 1 { q.push_back((ans.len() - 1, (c - 1, b))); }
            if !q.is_empty() && ans.len() - q.front().unwrap().0 >= k as usize {
                heap.push(q.pop_front().unwrap().1) 
            }
        }

        if q.is_empty() { String::from_utf8(ans).unwrap() }
        else { "".to_string() }
    }
}
```