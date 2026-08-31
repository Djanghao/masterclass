# C# O(1) Space Complexity / O(n) Time Complexity

**Author:** hoosierfools
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/4626542/](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/4626542/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Reversing a linked list but with extra tracking.

# Approach
<!-- Describe your approach to solving the problem. -->
Approach first like reversing a link list but for sublists. Then think about handling updating the links outside of sublist. Final item to consider is the last group may not be the expected even or odd, so may need to reverse your previous logic. 


# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
We iterate through the list N + K times where K is the last group of N. Since K <= N this reduces to O(N).

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
We only ~11 variables at the worst case regardless of list size, so this is reduced to O(1) for complexities sake. 

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
    public ListNode ReverseEvenLengthGroups(ListNode head) {
        ListNode prev = null;
        ListNode node = head;
        int nodesInGroup = 1;
        
        while (node != null) {
            // Track for linkage updates
            ListNode firstNodeInGroup = node;
            ListNode groupPrev = prev;

            // Odd group
            if (nodesInGroup % 2 != 0) {
                int counter = 0;
                // Move forward in this group
                while (counter < nodesInGroup && node != null) {
                    prev = node;
                    node = node.next;
                    counter++;
                }

                // Last group expected odd group but was even, so reverse
                if (counter % 2 == 0) {
                    (var reverseHead, var count) = ReverseSubList(firstNodeInGroup, counter);

                    // Update links outside of group
                    groupPrev.next = reverseHead;
                    node = null;
                }
            }
            else { // Even Groups
                // Reverse
                (var reverseHead, var count) = ReverseSubList(firstNodeInGroup, nodesInGroup);

                // Update links outside of group
                prev.next = reverseHead;
                prev = firstNodeInGroup;
                node = firstNodeInGroup.next;

                // Expected even group but was odd, so undue reverse
                if (count % 2 != 0) {
                    _ = ReverseSubList(reverseHead, count);

                    // Update links outside of group
                    groupPrev.next = firstNodeInGroup;
                    node = null;
                }
            }

            nodesInGroup++; // next group is ready to be processed
        }

        return head;
    }

    private (ListNode lastNodeInGroup, int counter) ReverseSubList(ListNode startNode, int nodesInGroup) {
        ListNode prev = null;
        ListNode node = startNode;
        int counter = 0;
        while (counter < nodesInGroup && node != null) {
            // Reverse nodes
            var tmp = node.next;
            node.next = prev;
            prev = node;
            node = tmp;
            counter++;
        }

        startNode.next = node;
        return (prev, counter);
    }
}
```