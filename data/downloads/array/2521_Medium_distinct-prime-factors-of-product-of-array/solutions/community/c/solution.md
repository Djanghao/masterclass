# C++ || Easy to understand

**Author:** MohakHarjani
**Votes:** 22
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2977549/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2977549/)

---

This question is based on a question from previous contest. Both questions use the same approach
Previous contest question => https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/
previous contest solution => https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/discuss/2923624/c-simple-prime-factorization

```
class Solution {
public:
    void addPrimeFactors(set<int>&st, int n)
    {
        int divisor = 2;
        long long ans = 0;
        while(n > 1)
        {
            if (n % divisor == 0) 
            {
                st.insert(divisor);
                n = n / divisor;
            }
            else divisor++;
        }
    }
    int distinctPrimeFactors(vector<int>& nums) 
    {
        set<int>st;
        for (int num : nums) addPrimeFactors(st, num);
        return st.size();
        
    }
};
```