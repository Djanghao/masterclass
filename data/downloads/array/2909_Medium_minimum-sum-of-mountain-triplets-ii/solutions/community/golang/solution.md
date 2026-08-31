# Finding the Minimum Sum of a Mountain Triplet using Go  | Simple Solution

**Author:** singhsourav73
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4806484/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4806484/)

---

# Intuition
To find the minimum sum of a mountain triplet in the given array, we can iterate through each element and for each element nums[i], we find the minimum value to the left of i (minLeft[i]) and the minimum value to the right of i (minRight[i]). If nums[i] is greater than both minLeft[i] and minRight[i], then minLeft[i] + nums[i] + minRight[i] is a candidate for the minimum sum of a mountain triplet. We update the minimum sum found so far (Min) with this value.

# Approach
1. Initialize two arrays minLeft and minRight of size N, where N is the length of the input array nums.
2. Calculate minLeft[i] for each index i in nums as the minimum value to the left of i (excluding i).
3. Calculate minRight[i] for each index i in nums as the minimum value to the right of i (excluding i).
4. Iterate through each index i in nums (excluding the first and last elements) and check if nums[i] is greater than both minLeft[i] and minRight[i]. If so, update Min with the minimum sum found so far (minLeft[i] + nums[i] + minRight[i]).
5. If no mountain triplet is found, Min will remain math.MaxInt32. In this case, return -1.
6. Otherwise, return the value of Min as the minimum sum of a mountain triplet.


# Complexity
- Time complexity: O(N) where N is the length of the input array nums. This is because we iterate through the array twice to calculate minLeft and minRight, and then iterate through it once more to find the minimum sum.

- Space complexity: O(N) for the additional arrays minLeft and minRight, each of size N.

# Code
```
func minimumSum(nums []int) int {
    N := len(nums)
    minLeft := make([]int, N)

    minLeft[0] = math.MaxInt32
    for i := 1; i < N; i++ {
        minLeft[i] = min(minLeft[i-1], nums[i-1])
    }

    minRight := make([]int, N)
    minRight[N-1] = math.MaxInt32
    for i := N-2; i >= 0; i-- {
        minRight[i] = min(minRight[i+1], nums[i+1])
    }

    Min := math.MaxInt32
    for i := 1; i < N-1; i++ {
        if minLeft[i] < nums[i] && minRight[i] < nums[i] {
            Min = min(Min, minLeft[i]+nums[i]+minRight[i])
        }
    }

    if Min == math.MaxInt32 {
        return -1
    }
    return Min
}
```