# Rust SegmentTree solution

**Author:** wddwycc
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1284797/](https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1284797/)

---

```rust
// https://en.wikipedia.org/wiki/Segment_tree
pub struct SegmentTree {
    pub start: usize,
    pub end: usize,
    pub bitmask: u128,
    pub left: Option<Box<SegmentTree>>,
    pub right: Option<Box<SegmentTree>>,
}

impl SegmentTree {
    // O(n)
    pub fn new(start: usize, end: usize, vals: &[i32]) -> Self {
        if start == end {
            let bitmask = 1 << (vals[start] - 1);
            return Self {
                start,
                end,
                bitmask,
                left: None,
                right: None,
            };
        }
        let mid = start + (end - start) / 2;
        let left = Self::new(start, mid, vals);
        let right = Self::new(mid + 1, end, vals);
        Self {
            start,
            end,
            bitmask: left.bitmask | right.bitmask,
            left: Some(Box::new(left)),
            right: Some(Box::new(right)),
        }
    }

    // O(logn)
    pub fn query(&self, start: usize, end: usize) -> u128 {
        // NOTE: Exact match
        if self.start == start && self.end == end {
            return self.bitmask;
        }
        let mid = self.start + (self.end - self.start) / 2;
        // NOTE: Range on the left
        if end <= mid {
            return self.left.as_ref().unwrap().query(start, end);
        // NOTE: Range on the right
        } else if start > mid {
            return self.right.as_ref().unwrap().query(start, end);
        // NOTE: Range on both sides
        } else {
            let left = self.left.as_ref().unwrap().query(start, mid);
            let right = self.right.as_ref().unwrap().query(mid + 1, end);
            return left | right;
        }
    }
}

impl Solution {
    pub fn min_difference(nums: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let tree = SegmentTree::new(0, nums.len() - 1, &nums);
        queries
            .into_iter()
            .map(|r| {
                let start = r[0] as usize;
                let end = r[1] as usize;
                let bitmask = tree.query(start, end);
                let mut prev: Option<usize> = None;
                let mut res: Option<usize> = None;
                for i in 0..100 {
                    if (bitmask >> i) & 1 == 0 {
                        continue;
                    }
                    match (prev, res) {
                        (None, None) => {
                            prev = Some(i);
                        }
                        (Some(prev_), None) => {
                            prev = Some(i);
                            res = Some(i - prev_);
                        }
                        (Some(prev_), Some(res_)) => {
                            prev = Some(i);
                            res = Some(res_.min(i - prev_));
                        }
                        _ => (),
                    }
                }
                res.map(|a| a as i32).unwrap_or(-1)
            })
            .collect()
    }
}
```