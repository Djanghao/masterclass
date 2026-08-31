# C# Solution for Separate Black and White Balls Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5914341/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5914341/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks to group all the white balls (\u20180\u2019s) to the left and all the black balls (\u20181\u2019s) to the right using the minimum number of swaps. Instead of thinking about swapping adjacent balls directly, we focus on finding the optimal way to position all \u20180\u2019s to the left in their correct places.

The key insight is that we don\u2019t need to swap adjacent elements one by one. Instead, we can count how far out of place each \u20180\u2019 is. The minimum number of swaps is simply the sum of the distances each \u20180\u2019 has to move left to reach its correct position. Each \u20180\u2019 should occupy the next available leftmost spot, and we can calculate how far it needs to move in constant time.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Track the Next Available Position for \u20180\u2019s:
	\u2022	We keep track of the next available leftmost position where a \u20180\u2019 should go using the whitePosition variable.
	\u2022	Whenever we find a \u20180\u2019, we compute how many moves (swaps) are needed to place it at whitePosition, which is the correct position for the next \u20180\u2019.
2.	Iterate Over the String:
	\u2022	Loop over the string, and for every \u20180\u2019 encountered, compute the difference between its current position and whitePosition. This difference is the number of swaps needed to move the \u20180\u2019 into the correct place.
	\u2022	Add this number to the totalSwaps, and increment whitePosition for the next \u20180\u2019.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n): The algorithm processes the string exactly once, iterating through each character. For each character, it performs constant-time operations (comparison and addition). Thus, the time complexity is linear in the length of the string, n.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1): The algorithm only uses a few integer variables\u2014whitePosition, totalSwaps, and currentPos. It does not use any additional data structures that depend on the size of the input. Therefore, the space complexity is constant.

# Code
```csharp []
public class Solution {
    public long MinimumSteps(string s) {
        int whitePosition = 0;  
        long totalSwaps = 0; 
        for (int currentPos = 0; currentPos < s.Length; currentPos++) {
            if (s[currentPos] == '0') {
                totalSwaps += currentPos - whitePosition;

                whitePosition++;
            }
        }

        return totalSwaps;
    }
}
```