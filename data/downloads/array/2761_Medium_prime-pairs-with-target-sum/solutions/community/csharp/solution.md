# C# easy

**Author:** cachxinhtrai
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/5924637/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/5924637/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public bool IsPrimeNumber(int n)
    {
        if(n < 2) return false;
        for(int i = 2; i * i <= n; i++)
        {
            if(n%i == 0) return false;
        }
        return true;
    }
    public IList<IList<int>> FindPrimePairs(int n) {
        IList<IList<int>> result = new List<IList<int>>();
        List<int> list = new List<int>();
        bool[] IsPrime = new bool[n];
        for(int i = 2; i < n; i++)
        {
            IsPrime[i] = true;
        }
        for(int i = 2; i * i < n; i++)
        {
            if(IsPrime[i])
            {
                for(int j = i*i; j < n; j+=i)
                {
                    IsPrime[j] = false;
                }
            }
        }
        for(int i = 2; i < IsPrime.Length; i++)
        {
            if(IsPrime[i])
            {
                if(IsPrimeNumber(n - i))
                {
                    result.Add(new List<int> {i, n - i});
                    IsPrime[n - i] = false;
                }
            }
        }
        return result;
    }
}
```