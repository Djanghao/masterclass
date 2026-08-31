# Two Fenwick trees and a balanced search tree, running in O(n log n)

**Author:** f-fr
**Votes:** 1
**Link:** [https://leetcode.com/problems/alternating-groups-iii/solutions/5632597/](https://leetcode.com/problems/alternating-groups-iii/solutions/5632597/)

---

# Intuition
Give a maximal alternating interval of size $m$, it contains $m-k+1$ intervalls of size $k \\le m$. Hence, if we know the number $A_m$ of all maximal intervalls of size $m$ for each length $m$, we can compute the total number $n_k$ of intervalls of size $k$ by $$n_k = \\sum_{i=k}^n (i - k + 1) A_i.$$ Since updating the $A_i$ for each update query is possible in $O(1)$, we need a fast way to compute the above sums (which would otherwise be $O(n)$). Following the hint, we use Fenwick trees.

# Approach
<!-- Describe your approach to solving the problem. -->
The basic idea is to use *two* Fenwick trees/BIT, one for computing the usual sums $$A(i,j] := \\sum_{k=i+1}^j A_k$$ and a second one to compute the sums $$B(i,j] := \\sum_{k=i+1}^j kA_k$$. Note that $B(i,j]$ also satisfies the important property $$B(i,j] + B(j, k] = B(i, k]$$, which is the reason why BIT work.

The final observation is that we can compute $n_k$ with the help of $A(i,j]$ and $B(i,j]$:

$$n_k = \\sum_{i=k}^n (i - k + 1) A_i = \\sum_{i=k}^n i A_i - (k-1)\\sum_{i=k}^n A_i = B(k-1,n] - (k-1) A(k-1,n]$$

Because the computation of $B(i,j]$ and $A(i,j]$ is possible in $O(\\log n)$ in BIT, we can compute $n_k$ in $O(\\log n)$ as well.

Handling the maximal intervalls is done using a balanced search-tree with a constant number of accesses for each query, hence runs in $O(\\log n)$ as well.

# Complexity
- Time complexity: $O(n \\log n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::BTreeSet;

impl Solution {
    pub fn number_of_alternating_groups(mut colors: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let n = colors.len();
        let mut ft = FTree::new(n);
        let mut invs= BTreeSet::new();

        if let Some(s) = (0..n).position(|i| colors[(i + n - 1) % n] == colors[i]) {
            // found split position s, the first interval is [s,...)
            let mut i = s;
            loop {
                invs.insert(i); // add the start of the interval
                // find end of interval
                let mut j = (i + 1) % n;
                while colors[j] != colors[(j + n - 1) % n] {
                    j = (j + 1) % n;
                }
                let l = (j + n - i) % n;
                ft.add(if l == 0 { n } else { l }, 1);
                i = j;
                if i == s {
                    break;
                }
            }
        } else {
            // a single consecutive interval, this is a special case
            invs.insert(0);
            ft.add(n, 1);
        }

        let mut results = vec![];
        for q in queries {
            if q[0] == 1 {
                results.push(query(q[1] as usize, &ft, &invs));
            } else {
                toggle(q[1] as usize, q[2], &mut ft, &mut invs, &mut colors);
            }
        }

        results
    }
}

fn toggle(i: usize, c: i32, ft: &mut FTree, invs: &mut BTreeSet<usize>, colors: &mut Vec<i32>) {
    if colors[i] == c {
        return;
    }

    // switch color
    colors[i] = c;

    // find the interval [a,b) containing i
    let n = colors.len();
    let (a, b) = find_containing_interval(invs, i);
    let s = (b + n - a) % n;

    if a == b {
        // there is only one interval (of size n) -> special case
        if n % 2 == 1 {
            // odd cycle
            if (i + 1) % n == a {
                // odd cycle, the non-matching end is shifted by -1, the number of intervals does not change
                invs.clear();
                invs.insert(i);
            } else if i == a {
                // odd cycle, the non-matching end is shifted by +1, the number of intervals does not change
                invs.clear();
                invs.insert((i + 1) % n);
            } else {
                // insert a singleton, splitting the rest
                invs.insert(i);
                invs.insert((i + 1) % n);
                let left_s = (i + n - a) % n;
                let right_s = (b + n - (i + 1)) % n;
                ft.add(n, -1);
                ft.add(left_s, 1);
                ft.add(right_s, 1);
            }
        } else {
            // even cycle
            ft.add(n, -1);
            ft.add(n - 1, 1);
            ft.add(1, 1);
            invs.clear();
            invs.insert(i);
            invs.insert((i + 1) % n);
        }
    } else if s == 1 {
        // i is currently a singleton, switching its color connects *both* adjacent intervals
        // we simply remove both boundaries
        invs.remove(&a);
        invs.remove(&b);
        if invs.is_empty() {
            // special case, this was the last singleton!!
            invs.insert(0);
            ft.add(1, -1);
            ft.add(n - 1, -1);
            ft.add(n, 1);
            return;
        }
        let (new_a, new_b) = find_containing_interval(invs, i);
        let left_s = (i + n - new_a) % n;
        let right_s = (new_b + n - (i + 1)) % n;
        let mut new_s = (new_b + n - new_a) % n;
        if new_s == 0 {
            // special case: only one interval remaining
            new_s = n
        };
        ft.add(1, -1);
        ft.add(left_s, -1);
        ft.add(right_s, -1);
        ft.add(new_s, 1);
    } else if i == a {
        // i is at the left boundary
        // i switches to the interval to the left
        let (left_a, left_b) = find_containing_interval(invs, (i + n - 1) % n);
        let left_s = (left_b + n - left_a) % n;
        debug_assert_eq!(left_b, a);
        ft.add(s, -1);
        ft.add(left_s, -1);
        ft.add(s - 1, 1);
        ft.add(left_s + 1, 1);
        invs.remove(&i);
        invs.insert((i + 1) % n);
    } else if (i + 1) % n == b {
        // i is at the right boundary
        // i switches to the interval to the right
        let (right_a, right_b) = find_containing_interval(invs, (i + 1) % n);
        let right_s = (right_b + n - right_a) % n;
        debug_assert_eq!(right_a, b);
        ft.add(s, -1);
        ft.add(right_s, -1);
        ft.add(s - 1, 1);
        ft.add(right_s + 1, 1);
        invs.remove(&((i + 1) % n));
        invs.insert(i);
    } else {
        // is in the middle of [a,b)
        // this will split the interval in two halfs [a,i), [i+1, b) and one singleton [i,i+1)
        let left_s = (i + n - a) % n;
        let right_s = (b + n - (i + 1)) % n;
        ft.add(s, -1);
        ft.add(1, 1);
        ft.add(left_s, 1);
        ft.add(right_s, 1);
        invs.insert(i);
        invs.insert((i + 1) % n);
    }
}

fn find_containing_interval(invs: &BTreeSet<usize>, i: usize) -> (usize, usize) {
    let a = invs.range(..=i).next_back().or_else(|| invs.last()).unwrap().clone();
    let b = invs.range(i + 1..).next().or_else(|| invs.first()).unwrap().clone();
    (a, b)
}

fn query(i: usize, a: &FTree, invs: &BTreeSet<usize>) -> i32 {
    let n = a.size();
    if n % 2 == 0 && invs.len() <= 1 {
        return n as i32;
    }
    let p1 = a.prefix(n);
    let p2 = a.prefix(i - 1);
    let y = p1.1 - p2.1;
    let x = p1.0 - p2.0;
    y - (i - 1) as i32 * x
}

struct FTree {
    tree: Vec<(i32, i32)>,
}

impl FTree {
    fn new(n: usize) -> FTree {
        FTree {
            tree: vec![(0, 0); n + 1],
        }
    }

    fn size(&self) -> usize {
        self.tree.len() - 1
    }

    /// Add `value` to `A[i]`
    fn add(&mut self, i: usize, value: i32) {
        let mut j = i;
        while j < self.tree.len() {
            self.tree[j].0 += value;
            self.tree[j].1 += value * i as i32;
            j += lsb(j);
        }
    }

    /// Return A(0,i]
    fn prefix(&self, i: usize) -> (i32, i32) {
        let mut sum0 = 0;
        let mut sum1 = 0;
        let mut i = i;
        while i > 0 {
            sum0 += self.tree[i].0;
            sum1 += self.tree[i].1;
            i -= lsb(i);
        }
        (sum0, sum1)
    }
}

fn lsb(i: usize) -> usize {
    i & (-(i as i64) as usize)
}

```