# [Elixir] Intuitive DP explanation for 100% speed, 100% space solution

**Author:** j4p3
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-binary-search-trees/solutions/1814248/](https://leetcode.com/problems/unique-binary-search-trees/solutions/1814248/)

---

We're not using Catalan numbers, because most of the time we're not going to be able to recall or deduce the binomial coefficient expression of a combinatorial math concept in the middle of a programming challenge. Usually we'll need to solve the problem with the tools we have at hand.

1. We know this is a counting problem
2. We know it has overlapping subproblems (because, by the nature of binary trees, each leg of our root is just a smaller tree)
3. Therefore we know we can use DP
4. Therefore we need to define the relationship between the subproblems, and the state we will be accumulating from each subproblem
5. The state is easy - we just store the count of unique trees for each input
6. The relationship between subproblems is more difficult. How can the solution for n=3 be related to the previous solutions? How can we define a function `f(n)` which references its own outputs for smaller `n`s?

Think about a binary tree, and about how we knew this is a DP problem in the first place. How is a tree with 3 nodes related to a tree with 2 nodes? How is a tree with 4 related to a tree with 3?

Answer: a tree with 3 or 4 nodes is just a root, with two smaller trees attached. For any given root `r`, the number of unique possibilities is just the number of unique possibilities on the left, multiplied by the number of unique possibilities on the right. And there are `n` possible roots to select.

For example, let's use a tree with 4 nodes -  `f(4)`.

We could create a tree with root `r=1`, having entirely right children. In that case, there would be only 1 possibility for the root's left leg: a 0-node tree. With 1 node making up the root, that leaves us with 3 nodes to allocate to the right leg. How many unique possibilities are there for a 3-node tree? `f(3)`.

What about we set our root as `r=2`? Now there is still only 1 possibility for the node's left leg - a 1-node tree - and we have 2 nodes left to allocate on the right leg, which we know is just a smaller tree with `f(2)` unique possibilities.

By summing up the possibilities for every potential root location, we can calculate the total number of possibilities for any `n`.

Therefore the relationship between subproblems could be represented as:

`f(n) = sum( f(r - 1) * f(n - r) ) for i <- 1..n`

So, provided we have an answer to `f(n)` for all `n` smaller than our target `n`, we can solve for any `n`. But how do we get started? How can we solve for `f(1)` if we don't know `f(0)`?

Simple - how many possible configurations are there for a 0-node tree? One - a tree with no nodes. With this initial state, we can plug the results of previous solutions into our formula and solve for the next solution:

```
n   f(n)    solution
==================
0   1    
1   1    f(1 - 1) * f(1 - 1) = f(0) * f(0) = 1 * 1 = 1
2   2    f(1 - 1) * f(2 - 1) + f(2 - 1) * f(2 - 2) = f(0) * f(1) + f(1) * f(0) = 1 * 1 + 1 * 1 = 2
3   5    f(1 - 1) * f(3 - 1) + f(2 - 1) * f(3 - 2) + f(3 - 1) * f(3 - 3) = f(0) * f(2) + f(1) * f(1) + f(2) * f(0) = 1 * 2 + 1 * 1 + 2 * 1 = 5
4   14   f(1 - 1) * f(4 - 1) + ...
5   42    ...
```

And this intuitively makes sense, as we can visualize moving the root from left to right across the range and picturing the result - a tree with all right-leg children at `r=1`, followed by more possibilities as `r` increases.

To implement, we first accumulate a cache of solutions up towards our desired `n`, and, upon reaching it, return the result for `n`:

```
  def num_trees(n) do
    cache = %{0 => 1}
    Enum.reduce(1..n, cache, &unique_trees/2)
    |> Map.get(n)
  end
```

To implement the subproblem function, we simply fetch the appropriate subproblem results for each possible leg, multiply them, and sum the results:
```
  def unique_trees(n, cache) do
    count = Enum.map(1..n, fn r ->
      Map.get(cache, r - 1) * Map.get(cache, n - r)
    end)
    |> Enum.sum()
    Map.put(cache, n, count)
  end
```

Good luck, happy solving.