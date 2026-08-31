# C# Frequency Counting and Condition-Checking Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/5865823/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/5865823/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->Identify what makes a number lonely: A number needs to appear exactly once and its adjacent numbers should not exist in the array.
- Key operations: We need to count how many times each number appears (hence, a frequency map) and check the presence of adjacent numbers (x-1 and x+1).
- Efficient lookup: Since we need to perform checks like "does this number appear only once?" and "do its neighbors exist?" efficiently, a hash map (dictionary in C#) is a natural choice because it allows for O(1) time complexity for lookups.
- Iterate and filter: After collecting the necessary data in the frequency map, I knew that another pass over the array would suffice to apply the conditions and filter out the lonely numbers.
___
# Approach
<!-- Describe your approach to solving the problem. -->//  Frequency Map: We first create a frequency map (Dictionary<int, int>) where each number is a key, and the value represents the number of times that number appears in the array.
//  Check Conditions: For each number, we check:
//  *It should appear exactly once (frequency[num] == 1).
//  *Neither its predecessor (num - 1) nor its successor (num + 1) should exist in the frequency map.
//  Store Results: If the conditions are satisfied, we add the number to the list of lonely numbers.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where 'n' is the length of the array.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___

# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution {
    public IList<int> FindLonely(int[] nums) {
        Dictionary<int, int> frequency = new Dictionary<int, int>();
        List<int> lonelyNumbers = new List<int>();

        // Step 1: Count the frequency of each number in the array
        foreach (int num in nums) {
            if (frequency.ContainsKey(num)) {
                frequency[num]++;
            } else {
                frequency[num] = 1;
            }
        }

        // Step 2: Identify lonely numbers
        foreach (int num in nums) {
            // A number is lonely if it appears exactly once and
            // its adjacent numbers (num - 1 and num + 1) are not present
            if (frequency[num] == 1 && !frequency.ContainsKey(num - 1) && !frequency.ContainsKey(num + 1)) {
                lonelyNumbers.Add(num);
            }
        }

        return lonelyNumbers;
    }
}
```