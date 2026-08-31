# [Rust] Two hashmaps and a vec

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/3580778/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/3580778/)

---

`add` requires that we know the value of `nums2` at `index` so we have to store the whole array.

But to actually compute `count`, we only actually care about the frequencies of each distinct value in each of `nums1` and `nums2`. So we don't actually care about the ordering of `nums1` at all, and can just store it as a hashmap.

Storing `nums2` and `nums1_counts` would be sufficient to compute a solution. However, if `nums2` has a large number of duplicate values, we end up doing a lot of extra hashes. So, we can store `nums2_counts` as well as `nums1_counts`, keeping it up-to-date as we call `add`, and iterate over `nums2_counts` whenever `count` is called.

# Complexity
- Time complexity: `add` is O(1), and `count` is O(k) where k is the number of distinct values in `nums2`. In the worst case this is O(nums2.len()).

- Space complexity: O(nums1.len() + nums2.len()) since we have to store a hashmap of both vectors. 

# Code
```
use std::collections::HashMap;
struct FindSumPairs {
    nums1_counts: HashMap<i32, i32>,
    nums2_counts: HashMap<i32, i32>,
    nums2: Vec<i32>,
}

impl FindSumPairs {

    fn new(nums1: Vec<i32>, nums2: Vec<i32>) -> Self {
        let nums1_counts = nums1
        .into_iter()
        .fold(HashMap::new(), |mut nums1_counts, num1| {
            *nums1_counts.entry(num1).or_default() += 1;
            nums1_counts
        });

        let nums2_counts = nums2
        .iter()
        .fold(HashMap::new(), |mut nums2_counts, &num2| {
            *nums2_counts.entry(num2).or_default() += 1;
            nums2_counts
        });

        Self {
            nums1_counts,
            nums2_counts,
            nums2
        }
    }
    
    fn add(&mut self, index: i32, val: i32) {
        let old_val = self.nums2[index as usize];
        self.nums2[index as usize] += val;
        *self.nums2_counts.get_mut(&old_val).unwrap() -= 1;
        *self.nums2_counts.entry(old_val + val).or_default() += 1;
    }
    
    fn count(&self, tot: i32) -> i32 {
        self
        .nums1_counts
        .iter()
        .filter_map(|(&num1, &count1)| {
            self
            .nums2_counts
            .get(&(tot-num1))
            .map(|&count2| count1 * count2)
        }).sum()
    }
}
```