# dart easy approach

**Author:** ayyubi_vh
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/5530297/](https://leetcode.com/problems/linked-list-components/solutions/5530297/)

---

/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */

class Solution {
  /**
   * This function calculates the number of connected components in a linked list that are subsets
   * of the given list 'nums'. A connected component is defined as a maximal set of consecutive
   * nodes in the linked list, each of which has a value in 'nums'.
   *
   * @param head - The head of the singly-linked list.
   * @param nums - A list of integers representing the values to check against the linked list nodes.
   * @return int - The number of connected components in the linked list where the nodes' values 
   *     
   *               are present in 'nums'.
   */

  int numComponents(ListNode? head, List<int> nums) {
    // Convert the list 'nums' to a set for O(1) average time complexity in lookups.
    Set<int> n = {};
    for (int i = 0; i < nums.length; i++) {
      n.add(nums[i]);
    }
    
    ListNode? temp = head;
    int count = 0;

    while (temp != null) {
      // Check if the current node's value is in the set 'n'.
      if (n.contains(temp.val)) {
        // Start of a new connected component
        count++;
        // Remove the value from the set and traverse the component
        n.remove(temp.val);
        temp = temp.next;

        // Continue traversing as long as the consecutive nodes' values are in the set 'n'
        while (temp != null) {
          if (n.contains(temp.val)) {
            n.remove(temp.val);
            temp = temp.next;
          } else {
            break;
          }
        }
      } else {
        // Move to the next node if the current value is not in the set 'n'
        temp = temp?.next;
      }
    }
    return count;
  }
}
