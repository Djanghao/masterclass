# python dp O(maxLen) solution

**Author:** Vigneswar_A
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/3396049/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/3396049/)

---

```
        
        oneGroup = max(oneGroup, 1)
        zeroGroup = max(zeroGroup, 1)
   
        dp = [0]*(maxLength+1)
        dp[0] = 1
        for i in range(maxLength+1):
            if i >= zeroGroup:
                dp[i] += dp[i-zeroGroup]
            if i >= oneGroup:
                dp[i] += dp[i-oneGroup]

        return sum(dp[minLength:maxLength+1])%(10**9 + 7)
        
```