# c# count digits

**Author:** rajeshkumar1130
**Votes:** 0
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/5910377/](https://leetcode.com/problems/reordered-power-of-2/solutions/5910377/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public bool ReorderedPowerOf2(int n) {

        var count = Count(n);
        for(int i = 0;i<=31;i++)
        {
            if(Enumerable.SequenceEqual(count, Count(1<<i)))
            {
                return true;
            }
        }

        return false;
    }

    int[] Count(int n)
    {
        int[] count = new int[10];
        while(n>0)
        {
            count[n%10]++;
            n /= 10;
        }

        return count;
    }
}
```