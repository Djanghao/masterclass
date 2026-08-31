# Go | Prefix Sum

**Author:** jodarsyoung
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/4325331/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/4325331/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Each query's answer is independent of each answer.
What we need just need to know is the ff.:
1. The number of candies required to eat for a given type (considering all candies before it).
2. The number of candies you can eat based on day and cap.

Once known, the two ranges must overlap.

# Approach
<!-- Describe your approach to solving the problem. -->
Use prefix sum to speed up calculation of number of candies required to eat.
Prefix sum calculation is not performed unless required by the query. This optimization helps reach 190ms runtime.

# Complexity
- Time complexity:
$$O(n+m)$$

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
$$O(n+m)$$

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

where `n` and `m` are the sizes of `candiesCount` and `queries`.

# Code
```
func canEat(candiesCount []int, queries [][]int) []bool {
    // prepare prefix sum, but do not process it unless
    // required by query (caching)
    prefixSum := make([]int, len(candiesCount))
    prefixIdx := 1

    ans := make([]bool, len(queries))

    for i, query := range queries {
        favType, favDay := query[0], query[1]

        // process only up to the favorite type
        if favType >= prefixIdx {
            for i := prefixIdx; i <= favType; i++ {
                prefixSum[i] = prefixSum[i-1] + candiesCount[i-1]
            }
            prefixIdx = favType + 1
        }

        // the number of candies required to eat
        min := prefixSum[favType] + 1
        max := prefixSum[favType] + candiesCount[favType]

        // the number of candies you can eat based on the cap
        minEat := favDay + 1
        maxEat := minEat * query[2]

        // these ranges must overlap
        if min <= maxEat && max >= minEat {
            ans[i] = true
        }
    }

    return ans
}
```