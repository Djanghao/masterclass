# 💥C# | Runtime beats 100.00%, Memory beats 96.00%

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/5762777/](https://leetcode.com/problems/nth-magical-number/solutions/5762777/)

---

# Intuition
To find the nth magical number (divisible by either a or b), use a binary search approach. Instead of generating numbers, we efficiently locate the nth number by checking how many magical numbers are less than or equal to a candidate value.

# Approach
Binary Search: Search between 1 and a large number (n * min(a, b)) to find the nth magical number.

Counting Magical Numbers: For a given number x, count numbers divisible by a, b, and both using inclusion-exclusion principle with LCM.

LCM Calculation: Find lcm(a, b) using gcd(a, b).

# Complexity
- Time complexity:
O(log(n . min(a, b))),  due to binary search.


- Space complexity:
O(1), as we only use a few variables.

# Code
```csharp []
public class Solution
{
    private const int MOD = 1000000007;

    public int NthMagicalNumber(int n, int a, int b)
    {
        long lcm = Lcm(a, b);
        
        // Binary search range
        long left = 1, right = (long)n * Math.Min(a, b);
        
        while (left < right)
        {
            long mid = left + (right - left) / 2;
            if (Count(mid, a, b, lcm) < n)
                left = mid + 1;
            else
                right = mid;
        }
        
        return (int)(left % MOD);
    }
    
    private long Count(long x, int a, int b, long lcm)
    {
        return x / a + x / b - x / lcm;
    }
    
    private long Lcm(int a, int b)
    {
        return (long)a * b / Gcd(a, b);
    }
    
    private int Gcd(int a, int b)
    {
        while (b != 0)
        {
            int temp = a;
            a = b;
            b = temp % b;
        }
        return a;
    }
}

```