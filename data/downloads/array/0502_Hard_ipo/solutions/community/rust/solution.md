# Basic solution using Sort, Binary Search & Max Heap

**Author:** dvishal485
**Votes:** 2
**Link:** [https://leetcode.com/problems/ipo/solutions/3222362/](https://leetcode.com/problems/ipo/solutions/3222362/)

---

# Intuition
We need is to filter out the jobs which can be done i.e. the job which requires a `capital_req <= w`. From this we need to do the most profitable job and add our profit into `w`. We will be doing this `k` times or less (in case filter matches none of the jobs).

# Approach
1. Zip the `capital` and `profits`, and collect them in a vector of tuple.
2. Sort this by comparing the capital (so we can perform something like binary search to get all the jobs with `capital_req <= w`). (Now capital will be our Available slice)
3. Do a binary search to obtain the index `slice` such that `capital[slice] <= w` and split the vector into 2 parts : Working slice (`capital <= w`) and Available slice (`capital > w`).
4. Push all the elements from the working slice into Binary heap (max heap).
5. Get the maximum profitable job from the heap and add its profit into `w`. And if there is no such job ( heap is empty ), we can simply return our answer as we have reached state where we don't have enough capital to start a new job.
6. Perform all the steps 3 to 5 with updated value of `w` and we will be doing this `k` times as the question asks us to do atmost `k` jobs.
7. At the end of the loop, you will have your final value of `w` which is the required maximized capital.

# Complexity
- Time complexity:
Linear scan to vectorize zip $$O(n)$$ + Sorting $$O(nlogn)$$ + k Binary Searchs Capital Slice $$O(klogn)$$ + Atmost n pushes in heap ~$$O(n)$$ + k pops from heap $$O(klogn)$$
which evaluates to

    $$O(nlog(n) + klog(n))$$ ~= $$O(nlog(n))$$

    The solution submitted in Rust took me `25 ms` and beats 100%

- Space complexity:
Tuple Vector + Binary Heap
$$O(n)$$

# Code
```rust
use std::collections::BinaryHeap;

impl Solution {
    pub fn find_maximized_capital(k: i32, mut w: i32, profits: Vec<i32>, capital: Vec<i32>) -> i32 {
        let mut worker = capital
            .into_iter()
            .zip(profits.into_iter())
            .collect::<Vec<_>>();
        worker.sort_unstable_by(|&(captial_1, _), (captial_2, _)| captial_1.cmp(&captial_2));

        let mut available = &worker[..];
        let mut heap = BinaryHeap::new();
        for _ in 0..k {
            let slice = available.partition_point(|&(cap, _)| cap <= w);
            let working_slice = &available[..slice];
            available = &available[slice..];
            for &(_, prof) in working_slice {
                heap.push(prof);
            }
            if let Some(prof) = heap.pop() {
                w += prof;
            } else {
                break;
            }
        }
        w
    }
}
```