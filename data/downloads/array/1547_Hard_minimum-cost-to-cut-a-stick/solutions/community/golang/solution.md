# [Golang] Recursive + memoization (top down) and iterative (bottom up) with explanation

**Author:** Slamur
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3571552/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3571552/)

---

# Intuition

I'll use name $L$ for the length of the original stick.

Firstly you could imagine that before start someone already cut stick at the coordinates $0$ and $L$.

Now let's think: what will happen if you cut stick at the $x$ coordinate?

- you will pay $L - 0$ for this cut;

- you need to **independently** cut two sticks:
    - from $0$ to $x$;
    
    - from $x$ to $L$.
     
Do you see any similarities with the original problem?

# Basic approach

- Add $0$ and $L$ to the $cuts$ and **sort** it.

- Use dynamic programming $dp[S][E]$ - minimal cost of cutting stick, that starts at the $S$-th cut and ends at the $E$-th cut.

- Let's $N$ be the amount of cuts (including $0$ and $L$). 

- Answer: $dp[1][N]$.

- Initial state: $dp[S][S + 1] = 0$ for $S = 1 \\dots N - 1$.

- Formula: $dp[S][E] = (cuts[E] - cuts[S]) + \\min_{S < M < E}(dp[S][M] + dp[M][E])$:

    - $cuts[E] - cuts[S]$ is the cost of the current split;
    - $dp[S][M] + dp[M][E]$ is the cost of cutting two parts after the split;

# Recursive approach

- Recursion starts at the $(0, N)$.

- Recursion stops at the $S + 1 = E$.

- Use memoization to calculate each state exactly once (2D array is enough).

# Iterative approach

- When you calculate $(S, E)$, you need to know all $(S, M)$ and $(M, E)$.

- $M - S$ and $E - M$ are smaller than $E - S$.

One way to ensure this condition is:

- iterate over $D = E - S$ from $2$ to $N - 1$;

- iterate over $E$ from $D$ to $N$ and $S = E - D$.

# Complexity
- Time complexity: $O(N^3)$:

    - There are $O(N^2)$ states $(S, E)$;
    
    - Each state is calculated in $O(E - S)$ steps.

- Space complexity: $O(N^2)$

# Recursive code
```
func minCost(size int, cuts []int) int {
    sort.Ints(cuts)
    cuts = append([]int{0}, cuts...)
    cuts = append(cuts, size)

    n := len(cuts) - 1

    inf := size * (n + 1)

    dp := make([][]int, n)
    for start := range dp {
        dp[start] = make([]int, n + 1)
        for end := start; end <= n; end++ {
            dp[start][end] = inf
        }

        dp[start][start + 1] = 0
    }

    var calculate func(int, int) int
    calculate = func(start, end int) int {
        if dp[start][end] < inf {
            return dp[start][end]
        }

        length := cuts[end] - cuts[start]
        for mid := start + 1; mid < end; mid++ {
            cost := calculate(start, mid) + calculate(mid, end) + length
            if dp[start][end] > cost {
                dp[start][end] = cost
            }
        }

        return dp[start][end]
    }

    return calculate(0, n)
}
```

# Iterative code
```
func minCost(size int, cuts []int) int {
    sort.Ints(cuts)
    cuts = append([]int{0}, cuts...)
    cuts = append(cuts, size)

    n := len(cuts) - 1

    inf := size * (n + 1)

    dp := make([][]int, n)
    for start := range dp {
        dp[start] = make([]int, n + 1)
        for end := start; end <= n; end++ {
            dp[start][end] = inf
        }

        dp[start][start + 1] = 0
    }

    for shift := 2; shift <= n; shift++ {
        for end := shift; end <= n; end++ {
            start := end - shift
            length := cuts[end] - cuts[start]
            for mid := start + 1; mid < end; mid++ {
                cost := dp[start][mid] + dp[mid][end] + length
                if dp[start][end] > cost {
                    dp[start][end] = cost
                }
            }
        }
    }

    return dp[0][n]
}
```