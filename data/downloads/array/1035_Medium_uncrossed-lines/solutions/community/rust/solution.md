# 🦀 3 kinds of Dynamic Programming methods.

**Author:** liuliugit
**Votes:** 4
**Link:** [https://leetcode.com/problems/uncrossed-lines/solutions/3512628/](https://leetcode.com/problems/uncrossed-lines/solutions/3512628/)

---

# Intuition
When you see a dynamic programming problem solution, you usually feel confusely on how the solution been. Because Dynamic Programming is an iterative evolution progress. You can't just look at the problem and suddenly bump a best solution, ok maybe somebody can. But to me it is a progress need to think step by step.

Here I will show you what kind of methods I have been thought, and how to do the problem.

# Approach
Recursion && Dynamic Programming.

### Method 1 : Non-memoization recursion, TLE.
> This method use a non-memoization recursion. Too many duplicate steps been run repeatedly.

### Method 2 : 2D Dynamic Programming with Top Down.
> This problem has 2 conditions. One is `nums1[i] == nums2[j]` and another is `nums1[i] != nums2[j]`.
> We need to deal these 2 conditions seperately. You can find the proof of why these 2 conditions can help in the other solution comments.
> 1. `result[i][j] = max(result[i-1][j], result[i][j-1])`
> 2. `result[i][j] = result[i-1][j-1] + 1`

> This time I use HashMap to record each result, such method can skip those duplicate calculations.

### Method 3 : 2D Dynamic Programming with Bottom Up.
> We use recursion to solve this problem in method 2. Maybe it is a little bit too complex?
> Usually, I use for loop more than recursion.
> Need to reverse our thinking when use bottom up.

### Method 4 : 1D Dynamic Programming.
> Why we need to save all of the results?
> Actually, just use previous and current row when calculate uncrossed lines of each point (i, j) in variable `result` at method 2 and 3.
> So we only need to save 1D result.

# Complexity
- Time complexity:
Method 1 : $$O(2^n)$$
Method 2 : $$O(i*j)$$
Method 3 : $$O(i*j)$$
Method 4 : $$O(i*j)$$

- Space complexity:
Method 1 : $$O(i*j)$$
Method 2 : $$O(i*j)$$
Method 3 : $$O(i*j)$$
Method 4 : $$O(i)$$


# Code
### Method 1 (TLE)
```rust [method 1]
use std::cmp;
impl Solution {
    pub fn max_uncrossed_lines(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let len_1 = nums1.len();
        let len_2 = nums2.len();
        let mut result = vec![vec![0; len_2+1]; len_1+1];
        Self::divide_conquer(len_1, len_2, &nums1, &nums2, &mut result)
    }

    fn divide_conquer(i: usize, j: usize, nums1: &Vec<i32>, nums2: &Vec<i32>, result: &mut Vec<Vec<i32>>) -> i32 {
        if i == 0 || j == 0 || i > nums1.len() || j > nums2.len() {
            return 0
        }
        if result[i][j] > 0 {
            return result[i][j]
        }

        match nums1[i-1] == nums2[j-1] {
            true => result[i][j] = Self::divide_conquer(i-1, j-1, nums1, nums2, result) + 1,
            false => result[i][j] = cmp::max(Self::divide_conquer(i-1, j, nums1, nums2, result), Self::divide_conquer(i, j-1, nums1, nums2, result)),
        }

        result[i][j]
    }
}
```
### Method 2 (2D DP with Top Down)
```rust [method 2]
use std::cmp;
use std::collections::HashMap;
impl Solution {
    pub fn max_uncrossed_lines(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let len_1 = nums1.len();
        let len_2 = nums2.len();
        let mut result = HashMap::new();
        for index1 in 1..len_1+1 {
            for index2 in 1..len_2+1 {
                result.insert((index1, index2), -1);
            }
        }
        Self::dynamic_programming(len_1, len_2, &nums1, &nums2, &mut result)
    }

    // i, j mean to amount i and amount j, not index i and index j
    fn dynamic_programming(i: usize, j: usize, nums1: &Vec<i32>, nums2: &Vec<i32>, result: &mut HashMap<(usize, usize), i32>) -> i32 {
        if i == 0 || j == 0 || i > nums1.len() || j > nums2.len() {
            return 0
        }

        let &value = result.get(&(i, j)).unwrap();
        if value >= 0 {
            return value
        }

        let mut temp = 0;
        match nums1[i-1] == nums2[j-1] {
            true => temp = Self::dynamic_programming(i-1, j-1, nums1, nums2, result) + 1,
            false => temp = cmp::max(Self::dynamic_programming(i-1, j, nums1, nums2, result), Self::dynamic_programming(i, j-1, nums1, nums2, result)),
        };

        result.insert((i, j), temp);
        *result.get(&(i, j)).unwrap()
    }
}
```
### Method 3 (2D DP with Bottom Up)
```rust [method 3]
use std::cmp;
use std::collections::HashMap;
impl Solution {
    pub fn max_uncrossed_lines(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let len_1 = nums1.len();
        let len_2 = nums2.len();
        Self::dynamic_programming(len_1, len_2, &nums1, &nums2)
    }

    fn dynamic_programming(i: usize, j: usize, nums1: &Vec<i32>, nums2: &Vec<i32>) -> i32 {
        if i < 0 || j < 0 || i > nums1.len() || j > nums2.len() {
            return 0
        }

        let mut result = HashMap::new();
        for index_i in 1..i+1 {
            for index_j in 1..j+1 {
                let mut temp = 0;
                match nums1[index_i-1] == nums2[index_j-1] {
                    true => temp = *result.get(&(index_i-1, index_j-1)).unwrap_or(&0) + 1,
                    false => temp = cmp::max(*result.get(&(index_i-1, index_j)).unwrap_or(&0), *result.get(&(index_i, index_j-1)).unwrap_or(&0)),
                };
                result.insert((index_i, index_j), temp);
            }
        }

        result[&(i, j)]
    }
}
```
### Method 4 (1D DP)
```rust [method 4]
use std::cmp;
impl Solution {
    pub fn max_uncrossed_lines(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let len_1 = nums1.len();
        let len_2 = nums2.len();
        Self::dynamic_programming(len_1, len_2, &nums1, &nums2)
    }

    fn dynamic_programming(i: usize, j: usize, nums1: &Vec<i32>, nums2: &Vec<i32>) -> i32 {
        if i < 0 || j < 0 || i > nums1.len() || j > nums2.len() {
            return 0
        }

        let mut row_previous = vec![0; j+1];
        for index_i in 1..i+1 {
            let mut row_current = vec![0; j+1];
            for index_j in 1..j+1 {
                match nums1[index_i-1] == nums2[index_j-1] {
                    true => row_current[index_j] = row_previous[index_j-1] + 1,
                    false => row_current[index_j] = cmp::max(row_current[index_j-1], row_previous[index_j]),
                };
            }
            row_previous = row_current;
        }

        row_previous[j]
    }
}
```
