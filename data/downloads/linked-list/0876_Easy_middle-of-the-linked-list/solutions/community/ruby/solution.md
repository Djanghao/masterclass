# Simple solution || Beginner friendly || Detailed Explanation || Gits✅✅👈👈

**Author:** GiteshSK_12
**Votes:** 32
**Link:** [https://leetcode.com/problems/middle-of-the-linked-list/solutions/4660836/](https://leetcode.com/problems/middle-of-the-linked-list/solutions/4660836/)

---

# Guys if the explanation and the solution is helpful then up vote me please!!!\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

# Intuition \uD83D\uDC48
<!-- Describe your first thoughts on how to solve this problem. -->
Brute Force Solution:
In the Brute Force Solution:

- Initially, we determine the size of the LinkedList by iterating through it, incurring a time complexity of O(n), where n is the number of nodes.
`while (current != null) {
    count++;
    current = current.next;
}
`
- A condition is introduced to check if the list is empty (if(temp.next == null)), returning head.next if true.
- We then calculate the middle element's position.
- The second for loop iterates through the linked list until it reaches the middle node.
- It moves current by count / 2 steps. This works because count represents the total number of nodes, and count / 2 gives the index of the middle node.
- If the list has an even number of nodes, this loop will reach the second middle node.
`for (int i = 0; i < count / 2; i++) {
    current = current.next;
}
`
- The total time complexity is O(n) + O(n), with O(1) space complexity.
```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        int count = 0;
        ListNode current = head;

        // First iteration to count the number of nodes
        while (current != null) {
            count++;
            current = current.next;
        }

        // Reset current pointer for the second iteration
        current = head;

        // Second iteration to find the second middle node
        for (int i = 0; i < count / 2; i++) {
            current = current.next;
        }

        return current;
    }
}
```
# Approach \uD83D\uDC48
<!-- Describe your approach to solving the problem. -->
To optimize this question, we employ the two-pointer approach, reducing time complexity to O(n):
- Initialize two pointers, first_ptr and second_ptr, both pointing to the head.
- Iterate through the list, advancing first_ptr by two steps and second_ptr by one step.
- When first_ptr reaches the tail, second_ptr will be at the middle of the LinkedList.
# Complexity \uD83D\uDC48
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The implementation involves a single loop, resulting in a time complexity of O(n).
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Since no additional space is utilized, the space complexity is a  highly efficient O(1).
# Code \uD83D\uDC48
```C []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* middleNode(struct ListNode* head) {
    struct ListNode* first_ptr = head;
    struct ListNode* second_ptr = head;
    while(first_ptr != NULL && first_ptr -> next != NULL){
        second_ptr = second_ptr -> next;
        first_ptr = first_ptr -> next -> next;
    }
    return second_ptr;
}
```
```C++ []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* first_ptr = head;
        ListNode* second_ptr = head;
        while(first_ptr != NULL && first_ptr -> next != NULL){
            second_ptr = second_ptr -> next;
            first_ptr = first_ptr -> next -> next;
        }
        return second_ptr;
    }
};
```
```JAVA []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode First_ptr = head , second_ptr = head;
        while(First_ptr != null && First_ptr.next != null){
            second_ptr = second_ptr.next;
            First_ptr = First_ptr.next.next;
        }
        return second_ptr ;
    }
}
```
```JavaScript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let first_ptr = head
    let second_ptr = head
    while(first_ptr && first_ptr.next){
        second_ptr = second_ptr.next
        first_ptr = first_ptr.next.next
    }
    return second_ptr
};
```
```C# []
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
    public ListNode MiddleNode(ListNode head) {
        ListNode First_ptr = head , second_ptr = head;
        while(First_ptr != null && First_ptr.next != null){
            second_ptr = second_ptr.next;
            First_ptr = First_ptr.next.next;
        }
        return second_ptr ;
    }
}
```
```python []
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        first_ptr = head
        second_ptr = head
        while first_ptr and first_ptr.next:
            second_ptr = second_ptr.next
            first_ptr = first_ptr.next.next
        return second_ptr
```
```python3 []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        first_ptr = head
        second_ptr = head
        while first_ptr and first_ptr.next:
            second_ptr = second_ptr.next
            first_ptr = first_ptr.next.next
        return second_ptr
```
# If you like explanation and code then please send a like.
![Screenshot 2023-12-05 225836.png](./images/0.png)
