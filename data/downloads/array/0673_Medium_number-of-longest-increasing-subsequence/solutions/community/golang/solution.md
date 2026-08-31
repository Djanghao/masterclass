# Golang solution using lis

**Author:** Sheelendar
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/4838208/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/4838208/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func findNumberOfLIS(nums []int) int {
    n:=len(nums)
    dp:=make([]int,n)
    count:=make([]int,n)
    max:=1; dp[0]=1; count[0]=1
    for i:=1; i<n; i++ { 
        dp[i]=1
        count[i]=1
        for j:=i-1; j>=0; j-- { 
            if nums[i] > nums[j] && dp[i]< dp[j]+1 {
                count[i]=count[j]
                dp[i]=dp[j]+1
            }else if nums[i] > nums[j] && dp[i]== dp[j]+1 {
                count[i]+=count[j]
            }
        }
        if max < dp[i]{
            max=dp[i]
        }
    }
    res:=0
    for i:=0; i<n; i++ {
        if max==dp[i]{
            res+=count[i]
        }
    }
    return res
}

```