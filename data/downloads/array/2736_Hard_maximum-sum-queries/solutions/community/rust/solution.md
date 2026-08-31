# Rust Segment Tree

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-queries/solutions/3626931/](https://leetcode.com/problems/maximum-sum-queries/solutions/3626931/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N * Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::collections::BTreeSet;

impl Solution {
    pub fn maximum_sum_queries(nums1: Vec<i32>, nums2: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let mut s = BTreeSet::new();
        for a in &nums2 { s.insert(*a); }

        let data = s.into_iter().collect::<Vec<i32>>();
        let (m, n, sz) = (nums1.len(), queries.len(), data.len()); 
        let mut tree = vec![(-1, -1); 4 * sz];
        let (mut nums, mut temp) = (vec![], vec![]);
        
        for i in 0 .. m { nums.push((nums1[i], nums2[i])); }
        for i in 0 .. n { temp.push((queries[i][0], queries[i][1], i)); }
        nums.sort();
        temp.sort();
    
        let mut k = m;
        let mut ret = vec![-1; n];
        while let Some(q) = temp.pop() {
            while k > 0  && nums[k - 1].0 >= q.0 {
                k -= 1;
                let (a, b) = (nums[k].0, nums[k].1);
                let idx = Self::binary_search(&data, b);
                Self::update(1, 0, sz - 1, idx, a + b, &mut tree); 
            }
            let j = Self::binary_search(&data, q.1);
            ret[q.2] = Self::get(1, 0, sz - 1, j, &mut tree);
        }

        ret
    }

    fn update(u: usize, l: usize, r: usize, i: usize, a: i32, tree: &mut Vec<(i32, i32)>) {
        if l > i { return }
        if r <= i {
            tree[u].0 = tree[u].0.max(a);
            tree[u].1 = tree[u].1.max(tree[u].0);
            return;
        }

        let m = l + (r - l) / 2;
        Self::update(2 * u, l, m, i, a, tree);
        Self::update(2 * u + 1, m + 1, r, i, a, tree);
        let t = tree[2 * u].1.max(tree[2 * u + 1].1);
        tree[u].1 = tree[u].1.max(t);
    }

    fn get(u: usize, l: usize, r: usize, i: usize, tree: &mut Vec<(i32, i32)>) -> i32 {
        if i > r { return -1 }
        if (l >= i) { return tree[u].0.max(tree[u].1); }

        if tree[u].0 != -1 {
            tree[u].1 = tree[u].1.max(tree[u].0);
            if l < r {
                tree[2 * u].0 = tree[2 * u].0.max(tree[u].0);
                tree[2 * u + 1].0 = tree[2 * u + 1].0.max(tree[u].0); 
            }
            tree[u].0 = -1;
        }

        let m = l + (r - l) / 2;
        let (ret1, ret2) = (Self::get(2 * u, l, m, i, tree), Self::get(2 * u + 1, m + 1, r, i, tree));
        let t = tree[2 * u].1.max(tree[2 * u + 1].1);
        tree[u].1 = tree[u].1.max(t);

        ret1.max(ret2)
    }

    fn binary_search(data: &Vec<i32>, a: i32) -> usize {
        let (mut l, mut r) = (0, data.len() - 1);
        if a > data[r] { return r + 1 }

        while l < r {
            let m = l + (r - l) / 2;
            if data[m] < a { l = m + 1; }
            else           { r = m; } 
        }

        l
    }
}
```