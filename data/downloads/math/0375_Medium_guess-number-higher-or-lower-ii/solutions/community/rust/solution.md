# rust DP solution. 0ms.

**Author:** broook
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/5485826/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/5485826/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
DP\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
$$\r
f(i,j) =\r
\\begin{cases} \r
  0 & \	ext{if } i=j \\\\\r
  i & \	ext{if } i+1=j \\\\\r
  \\max\\limits_{i \\lt k \\lt j} (k+\\max(f(i,k-1), f(k+1,j))) & \	ext{if } i+1\\lt j \r
\\end{cases}\r
$$\r
\r
I have implemented some optimizations on the algorithm. \r
\r
  The process of making guesses can be illustrated through a binary tree, wherein every node within the left subtree holds values lesser than the current amount, whereas every node within the right subtree holds values greater than the current amount. It is easily deduced that when the right subtree contains an unoccupied leaf node, such a situation is definitely not indicative of an optimal solution. Consequently, in the most favorable solution, the right subtree does not feature any vacant leaf nodes. Within my coding implementation, I have employed the iterator method `(i + 1..j).rev().step_by(2)` to bypass computations that would otherwise involve the existence of an unoccupied leaf node within the right subtree. This technique effectively filters out non-optimal paths, streamlining the search for the best possible outcome. \r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
$O(n^3)$\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
$O(n^2)$\r
\r
# Code\r
```\r
use std::cmp::max;\r
\r
impl Solution {\r
    pub fn get_money_amount(n: i32) -> i32 {\r
        fn helper(i: usize, j: usize, dp: &mut Vec<Vec<usize>>) -> usize {\r
            return match j - i {\r
                0 => 0,\r
                1 => i,\r
                2 => i + 1,\r
                _ => match dp[i - 1][j - 1] {\r
                    r if r > 0 => r,\r
                    _ => {\r
                        let mut v = usize::MAX;\r
                        for k in (i+1..j).rev().step_by(2) {\r
                            v = v.min(k+max(helper(i, k-1, dp), helper(k+1,j,dp)));\r
                        }\r
                        dp[i - 1][j - 1] = v;\r
                        v\r
                    }\r
                }\r
            };\r
        }\r
        let mut dp = vec![vec![0; n as usize]; n as usize];\r
        return helper(1, n as usize, &mut dp) as i32;\r
    }\r
}\r
```