# Rust | Binary Search, O(n log n)

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/kill-process/solutions/3675565/](https://leetcode.com/problems/kill-process/solutions/3675565/)

---

# Intuition

The bottleneck is looking up children processes: brute-force approach takes $O(n)$ time.
If only there's a way to make that faster... 

# Approach

Basically any data structure works here. Hashmap, Binary Tree, etc. They are all fine, but do require extra space.

Instead, we can merge the two pid arrays into one, and sort it by parent id. This technically can be done with *no extra space*, and a simple binary search solves the issue of finding children processes.

For the actual graph traversal, breadth-first search is used by utilizing a queue.

# Complexity
- Time complexity:
$$O(n \\log n)$$

- Space complexity:
$$O(1)$$

# Code
```
use std::collections::VecDeque;

// Merge and sort two input arrays
pub fn preproc(pid: Vec<i32>, ppid: Vec<i32>)
    -> Vec<(i32, i32)> {
        let mut vec = ppid.into_iter()
            .zip(pid.into_iter())
            .collect::<Vec<_>>();
        vec.sort_unstable();

        vec
    }

impl Solution {
    pub fn kill_process(pid: Vec<i32>, ppid: Vec<i32>, kill: i32) -> Vec<i32> {
        let parent_id_map = preproc(pid, ppid);

        let mut ret = Vec::new();

        let mut queue: VecDeque<i32> = VecDeque::from([kill]);
        while let Some(id) = queue.pop_front() {
            ret.push(id);

            // Get all children processes through binary search
            let p0 = parent_id_map
                .partition_point(|(parent, _)| *parent < id);
            let p1 = parent_id_map
                .partition_point(|(parent, _)| *parent <= id);
            
            // Breadth first search
            for (_, id_next) in parent_id_map[p0..p1].iter() {
                queue.push_back(*id_next);
            }
        }

        ret
    }
}
```