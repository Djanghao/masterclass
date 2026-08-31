# Rust | 30ms, Top-down DP+Binary Search

**Author:** soyflourbread
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-all-possible-routes/solutions/3681642/](https://leetcode.com/problems/count-all-possible-routes/solutions/3681642/)

---

# Intuition

Recursively compute the number of possible routes from source to destination by finding all possible next hops from that source.

# Approach

Cache the recursion results with dynamic programming. The key is `(src, fuel)`.

Finding possible next hops given the amount of fuel can be achieved faster by sorting city positions beforehand and using binary search on the sorted array. However, this does not improve its worse-case time complexity, which is still $O(n)$.

# Complexity

- Time complexity:
$$O(n^2 k)$$

- Space complexity:
$$O(nk)$$

# Code
```
const MOD: usize = 1_000_000_007;

pub struct DP {
    vec: Vec<u32>,
    dest: usize,
    max_fuel: u32,

    memo: Vec<Vec<Option<usize>>>,
}

impl DP {
    pub fn new(vec: Vec<u32>, dest: usize, max_fuel: u32) -> Self {
        let memo = vec![vec![None; max_fuel as usize + 1]; vec.len() + 1];

        Self { vec, dest, max_fuel, memo }
    }
}

impl DP {
    pub fn solve(&mut self, src: usize, fuel: u32) -> usize {
        if src > self.vec.len() { return 0; }
        if fuel > self.max_fuel { return 0; }

        if let Some(ret) = self.memo[src][fuel as usize] {
            return ret;
        }

        let ret = self.solve_inner(src, fuel);
        self.memo[src][fuel as usize] = Some(ret);
        ret
    }


    // Returns the number of possible routes
    //   from `src` to `dest` with `fuel` available fuel.
    // Results are cached in `memo`.
    fn solve_inner(&mut self, src: usize, fuel: u32) -> usize {
        let mut ret = 0usize;
        if src == self.dest { ret += 1; } // at least one way
        if fuel < 1 { return ret; }

        let cur_pos = self.vec[src];

        // Find the indices of possible next hops
        let l = self.vec.partition_point(|&v| v + fuel < cur_pos);
        let r = self.vec.partition_point(|&v| v <= cur_pos + fuel);

        for src_next in (l..r).filter(|&v| v != src) {
            // fuel_next guaranteed to be non-negative
            // u32::abs_diff is not in Rust 1.58
            let fuel_next = if self.vec[src_next] > self.vec[src] {
                self.vec[src_next] - self.vec[src]
            } else { self.vec[src] - self.vec[src_next] };
            let fuel_next = fuel - fuel_next;

            ret += self.solve(src_next, fuel_next);
            ret %= MOD;
        }

        ret
    }
}

impl Solution {
    // Sorts and simplifies input array.
    fn preproc(
        vec: Vec<i32>,
        src: usize, dest: usize,
        fuel: u32
    ) -> (Vec<u32>, usize, usize) {
        let src_val = vec[src].min(vec[dest]) as u32;
        let dest_val = vec[dest].max(vec[src]) as u32;

        if dest_val - src_val > fuel { return (vec![], 0, 0); }

        let mut vec = vec.into_iter()
            .map(|v| v as u32)
            .filter(|&v| v != src_val && v != dest_val)
            .filter(|&v| dest_val <= v + fuel)
            .filter(|&v| v <= src_val + fuel)
            .collect::<Vec<_>>();
        vec.push(src_val);
        if src_val != dest_val { vec.push(dest_val); }
        vec.sort_unstable();
        
        let src = vec.binary_search(&src_val).unwrap();
        let dest = vec.binary_search(&dest_val).unwrap();

        (vec, src, dest)
    }

    pub fn count_routes(
        vec: Vec<i32>,
        src: i32, dest: i32,
        fuel: i32)
    -> i32 {
        let (vec, src, dest) = Self::preproc(
            vec, src as usize, dest as usize, fuel as u32);
        if vec.is_empty() { return 0; }

        let mut dp = DP::new(vec, dest, fuel as u32);

        dp.solve(src, fuel as u32) as i32
    }
}
```