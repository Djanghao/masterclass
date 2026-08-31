# C# Greedy Beat 100%

**Author:** sh2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/4417037/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/4417037/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
o(nlogn)
- Space complexity:
O(n) for sorting
# Code
```
public class Solution {
    public int MaxBoxesInWarehouse(int[] boxes, int[] warehouse) {

        int m = boxes.Length,n = warehouse.Length;
        Array.Sort(boxes, (a, b) => b - a);
        int count = 0, room = 0;
        for (int i = 0; i < m && room < n; i++) 
            if (boxes[i] <= warehouse[room]) {
                room++;
                count++;
            }
        return count;
    }
}
```