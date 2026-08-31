# Rust Sort & BinaryHeap

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2463598/](https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2463598/)

---

~~~
use std::collections::BinaryHeap;

impl Solution {
    pub fn k_sum(nums: Vec<i32>, k: i32) -> i64 {
        let mut sum = 0i64;
        let n = nums.len();
        let mut data = vec![];
        
        for a in nums { 
            if a > 0 { sum += a as i64; }
            data.push(i64::abs(a as i64));
        }
        data.sort();
        
        let mut pq = BinaryHeap::<(i64, usize)>::new();
        let mut ret = sum;
        
        pq.push((-data[0], 0));
        for _ in 2..=k {
            let (val, i) = pq.pop().unwrap(); 
            ret = sum + val;
            if i == n - 1 { continue; }
            pq.push((val - data[i + 1], i + 1));
            pq.push((val + data[i] - data[i + 1], i + 1));
        }
        
        ret
    }
}
~~~