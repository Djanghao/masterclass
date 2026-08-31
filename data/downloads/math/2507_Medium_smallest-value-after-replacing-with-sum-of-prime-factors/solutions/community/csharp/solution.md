# Runtime C# beats 100%

**Author:** cachxinhtrai
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/5930706/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/5930706/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(Sqrt(N))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public bool IsPrime(int n)
    {
        if(n < 2) return false;
        for(int i = 2; i * i <= n; i++)
        {
            if(n % i == 0) return false;
        }
        return true;
    }
    public int DivideProduct(int n)
    {
        int totalDivideProduct = 0;
        for(int i = 2; i * i <= n; i++)
        {
            while(n%i==0) 
            {
                n/=i;
                totalDivideProduct += i;
            }

        }
        if(n > 1) totalDivideProduct += n;
        return totalDivideProduct;
    }
    public int SmallestValue(int n) {
        HashSet<int> seen = new HashSet<int>(); // L\u01B0u c\xE1c gi\xE1 tr\u1ECB \u0111\xE3 t\xEDnh
        int result = DivideProduct(n);
        
        while(!IsPrime(result) && !seen.Contains(result)) 
        {
            seen.Add(result); // Th\xEAm v\xE0o set \u0111\u1EC3 tr\xE1nh l\u1EB7p l\u1EA1i
            result = DivideProduct(result);
        }
        
        return result;
    }
}
```