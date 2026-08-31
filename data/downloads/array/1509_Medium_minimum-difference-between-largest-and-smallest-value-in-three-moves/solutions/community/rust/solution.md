# [Rust] 0ms, track four largest and smallest

**Author:** tiedyedvortex
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406036/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406036/)

---

# Intuition
It will always be optimal to change either the largest or smallest element in nums. However, we don't know which is optimal.

But, this means there are only four possible paths:
* Change the top 3 largest values
* Change the top 2 largest and 1 smallest
* Change the largest and 2 smallest
* Change the 3 smallest

In any case, the remaining different will be between the remaining smallest and the remaining largest.

So, if we know the (0th, 1st, 2nd, and 3rd) smallest, and the (n-4th, n-3rd, n-2nd, n-1st) largest, then the result will be the best out of (n-4th minus 0th), (n-3rd - 1st), (n-2nd - 2nd), or (n-1st minus 3rd).

# Approach
To avoid heap allocations, keep a size 4 array of the four smallest and largest, and just do an elementwise comparison and insert. 

Initialize these arrays with i32::MIN and i32::MAX to ensure they get "pushed out". As an edge case, make sure that if nums has 4 or fewer elements that we early-exit.

# Complexity
- Time complexity: O(n), we have to read every value in nums but we do not sort them.

- Space complexity: O(1), we use finite working memory.

# Code
```
impl Solution {
    pub fn min_difference(nums: Vec<i32>) -> i32 {
        if nums.len() <= 4 {
            // Can change all values to be the same
            return 0;
        }
        let mut four_smallest = [i32::MAX; 4];
        let mut four_largest = [i32::MIN; 4];

        for num in nums {
            if num <= four_smallest[0] {
                four_smallest = [num, four_smallest[0], four_smallest[1], four_smallest[2]];
            } else if num <= four_smallest[1] {
                four_smallest = [four_smallest[0], num, four_smallest[1], four_smallest[2]];
            } else if num <= four_smallest[2] {
                four_smallest = [four_smallest[0], four_smallest[1], num, four_smallest[2]];
            } else if num <= four_smallest[3] {
                four_smallest = [four_smallest[0], four_smallest[1], four_smallest[2], num];
            }

            if num >= four_largest[3] {
                four_largest = [four_largest[1], four_largest[2], four_largest[3], num];
            } else if num >= four_largest[2] {
                four_largest = [four_largest[1], four_largest[2], num, four_largest[3]];
            } else if num >= four_largest[1] {
                four_largest = [four_largest[1], num, four_largest[2], four_largest[3]];
            } else if num >= four_largest[0] {
                four_largest = [num, four_largest[1], four_largest[2], four_largest[3]];
            }
        }
        four_largest.into_iter().zip(four_smallest.into_iter()).map(|(big, little)| big - little).min().unwrap()
    }
}
```