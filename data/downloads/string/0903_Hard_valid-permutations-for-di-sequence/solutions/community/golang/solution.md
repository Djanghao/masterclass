# Detailed explanation and intuition

**Author:** sebnyberg
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/2781519/](https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/2781519/)

---

# Intuition

The possible lengths of `s`, and the fact that there's a modulo involved, hints that were dealing with some sort of recursive function.

Indeed, we have a very large number of alternatives for each step. For a 200 character string, there are 200 valid first choices to explore (some of which may later turn out to be invalid). Then, there's potentially 199 choices, and so on, yielding $\	extrm{O}(n!)$.

This tells us that we need to memoize each step somehow. For memoization to work, we must describe the state in such a way that the state space isn't too large.

A naive first attempt at a state would be to store:

1. $\	extrm{O}(n)$ - previously picked index
2. $\	extrm{O}(n)$ - remaining string length
3. $\	extrm{O}(n!)$ - set of remaining numbers

Clearly, (3) won't work.

At this point when you're stuck, it's good to write down some different examples and look for clues. Try moving from a massive `n` to the next step, like `n = 100` to `n = 99`. Try to move from `n = 1` to `n = 0`. Try the other direction, i.e. to introduce a new number to the set.

For me, the breakthrough was when I imagined the last step of a long series of changes that started with `n = 100`. What possible numbers could be left in the set?

$$
\\{ (0, 1), (0, 2), ..., (0, n) \\}\\\\
\\{ (1, 0), (1, 2), ..., (1, n) \\}\\\\
... \\\\
\\{ (n, 0), (n, 1), ..., (n, n-1) \\}\\\\
$$

To evaluate `'D'` or `'I'` with these pairs, it only mattered whether the pair was increasing or decreasing. In other words, we could reduce all these pairs to $(0, 1)$ or $(1, 0)$ and it would make no difference to the result.

This told me that the set could always contain the same numbers, i.e. from `0..n`. It was only the relative position of numbers that mattered.

# Approach

Due to the reasoning above, the set of possible choices is dependent only on the length of / position in `s` and the previously picked value `x`. This gives us a state space of $\	extrm{O}(n^2)$.

Once a valid current number is found, we pick it and continue evaluation. Since the set of numbers is reduced each turn, we must deduct 1 from number `y` when is larger than `x` (x is removed from the set).

Note: it is trivial to change top-down to bottom-up, almost always at the expense of legibility. So I'll stick with top-down here.

# Complexity

- Time complexity: $\	extrm{O}(n^2)$
- Space complexity: $\	extrm{O}(n^2)$

# Code

```go
const mod = 1e9 + 7

func numPermsDISequence(s string) int {
	var res int
	n := len(s)
	mem := make([][]int, n+1)
	for i := range mem {
		mem[i] = make([]int, n+1)
		for j := range mem[i] {
			mem[i][j] = -1
		}
	}
	for i := 0; i <= n; i++ {
		res = (res + numPerms(mem, s, i)) % mod
	}
	return res
}

func numPerms(mem [][]int, s string, x int) int {
	n := len(s)
	if mem[n][x] != -1 {
		return mem[n][x]
	}
	if len(s) == 0 {
		return 1
	}
	var res int
	if s[0] == 'I' {
		for y := x + 1; y <= n; y++ {
			res = (res + numPerms(mem, s[1:], y-1)) % mod
		}
	} else {
		for y := x - 1; y >= 0; y-- {
			res = (res + numPerms(mem, s[1:], y)) % mod
		}
	}
	mem[n][x] = res
	return res
}
```