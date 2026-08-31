# [Rust] Backtracking using Recursion

**Author:** venkatrag1
**Votes:** 3
**Link:** [https://leetcode.com/problems/combinations/solutions/3021544/](https://leetcode.com/problems/combinations/solutions/3021544/)

---

# Intuition
Choose from available options for i-th position and build-up recursively to other positions with remaining options. Backtrack and try a different option at ith position

# Approach
In the outer-loop try each of the possible values from start to n in the current position, and recursively append to it the combinations built from start+1.

Backtrace to try the next value for the outer loop and append to solution array when the length reaches k.

# Complexity
- Time complexity:
O(k * nCk) - to visit k characters once for every nCk possible combination

- Space complexity:
O(nCk) for solution store
# Code
```
impl Solution {
    pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
        fn backtrack(next: usize, so_far: &mut Vec<i32>, combinations: &mut Vec<Vec<i32>>, n: usize, k: usize) {
            if so_far.len() == k {
                combinations.push(so_far.clone());
                return;
            }
            for i in next..=n {
                so_far.push(i as i32);
                backtrack(i+1, so_far, combinations, n, k);
                so_far.pop();
            }
        }

        let mut so_far : Vec<i32> = Vec::new();
        let mut combinations : Vec<Vec<i32>> = Vec::new();
        backtrack(1, &mut so_far, &mut combinations, n as usize, k as usize);
        combinations
    }
}
```