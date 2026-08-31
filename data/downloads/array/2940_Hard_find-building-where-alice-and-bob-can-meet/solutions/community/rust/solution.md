# Monotonic Stack and Binary Search

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4305770/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4305770/)

---

# Intuition
1) Let's for each $i$ in $0..queries.len()$, if $queries[i][0] > queries[i][1]$ then swap these elements
2) Let's sort the $queries$ array in descending order by the second element
3) Let's use the monotonic stack to order the heights in strictly descending order
4) So, using binary search, we can find for each $i$ in $0..queries.len()$ the index $k$ from the $heights$ array, such that $queries[i][0]$ < $k$, $queries[i][1]$ < $k$ and $heights[queries[i][0]] < heights[k]$ and $queries[i][1] < heights[k]$
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Using monotonic stack and binary search
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(n + m*log(m))$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(m)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::cmp::Ordering;

impl Solution {
    pub fn leftmost_building_queries(
        heights: Vec<i32>, mut queries: Vec<Vec<i32>>
    ) -> Vec<i32> {
        for i in 0..queries.len() {
            if queries[i][0] > queries[i][1] {
                let t = queries[i][0];
                queries[i][0] = queries[i][1];
                queries[i][1] = t;
            }
        }

        let mut q = queries.into_iter().enumerate().collect::<Vec<_>>();

        q.sort_by_key(|v| -v.1[1]);

        let mut j = 0;
        let mut s: Vec<(i32, usize)> = Vec::new();

        let mut r = vec![-1; q.len()];

        for i in (0..heights.len()).rev() {
            while i < q[j].1[1] as usize {
                let k = q[j].1[0] as usize;

                if q[j].1[1] == k as i32 {
                    r[q[j].0] = k as i32;
                } else if s.len() > 0 {
                    let l = s.partition_point(|t| t.0 > heights[k]);

                    if l > 0 {
                        r[q[j].0] = s[l - 1].1 as i32;
                    }
                }

                j += 1;

                if j >= q.len() {
                    break;
                }
            }

            if j >= q.len() {
                break;
            }

            while s.len() > 0 && heights[i] >= s[s.len() - 1].0 {
                s.pop();
            }

            s.push((heights[i], i));
        }

        for i in j..q.len() {
            r[q[i].0] = 0;
        }

        r
    }
}
```