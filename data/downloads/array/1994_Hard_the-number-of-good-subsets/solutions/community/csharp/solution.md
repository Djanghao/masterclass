# 💥beats runtime 100%, 55.56% on memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-good-subsets/solutions/5950529/](https://leetcode.com/problems/the-number-of-good-subsets/solutions/5950529/)

---

# Intuition
Count "good subsets" from a list of numbers, focusing on specific values that have unique properties. The goal is to efficiently calculate the number of ways to select these values while respecting their multiplicative relationships and avoiding duplicates.

# Approach
Count the occurrences of specific numbers, then use combinatorial calculations with modular arithmetic to determine the total number of good subsets by combining these counts in various ways.

# Complexity
- Time complexity:
O(n), where n is the length of the input array, because we traverse it once to count the specific numbers.

- Space complexity:
O(1), as we use a fixed number of counters regardless of the input size.

# Code
```csharp []
using System;

public class Solution
{
    // Counters for specific numbers in the input array
    private int count1, count2, count3, count5, count6, count7;
    private int count10, count11, count13, count14, count15;
    private int count17, count19, count21, count22, count23;
    private int count26, count29, count30;

    // Counts occurrences of specified numbers and calculates good subsets
    public int NumberOfGoodSubsets(int[] nums)
    {
        foreach (int n in nums)
        {
            switch (n)
            {
                case 1: count1++; break;
                case 2: count2++; break;
                case 3: count3++; break;
                case 5: count5++; break;
                case 6: count6++; break;
                case 7: count7++; break;
                case 10: count10++; break;
                case 11: count11++; break;
                case 13: count13++; break;
                case 14: count14++; break;
                case 15: count15++; break;
                case 17: count17++; break;
                case 19: count19++; break;
                case 21: count21++; break;
                case 22: count22++; break;
                case 23: count23++; break;
                case 26: count26++; break;
                case 29: count29++; break;
                case 30: count30++; break;
            }
        }

        long result = (ModPower2(count1) * (
            ModMult(count2 + 1, count3 + 1, count5 + 1, count7 + 1, count11 + 1,
                    count13 + 1, count17 + 1, count19 + 1, count23 + 1, count29 + 1) - 1
            + ModMult(count6, count5 + 1, count7 + 1, count11 + 1, count13 + 1,
                      count17 + 1, count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count10, count3 + 1, count7 + 1, count11 + 1, count13 + 1,
                      count17 + 1, count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count14, count3 + 1, count5 + 1, count11 + 1, count13 + 1,
                      count17 + 1, count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count15, count2 + 1, count7 + 1, count11 + 1, count13 + 1,
                      count17 + 1, count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count21, count2 + 1, count5 + 1, count11 + 1, count13 + 1,
                      count17 + 1, count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count22, count3 + 1, count5 + 1, count7 + 1, count13 + 1,
                      count17 + 1, count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count26, count3 + 1, count5 + 1, count7 + 1, count11 + 1,
                      count17 + 1, count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count30, count7 + 1, count11 + 1, count13 + 1, count17 + 1,
                      count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count10, count21, count11 + 1, count13 + 1, count17 + 1,
                      count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count14, count15, count11 + 1, count13 + 1, count17 + 1,
                      count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count15, count22, count7 + 1, count13 + 1, count17 + 1,
                      count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count15, count26, count7 + 1, count11 + 1, count17 + 1,
                      count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count21, count22, count5 + 1, count13 + 1, count17 + 1,
                      count19 + 1, count23 + 1, count29 + 1)
            + ModMult(count21, count26, count5 + 1, count11 + 1, count17 + 1,
                      count19 + 1, count23 + 1, count29 + 1)
        )) % 1000000007;

        return (int)result; // Return the result as an integer
    }

    // Modular multiplication of provided values
    private long ModMult(params long[] values)
    {
        long product = 1;
        foreach (long value in values)
        {
            product = (product * value) % 1000000007;
        }
        return product;
    }

    // Calculate modular power of 2
    private long ModPower2(long l)
    {
        long result = 1;
        long fullGroups = l / 30;
        long remainder = l % 30;

        for (long i = 0; i < fullGroups; i++)
            result = ModMult(result, 73741817); // 2^30 % 1000000007

        return ModMult(result, 1L << (int)remainder); // Multiply by 2^remainder
    }
}

```