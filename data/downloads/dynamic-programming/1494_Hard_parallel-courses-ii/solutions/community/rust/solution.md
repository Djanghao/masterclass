# Rust BFS solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses-ii/solutions/5376673/](https://leetcode.com/problems/parallel-courses-ii/solutions/5376673/)

---

BFS works like a bottom-up DP approach, where "visited" "state" (a bitmask of what courses are taken) will not be added to any `Vec` again.

Each "state" will be computed only twice. (once for choosing more courses in the same semester, and then once more for the start of next semester).

# Complexity
- Time complexity: $$O(n * 2^n)$$

- Space complexity: $$O(2^n)$$

# Code
```
use std::mem::swap;

impl Solution {
    pub fn min_number_of_semesters(n: i32, relations: Vec<Vec<i32>>, k: i32) -> i32 {
        let n = n as usize;
        let mut req = vec![0usize; n];
        for v in relations.iter() {
            req[v[1] as usize - 1] |= 1 << (v[0] - 1);
        }

        let mut visited = vec![false; 1 << n];
        let start: usize = (1 << n) - 1;
        visited[start] = true;
        let mut v = vec![(start, start)];
        let mut next_round = Vec::<(usize, usize)>::new();
        let mut next_sem = Vec::<(usize, usize)>::new();
        for sem in 1.. {
            for _ in 0..k {
                // "ori" means the original state at the start of semester.
                // , and "state" marks the courses being chosen in this semester.
                for (ori, state) in v.drain(..) {
                    for i in 0..req.len() {
                        if state & (1 << i) != 0
                        && !visited[state ^ (1 << i)]
                        && ori & req[i] == 0 {
                            let state2 = state ^ (1 << i);
                            if state2 == 0 {
                                return sem;
                            }
                            visited[state2] = true;
                            next_round.push((ori, state2));
                            next_sem.push((state2, state2));
                        }
                    }
                }
                swap(&mut v, &mut next_round);
            }
            v.clear();
            std::mem::swap(&mut v, &mut next_sem);
        }
        unreachable!()
    }
}
```