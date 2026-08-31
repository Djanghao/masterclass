# C# solution

**Author:** goOrn
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/3133550/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/3133550/)

---

# Code
```
public class Solution {
    public int MinimumRecolors(string blocks, int k) {
        
        var minOperations = Int32.MaxValue;
        for(int i = 0; i < blocks.Length; i++)
        {
            if( i + k > blocks.Length) break;

            var substr = blocks.Substring(i, k);

            var operationCount = substr.Count(x => x == 'W');

            if(operationCount < minOperations)
            {
                minOperations = operationCount;
            }
        }

        return minOperations;
    }
}
```