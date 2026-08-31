# Fairly Straightforward Segment Tree Solution with Explanation

**Author:** leodamsky
**Votes:** 1
**Link:** [https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/2106782/](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/2106782/)

---

To solve this problem, we need to be able:
1. Quickly check if there is a single row with enough seats to "gather".
2. Quickly check if there are multiple consecutive rows with enough seats to "scatter".
3. Be able to reserve seats.

All these operations are supported by the segment tree. A segment tree is a binary tree where leaf nodes correspond to non-aggregated items (the input) while the parent nodes store aggregated data (`min()`, `max()`, `sum()` of leaf nodes). In our case we need `max()` and `sum()` aggregations:
* A segment tree that sums free row seats can answer whether we can "scatter". We always scatter from the first row that has at least 1 available seat, so we can maintain an index of such a row, and increment it when the row has been completely booked i.e. deleted.
* A segment tree that takes maximum of row seats can answer whether a subtree has at least one row with at least k available seats. We can run a binary search to get the row ID. If both subtrees have a row with enough seats, we prefer the left one because it has lower indices, which we should prefer according to the problem definition.
* Both segment trees support mutation of a single row in a O(log n) time. Update the leaf node first, then synchronize all dependent parent nodes.

```rust
struct BookMyShow {
    m: usize,
    // scatter() books seats from the beginning,
    // so the first row is the one that has > 0 seats
    // given the deleted rows count, we get the first non-deleted row to start scattering
    deleted: usize,
    tree: SegTree,
}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl BookMyShow {

    fn new(n: i32, m: i32) -> Self {
        let n = n as usize; // rows
        let m = m as usize; // seats
        
        BookMyShow {
            m,
            deleted: 0, // no rows have been deleted (completely booked)
            tree: SegTree::new(n, m),
        }
    }
    
    // O(log n)
    fn gather(&mut self, k: i32, max_row: i32) -> Vec<i32> {
        let k = k as usize;
        let max_row = max_row as usize;
        
        if self.m < k {
            return vec![];
        }

        if let Some(row) = self.tree.max(k, max_row) { // O(log n)
            let free = self.tree.get(row); // O(1)
            self.reserve_seats(row, free, k); // O(log n)
            vec![row as i32, (self.m - free) as i32]
        } else {
            vec![]
        }
    }
    
    // O(log n)
    // O(mn log n) in total if k = 1 because there will be m * n calls to this method
    // the higher k the better. If k = m, then the running time is O(n log n)
    fn scatter(&mut self, k: i32, max_row: i32) -> bool {
        let mut k = k as usize;
        let max_row = max_row as usize;
        
        if self.m * (max_row + 1) < k {
            return false;
        }
        
        // O(log n)
        let free = self.tree.sum(max_row);
        if free < k {
            return false;
        }

        // O(log n)
        // if k <= free, there will be one tree update, so O(log n)
        // if k > free, a row is "deleted" and excluded from futher scatter() calls
        // there can be deleted at most n rows, after which this part of code can't be reached
        while k > 0 {
            let free = self.tree.get(self.deleted); // O(1)
            let to_delete = k.min(free);
            self.reserve_seats(self.deleted, free, to_delete); // O(log n)
            k -= to_delete;
        }
        
        true
    }

    // O(log n)
    fn reserve_seats(&mut self, row: usize, free: usize, seats: usize) {
        self.tree.set(row, free - seats); // O(log n)
        if free - seats == 0 {
            self.deleted += 1;
        }
    }
}

#[derive(Debug)]
struct SegTree {
    /// The number of input elements + zero padding. A power of two.
    n: usize,
    /// The first leaf index.
    offset: usize,
    sum_tree: Vec<usize>,
    max_tree: Vec<usize>,
}

impl SegTree {
    // O(n)
    fn new(n: usize, m: usize) -> SegTree {
        // the closest to n power of two to build up a binary tree
        let degree = (n as f64).log2().ceil() as u32;
        // the number of the leaves in the segment tree with zero padding
        // e.g. 3 -> 4, 6 -> 8, 11 -> 16
        let leaves = 2_usize.pow(degree);
        // tree nodes (excluding leaves) take up n - 1 space
        let tree_size = 2 * leaves - 1;
        // index of the first leaf
        let offset = leaves - 1;

        let mut sum_tree = vec![0; tree_size];
        let mut max_tree = vec![0; tree_size];
        // fill leaves
        for i in offset..(offset + n) {
            sum_tree[i] = m;
            max_tree[i] = m;
        }
        // updates nodes
        for i in (0..offset).rev() {
            sum_tree[i] = sum_tree[i * 2 + 1] + sum_tree[i * 2 + 2];
            max_tree[i] = max_tree[i * 2 + 1].max(max_tree[i * 2 + 2]);
        }

        SegTree {
            n: leaves,
            offset,
            sum_tree,
            max_tree,
        }
    }
    
    // O(log n)
    fn set(&mut self, mut i: usize, value: usize) {
        i += self.offset;
        
        self.sum_tree[i] = value;
        self.max_tree[i] = value;

        // update dependent nodes
        while i > 0 {
            i = (i - 1) / 2;
            self.sum_tree[i] = self.sum_tree[i * 2 + 1] + self.sum_tree[i * 2 + 2];
            self.max_tree[i] = self.max_tree[i * 2 + 1].max(self.max_tree[i * 2 + 2]);
        }
    }
    
    // O(1)
    fn get(&self, i: usize) -> usize {
        self.sum_tree[self.offset + i]
    }

    // O(log n)
    fn sum(&self, max_row: usize) -> usize {
        fn recurse(tree: &[usize], node: usize, i: usize, j: usize, rng_i: usize, rng_j: usize) -> usize {
            if j - i == rng_j - rng_i {
                return tree[node];
            }

            let half = (i + j) / 2;
            let left = if rng_i < half {
                recurse(tree, node * 2 + 1, i, half, rng_i, rng_j.min(half))
            } else {
                0
            };
            let right = if rng_j > half {
                recurse(tree, node * 2 + 2, half, j, rng_i.max(half), rng_j)
            } else {
                0
            };

            left + right
        }

        recurse(&self.sum_tree, 0, 0, self.n, 0, max_row + 1)
    }

    // O(log n)
    /// Find an index of the least free row that can accomodate [k] more seats.
    /// Recursively:
    /// 1. Pick either left or right subtree based on max free seats count. If the left subtree has enough seats, we don't need to check the right one because the left one has lower rows, which we should prefer. Otherwise, we skip the left one and check the right subtree. This test is done in O(1) time.
    /// 2. Continue picking subtrees O(log n) times until a node with the lowest index is found.
    fn max(&self, k: usize, max_row: usize) -> Option<usize> {
        fn recurse(tree: &[usize], offset: usize, k: usize, node: usize, i: usize, j: usize, rng_i: usize, rng_j: usize) -> Option<usize> {
            if tree[node] < k {
                return None;
            }
            if node >= offset {
                return Some(node);
            }

            let half = (i + j) / 2;
            
            let left = if rng_i < half {
                recurse(tree, offset, k, node * 2 + 1, i, half, rng_i, rng_j.min(half))
            } else {
                None
            };
            if left.is_some() {
                return left;
            }

            let right = if rng_j > half {
                recurse(tree, offset, k, node * 2 + 2, half, j, rng_i.max(half), rng_j)
            } else {
                None
            };

            right
        }

        recurse(&self.max_tree, self.offset, k, 0, 0, self.n, 0, max_row + 1)
            .map(|i| i - self.offset) // convert to external non-tree index
    }
}
```

The segment tree is stored as an array where the `k`th parent node corresponds to `2 * k + 1` and `2 * k + 2` children. The root is at the index `0`.