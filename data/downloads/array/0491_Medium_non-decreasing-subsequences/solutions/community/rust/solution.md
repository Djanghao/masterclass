# IDK

**Author:** tdf56f756bg56r8iohgwexu
**Votes:** 2
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/3078026/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/3078026/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Generate all permutations ~~With two or more elements~~ that follow a non-decreasing order and store them in a array without duplicates.

# Approach
<!-- Describe your approach to solving the problem. -->
Utilize bitmasking to iterate over the array for all permutations.
https://youtu.be/xXKL9YBWgCY
HashSet to remove duplicates :)
# Code
```
impl Solution {
    pub fn find_subsequences(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result: std::collections::HashSet<Vec<i32>> = std::collections::HashSet::new();

        for bit in 0..(1 << nums.len()) {
            let mut permutation: Vec<i32> = vec![];

            for index in 0..nums.len(){
                if (bit & (1 << index)) <= 0 { continue;}
                if permutation.len() != 0 && nums[index] < *permutation.last().unwrap() { continue; }
                permutation.push(nums[index]);
            }

            if permutation.len() < 2 { continue; }
            result.insert(permutation);
        }
        result.into_iter().collect()
    }
}
```