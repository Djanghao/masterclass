# Rust | DP One-liner and Solution Evolution | With Explanation

**Author:** wallicent
**Votes:** 6
**Link:** [https://leetcode.com/problems/min-cost-climbing-stairs/solutions/2262235/](https://leetcode.com/problems/min-cost-climbing-stairs/solutions/2262235/)

---

EDIT 2022-09-05: Revisited as part of the DP explore card, where I tried to follow the curriculum and go from top-down solution into bottom-up and then to state reduction. Let's begin by the top-down solution. I follow the problem statement and pay the cost of the current step, then take the minimum total cost of choosing between taking one or two steps. Here, `i` is the current step, so the `dp` function can be interpreted as the minimum total additional cost incurred by stepping on the step `i`.

```
use std::collections::HashMap;

impl Solution {
    fn dp(cost: &[i32], i: usize, memo: &mut HashMap<usize, i32>) -> i32 {
        if i >= cost.len() {
            0
        } else if let Some(min_cost) = memo.get(&i) {
            *min_cost
        } else {
            let rez = cost[i] + Self::dp(cost, i + 1, memo).min(Self::dp(cost, i + 2, memo));
            memo.insert(i, rez);
            rez
        }
    }

    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        let mut memo = HashMap::new();
        Self::dp(&cost, 0, &mut memo);
        (*memo.get(&0).unwrap()).min(*memo.get(&1).unwrap())
    }
}
```

This makes it easier to tabulate `dp` and compute it in reverse for a bottom-up solution:

```
impl Solution {
    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        let n = cost.len();
        let mut dp = vec![0; n + 2];
        for i in (0..n).rev() {
            dp[i] = cost[i] + dp[i+1].min(dp[i+2]);
        }
        dp[0].min(dp[1])
    }
}
```

As we only look two steps forward, we can reduce the state like this: 

```
impl Solution {
    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        let n = cost.len();
        let mut dp = (0, 0);
        for i in (0..n).rev() {
            dp = (cost[i] + dp.0.min(dp.1), dp.0);
        }
        dp.0.min(dp.1)
    }
}
```

And as a final step, this can be simplified by using a functional style one-liner with `fold`, appending a zero to the reversed cost vector iterator to perform the last minimization of the other implementations:

```
impl Solution {
    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        cost.into_iter().rev().chain(std::iter::once(0)).fold((0, 0), |(n, nn), c| {
            (c + n.min(nn), n)
        }).0
    }
}
```

**Original Post**

I am initializing the DP state in the `fold` with (0,0), which can be seen as prepending the cost vector with [0,0]. This is just a way to start the "real" DP with the first two entries of `cost` without having to add another code line/doing manual indexing. Then it's just the vanilla DP of minimizing the cost of the path leading up to the current index, by selecting the minimum cost of the paths ending at the two previous indices plus the cost of the current index. A zero is chained at the end of the cost vector iterator to do the last `min` operation, which would also add another line and make the solution less DRY if made separately. A one-liner is its own reward. :)

```
impl Solution {
    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        cost.into_iter().chain(std::iter::once(0)).fold((0, 0), |(pp, p), c| (p, c + pp.min(p))).1
    }
}
```