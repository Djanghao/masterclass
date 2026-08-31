# Simple iterative C# solution

**Author:** diwakar8
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/5822213/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/5822213/)

---


# Approach
Sort the special array.
- Loop through the integers between bottom and top
- Identify if the specials are not sequential
- Keep making the current item as the bottom
- Note down the gap between bottom and the next item 

# Code
```csharp []
public class Solution {
    public int MaxConsecutive(int bottom, int top, int[] special) {
        int maxSeq = 0;
        Array.Sort(special);

            for (int j = 0; j < special.Length; j++)
            {
                if (j > 0 && special[j] == special[j-1] + 1)
                {
                    bottom = special[j];
                    continue;
                }
                if (special[j] > bottom)
                {
                    maxSeq = special[j] - bottom > maxSeq ? special[j] - bottom - (j > 0 ? 1 : 0) : maxSeq;
                    bottom = special[j];
                }

                if (j == special.Length - 1)
                {
                    maxSeq = top - special[j] > maxSeq ? top - special[j] : maxSeq;
                }
            }

        return maxSeq;
    }
}
```