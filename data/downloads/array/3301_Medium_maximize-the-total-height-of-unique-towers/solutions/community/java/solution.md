# Maximum Total Height Calculation | Beats 100% ✅

**Author:** deleted_user
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5844348/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5844348/)

---

# Intuition
- To maximize the total height while ensuring no two heights are the same, start from the tallest height and adjust downward as necessary.

# Approach:
- Sort the heights in ascending order.
- Iterate from the tallest to the shortest height, adjusting each height to ensure it's less than the previous assigned height, while keeping it above zero.

# Complexity
- Time complexity:  
  $$O(n \\log n)$$ \u2014 Sorting the array takes \\(O(n \\log n)\\), followed by a linear scan of \\(O(n)\\).
  
- Space complexity:  
  $$O(1)$$ \u2014 No additional data structures are used; only variables for tracking.

# Code
```java
class Solution {
    public long maximumTotalSum(int[] maximumHeight) {
        int n = maximumHeight.length;
        Arrays.sort(maximumHeight);
        
        long sum = 0;
        int lastAssignedHeight = Integer.MAX_VALUE;
        
        for (int i = n - 1; i >= 0; i--) {
            int currentHeight = Math.min(maximumHeight[i], lastAssignedHeight - 1);
            
            if (currentHeight < 1) {
                return -1;
            }
            
            sum += currentHeight;
            lastAssignedHeight = currentHeight;
        }
        
        return sum;
    }
}
```

# Upvote if you found this helpful! \uD83D\uDE0A