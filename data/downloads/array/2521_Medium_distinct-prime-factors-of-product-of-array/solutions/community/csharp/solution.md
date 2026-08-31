# Easy

**Author:** cachxinhtrai
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/5923742/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/5923742/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogK)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    Dictionary<int, int> dict = new Dictionary<int, int>();
    public void CalPrime(int n)
    {
        for(int j = 2; j * j <= n; j++)
        {
            if(n % j == 0)
            {
                if(!dict.ContainsKey(j)) dict[j] = 0;
                dict[j]++;
                while(n % j == 0) n /= j;
            }
        }
        if(n > 1)
        {
            if(!dict.ContainsKey(n)) dict[n] = 1;
        }
    }
    public int DistinctPrimeFactors(int[] nums) {
        for(int i = 0; i < nums.Length; i++)
        {
            CalPrime(nums[i]);
        }
        return dict.Count();
    }
}
```