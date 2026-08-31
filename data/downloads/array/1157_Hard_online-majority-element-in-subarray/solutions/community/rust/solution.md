# Rust | 82ms | 100% | random

**Author:** user7454af
**Votes:** 1
**Link:** [https://leetcode.com/problems/online-majority-element-in-subarray/solutions/5609823/](https://leetcode.com/problems/online-majority-element-in-subarray/solutions/5609823/)

---

# Intuition
Randomly pick an element in range and check if occurs threshold times.

# Approach
For each number present in the array, store all the indices it occurs in. In the input range pick a random index, binary search indices of number in that index to find how many indices fall within `[left, right]`, if the count exceed threshold return that number else check it few `times` and no such number exists return `-1`.

For number appearing more than `n/2` times in an array, the probability of finding that number at any random index is `>= 0.5`, so probability of not finding that number is $$1/2^{times}$$. If we make $$times=log(n)$$, the probability of not finding the majority element goes to $$1/n$$. For a given large `n`, this will be close to zero.

# Complexity
- Time complexity: $$O(n)$$ for building, $$O(logn)$$ per query.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashMap;
struct MajorityChecker {
    arr: Vec<i32>,
    indices: HashMap<i32,Vec<usize>>,
    times: usize,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MajorityChecker {

    fn new(arr: Vec<i32>) -> Self {
        let mut times = 0;
        while (1 << times) < arr.len() {
            times += 1;
        }
        let mut indices = HashMap::new();
        for (i, &n) in arr.iter().enumerate() {
            indices.entry(n).or_insert(Vec::new()).push(i);
        }
        Self {
            arr, indices, times
        }
    }
    
    fn query(&self, left: i32, right: i32, threshold: i32) -> i32 {
        let (left, right) = (left as usize, right as usize);
        let diff = right - left + 1;
        let threshold = threshold as usize;
        for _ in 0..self.times {
            let index = (rand::random::<usize>() % (diff) + left);
            let num = self.arr[index];
            let indices = self.indices.get(&num).unwrap();
            let l = match indices.binary_search(&left) {
                Ok(idx) => idx,
                Err(idx) => idx,
            };
            let r = match indices.binary_search(&right) {
                Ok(idx) => idx+1,
                Err(idx) => idx,
            };
            if r - l >= threshold {
                return num;
            }
        }
        -1
    }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * let obj = MajorityChecker::new(arr);
 * let ret_1: i32 = obj.query(left, right, threshold);
 */
```