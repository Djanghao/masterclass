# Rust Segment Tree

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3339916/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3339916/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
List all distinct entries of nums in ascending order & map them into sequence numbers.

Build a segment tree of node value = (len, count).

Iterate through nums, for each num:
1) find the max length & its count on all entries seen so far that are < num.
2) Update the information on the segment tree on the index that num maps to.
3) Update the return value based on what we have on hand so far.      
   
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N & Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::collections::BTreeSet;
use std::collections::HashMap;

impl Solution {
    fn add(u: usize, left: usize, right: usize, i: usize, len: i32, cnt: i32, tree: &mut Vec<(i32, i32)>) {
        if left == right {
            if tree[u].0 < len { tree[u] = (len, cnt); }
            else               { tree[u].1 += cnt; }
            return
        }

        let mid = left + (right - left) / 2;
        
        if i <= mid { Self::add(2 * u, left, mid, i, len, cnt, tree); }
        else        { Self::add(2 * u + 1, mid + 1, right, i, len, cnt, tree); }
        
        if tree[2 * u].0 == tree[2 * u + 1].0 {
            tree[u] = (tree[2 * u].0, tree[2 * u].1 + tree[2 * u + 1].1);
            return
        }
        
        tree[u] = if tree[2 * u].0 > tree[2 * u + 1].0 { tree[2 * u] } else { tree[2 * u + 1] };
    }

    fn get(u: usize, left: usize, right: usize, i: usize, tree: &Vec<(i32, i32)>) -> (i32, i32) {
        if right <= i { return tree[u] }
        if i < left { return (0, 0) }

        let mid = left + (right - left) / 2;
        
        let ret1 = Self::get(2 * u, left, mid, i, tree);
        let ret2 = Self::get(2 * u + 1, mid + 1, right, i, tree);
        
        if ret1.0 == ret2.0 { return (ret1.0, ret1.1 + ret2.1) }
        if ret1.0 > ret2.0 { ret1 } else { ret2 }
    }

    pub fn find_number_of_lis(nums: Vec<i32>) -> i32 {
        let mut temp = BTreeSet::new();
        for a in &nums { temp.insert(*a); }
        
        let mut temp = temp.into_iter().collect::<Vec<i32>>();
        let n = temp.len();
        let mut tree = vec![(0, 0); 4 * n];
        let mut mp = HashMap::<i32, usize>::new();

        for i in 0 .. n { mp.insert(temp[i], i); }
        for a in nums {
            let i = *mp.get(&a).unwrap();
            let mut temp = if i == 0 { (0, 0) } else { Self::get(1, 0, n - 1, i - 1, &tree) };
            if temp.0 == 0 && temp.1 == 0 { temp.1 += 1; }
            Self::add(1, 0, n - 1, i, temp.0 + 1, temp.1, &mut tree);
        }

        Self::get(1, 0, n - 1,  n - 1, &tree).1
    }
}
```