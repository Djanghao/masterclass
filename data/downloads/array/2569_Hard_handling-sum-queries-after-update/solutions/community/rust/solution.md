# Rust Segment Tree and Lazy Propagation

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3208331/](https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3208331/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) nums2 only contrinutes the the initial sum.
2) Let count be the # of 1's in nums1.
3) Let cnt be the # of 1 after fliping in the range (inclusively) [l, r], the # of 1's before the fliping is: r - l + 1 - cnt. Therefore, the net change of the count with the flip is - (r - l + 1 - 2 * cnt).
4) Type 2 update: sum += count * q[1]  

# Approach
<!-- Describe your approach to solving the problem. -->
The most critical step is 3). We use a segment tree Vec<(flag, count)> of lenth 4 * n with lazy propagation to manage the flips. flag: 0 -> even # of flips; 1: odd # of flips. 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
impl Solution {
    pub fn handle_query(nums1: Vec<i32>, nums2: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i64> {
        let n = nums1.len();
        let mut count = nums1.iter().map(|a| *a as i64).sum::<i64>();
        let mut sum = nums2.iter().map(|a| *a as i64).sum::<i64>();
        let mut tree = vec![(0, 0); n * 4];

        for i in 0 .. n { 
            if nums1[i] == 1 { Self::add(1, 0, n - 1, i, &mut tree); }
        }

        let mut ret = vec![];
        for q in queries {
            if q[0] == 1 { 
                let cnt = Self::update(1, 0, n - 1, q[1] as usize, q[2] as usize, &mut tree);
                count -= q[2] as i64 - q[1] as i64 + 1 - 2 * cnt as i64;
                continue;
            }
            if q[0] == 2 { sum += count * q[1] as i64; }
            else { ret.push(sum); }
        }

        ret
    }

    // for setting up the tree with data from nums1
    fn add(u: usize, left: usize, right: usize, i: usize, tree: &mut Vec<(i32, usize)>) {
        if left == right {
            tree[u].1 = 1;
            return 
        }

        let mid = left + (right - left) / 2;
        if i <= mid { Self::add(2 * u, left, mid, i, tree); }
        else        { Self::add(2 * u + 1, mid + 1, right, i, tree); }
        
        tree[u].1 = tree[2 * u].1 + tree[2 * u + 1].1; 
    }

    // performing the flip in range [l, r] & 
    // return the # of 1's after the flip 
    fn update(u: usize, left: usize, right: usize, l: usize, r: usize, tree: &mut Vec<(i32, usize)>) -> i32 {
        if left >= l && right <= r {
            // no need tp progagate as all leaf nodes share the same flip info
            tree[u].0 = 1 - tree[u].0;
            if tree[u].0 == 0 { return tree[u].1 as i32 }
            return right as i32 - left as i32 + 1 - tree[u].1 as i32
        }

        if left > r || right < l { return 0 }
        
        // Need to propagate as flip info only applies to 
        // a subrange of [left, right].
        // need to push down the existing flip info for caculating 
        // the right # of 1's in the targeted range [l, r].
        if tree[u].0 == 1 {
            tree[2 * u].0 = 1 - tree[2 * u].0;
            tree[2 * u + 1].0 = 1 - tree[2 * u + 1].0;
            tree[u].0 = 0;
        }
        
        let mid = left + (right - left) / 2;
        let ret1 = Self::update(2 * u, left, mid, l, r, tree);
        let ret2 = Self::update(2 * u + 1, mid + 1, right, l, r, tree);
    
        tree[u].1 = if tree[2 * u].0 == 0 { tree[2 * u].1 } 
                    else { mid - left + 1 - tree[2 * u].1 };
        tree[u].1 += if tree[2 * u + 1].0 == 0 { tree[2 * u + 1].1 }
                     else { right - mid - tree[2 * u + 1].1 };

        ret1 + ret2
    }
}
```