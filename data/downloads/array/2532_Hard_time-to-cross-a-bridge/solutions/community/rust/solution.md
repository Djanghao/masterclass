# Rust simulation with BinaryHeap X 2

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-to-cross-a-bridge/solutions/5768793/](https://leetcode.com/problems/time-to-cross-a-bridge/solutions/5768793/)

---

# Code
```Rust []
use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn find_crossing_time(mut n: i32, k: i32, time: Vec<Vec<i32>>) -> i32 {
        let priority = [0, 3, 1, 2];
        let mut workers: BinaryHeap<(i32, usize, i32, Vec<i32>)> =
            time.into_iter().enumerate()
            .map(|(i, v)| (0, 0, (v[0] + v[2]) * k + i as i32, v))
            .collect();
        let mut work = BinaryHeap::<(Reverse<i32>, i32, usize, i32, Vec<i32>)>::new();
        let (_priority, _task, rank, v) = workers.pop().unwrap();
        work.push((Reverse(v[0]), priority[0], 0, rank, v));
        let mut crossing = true;
        let mut crosses = n - 1;

        while let Some((Reverse(t), _priority, task, rank, v)) = work.pop() {
            let task2 = (task + 1) & 3;
            if task & 1 == 0 {
                crossing = false;
                if task == 2 {
                    n -= 1;
                    if n == 0 {
                        return t;
                    }
                }
                work.push((Reverse(t + v[task2]), priority[task2], task2, rank, v));
            }
            else {
                if task == 1 {
                    crosses += 1;
                }
                workers.push((priority[task2], task2, rank, v));
            }
            if !crossing && crosses != 0 {
                if let Some((_priority, task, rank, v)) = workers.pop() {
                    crosses -= 1;
                    work.push((Reverse(t + v[task]), priority[task], task, rank, v));
                    crossing = true;
                }
            }
        }
        unreachable!()
    }
}
```