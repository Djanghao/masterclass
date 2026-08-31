# C++ || Simple Prime Factorization

**Author:** MohakHarjani
**Votes:** 31
**Link:** [https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/2923624/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/2923624/)

---

```
class Solution {
public:
    long long getSumOfFactors(int n)
    {
        int divisor = 2;
        long long ans = 0;
        while(n > 1)
        {
            if (n % divisor == 0) 
            {
                ans += divisor;
                n = n / divisor;
            }
            else divisor++;
        }
        return ans;
    }
    int smallestValue(int n) 
    {   
        while(true)
        {
            long long sumOfFactors = getSumOfFactors(n);
            if (n == sumOfFactors) break;
            n = sumOfFactors;
        }
        return n;
    }
};
```