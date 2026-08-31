# Sime C# solution. Pre-calculate the values O(n)

**Author:** rulyotano
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/5895655/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/5895655/)

---

# Intuition
The first intuition is iterating over each index `i` and then do a second loop to expand a radius starting at `i` to `time` as long as the conditions are kept. If I a get to time, then `i` is a solution. This is a $$O(n^2)$$ solution.
But, what if at each point `i` we already know the size of the longest non-increasing subarray ending at `i-1` and the size of the longest non-decreasing subarray starting at `i+1`?
We can easily pre-calculate this!

# Approach
- Create `leftDescendings` and `rightDescendings` arrays to pre-calculate this.
- Do an iteration from left to right to fill up `leftDescendings`. If the item at the left is lower or equal then increase by 1 the previous pre-caculated value, if not set 0.
- Do an iteration from right to left to fill up `rightDescendings`. If the item at the right is greater or equal then increase by 1 the previous pre-calculated value, if not set 0.
- Iterate over all the indexes and if `leftDescendings[i] >= time && rightDescendings[i] >= time)` add it to the solution.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public IList<int> GoodDaysToRobBank(int[] security, int time) {
        var n = security.Length;
        var leftDescendings = new int[n];
        var rightDescendings = new int[n];

        for (var i = 1; i < n; i++)
        {
            leftDescendings[i] = security[i - 1] < security[i] ? 0 : leftDescendings[i - 1] + 1;
        }

        for (var i = n - 2; i >= 0; i--)
        {
            rightDescendings[i] = security[i] > security[i + 1] ? 0 : rightDescendings[i + 1] + 1;
        }

        var result = new List<int>();
        for (var i = 0; i < n; i++)
        {
            if (leftDescendings[i]>=time && rightDescendings[i]>=time)
                result.Add(i);
        }  
        return result;
    }
}

// Sample that helped:
// s = [5,3,3,3,5,6,2]
// leftDescendings = [0,1,2,3,0,0,1]
// rightDescendings = [0,4,3,2,1,0,0]
```