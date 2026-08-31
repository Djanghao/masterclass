# Go solution 100%

**Author:** slightly-anonymous
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/6076614/](https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/6076614/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
var memo [][]int
var bestPick [][]int
var nums []int

func findPermutation(numbers []int) []int {
    n := len(numbers)
    nums = numbers
    memo = make([][]int, n)
    for i := range memo {
        memo[i] = make([]int, 1 << n)
    }
    bestPick = make([][]int, n)
    for i := range bestPick {
        bestPick[i] = make([]int, 1 << n)
    }
    getScore(0, uint16(1))



    construct := func() []int {
        ans := make([]int, n)
        for i, last, mask := 0, 0, 1; i < len(bestPick); i++ {
            ans[i] = last
            last = bestPick[last][mask]
            mask |= 1 << last
        }
        return ans
    }

    return construct()

}

func getScore(last int, mask uint16) int {
    if bits.OnesCount16(mask) == len(nums) {
        return abs(last - nums[0])
    }
    if memo[last][mask] > 0 {
        return memo[last][mask]
    }
    minScore := math.MaxInt
    for i, n := range nums {
        if (mask & (1 << i)) != 0 { continue }
        nextMinScore := abs(n - last) + getScore(i, mask | (1 << i))
        if nextMinScore < minScore {
            minScore = nextMinScore
            bestPick[last][mask] = i
        }
    }
    memo[last][mask] = minScore
    return memo[last][mask] 
}



func abs(i int) int {
    if i > 0 {
        return i
    }
    return -i
}
```