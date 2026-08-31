# Search with priority queue and simple heuristics

**Author:** phihung
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/5467942/](https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/5467942/)

---

Run the largest tests under the second

# Intuition

**A node** : a partial solution with the values grouped up til an index (`i_start`). The first `i_start` values form `length` sums, the last (largest) sum is of value `v_min`.

**Terminal node** : when `i_start = n`

**Expand** : Let `i` be the first index that `sum(nums[i_start..i]) >= v_min`. The next nodes would be: `sum(nums[i_start..i])`, `sum(nums[i_start..(i+1)])`, and so on. The search space grows exponentially.

**Heuristic to reduce search space**:
`potential of a node = (number of groups up til the node) + sum (remaining numbers) / v_min`
It gives the upper bound of the solutions that can be found from that node.
So if `(potential of a node) <= (best solution found so far)`, that node is not worth exploring. (At best, this node leads to the same number and improve nothing)

**Priority queue** : We explore high `potential` nodes first.


# Complexity
- Time complexity: ???

- Space complexity: O(N)

# Code
```
use std::collections::BinaryHeap;

#[derive(PartialEq, Eq, PartialOrd, Ord)]
struct Node {
    potential: i32,
    i_start: usize,
    length: i32,
    v_min: i64,
}

impl Solution {
    pub fn find_maximum_length(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let cumsums = Self::to_cumsum(&nums);

        let mut iter = 0;
        let mut best = Self::greedy(&cumsums, 0);
        let mut visited = vec![None; n];
        let mut queue = BinaryHeap::with_capacity(n * 3 / 2);
        queue.push(Node {
            potential: i32::MAX,
            i_start: 0,
            length: 0,
            v_min: 1,
        });

        // Whether a node is worth exploring
        let is_userfull = |x: &Node, eq_ok: bool, visited: &[_], best: i32| {
            if x.potential <= best {
                return false;
            }

            if let Some((l1, v1)) = visited[x.i_start] {
                if (v1 < x.v_min && l1 >= x.length) || (v1 == x.v_min && l1 > x.length) {
                    // There is a better node in the queue
                    return false;
                }
                if v1 == x.v_min && l1 == x.length {
                    return eq_ok;
                }
            }
            return true;
        };

        // Priority queue. Process first: high potential - high i_start (potential estimation is more fiable)
        while let Some(node) = queue.pop() {
            if !is_userfull(&node, true, &visited, best) {
                continue;
            }

            iter += 1;
            if iter % 1000 == 0 {
                queue.retain(|x| is_userfull(x, true, &visited, best));
            }

            let v_prev = if node.i_start > 0 {
                cumsums[node.i_start - 1]
            } else {
                0
            };
            for (i, &x) in cumsums[node.i_start..].iter().enumerate() {
                let i = node.i_start + i;
                let mut v = x - v_prev;
                if v >= node.v_min {
                    if i < n - 1 {
                        let potential =
                            node.length + 1 + ((cumsums[n - 1] - cumsums[i]) / v) as i32;
                        let new_node = Node {
                            potential,
                            i_start: i + 1,
                            length: node.length + 1,
                            v_min: v,
                        };
                        if !is_userfull(&new_node, false, &visited, best) {
                            break;
                        }

                        queue.push(new_node);
                        visited[i + 1] = Some((node.length + 1, v));
                    } else if node.length + 1 > best {
                        best = node.length + 1;
                        queue.retain(|x| x.potential > best);
                    }
                }
            }
        }
        best
    }

    fn greedy(cumsums: &[i64], min: i64) -> i32 {
        let mut min = min;
        let mut count: i32 = 0;
        let mut prev = 0;
        for &s in cumsums {
            let v = s - prev;
            if v >= min {
                min = v;
                prev = s;
                count += 1;
            }
        }
        count
    }

    fn to_cumsum(nums: &[i32]) -> Vec<i64> {
        let mut sum: i64 = 0;
        let mut cumsums = Vec::with_capacity(nums.len());
        for &x in nums {
            sum += (x as i64);
            cumsums.push(sum);
        }
        return cumsums;
    }
}
```