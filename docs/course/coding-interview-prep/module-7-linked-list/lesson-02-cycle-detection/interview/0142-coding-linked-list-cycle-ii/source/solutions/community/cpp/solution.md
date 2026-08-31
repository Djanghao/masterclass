# Clean Codes🔥🔥|| Full Explanation✅|| Floyd's Cycle-Finding algorithm✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 617
**Link:** [https://leetcode.com/problems/linked-list-cycle-ii/solutions/3274329/](https://leetcode.com/problems/linked-list-cycle-ii/solutions/3274329/)

---

# Intuition :
- Use a **Floyd's Cycle-Finding algorithm** to detect a cycle in a linked list and find the node where the cycle starts.
<!-- Describe your first thoughts on how to solve this problem. -->

# What is Floyd's Cycle-Finding algorithm ?
- It is also called **Hare-Tortoise algorithm**
- The algorithm works by using two pointers, a slow pointer and a fast pointer. 
- Initially, both pointers are set to the head of the linked list. 
- The fast pointer moves twice as fast as the slow pointer. 
- If there is a cycle in the linked list, eventually, the fast pointer will catch up with the slow pointer. 
- If there is no cycle, the fast pointer will reach the end of the linked list.
# Approach :
- When the two pointers meet, we know that there is a cycle in the linked list. 
- We then reset the slow pointer to the head of the linked list and move both pointers at the same pace, one step at a time, until they meet again. 
- The node where they meet is the starting point of the cycle.
- If there is no cycle in the linked list, the algorithm will return null.
<!-- Describe your approach to solving the problem. -->
# Let's understand this with an Example :
- Let's say we have a linked list with a cycle, like the one below:
```
1 -> 2 -> 3 -> 4 -> 5 -> 2
```
- To detect the cycle and find the starting point, we use two pointers, a slow pointer and a fast pointer, initially set to the head of the linked list.
```
slow = 1
fast = 1
```
- Then we move the pointers through the linked list. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time.
```
slow = 2
fast = 3

slow = 3
fast = 5

slow = 4
fast = 2
```
- Eventually, the fast pointer will catch up with the slow pointer, which means that there is a cycle in the linked list.
```
slow = 5
fast = 4
```
- At this point, we reset the slow pointer to the head of the linked list, and move both pointers one step at a time until they meet again.
```
slow = 1
fast = 4

slow = 2
fast = 5

slow = 3
fast = 2
```
- The node where they meet is the starting point of the cycle, which in this case is node 2.
- So, the algorithm returns node 2 as the starting point of the cycle.
- I hope this visual explanation helps you understand the Floyd's Cycle-Finding algorithm better.
# Complexity :
- Time complexity : O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
# Codes [C++ |Java |Python3] : With Comments
```Java []
public class Solution {
  public ListNode detectCycle(ListNode head) {
    // Initialize two pointers, slow and fast, to the head of the linked list.
    ListNode slow = head;
    ListNode fast = head;

    // Move the slow pointer one step and the fast pointer two steps at a time through the linked list,
    // until they either meet or the fast pointer reaches the end of the list.
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        // If the pointers meet, there is a cycle in the linked list.
        // Reset the slow pointer to the head of the linked list, and move both pointers one step at a time
        // until they meet again. The node where they meet is the starting point of the cycle.
        slow = head;
        while (slow != fast) {
          slow = slow.next;
          fast = fast.next;
        }
        return slow;
      }
    }

    // If the fast pointer reaches the end of the list without meeting the slow pointer,
    // there is no cycle in the linked list. Return null.
    return null;
  }
}

```
```C++ []
class Solution {
 public:
  ListNode* detectCycle(ListNode* head) {
    // Initialize two pointers, slow and fast, to the head of the linked list.
    ListNode* slow = head;
    ListNode* fast = head;

    // Move the slow pointer one step and the fast pointer two steps at a time through the linked list,
    // until they either meet or the fast pointer reaches the end of the list.
    while (fast && fast->next) {
      slow = slow->next;
      fast = fast->next->next;
      if (slow == fast) {
        // If the pointers meet, there is a cycle in the linked list.
        // Reset the slow pointer to the head of the linked list, and move both pointers one step at a time
        // until they meet again. The node where they meet is the starting point of the cycle.
        slow = head;
        while (slow != fast) {
          slow = slow->next;
          fast = fast->next;
        }
        return slow;
      }
    }

    // If the fast pointer reaches the end of the list without meeting the slow pointer,
    // there is no cycle in the linked list. Return nullptr.
    return nullptr;
  }
};

```
```Python []
class Solution:
  def detectCycle(self, head: ListNode) -> ListNode:
    # Initialize two pointers, slow and fast, to the head of the linked list.
    slow = head
    fast = head

    # Move the slow pointer one step and the fast pointer two steps at a time through the linked list,
    # until they either meet or the fast pointer reaches the end of the list.
    while fast and fast.next:
      slow = slow.next
      fast = fast.next.next
      if slow == fast:
        # If the pointers meet, there is a cycle in the linked list.
        # Reset the slow pointer to the head of the linked list, and move both pointers one step at a time
        # until they meet again. The node where they meet is the starting point of the cycle.
        slow = head
        while slow != fast:
          slow = slow.next
          fast = fast.next
        return slow

    # If the fast pointer reaches the end of the list without meeting the slow pointer,
    # there is no cycle in the linked list. Return None.
    return None

```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)

