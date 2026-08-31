# simple c# solution

**Author:** linawork
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/6122243/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/6122243/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
sort the list before

# Approach
<!-- Describe your approach to solving the problem. -->
sort the list. loop from small to big. 
calculate the sum. if  reach max, stop, else add more apples to the basket.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MaxNumberOfApples(int[] weight) 
    {
        
        int sum = 0;
        int count = 0;
        int max = 5000;
        
        // Sort the array
        Array.Sort(weight);
        
        //from min to max until reach 5000
        foreach (int number in weight)
        {
            if (sum + number > max) 
                return count;
            sum += number;
            count++;
        }
        return count;
    }
}
```