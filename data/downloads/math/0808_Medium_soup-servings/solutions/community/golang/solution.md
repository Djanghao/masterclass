# Simple Go solution | Generalized DFS

**Author:** nikmy
**Votes:** 1
**Link:** [https://leetcode.com/problems/soup-servings/solutions/3832938/](https://leetcode.com/problems/soup-servings/solutions/3832938/)

---

# Intuition
Let $P(a, b)$ be probability that $A$ will be empty first with $a$ amount of $A$ and $b$ amount of $B$ ($a, b > 0$). Then:

$$P(a, b) = \\frac{P(a - 100, b) + P(a - 75, b - 25) + P(a - 50, b - 50) + P(a - 25, b - 75)}{4}$$.

If $a \\le 0$ or $b \\le 0$, we call it base case and define it's probability from condition.

Formula remains true for probability that A and B become empty at the same time. Since it's coef is equal to 0.5, we can encapsulate it's computation into base case.

For $n \\ge 4800$, answer is close to $1.0$ enough to round, so we don't need to compute it.

# Complexity
- Time complexity: $$O(n^2)$$ for $n < 4800$.

- Space complexity: $$O(n^2)$$ with small constant ~1/25.

# Code
```go
func soupServings(n int) float64 {
    if n >= 4800 {
        return 1.0
    }

    type state struct {
        A, B int
    }

    p := DFS(
        // base cases handler
        func (s state) (float64, bool) {
            a, b := s.A, s.B

            // neither A nor B is empty
            if a > 0 && b > 0 {
                return 0, false
            }

            // A become empty while B doesn't
            if a <= 0 && b > 0 {
                return 1, true
            }

            // A and B empty both
            if a <= 0 && b <= 0 {
                return 0.5, true
            }

            // otherwise, B is empty while A doesn't
            return 0, true
        },
        
        // memoization
        map[state]float64{},

        // recursive calculation
        func(f func (state) float64, s state) float64 {
            a, b := s.A, s.B
            p := func(a, b int) float64 { return f(state{A: a, B: b}) }
            return 0.25 * (p(a-100, b) + p(a-75, b-25) + p(a-50, b-50) + p(a-25, b-75))
        },
    )

    return p(state{n, n})
}

// Generalized DFS
//
//  @param base - checks for base case and return pair (baseCaseValue, isBaseCase)
//  @param memo - storage for results for visited states
//  @param calc - function that calculates result using abstract dfs function and current state
//
//  @return dfs - recursive DFS function
func DFS[State comparable, Value any](
    base func (State) (Value, bool),
    memo map[State]Value,
    calc func(func (State) Value, State) Value,
) (dfs func (State) Value) {
    dfs = func (s State) Value {
        if v, ok := base(s); ok {
            return v
        }
        if v, ok := memo[s]; ok {
            return v
        }
        memo[s] = calc(dfs, s)
        return memo[s]
    }
    return dfs
}
```

P.S. You can upvote if you find generalized algorithms beatiful too :)