# Go Recursive DP

**Author:** hendraeffendi96
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3518204/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3518204/)

---

# Intuition
DP problem.

# Approach
Process all posible answer.
The next posible answer is 
- current length (**temp**) + length of **ZERO** OR
- current length (**temp**) + length of **ONE**

Another Condition that we need to pay attention is
- if current length (**temp**) is in between **LOW** and **HIGH** then we need to add 1 to the answer + all next posible answer.
- else find next posible answer

stop condition for the recursive 
- is temp length is more than high

Also dont forget to modulo the answer


# Code

```
const(
    mod = 1000000007
)
func countGoodStrings(low int, high int, zero int, one int) int {
    memo := make(map[int]int)
    result := helper(low,high,zero, one, 0, memo)
    return result
}

func helper(low int, high int, zero int, one int, temp int, memo map[int]int)int{
    if temp > high {
        return 0
    }
    if _, ok := memo[temp]; ok {
        return memo[temp]
    }
    if temp >= low && temp <= high{
        memo[temp] = (helper(low, high, zero, one, temp + zero, memo) + helper(low, high, zero, one, temp + one, memo)  + 1) % mod
        return memo[temp]
    }
    memo[temp] = (helper(low, high, zero, one, temp + zero, memo) + helper(low, high, zero, one, temp + one, memo))% mod

    return memo[temp]
}
```