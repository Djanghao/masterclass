# Rust | Disjoint Set + Topological Sort

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/3880158/](https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/3880158/)

---

# Intuition

Convert this problem into a DAG problem, then use topological sort to get each cell's rank.

# Code
```
#[derive(Debug)]
pub struct DisjointSet {
    parents: Vec<Option<(usize, usize)>>,

    count: usize,
}

impl DisjointSet {
    pub fn new(n: usize) -> Self {
        let parents = vec![None; n];

        Self { parents, count: 0 }
    }

    pub fn init(&mut self, e: usize) {
        if e >= self.parents.len() {
            return;
        }
        if self.parents[e].is_some() {
            return;
        } // already initialized

        self.parents[e] = Some((e, 1));
        self.count += 1; // new representative
    }

    pub fn query(&mut self, e: usize) -> Option<(usize, usize)> {
        if e >= self.parents.len() {
            return None;
        }

        let (parent, rank) = self.parents[e]?; // uninitialized
        if parent == e {
            return Some((parent, rank));
        } // self-representative

        let (parent, rank) = self.query(parent)?;
        self.parents[e] = Some((parent, rank)); // path compression

        Some((parent, rank))
    }

    pub fn link(&mut self, e0: usize, e1: usize) {
        if let Some((p0, rank_0)) = self.query(e0) {
            if let Some((p1, rank_1)) = self.query(e1) {
                if p0 == p1 {
                    return;
                } // already linked

                // p1 is no longer a representative
                self.parents[p0] = Some((p0, rank_0 + rank_1));
                self.parents[p1] = Some((p0, rank_1));
                self.count -= 1;
            }
        }
    }

    pub fn len(&self) -> usize {
        self.count
    }
}

pub fn construct_vertices(
    grid: &Vec<Vec<i32>>
) -> (Vec<usize>, usize) {
    let (n, m) = (grid.len(), grid[0].len());

    let mut set = DisjointSet::new(n * m);
    for i in 0..(n * m) { set.init(i); }

    for i in 0..n {
        let row = grid[i].clone();
        let mut row = row.into_iter()
            .enumerate()
            .map(|(i, e)| (e, i))
            .collect::<Vec<_>>();
        row.sort_unstable();

        for j in 1..m {
            let (e0, j0) = row[j];
            let (e1, j1) = row[j - 1];

            if e0 != e1 { continue; }

            set.link(i * m + j0, i * m + j1);
        }
    }

    for j in 0..m {
        let mut col = (0..n).map(|i| grid[i][j]).collect::<Vec<_>>();
        let mut col = col.into_iter()
            .enumerate()
            .map(|(i, e)| (e, i))
            .collect::<Vec<_>>();
        col.sort_unstable();

        for i in 1..n {
            let (e0, i0) = col[i];
            let (e1, i1) = col[i - 1];

            if e0 != e1 { continue; }

            set.link(i0 * m + j, i1 * m + j);
        }
    }

    let mut idx_map = vec![];
    for i in 0..(n * m) {
        let (parent, _) = set.query(i).unwrap();
        idx_map.push(parent);
    }
    idx_map.sort_unstable();
    idx_map.dedup();

    let mut ret_0 = vec![];
    for i in 0..(n * m) {
        let (parent, _) = set.query(i).unwrap();
        let group_id = idx_map.binary_search(&parent).unwrap();
        ret_0.push(group_id);
    }

    (ret_0, idx_map.len())
}

pub fn to_graph(
    grid: Vec<Vec<i32>>,
    id_vec: &Vec<usize>,
    id_count: usize,
) -> Vec<Vec<usize>> {
    let (n, m) = (grid.len(), grid[0].len());

    let row_search_vec = (0..n)
        .map(|i| {
            let mut vec = (0..m)
                .map(|j| (grid[i][j], j))
                .collect::<Vec<_>>();
            vec.sort_unstable();
            vec
        })
        .collect::<Vec<_>>();

    let col_search_vec = (0..m)
        .map(|j| {
            let mut vec = (0..n)
                .map(|i| (grid[i][j], i))
                .collect::<Vec<_>>();
            vec.sort_unstable();
            vec
        })
        .collect::<Vec<_>>();

    let mut ret = vec![vec![]; id_count];

    for i in 0..n {
        for j in 0..m {
            let id = id_vec[i * m + j];
            let e = grid[i][j];
            
            let ptr = row_search_vec[i].partition_point(
                |&(e0, _)| e0 <= e
            );
            if ptr < m {
                let (_, j_next) = row_search_vec[i][ptr];
                let id_next = id_vec[i * m + j_next];
                ret[id_next].push(id);
            }

            let ptr = col_search_vec[j].partition_point(
                |&(e0, _)| e0 <= e
            );
            if ptr < n {
                let (_, i_next) = col_search_vec[j][ptr];
                let id_next = id_vec[i_next * m + j];
                ret[id_next].push(id);
            }
        }
    }

    ret
}

#[derive(Clone)]
enum DPStates {
    None,
    Pending,
    Some(usize),
}

pub struct InDegreeDP {
    graph: Vec<Vec<usize>>,
    n: usize,

    memo: Vec<DPStates>,
}

impl InDegreeDP {
    pub fn new(graph: Vec<Vec<usize>>) -> Self {
        let n = graph.len();
        let memo = vec![DPStates::None; n];
        Self { graph, n, memo }
    }

    pub fn solve(&mut self, v: usize) -> Option<usize> {
        if v >= self.n { return None; }
        match self.memo[v] {
            DPStates::Some(ret) => { return Some(ret); },
            DPStates::Pending => { return None; },
            _ => {},
        }

        self.memo[v] = DPStates::Pending;
        let ret = self.solve_inner(v)?;
        self.memo[v] = DPStates::Some(ret);
        Some(ret)
    }

    fn solve_inner(&mut self, v: usize) -> Option<usize> {
        let mut ret = usize::MIN;
        for v_next in self.graph[v].clone() {
            ret = ret.max(self.solve(v_next)? + 1);
        }
        Some(ret)
    }
}

impl Solution {
    pub fn matrix_rank_transform(grid: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let (n, m) = (grid.len(), grid[0].len());

        let (id_vec, id_count) = construct_vertices(&grid);
        // println!("id_vec: {:?}, n={}", id_vec, id_count);

        let graph = to_graph(
            grid, &id_vec, id_count,
        );
        // println!("graph: {:?}", graph);

        let mut indeg_dp = InDegreeDP::new(graph);
        let indeg_vec = (0..id_count)
            .map(|i| indeg_dp.solve(i).unwrap())
            .collect::<Vec<_>>();
        // println!("indeg: {:?}", indeg_vec);

        (0..n)
            .map(|i| {
                (0..m)
                    .map(|j| {
                        let id = id_vec[i * m + j];
                        indeg_vec[id] as i32 + 1
                    })
                    .collect::<Vec<_>>()
            })
            .collect::<Vec<_>>()
    }
}
```