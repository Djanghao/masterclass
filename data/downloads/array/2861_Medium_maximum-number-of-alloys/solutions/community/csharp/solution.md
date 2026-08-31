# [C#] [100%] Binary search O(log n) solution

**Author:** akhlebka
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-alloys/solutions/4055582/](https://leetcode.com/problems/maximum-number-of-alloys/solutions/4055582/)

---

# Approach
For each machine count **maximum** of alloys could be produced within the budget cap using binary search.

# Complexity
- Time complexity: $$O(log n)$$

- Space complexity: $$O(1)$$

# Code
```
public class Solution {
    public int MaxNumberOfAlloys(int n, int k, int budget, IList<IList<int>> composition, IList<int> stock, IList<int> cost) {
        var result = 0;

        for (var i = 0; i < k; i++) // iterate over machines
        {
            long min = 0, max = int.MaxValue - 1; // initialize min and max alloys count 
            while (min < max)
            {
                var middle = (min + max + 1) / 2; // current number of alloys we try to produce
                var details = composition[i].Select(x => middle * x).ToArray(); // counting amount of each metal to complete alloy

                long sum = 0;
                for (var j = 0; j < n; j++)
                {
                    details[j] = Math.Max(0, details[j] - stock[j]); // counting amount of each metal needed to pay for
                    sum += (details[j] * cost[j]); // summing up
                }

                if (sum <= budget)
                {
                    min = middle;
                }
                else
                {
                    max = middle - 1;
                }
            }

            result = (int)Math.Max(result, min); // changing the result
        }
        
        return result;
    }
}
```