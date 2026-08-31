# Rust | Line Sweep

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-area-ii/solutions/3939332/](https://leetcode.com/problems/rectangle-area-ii/solutions/3939332/)

---

# Approach

Choose all possible sweep lines, and calculate the sum of covered areas between each adjacent sweep line.

This turns the problem into an interval merging problem, which can be solved greedily.

# Complexity
- Time complexity:
$$O(n^2 \\log n)$$

- Space complexity:
$$O(n)$$

# Code
```rust
pub fn merge_intervals(
    mut interval_vec: Vec<[usize; 2]>,
) -> Vec<[usize; 2]> {
    interval_vec.sort_unstable();
    interval_vec.dedup();

    let mut stack = vec![];

    for [t0, t1] in interval_vec {
        if stack.is_empty() {
            stack.push([t0, t1]);
            
            continue;
        }

        let [t0_prev, t1_prev] = stack.pop().unwrap();
        if t1_prev < t0 {
            stack.push([t0_prev, t1_prev]);
            stack.push([t0, t1]);
            
            continue;
        }

        stack.push([t0_prev, t1_prev.max(t1)]);
    }

    stack
}

const MOD: usize = 1_000_000_007;

impl Solution {
    pub fn rectangle_area(rect_vec: Vec<Vec<i32>>) -> i32 {
        let rect_vec = rect_vec.into_iter()
            .filter(|v| v.len() == 4)
            .map(|v| {
                v.into_iter()
                    .map(|e| e as usize)
                    .collect::<Vec<_>>()
            })
            .map(|v| [[v[0], v[1]], [v[2], v[3]]])
            .collect::<Vec<_>>();

        let mut line_sweep_vec = vec![];
        for &[[_, y0], [_, y1]] in &rect_vec {
            line_sweep_vec.push(y0);
            line_sweep_vec.push(y1);
        }
        line_sweep_vec.sort_unstable();
        line_sweep_vec.dedup();

        let mut ret = usize::MIN;

        for (&line_prev, &line) in line_sweep_vec.iter()
            .zip(line_sweep_vec.iter().skip(1)) {
            let mut x_vec = vec![];
            for &[coord_0, coord_1] in &rect_vec {
                if coord_0[1] >= line { continue; }
                if coord_1[1] < line { continue; }

                x_vec.push([coord_0[0], coord_1[0]]);
            }
            let x_vec = merge_intervals(x_vec);

            let mut _ret = usize::MIN;
            for [t0, t1] in x_vec {
                _ret += t1;
                _ret -= t0;
                _ret %= MOD;
            }
            
            _ret *= (line - line_prev);
            _ret %= MOD;

            ret += _ret;
            ret %= MOD;
        }

        ret as i32
    }
}
```