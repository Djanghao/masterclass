# Rust Priority Queue Solution

**Author:** ahdkaouk
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes/solutions/2558049/](https://leetcode.com/problems/campus-bikes/solutions/2558049/)

---

```rust
impl Solution {
    pub fn assign_bikes(workers: Vec<Vec<i32>>, bikes: Vec<Vec<i32>>) -> Vec<i32> {
        let mut workers_dist: Vec<Vec<(i32, usize)>> = vec![];
        let mut res: Vec<i32> = vec![-1; workers.len()];
        let mut bikes_status = vec![false; bikes.len()];
        let mut pq = BinaryHeap::new();

        workers.iter().enumerate().for_each(|(w_idx, w)| {
            let mut distances = vec![];
            bikes.iter().enumerate().for_each(|(b_idx, b)| {
                let dist = (w[0] - b[0]).abs() + (w[1] - b[1]).abs();
                distances.push((dist, b_idx));
            });
            distances.sort();
            distances.reverse();
            let (distance, bike) = distances.pop().unwrap();
            workers_dist.push(distances);
            pq.push(Reverse((distance, w_idx, bike)));
        });

        while let Some(Reverse((_, worker, bike))) = pq.pop() {
            if !bikes_status[bike] {
                res[worker] = bike as i32;
                bikes_status[bike] = true;
            } else {
                let (distance, bike) = workers_dist[worker].pop().unwrap();
                pq.push(Reverse((distance, worker, bike)));
            }
        }
        res
    }
}

```