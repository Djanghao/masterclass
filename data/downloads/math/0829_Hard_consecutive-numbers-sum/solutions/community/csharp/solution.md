# 💥 C# | Runtime beats 100.00%, Memory beats 81.82% [EXPLAINED]

**Author:** r9n
**Votes:** 12
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/5752241/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/5752241/)

---

# Intuition
Intuition for the Problem: Imagine you have a number n and you want to find how many different ways you can express it as the sum of consecutive positive integers. For example, if n=9, you can write it as 4 + 5 or 2 + 3 + 4. The key is to find all possible sequences where the sum is exactly n.

# Approach
Iterate over possible sequence lengths k.

Check if n can be divided into k consecutive numbers.

Count the valid sequences where this division is possible.

# Complexity
- Time complexity:
O(\u221An).

- Space complexity:
O(1)

# Code
```csharp []
public class Solution
{
    public int ConsecutiveNumbersSum(int n)
    {
        int count = 0;
        int k = 1;
        
        // Continue while k * (k-1) / 2 < n
        while (k * (k - 1) / 2 < n)
        {
            // Calculate the remaining part after subtracting the sum of first (k-1) numbers
            int remaining = n - k * (k - 1) / 2;

            // Check if remaining is divisible by k
            if (remaining % k == 0)
            {
                count++;
            }

            k++;
        }

        return count;
    }
}

```