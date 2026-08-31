# C# - One Line Solution | Linq

**Author:** ansche
**Votes:** 2
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/3078726/](https://leetcode.com/problems/most-frequent-even-element/solutions/3078726/)

---

# Intuition
Same as some other solutions. Group Evens and take smallest number that is tied for the most. This can be slower due to sorting.

# Approach
```?.``` and ```??``` help to reduce lines.

# Code
```
public class Solution {
    public int MostFrequentEven(int[] nums) {
        return nums.Where(x => x % 2 == 0).GroupBy(x => x).OrderByDescending(x => x.Count()).ThenBy(x => x.Key).FirstOrDefault()?.Key ?? -1;
    }
}
```