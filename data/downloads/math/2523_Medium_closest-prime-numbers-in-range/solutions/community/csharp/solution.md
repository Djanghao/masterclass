# Use Sieve Of Eratosthenes

**Author:** cachxinhtrai
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/5920214/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/5920214/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(right)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int[] ClosestPrimes(int left, int right) {
        bool[] IsPrime = new bool[right + 1];
        int[] result = new int[2];
        int min = Int32.MaxValue;
        for(int i = 2; i <= right; i++)
        {
            IsPrime[i] = true;
        }
        for(int i = 2; i*i <= right; i++)
        {
            if(IsPrime[i])
            {
                for(int j = i*i; j <= right; j+=i)
                {
                    IsPrime[j]= false;
                }
            }
        }
        List<int> primes = new List<int>();
        for(int i = left; i <= right; i++)
        {
            if(IsPrime[i])
            {
                primes.Add(i);
            }
        }
        int nums1 = -1;
        int nums2 = -1;
        for(int i = 0; i < primes.Count - 1; i++)
        {
            int diff = primes[i+1] - primes[i];
            if(diff < min)
            {
                min = diff;
                nums1 = primes[i];
                nums2 = primes[i+1];
            }
        }
        result = [nums1, nums2];
        return result;
    }
}
```