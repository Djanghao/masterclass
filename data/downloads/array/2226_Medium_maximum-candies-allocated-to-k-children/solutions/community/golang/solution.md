# Best to understand, 100% beats

**Author:** rajabhishekmaurya
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/5993830/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/5993830/)

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
func totalCandiSum(candies []int) int {
    sum := 0
    for _, candi := range candies {
        sum += candi
    }

    return sum
}

func isCandiPossibleToGive(candies []int, candiToEach, k int64) bool {
    totalCandiCountToEach := int64(0)
    for _, candi := range candies{
        candFloor := int64(math.Floor(float64(candi)/float64(candiToEach)))
        totalCandiCountToEach +=  candFloor
    }

    return totalCandiCountToEach >= k
}

func maximumCandies(candies []int, k int64) int {
    totalCandi := int64(totalCandiSum(candies))

    if totalCandi < k {
        return 0
    }

    high := totalCandi/k
    low := int64(1)
    ans := low

    for low <= high {
        mid := low + (high-low)/2

        if isCandiPossibleToGive(candies, mid, k) {
            ans = mid
            low = mid + 1
        }else{
            high = mid-1
        }
    }

    return int(ans)  
}
```