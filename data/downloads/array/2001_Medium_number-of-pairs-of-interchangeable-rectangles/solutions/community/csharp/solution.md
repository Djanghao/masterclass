# Simplest Solution C# ✅ {Please Upvote 😇}

**Author:** varunve
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/6065133/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/6065133/)

---

# Intuition
Using Dictionary to store the fraction and nC2 to get combinations.

# Approach
1. We need to find the number of pairs of interchangeable rectangles.
2. Two rectangles are interchangeable if they have the same ratio of width to height.
3. So, we need to find the ratio of width to height for each rectangle and store it in a dictionary.
4. Then, we need to find the number of pairs of rectangles with the same ratio.
5. If the number of rectangles with the same ratio is n, then the number of pairs of rectangles with the same ratio is nC2 = (n*(n-1))/2.
6. We need to calculate the number of pairs of rectangles with the same ratio for all ratios and return the result.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```csharp []
/*

Solution:
1. We need to find the number of pairs of interchangeable rectangles.
2. Two rectangles are interchangeable if they have the same ratio of width to height.
3. So, we need to find the ratio of width to height for each rectangle and store it in a dictionary.
4. Then, we need to find the number of pairs of rectangles with the same ratio.
5. If the number of rectangles with the same ratio is n, then the number of pairs of rectangles with the same ratio is nC2 = (n*(n-1))/2.
6. We need to calculate the number of pairs of rectangles with the same ratio for all ratios and return the result.

Time Complexity: O(n)
Space Complexity: O(n)


*/
public class Solution {
    public long InterchangeableRectangles(int[][] rectangles) {

        Dictionary<double,int> dict = new Dictionary<double,int>();
        long result = 0;
        foreach(var arr in rectangles) {
            double ratio = (double)arr[0]/(double)arr[1];
            if(!dict.ContainsKey(ratio)) {
                dict[ratio] = 1;
            }
            else {
                dict[ratio] = dict[ratio] + 1;
            }
        }

        foreach(var kv in dict) {
            if(kv.Value >= 2) {
                long tempMul = (long)(kv.Value)*(kv.Value-1);       // This Multiplication is huge hence calculating separately to store in long
                result = result + (tempMul/2);                      // nC2 = (n*(n-1))/2
            }
        }

        return result;
    }
}
```