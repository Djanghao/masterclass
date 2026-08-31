# C# Solution for Find the Minimum and Maximum Number of Nodes Between Critical Points Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5421485/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5421485/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The task is to find the minimum and maximum distances between critical points (local maxima or minima) in a linked list. The approach involves two main steps: first, identify and store the indices of all critical points, and second, compute the minimum and maximum distances between these indices.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initial Check:
	\u2022	If the list has fewer than three nodes, it is impossible to have any critical points since a critical point requires both a previous and a next node.
2.	Traverse the List:
	\u2022	Initialize pointers prev, curr, and next to traverse the list.
	\u2022	For each node, check if it is a critical point by comparing its value with prev and next.
	\u2022	If it is a critical point, add the current index to a list of critical points.
3.	Calculate Distances:
	\u2022	If there are fewer than two critical points, return [-1, -1] as there aren\u2019t enough points to calculate distances.
	\u2022	To find the minimum distance, iterate through the list of critical points and find the smallest difference between consecutive indices.
	\u2022	The maximum distance is the difference between the first and the last critical point in the list.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n): The solution involves two passes through the linked list:
	\u2022	The first pass is to identify and store the indices of the critical points.
	\u2022	The second pass is to calculate the minimum and maximum distances.
	\u2022	Both passes are linear with respect to the number of nodes, making the overall time complexity O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n): The space complexity is mainly due to the storage of the indices of critical points. In the worst case, every node except the first and last could be a critical point, resulting in space complexity proportional to the number of nodes.

# Code
```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public int[] NodesBetweenCriticalPoints(ListNode head) {
        // If the list has fewer than 3 nodes, there can't be any critical points
        if (head == null || head.next == null || head.next.next == null) {
            return new int[] { -1, -1 };
        }

        List<int> criticalPoints = new List<int>();
        ListNode prev = head;
        ListNode curr = head.next;
        ListNode next = curr.next;
        int index = 1; // curr is the second node

        // Traverse the list to collect critical points
        while (next != null) {
            if ((curr.val > prev.val && curr.val > next.val) || (curr.val < prev.val && curr.val < next.val)) {
                criticalPoints.Add(index);
            }
            prev = curr;
            curr = next;
            next = next.next;
            index++;
        }

        // If there are fewer than 2 critical points, return [-1, -1]
        if (criticalPoints.Count < 2) {
            return new int[] { -1, -1 };
        }

        // Calculate the minimum and maximum distances between critical points
        int minDistance = int.MaxValue;
        int maxDistance = criticalPoints[criticalPoints.Count - 1] - criticalPoints[0];

        for (int i = 1; i < criticalPoints.Count; i++) {
            minDistance = Math.Min(minDistance, criticalPoints[i] - criticalPoints[i - 1]);
        }

        return new int[] { minDistance, maxDistance };
    }
}
```