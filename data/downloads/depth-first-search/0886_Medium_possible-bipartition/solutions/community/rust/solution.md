# [Rust] O(n + |dislikes|) union-find with explanations. (16 ms, faster than 100%.)

**Author:** marccarre
**Votes:** 2
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/656767/](https://leetcode.com/problems/possible-bipartition/solutions/656767/)

---

#### Solution

```rust
const A: usize = 0;
const B: usize = 1;

impl Solution {
    /**
     * Approach: \xE0-l\xE0 "union-find", i.e. form & check groups as we iterate over "dislike" relationships.
     * Runtime complexity: O(n + dislikes.len())
     * Space complexity: O(n) -- allocated once, and allowing direct access.
     */
    pub fn possible_bipartition(n: i32, dislikes: Vec<Vec<i32>>) -> bool {
        let n = (n + 1) as usize; // Thank you Leetcode, for these rubbish method signatures!

        // Initially, each node dislikes itself:
        let mut disliked_by = Vec::with_capacity(n);
        for i in 0..n {
            disliked_by.push(i);
        }

        for dislike in dislikes.iter() {
            let (a, b) = (dislike[A] as usize, dislike[B] as usize);
            if disliked_by[a] == a && disliked_by[b] == b {
                // Initial case, mark "b" as disliked by "a", and vice-versa:
                disliked_by[a] = b;
                disliked_by[b] = a;
            } else if disliked_by[a] == a && disliked_by[b] != b {
                // Initial case for "a" only, we mark "b" as disliked by "a" by:
                // - finding who is disliked by "b", let's call it "c",
                // - finding who is disliked by "c", and
                // - disliking them.
                // I.e.: "The enemy of my enemy is my friend."
                disliked_by[a] = disliked_by[disliked_by[b]];
            } else if disliked_by[b] == b && disliked_by[a] != a {
                // Initial case for "b" only -- same as above:
                disliked_by[b] = disliked_by[disliked_by[a]];
            } else if disliked_by[b] == disliked_by[a] {
                // If someone dislikes both "a" and "b", then there is no bi-partition of the graph:
                return false;
            }
        }
        true
    }
}
```

#### Performance

> Runtime: 16 ms, faster than 100.00% of Rust online submissions for Possible Bipartition.
> Memory Usage: 2.6 MB, less than 100.00% of Rust online submissions for Possible Bipartition.

N.B.: [that other solution](https://leetcode.com/problems/possible-bipartition/discuss/654915/Rust-O(orVor%2BorEor)-graph-colouring-using-recursive-DFS-with-explanations.) should be optimal for very large graphs, but appears slower given the current Leetcode benchmark. The above solution currently performs best as it only uses direct access on a `vec` and doesn't suffer from the overhead of `HashMap`s.
