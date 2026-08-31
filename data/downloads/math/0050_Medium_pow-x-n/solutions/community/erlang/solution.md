# Erlang Solution (Continuation Passing Style CPS)

**Author:** EliasA5
**Votes:** 0
**Link:** [https://leetcode.com/problems/powx-n/solutions/3504913/](https://leetcode.com/problems/powx-n/solutions/3504913/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use $x^{2n} = x^n*x^n$ and $x^{2n+1} = x^n*x^n*x$ to implement a solution based on Continuation Passing Style (CPS).

# Approach
<!-- Describe your approach to solving the problem. -->
Use CPS and tail calls to turn the recusion case into an iterative case

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
should be O(n) since we are storing code in memory, depends on how erlang works internally, this could also be O(1).

# Code
```
-spec my_pow(X :: float(), N :: integer()) -> float().
my_pow(_X, 0) ->
	1;
my_pow(X, N) when N > 0 ->
	my_pow(X, N, fun(Y) -> Y end);
my_pow(X, N) when N < 0 ->
	my_pow(1/X, -N, fun(Y) -> Y end).

my_pow(_X, 0, F) -> F(1);
my_pow(X, N, F) when N rem 2 == 0 ->
	my_pow(X, N div 2, fun(Ans) -> F(Ans * Ans) end);
my_pow(X, N, F) ->
	my_pow(X, N div 2, fun(Ans) -> F(X * Ans * Ans) end).



```