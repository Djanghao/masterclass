# Official Solution

**Link:** [https://leetcode.com/problems/stone-game-iv/solution/](https://leetcode.com/problems/stone-game-iv/solution/)

---

[TOC]

## Solution

---

### Overview

You probably can guess from the problem title, this is the fourth problem in the series of [Stone Game](https://leetcode.com/problems/stone-game/) problems. Those problems are similar, but have considerable differences, making their solutions quite different. It's highly recommended to finish them all.

Here, two approaches are introduced: DFS with memoization and DP approach.

---

### Approach 1: DFS with memoization

**Intuition**

First, let's analyze the problem.

According to [Zermelo's_theorem](https://en.wikipedia.org/wiki/Zermelo%27s_theorem_(game_theory)), given `n` stones, either Alice has a must-win strategy, or Bob has one. Therefore, for Alice, the current state is either "must-win" or "must-lose". But how to determine which one it is?

> For convenience, in the following context, "the current player" refers to the player now removing the stones, and "state `i`" refers to when there is `i` stones remaining.
>
> Now the problem asks whether the current player will win in state `n`.

If we can go to a known state where Bob must lose, then we know Alice must win in the current state. All Alice has to do is to move the corresponding number of stones to go to that state. Therefore we need to find out which state Bob must lose.

Note that after going to the next state, Bob becomes the player removing the stones, which is the position of Alice in the current state. Therefore, to find out whether Bob will lose in the next state, we just need to check whether our function gives `False` for remaining stones.

**Algorithm**

Let function `dfs(remain)` represents whether the current player must win with `remain` stones remaining.

To find out the result of `dfs(n)`, we need to iterate `k` from 0 to check whether there exits `dfs(remain - k*k)==False`. To prevent redundant calculate, use a map to store the result of `dfs` function.

Don't forget the base case `dfs(0)==False` and `dfs(1)==True`.

> Note: After reading the Algorithm part, it is recommended to try to write the code on your own before reading the solution code.

<iframe src="https://leetcode.com/playground/AKxNPs48/shared" frameBorder="0" width="100%" height="463" name="AKxNPs48"></iframe>

There some tricks that we used in the code above.

In the Python code, we use `@lru_cache` instead of a map to store the result of dfs. It's a useful grammar sugar in Python.

In the Java code, we don't have things like `@lru_cache` in Python, so here we use a simple HashMap. However, we can still use some tricks, if you want -- using an array instead of a map: we can use `0` to mark the unvisited nodes, use `1` to mark the `true` results, and use `2` to mark the `false` results. Also, we can just use an array of bytes, which uses less memory than an array of ints.

Note that the speed would be a little faster if you iterate `i` from `sqrt_root` to `0` due to the data characteristics.

**Complexity Analysis**

Assume $$N$$ is the length of `arr`.

* Time complexity: $$\mathcal{O}(N\sqrt{N})$$ since we spend $$\mathcal{O}(\sqrt{N})$$ at most for each dfs call, and there are $$\mathcal{O}({N})$$ dfs calls in total.
 
* Space complexity: $$\mathcal{O}(N)$$ since we need spaces of $$\mathcal{O}(N)$$ to store the result of dfs.

---

### Approach 2: DP

**Intuition**

DFS with memoization is very similar to dp. We can also use dp to solve this problem.

We can just use a single `dp[i]` array to store whether the player now removing stones wins with `i` stones remaining.

**Algorithm**

Let `dp[i]` represents the result of the game with `i` stones. `dp[i]==True` means the current player must win, and `dp[i]==False` means the current player must lose, when both players play optimally.

The next step is to find out how to calculate `dp[i]`.

We can iterate all possible movements, and check if we can move to a `False` state. If we can, then we found a must-win strategy, otherwise, we must lose since the opponent has a must-win strategy in this case.

More clearly, we can iterate `k` from 0 and check if there exists `dp[i - k*k]==False`. Of course, `i - k*k >= 0`.

Finally, we only need to return `dp[n]`.

> Note: After reading the Algorithm part, it is recommended to try to write the code on your own before reading the solution code.

<iframe src="https://leetcode.com/playground/hA5KXukX/shared" frameBorder="0" width="100%" height="293" name="hA5KXukX"></iframe>

Also, we can employ DP in a slightly different way.

**Intuition**

Let's think in the backtrack way. If we have a state `i` that we know the current player must lose, what can we infer?

-- Any other states that can go to `i` must be `True`. 

Let's say in another state `j` the current player in `j` can go to `i` by removing stones. In this case, the state `j` is `True` since the current player must win.

How to find all the state `j`? Well, we can iterate over the square numbers and add them to `i`.

**Algorithm**

Still, let `dp[i]` represent the result of the game of `i` stones. `dp[i]==True` means the first player (Alice) must win, and `dp[i]==False` means the second player (Bob) must win when both players play optimally.

When we get to a `False` state, we mark all accessible states as `True`. When we get to a `True` state, just continue (Why? Well... because it's useless).

Finally, we only need to return `dp[n]`.

> Note: After reading the Algorithm part, it is recommended to try to write the code on your own before reading the solution code.

<iframe src="https://leetcode.com/playground/nSecykAJ/shared" frameBorder="0" width="100%" height="293" name="nSecykAJ"></iframe>

**Complexity Analysis**

Assume $$N$$ is the length of `arr`.

* Time complexity: $$\mathcal{O}(N\sqrt{N})$$ since we iterate over the `dp` array and spend $$\mathcal{O}(\sqrt{N})$$ at most on each element.
 
* Space complexity: $$\mathcal{O}(N)$$ since we need a `dp` array.