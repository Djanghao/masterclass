# C# simple solution

**Author:** Granuch
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-divisors/solutions/4136929/](https://leetcode.com/problems/three-divisors/solutions/4136929/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to search all n % (numbers from 1 to n) == 0 results

# Approach
<!-- Describe your approach to solving the problem. --> Just use a for to check all the numbers that match the condition

# Complexity
- Time complexity: 26ms Beats 76.92%of users with C#
<!-- Add your time complexity here, e.g. $$O(n)$$ --> 

- Space complexity: 27.80MB Beats 100.00%of users with C#
<!-- Add your space complexity here, e.g. $$O(n)$$ --> 

# Code
```
public class Solution {
    public bool IsThree(int n)
{
    int result = 1;
    for (int i = 1; i < n; i++)
    {
        if (n % i == 0)
        {

            result++;
        }
    }
    return result == 3;
}   
}
```