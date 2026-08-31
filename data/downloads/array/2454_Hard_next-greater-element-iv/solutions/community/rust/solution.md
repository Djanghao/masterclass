# Rust: Segment Tree Solution

**Author:** xiaoping3418
**Votes:** 2
**Link:** [https://leetcode.com/problems/next-greater-element-iv/solutions/2757625/](https://leetcode.com/problems/next-greater-element-iv/solutions/2757625/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First, we map all n distinct sorted values of nums into their ordering index (0-based). 
We then use a segment tree to maintain two list of indexes, with the first being the indexes of those numbers in nums that are bigger and the second list contains similar indexes that have not been propogated yet.     
# Approach
<!-- Describe your approach to solving the problem. -->
Segment Tree
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N LogN)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::collections::BinaryHeap;
use std::collections::BTreeSet;
use std::collections::HashMap;

struct Tree {
    tree: Vec<((usize, usize), (usize, usize))>,
    sz: usize
}

impl Tree {
    fn new(m: usize, n: usize) -> Self {
        Self { tree: vec![((m, m), (m, m)); 4 * n], sz: m }
    }

    fn add(&mut self, u: usize, left: usize, right: usize, i: usize, val: usize) {
        if i < left { return } 
        if i >= right {
            let mut pq = BinaryHeap::from([val, self.tree[u].1.0, self.tree[u].1.1]);
            if pq.len() > 2 { pq.pop(); } 
            if pq.len() == 2 { self.tree[u].1.1 = pq.pop().unwrap(); }
            self.tree[u].1.0 = pq.pop().unwrap();
            return;
        }
        if left == right { return }

        let mid = left + (right - left) / 2;
        self.add(2 * u, left, mid, i, val);
        self.add(2 * u + 1, mid + 1, right, i, val);
    }

    fn query(&mut self, u: usize, left: usize, right: usize, i: usize) ->usize {
        if self.tree[u].1.0 < self.sz {
            let mut pq = BinaryHeap::from([self.tree[u].0.0, self.tree[u].0.1, 
                                           self.tree[u].1.0, self.tree[u].1.1]);
            while pq.len() > 2 { pq.pop(); }
            self.tree[u].0.1 = pq.pop().unwrap();
            self.tree[u].0.0 = pq.pop().unwrap();
        
            if left < right {
                let mut pq = BinaryHeap::from([self.tree[u].1.0, self.tree[u].1.1, 
                                               self.tree[2 * u].1.0, self.tree[2 * u].1.1]);
                while pq.len() > 2 { pq.pop(); }
                self.tree[2 * u].1.1 = pq.pop().unwrap();
                self.tree[2 * u].1.0 = pq.pop().unwrap();

                let mut pq = BinaryHeap::from([self.tree[u].1.0, self.tree[u].1.1, 
                                               self.tree[2 * u + 1].1.0, self.tree[2 * u + 1].1.1]);
                while pq.len() > 2 { pq.pop(); }
                self.tree[2 * u + 1].1.1 = pq.pop().unwrap();
                self.tree[2 * u + 1].1.0 = pq.pop().unwrap();
            }

            self.tree[u].1.0 = self.sz;
            self.tree[u].1.1 = self.sz;
        }

        if left == right { return self.tree[u].0.1 }

        let mid = left + (right - left) / 2;

        if i <= mid { return self.query(2 * u, left, mid, i) }
        self.query(2 * u + 1, mid + 1, right, i)
    }
}

impl Solution {
    pub fn second_greater_element(nums: Vec<i32>) -> Vec<i32> {
        let mut temp = BTreeSet::new();
        for a in &nums { temp.insert(*a); }

        let mut mp = HashMap::<i32, usize>::new();
        for a in temp.iter() {
            let sz = mp.len();
            mp.insert(*a, sz);
        }

        let n = mp.len() + 1;
        let m = nums.len();
        let mut tree = Tree::new(m, n);
        let mut ret = vec![];

        for i in (0 .. m).rev() {
            let j = *mp.get(&nums[i]).unwrap();
            tree.add(1, 0, n - 1, j, i);
            let k = tree.query(1, 0, n - 1, j + 1);
            let temp = if k == m { -1 } else { nums[k] };
            ret.push(temp);
        }
        ret.reverse();

        ret
    } 
}
```