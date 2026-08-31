# Rust/Python Segment tree with binary search.

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5243670/](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5243670/)

---

# Intuition

After a [previous competition](https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/solutions/5239106/rust-python-segment-tree-with-detailed-explanation/) I invested time in learning Segment tree and it paid off. 

When you have a lot of range queries to the array, it might make sense to look at a segment tree. An excellent explanation where I learnt about it is https://cp-algorithms.com/data_structures/segment_tree.html

It explains everythings:

 - how to build a tree
 - how to do updates
 - why we have 4 * n nodes, and why do you have this specific complexity

Here we do not need updates. Segment tree we use is a very standard one, just because our opearion is `&` we use this instead of `+`.

------------------

Now lets look at some array `[a1, a2, a3, ...]`. As our operation is `&` and `v & x <= v` for any x and v we see that array is non-increasing so we can do binary search to efficiently find something.

Now for every position in array we do a binary search where to find the value of sum we do range of the segment tree.

**This solution is TLE in Python**, but passes in faster languages as probably they tested it only on $n \\log n$ and have too tight timeouts.

# Complexity

To create a segment tree it takes $O(n)$ time. Then we do our binary search for every $n$ positions. And a call to range takes $\\log n$. So

- Time complexity: $O(n \\log^2 n)$
- Space complexity: $O(n)$

# Code
```Rust []
struct SegmentTree {
  n: usize,
  tree: Vec<i32>,
}


impl SegmentTree {

  fn new(nums: &Vec<i32>) -> Self {
    let mut tree = SegmentTree {
      n: nums.len(),
      tree: vec![0; 4 * nums.len()],
    };
    tree.build(nums, 1, 0, nums.len() - 1);
    return tree;
  }

  fn build(&mut self, nums: &Vec<i32>, pos: usize, l: usize, r: usize) {
    if l == r {
      self.tree[pos] = nums[l];
    } else {
      let m = (l + r) / 2;
      self.build(nums, 2 * pos, l, m);
      self.build(nums, 2 * pos + 1, m + 1, r);
      self.tree[pos] = self.tree[2 * pos] & self.tree[2 * pos + 1];
    }
  }
  

  fn _range(&self, query_l: usize, query_r: usize, pos: usize, l: usize, r: usize) -> i32 {
    if r < query_l || l > query_r {
      return -1;
    }

    if l >= query_l && r <= query_r {
      return self.tree[pos];
    }

    let m = (l + r) / 2;
    let vl = self._range(query_l, query_r, 2 * pos, l, m);
    let vr = self._range(query_l, query_r, 2 * pos + 1, m + 1, r);
    if vl == -1 {
      return vr;
    }
    if vr == -1 {
      return vl
    }
    return vl & vr;
  }
  
  fn range(&self, left: usize, right: usize) -> i32 {
    return self._range(left, right, 1, 0, self.n - 1);  
  }
}


impl Solution {
  pub fn minimum_difference(nums: Vec<i32>, k: i32) -> i32 {
    let mut st = SegmentTree::new(&nums);
    let mut res = i32::MAX;
    for i in 0 .. nums.len() {
      let (mut lo, mut hi) = (i, nums.len());
      while lo < hi {
        let m = (lo + hi) / 2;
        let val_and = st.range(i, m);
        if val_and == k {
          return 0;
        }
        if val_and < k {
          res = res.min(k - val_and);
          hi = m;
        } else {
          res = res.min(val_and - k);
          lo = m + 1;
        }
      }
    }
    
    return res; 
  }
}
```
```python []
class SegmentTreeAnd:

  def __init__(self, arr: List[int]):
    self.n = len(arr)
    self.tree = [0] * (4 * self.n)
    self._build(arr, 1, 0, self.n - 1)

  def _build(self, arr: List[int], pos: int, l: int, r: int):
    if l == r:
      self.tree[pos] = arr[l]
    else:
      m = (l + r) // 2
      self._build(arr, 2 * pos, l, m)
      self._build(arr, 2 * pos + 1, m + 1, r)
      self.tree[pos] = self.tree[2 * pos] & self.tree[2 * pos + 1]

  def _range(self, query_l: int, query_r: int, pos: int, l: int, r: int) -> int:
    if r < query_l or l > query_r:
      return -1
    if l >= query_l and r <= query_r:
      return self.tree[pos]

    m = (l + r) // 2
    vl = self._range(query_l, query_r, 2 * pos, l, m)
    vr = self._range(query_l, query_r, 2 * pos + 1, m + 1, r)
    if vl == -1:
      return vr
    if vr == -1:
      return vl
    return vl & vr

  def range(self, query_l: int, query_r: int) -> int:
    return self._range(query_l, query_r, 1, 0, self.n - 1)


class Solution:
  def minimumDifference(self, nums: List[int], k: int) -> int:
    st, res = SegmentTreeAnd(nums), float('inf')
    for i in range(len(nums)):
      lo, hi = i, len(nums)
      while lo < hi:
        m = (lo + hi) // 2
        val_and = st.range(i, m)
        if val_and == k:
          return 0
        if val_and < k:
          res = min(res, k - val_and)
          hi = m
        else:
          res = min(res, val_and - k)
          lo = m + 1

    return res
```
