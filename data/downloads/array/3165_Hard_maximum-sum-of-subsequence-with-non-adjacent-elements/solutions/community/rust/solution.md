# An entry-level Rust solution

**Author:** Sammy171717
**Votes:** -1
**Link:** [https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/solutions/5228304/](https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/solutions/5228304/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- First try: DP -> TLE @ 517
- Second try: Segment tree, each node stores 4 sum results as given in Hint 2.


# Code
```
use std::cmp::max;

/// A segment tree node to store the maximum sequence sum with no adjacent (MSSNA).
struct TreeNode {
    /// The range of the current node
    range: (usize, usize),
    /// The left child node
    left: Option<Box<TreeNode>>,
    /// The right child node
    right: Option<Box<TreeNode>>,
    /// Store different MSSNA values
    /// `max_sums[0]`: MSSNA including both left and right range ends
    /// `max_sums[1]`: MSSNA including only left range end
    /// `max_sums[2]`: MSSNA including only right range end
    /// `max_sums[3]`: MSSNA excluding both left and right range ends
    max_sums: Vec<i32>,
}

impl TreeNode {
    /// Recursively construct the segment tree and return the root node
    pub fn construct(nums: &Vec<i32>, left: usize, right: usize) -> TreeNode {
        // reach the leaf node
        if left == right {
            return TreeNode {
                range: (left, right),
                left: None,
                right: None,
                max_sums: vec![max(0, nums[left]), 0, 0, 0],
            };
        }
        let mid = (left + right) / 2;
        let left_node = TreeNode::construct(nums, left, mid);
        let right_node = TreeNode::construct(nums, mid + 1, right);

        TreeNode {
            max_sums: compute_max_sums(&left_node, &right_node),
            range: (left, right),
            left: Some(Box::new(left_node)),
            right: Some(Box::new(right_node)),
        }
    }

    /// Returns the maximum subsequence sum of the current node
    pub fn query(&self) -> i32 {
        max(
            max(self.max_sums[0], self.max_sums[1]),
            max(self.max_sums[2], self.max_sums[3]),
        )
    }

    /// Recursively the value of the `idx`-th element in the array
    pub fn update(&mut self, idx: usize, val: i32) {
        // the `idx` child node is not a descendant of the current node
        if self.range.0 > idx || self.range.1 < idx {
            return;
        }
        // base case: reach the leaf node
        if self.range.0 == self.range.1 && self.range.0 == idx {
            self.max_sums = vec![max(0, val), 0, 0, 0];
            return;
        }
        // update the left or right child node
        let mid = (self.range.0 + self.range.1) / 2;
        if idx <= mid {
            // update the left child node
            self.left.as_mut().unwrap().update(idx, val);
        } else {
            // update the right child node
            self.right.as_mut().unwrap().update(idx, val);
        }
        // update the current node
        self.max_sums =
            compute_max_sums(&self.left.as_ref().unwrap(), &self.right.as_ref().unwrap());
    }
}

/// Compute `max_sums` of the current node
fn compute_max_sums(left: &TreeNode, right: &TreeNode) -> Vec<i32> {
    // to calculate the `max_sums[0]` of the current node,
    // there are three cases:
    // 1. [] + (]  (`left.max_sums[0] + right.max_sums[2]`)
    // 2. [) + (]  (`left.max_sums[1] + right.max_sums[2]`)
    // 3. [) + []  (`left.max_sums[1] + right.max_sums[0]`)
    let case_0 = left.max_sums[0] + right.max_sums[2];
    let case_1 = left.max_sums[1] + right.max_sums[2];
    let case_2 = left.max_sums[1] + right.max_sums[0];
    let max_sum_0 = max(max(case_0, case_1), case_2);

    // to calculate the `max_sums[1]` of the current node,
    // there are three cases:
    // 1. [] + ()  (`left.max_sums[0] + right.max_sums[3]`)
    // 2. [) + ()  (`left.max_sums[1] + right.max_sums[3]`)
    // 3. [) + [)  (`left.max_sums[1] + right.max_sums[1]`)
    let case_0 = left.max_sums[0] + right.max_sums[3];
    let case_1 = left.max_sums[1] + right.max_sums[3];
    let case_2 = left.max_sums[1] + right.max_sums[1];
    let max_sum_1 = max(max(case_0, case_1), case_2);

    // to calculate the `max_sums[2]` of the current node,
    // there are three cases:
    // 1. () + []  (`left.max_sums[3] + right.max_sums[0]`)
    // 2. () + (]  (`left.max_sums[3] + right.max_sums[2]`)
    // 3. (] + (]  (`left.max_sums[2] + right.max_sums[2]`)
    let case_0 = left.max_sums[3] + right.max_sums[0];
    let case_1 = left.max_sums[3] + right.max_sums[2];
    let case_2 = left.max_sums[2] + right.max_sums[2];
    let max_sum_2 = max(max(case_0, case_1), case_2);

    // to calculate the `max_sums[3]` of the current node,
    // there are three cases:
    // 1. () + ()  (`left.max_sums[3] + right.max_sums[3]`)
    // 2. () + [)  (`left.max_sums[3] + right.max_sums[1]`)
    // 3. (] + ()  (`left.max_sums[2] + right.max_sums[3]`)
    let case_0 = left.max_sums[3] + right.max_sums[3];
    let case_1 = left.max_sums[3] + right.max_sums[1];
    let case_2 = left.max_sums[2] + right.max_sums[3];
    let max_sum_3 = max(max(case_0, case_1), case_2);

    vec![max_sum_0, max_sum_1, max_sum_2, max_sum_3]
}

/// Update the segment tree for each query and
/// sum up the maximum subsequence sum of each range
fn solution(nums: Vec<i32>, queries: Vec<Vec<i32>>) -> i32 {
    let mut res = 0;
    let mut root = TreeNode::construct(&nums, 0, nums.len() - 1);
    for query in queries {
        root.update(query[0] as usize, query[1]);
        res += root.query();
        res %= 1_000_000_007;
    }
    res
}

```