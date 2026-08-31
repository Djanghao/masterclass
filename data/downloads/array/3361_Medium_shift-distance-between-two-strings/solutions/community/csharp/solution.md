# C# EASY TO UNDERSTAND BEATS 100%

**Author:** apsnes
**Votes:** 0
**Link:** [https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6079946/](https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6079946/)

---

# Approach
For each i in string s, calculate the cost of transforming it into t[i] both forwards and backwards. Keep a running total and add the minimum of the two forward/backwards costs.

Start by keeping two variables, j and k for the two character positions in the alphabet (0 indexed). This allows us to easily access the cost of each letter from the the relevant cost array. First calculate the forward cost by adding the current cost from the cost array to our forwards total. We add 1 to our index and mod by 26 to ensure z loops back around to a. We continue doing this until j and k are equal, indicating that the two original characters are equal.

Repeat similar steps to calculate the backwards cost, except this time we add 25 to j before we mod it by 26, simulating going backwards one step in the alphabet.

Once the two costs are calculated, add the minimum to our running total.

# Code
```csharp []
public class Solution {
    public long ShiftDistance(string s, string t, int[] nextCost, int[] previousCost) 
    {
        // Instantiate answer variable
        long ans = 0;
        //Loop through each char
        for (int i = 0; i < s.Length; i ++)
        {
            // Keep variables to contain the total cost of transforming each individual char forwards and backwards
            long backwardCost = 0;
            long forwardCost = 0;

            // Create variables to hold the index position of the two current characters and calculate forward cost
            int j = s[i] - 97;
            int k = t[i] - 97;
            // Continue looping until the characters are equal
            while (j != k)
            {
                forwardCost += nextCost[j];
                j = (j + 1) % 26;
            }      
            // Repeat co calculate backward cost
            j = s[i] - 97;
            k = t[i] - 97;
            while (j != k)
            {
                backwardCost += previousCost[j];
                j = (j + 25) % 26;
            }
            //Add lowest cost to running total
            ans += Math.Min(backwardCost, forwardCost);
        }
        return ans;
    }
}
```