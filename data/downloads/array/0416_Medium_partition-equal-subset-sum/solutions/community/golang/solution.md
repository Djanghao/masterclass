# Simple solution with full explanation, beats 100% runtime and 75% memory

**Author:** ragnar_by
**Votes:** 3
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/3262014/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/3262014/)

---

# Intuition
We want to find some subset with half of total sum. So we can check with dynamic programming, if we can find such subset in subarray.
# Approach
At first we should count **sum** and check if is even. Then we create array **dp**, where we should set true for index i, if we can reach such index.
Then we loop for our array **nums** and check indexes in **dp**, which we can reach with subarray of **nums** from start to current index.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
 $$O(n* sum /2)$$ where sum is sum of numbers in array
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
$$O(sum)$$

# Code
```

func canPartition(nums []int) bool {
    sum:=0
    for _,v :=range nums {
        sum+=v
    }
    if sum%2==1 {
        return false
    }
    sum = sum/2
    dp:=make([]bool,sum,sum) // array to mark reachable numbers
    dp[0] = true
    for _,n:=range nums {
        if n<=sum {   // to skip too big numbers
            if dp[sum-n] == true { // we found our sum
                return true
            }      
            for j:=sum-n-1;j>=0;j--{ // we loop in opposite direction, because we don't want to check index and then loop over it
                if dp[j] == true  {
                        dp[j+n] = true
                }
            }    
        }
    }          
    return false
}
```