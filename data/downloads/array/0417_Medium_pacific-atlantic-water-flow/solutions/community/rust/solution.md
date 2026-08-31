# Rust | Iterative DFS | With Comments

**Author:** wallicent
**Votes:** 3
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/2508448/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/2508448/)

---

This is a graph problem - find all nodes that can reach the ocean by a series of directed edges going from nodes to 4-connected neighbor nodes with lower or equal height. Nodes bordering the ocean can always reach the ocean. So by reversing the edges we can trace our way back to all the nodes that can reach the ocean by doing a BFS or DFS from the border nodes.

My thoughts when doing the solution:
* I use an enum for the state of the nodes in the `visited` matrix. Much nicer for anyone reading the code than having e.g. integers with magic values.
* The initial nodes are added to the stack using chained iterators over the border nodes. You have got to love that about Rust.
* I prefer DFS here since I like the shorter `if let Some(...) = stack.pop()` condition than the two lines of `while !q.is_empty() { for _ in 0..q.len()` for a BFS (and I don't have to `use` a `VecDeque` :) ).
* I use the trick `[0, 1, 0, !0, 0].windows(2)` to get the deltas to the neighbors (`x.wrapping_add(!0) == x.wrapping_sub(1)`). And with the wrapping, I can do the very concise bounds checking `r < m && c < n` which returns false if I have overstepped any of the edges.
* `[r as _, c as _]`: the types of the vector elements are given anyway, since the return type is specified as `Vec<Vec<i32>>`. No need to overspecify types. This way, the code doesn't have to change if the return type changes.

After doing my implementation, I checked the reference solution, where they compile a boolean grid for each of the BFSs/DFSs, and then compute the intersection of those grids with a O(m * n) iteration. That might be what you do it in big-O land, since it doesn't impact neither big-O time nor space complexity. But I don't think that's a good way of doing it. I instead use a single grid that I first use to keep track of nodes visited in the "Atlantic" search. I keep the grid for the "Pacific" search, and add all the nodes I encounter as reachable that are marked as "Atlantic" to the result, Less memory used, and less time spent on iteration.

```
#[derive(Copy, Clone, PartialEq)]
enum Reaches {
    Unknown,
    Atlantic,
    Pacific,
}

impl Solution {
    pub fn pacific_atlantic(heights: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let (m, n) = (heights.len(), heights[0].len());
        let mut visited = vec![vec![Reaches::Unknown; n]; m];
        let mut stack: Vec<_> = (0..m).map(|r| (r, n-1, 0)).chain((0..n-1).map(|c| (m-1, c, 0))).collect();
        while let Some((r, c, h)) = stack.pop() {
            if r < m && c < n && visited[r][c] != Reaches::Atlantic && h <= heights[r][c] {
                visited[r][c] = Reaches::Atlantic;
                for w in [0, 1, 0, !0, 0].windows(2) {
                    stack.push((r.wrapping_add(w[0]), c.wrapping_add(w[1]), heights[r][c]));
                }
            }
        }

        let mut rez = vec![];
        stack = (0..m).map(|r| (r, 0, 0)).chain((1..n).map(|c| (0, c, 0))).collect();
        while let Some((r, c, h)) = stack.pop() {
            if r < m && c < n && visited[r][c] != Reaches::Pacific && h <= heights[r][c] {
                if visited[r][c] == Reaches::Atlantic {
                    rez.push(vec![r as _, c as _]);
                }
                visited[r][c] = Reaches::Pacific;
                for w in [0, 1, 0, !0, 0].windows(2) {
                    stack.push((r.wrapping_add(w[0]), c.wrapping_add(w[1]), heights[r][c]));
                }
            }
        }
        rez
    }
}
```

And for those of you that don't like the code duplication, here is a version with the DFS as a lambda (although I think it becomes harder to read, and adds some ugliness since the lambda has to accomodate for both of the DFS rounds).

```
#[derive(Copy, Clone, PartialEq)]
enum Reaches {
    Unknown,
    Atlantic,
    Pacific,
}

impl Solution {
    pub fn pacific_atlantic(heights: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let (m, n) = (heights.len(), heights[0].len());
        let mut visited = vec![vec![Reaches::Unknown; n]; m];
        let mut rez = vec![];

        let mut dfs = |cond: Reaches
            , mut stack: Vec<(usize, usize, i32)>
            , payload: fn(usize, usize, Reaches, &mut Vec<Vec<i32>>)| {
            while let Some((r, c, h)) = stack.pop() {
                if r < m && c < n && visited[r][c] != cond && h <= heights[r][c] {
                    payload(r, c, visited[r][c], &mut rez);
                    visited[r][c] = cond;
                    for w in [0, 1, 0, !0, 0].windows(2) {
                        stack.push((r.wrapping_add(w[0]), c.wrapping_add(w[1]), heights[r][c]));
                    }
                }
            }
        };


        let stack: Vec<_> = (0..m).map(|r| (r, n-1, 0)).chain((0..n-1).map(|c| (m-1, c, 0))).collect();
        dfs(Reaches::Atlantic, stack, |_, _, _, _| () );
        let stack = (0..m).map(|r| (r, 0, 0)).chain((1..n).map(|c| (0, c, 0))).collect();
        dfs(Reaches::Pacific, stack, |r, c, reaches, rez| 
            if reaches == Reaches::Atlantic { rez.push(vec![r as _, c as _]) } );

        rez
    }
}
```