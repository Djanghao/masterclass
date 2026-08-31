# Swift | From brute-force to O(1) combinatorics solutions

**Author:** VladimirTheLeet
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4322209/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4322209/)

---

# Brute-force approach
We try all the variants to give the first child an acceptable number of candies. For each variant, we try all ways to give the second child candy from the remaining ones, and see if there is an admissible number of candies left for the last child.

## Complexity
- Time complexity: $O({min(n, limit)}^2)$
- Space complexity: $O(1)$

# Recursive
```
class Solution {
    func distributeCandies(_ n: Int, _ limit: Int, _ children: Int = 3) -> Int
    {
        if n > limit * children { return 0 }
        if children == 1 { return 1 }

        let maxCandies = min(n, limit)
        var ans = 0
        for i in 0...maxCandies {
            ans += distributeCandies(n - i, limit, children - 1)
        }
        return ans
    }
}
```

# Iterative
```
class Solution {
    func distributeCandies(_ n: Int, _ limit: Int) -> Int
    {
        if n > limit * 3 { return 0 }

        var ans = 0
        let maxCandies1 = min(n, limit)
        for i in 0...maxCandies1
        {
            let n2 = n - i
            if n2 > limit * 2 { continue }

            let maxCandies2 = min(n2, limit)
            for j in 0...maxCandies2
            {
                let n3 = n2 - j
                if n3 > limit { continue }
                else { ans += 1 }
            }
        }
        return ans
    }
}
```

# Optimization of the above approach

Instead of checking inside loops
`if n2 > limit * 2 { continue }` and
`if n3 > limit { continue }`
we can calculate lower bounds for `i` and `j` \u2014 these are the values starting from which this `continue` ceases to be triggered.

As the second loop then becomes a mere counting:
`for j in minCandies2...maxCandies2 { ans += 1 } `
it can be replaced with a single operation:
`ans += maxCandies2 - minCandies2 + 1`

## Complexity
- Time complexity: $O({min(n, limit)})$
- Space complexity: $O(1)$

# Code
```
class Solution {
    func distributeCandies(_ n: Int, _ limit: Int) -> Int
    {
        if n > limit * 3 { return 0 }

        var ans = 0
        let maxCandies1 = min(n, limit)
        let minCandies1 = max(0, n - limit*2)
        for i in minCandies1...maxCandies1
        {
            let n2 = n - i
            let maxCandies2 = min(n2, limit)
            let minCandies2 = max(0, n2 - limit)
            ans += maxCandies2 - minCandies2 + 1
        }
        return ans
    }
}
```

# Combinatorics approach

1. Define a function for combinations `comb(n)`, which calculates the number of ways to choose 2 from arbitrary $n$ elements.
2. Check if $n$ is greater than 3 times $limit$. If true, it is not possible to distribute the candies, so return 0.
3. Calculate the total combinations (ans) considering all possible distributions.
4. If $n$ is greater than $limit$, subtract the combinations where a child gets more than $limit$ candies.
5. If $n - 2$ is greater than or equal to $limit \\cdot 2$, add the combinations where a child gets more than $limit \\cdot 2$ candies.
6. Return the final result `ans`.

## Complexity
- Time complexity: $O(1)$
- Space complexity: $O(1)$

# Code
```
class Solution {
    func distributeCandies(_ n: Int, _ limit: Int) -> Int
    {
        if n > limit * 3 { return 0 }
        var ans = comb(n+2)
        if n > limit { ans -= 3 * comb(n - limit + 1) }
        if n-2 >= limit * 2 { ans += 3 * comb(n - limit * 2) }
        return ans
    }
    func comb(_ n: Int) -> Int { n*(n-1) / 2 }
}
```
