# Easy ,Beginner with Dry Run || Recursion || Time complexity O(n) & Space complexity O(1) || Gits✅✅

**Author:** GiteshSK_12
**Votes:** 15
**Link:** [https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/4660594/](https://leetcode.com/problems/delete-node-in-a-linked-list/solutions/4660594/)

---

# Guys if the explanation and the solution is helpful then upvote me please!!!!!!\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

# Intuition \uD83D\uDC48

<!-- Describe your first thoughts on how to solve this problem. -->
The problem provides a node to be deleted in a linked list, emphasizing the absence of duplicate values. Our strategy involves an in-place modification of the linked list by simply skipping the designated node.

# Approach \uD83D\uDC48

<!-- Describe your approach to solving the problem. -->
The approach is elegantly straightforward and highly implementable.
* Begin by updating the value of the current node with the value of the next node:
'node.val = node.next.val'
* Proceed by redirecting the next pointer of the current node to the next node's next pointer:
'node.next = node.next.next'
# Complexity \uD83D\uDC48

- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Given that we solely modify the linked list without utilizing loops or recursion, the time complexity is a commendable O(1).
 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
As the linked list undergoes modification without any additional space usage, the space complexity is an efficient O(1). 

# Code \uD83D\uDC48
```C []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
void deleteNode(struct ListNode* node) {
    node->val = node->next->val;
    node->next = node->next->next;
}
```
```C++ []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        node->val = node->next->val;
        node->next = node->next->next;
    }
};
```
```JAVA []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
```
```javascript []
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```
```python []
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        node.val = node.next.val
        node.next = node.next.next
```
```Python3 []
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        node.val = node.next.val
        node.next = node.next.next
```
```ruby []
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} node
# @return {Void} Do not return anything, modify node in-place instead.
def delete_node(node)
    node.val = node.next.val
    node.next = node.next.next
end
```
