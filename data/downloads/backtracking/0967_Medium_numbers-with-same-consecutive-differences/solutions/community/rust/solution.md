# Rust | Recursive and Iterative DFS | With Comments

**Author:** wallicent
**Votes:** 3
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2522676/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2522676/)

---

The algorithm: Perform a series of DFSs starting from the digits 1..=9, branching to lower and higher digits with difference k as long as we stay within the range 0..=9 for the digits, and collect the digits of the paths to all the leaves.

* I prefer making iterative algorithms when I can, for efficiency, but I did a recursive implementation as well for practice.
* I chose to include the last digit in the DFS state instead of having  to extract it at the next level with `curr % 10`, for efficiency.
* Instead of having the result as a `&mut Vec<i32>` parameter in the recursive implementation, I prefer to use move semantics to take ownership and then return it. That way, I can use the pretty elegant one-liner with `fold` in the `nums_same_consec_diff` function.
* `k != 0` is a guard against duplicate result entries when `k` is zero.

**Iterative DFS**

```
impl Solution {
    pub fn nums_same_consec_diff(n: i32, k: i32) -> Vec<i32> {
        let mut stack: Vec<_> = (1..=9).map(|first_digit| (n-1, first_digit, first_digit)).collect();
        let mut rez = vec![];
        
        while let Some((left, curr, last_digit)) = stack.pop() {
            if left == 0 {
                rez.push(curr);
            } else {
                let (lower, higher) = (last_digit - k, last_digit + k);
                if lower >= 0 {
                    stack.push((left - 1, curr * 10 + lower, lower));
                }
                if k != 0 && higher <= 9 {
                    stack.push((left - 1, curr * 10 + higher, higher));
                }
    
            }
        }

        rez
    }
}
```

**Recursive DFS**

```
impl Solution {
    fn dfs(n: i32, k: i32, curr: i32, last_digit: i32, mut rez: Vec<i32>) -> Vec<i32> {
        if n == 0 {
            rez.push(curr);
        } else {
            let (lower, higher) = (last_digit - k, last_digit + k);
            if lower >= 0 {
                rez = Self::dfs(n - 1, k, curr * 10 + lower, lower, rez);
            }
            if k != 0 && higher <= 9 {
                rez = Self::dfs(n - 1, k, curr * 10 + higher, higher, rez);
            }
        }
        rez
    }

    pub fn nums_same_consec_diff(n: i32, k: i32) -> Vec<i32> {
        (1..=9).fold(vec![], |rez, first_digit| {
            Self::dfs(n - 1, k, first_digit, first_digit, rez)
        })
    }
}
```
