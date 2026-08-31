# Java || DP || TC (O(n) || SC O(1) || Detailed Explanation

**Author:** funingteng
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-derangement-of-an-array/solutions/2099105/](https://leetcode.com/problems/find-the-derangement-of-an-array/solutions/2099105/)

---

```
 /* 1, 2, 3, 4, ... i ... n
     suppose result is dp(n)
     we can switch i with 1:  [i, 2....i-1, 1, i+1...n]
     1. i can stay and 1 can stay,
       there are dp(n - 2) sub problems because i and 1's swtich meet derangement's requirement, like [2... i - 1, i + 1...n]
     2. i cannot stay but 1 can stay
       there are dp(n - 1) sub problems because we can first switch i to 1's place but then change 
	   its identity to 1 since i cannot stay on 1st position in this case anyway, like [1....i - 1, i + 1...n]
	  Then the formula to switch i and 1 is dp(n - 1) + dp(n - 2)
	  Since i ranges from [2, n], (n - 1) items after 1 can be applied the same formula, so:
	  dp(n) = (n - 1) * (dp(n - 1) + dp(n - 2))  
    */
    final static int mod = (int)1e9 + 7;
    public int findDerangement(int n) {
        if (n <= 2) return n - 1;
        long preDp = 0;
        long dp = 1;
        for (int i = 3; i <= n; i++) {
            long temp = dp;
            dp = (i - 1) * (dp + preDp) % mod;
            preDp = temp;
        }
        return (int)dp;
    }
```