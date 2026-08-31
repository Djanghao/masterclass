# Go easy solution

**Author:** Ranxin2024
**Votes:** 1
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/3719621/](https://leetcode.com/problems/burst-balloons/solutions/3719621/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use dynamic programming for memorization, and recursively find the result

# Approach
<!-- Describe your approach to solving the problem. -->
1, Add 1 to the front and the back of the array, num
2, Looping through start and end and store all the result in dp after each recursion
3, Keep the last ballon and the rest result goes to recursion. Then add the recursive result and the last multiplication to the result. 
4, Because go is not object-orientation, we will define inner function, helper, inside maxCoins in order not to pass nums as parameter, which will take extra time to deep copy to the parameter. 
# Complexity
- Time complexity:O(n^3)
- In the helper function, we have a recursive loop, which should spent about O(n!). However, because we have dp, each loop only takes O(n^2). So the time is O(n^3) totally.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n^2)
dp is an (n+2)*(n+2) matrix, so the space is O(n^2) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Code
```
func maxCoins(nums []int) int {
    n:=len(nums)
    var dp=make([][]int, n+2)
    for i:=range dp{
        dp[i]=make([]int, n+2)
        for j:=range dp[i]{
            dp[i][j]=-1
        }
    }
    var nums_=[]int{1}
    for _, num:=range nums{
        nums_=append(nums_, num)
    }
    nums_=append(nums_, 1)
    var helper func(start int, end int)int
    helper = func(start int, end int)int{
        if start>end{
            return 0
        }
        if dp[start][end] !=-1{
            return dp[start][end]
        }
        res:=0
        for i:=start; i<=end; i++{
            cost:=nums_[start-1]*nums_[i]*nums_[end+1]+helper(start, i-1)+helper(i+1, end)
            res=int(math.Max(float64(res), float64(cost)))
        }
        dp[start][end]=res
        return res
    }
    return helper(1, n)
}
```