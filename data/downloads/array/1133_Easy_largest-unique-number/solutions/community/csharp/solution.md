# Solved via hashsets.

**Author:** shnitsel666
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/3587985/](https://leetcode.com/problems/largest-unique-number/solutions/3587985/)

---

# Approach
Solved via hashsets.

# Code
```
public class Solution {
    public int LargestUniqueNumber(int[] nums) {
        HashSet<int> single = new();
        HashSet<int> many = new();

        foreach(int num in nums)
        {
            if(many.Contains(num))
            {
                continue;
            }

            if(single.Contains(num))
            {
                single.Remove(num);
                many.Add(num);
            }
            else
            {
                single.Add(num);
            }
        }

        return single.Any() ? single.Max() : -1;
    }
}
```