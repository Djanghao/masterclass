# BaseProblem HouseRobber || DP || Analogy

**Author:** napster01
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/2954441/](https://leetcode.com/problems/delete-and-earn/solutions/2954441/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- If we carefully examine this problem you will came to know that its variation of the HouseRobber problem.
- Just see we have an array which will hold the frequency of every number present in the nums array, dont you think its like a house with an amout of money as the freqVlaue.
- In House robber problem, we have restriction that no two adjancent house can be robbed, here also we need to delete the number i-1 & i+1 in order to calculate the value.

# Approach
<!-- Describe your approach to solving the problem. -->
- First we will find the max value which nums array holds
- Now create a freq and dp array of size as the maxValue
- Now use the HouseRobber problem concept

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- O(N) + O(N) + O(N) ~ O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- O(N)

# Code
```
//Similar to House Robber Problem
func deleteAndEarn(nums []int) int {
    if len(nums) == 0 {
        return 0
    }

    maxNum := 0 
    for _, n := range nums {
        if maxNum < n {
            maxNum = n
        }
    }

    freq := make([]int, maxNum+1)
    for _, num := range nums {
        freq[num] += num
    }

    dp := make([]int, maxNum+1)
    dp[0] = 0
    dp[1] = freq[1]

    for i:=2; i<=maxNum; i++ {
        dp[i] = max(freq[i]+dp[i-2], dp[i-1])
    }
    return dp[maxNum]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```