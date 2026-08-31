# Rust solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5825991/](https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5825991/)

---

# Intuition
The problem involves processing a series of queries where each query consists of two integers. The goal is to maintain a collection of the k largest Manhattan distances from the origin (0, 0) as we process each query sequentially. This requires an efficient way to keep track of the largest distances as new queries are added.

# Approach
1. **Calculate the Manhattan Distance**: For each query, compute the Manhattan distance from the origin using the formula `|x| + |y|`.
2. **Use a Max-Heap**: Utilize a max-heap (priority queue) to store the distances. This allows for efficient retrieval and removal of the largest distance.
3. **Manage Heap Size**: As we process each query:
   - Push the new distance onto the heap.
   - If the size of the heap exceeds `k`, remove the largest element (to maintain only the k largest).
   - For each query starting from index `k-1`, store the largest element from the heap in the result array.
4. **Return the Result**: Finally, return the result array containing the k-th largest distances.

# Complexity
- **Time complexity**: 
  - Each insertion and removal operation in the heap takes \\(O(log k)\\).
  - Thus, for \\(n\\) queries, the total time complexity is \\(O(n log k)\\).

- **Space complexity**: 
  - The space used by the heap is \\(O(k)\\), leading to an overall space complexity of \\(O(k)\\).


# Code
```rust []
use std::collections::BinaryHeap;

impl Solution {
    pub fn results_array(queries: Vec<Vec<i32>>, k: i32) -> Vec<i32> {
        let n = queries.len();
        let mut ans = vec![-1; n];
        let mut pq = BinaryHeap::new();
        for i in 0..n {
            let x = (queries[i][0].abs() + queries[i][1].abs()) as i32;
            pq.push(x);
            if i >= k as usize {
                pq.pop();
            }
            if i >= (k - 1) as usize {
                ans[i] = *pq.peek().unwrap();
            }
        }
        ans
    }
}
```