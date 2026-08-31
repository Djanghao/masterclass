# Easy Solution | Beginner Friendly | Easy to Understand | Beats 100% | JAVA | PYTHON 3 |C ++| JS | C#

**Author:** antovincent
**Votes:** 28
**Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/solutions/3529474/](https://leetcode.com/problems/swap-nodes-in-pairs/solutions/3529474/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Traverse the list and swap pairs of nodes one by one.
# Approach
<!-- Describe your approach to solving the problem. -->
- The node "ans" is to point to the head of the original list. It then uses a "curr" node to traverse the list and swap pairs of nodes. The loop continues as long as there are at least two more nodes to swap.

- Inside the loop, the solution uses two temporary nodes, "t1" and "t2", to hold the first and second nodes of the pair. Then, it updates the pointers to swap the nodes, and moves "curr" two nodes ahead. At the end, it returns the modified list starting from the next node of the  "ans" node.
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```java []
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
    public ListNode swapPairs(ListNode head) {
          if (head == null || head.next == null) {
            return head;
        }
    ListNode ans =new ListNode(0);
    ans.next=head;
    ListNode curr=ans;
   while (curr.next != null && curr.next.next != null) {
            ListNode t1 = curr.next;
            ListNode t2 = curr.next.next;
            curr.next = t2;
            t1.next = t2.next;
            t2.next = t1;
            curr = curr.next.next;
        }  
      return ans.next;
    }
}
```
```python []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        
        ans = ListNode(0)
        ans.next = head
        curr = ans
        
        while curr.next and curr.next.next:
            t1 = curr.next
            t2 = curr.next.next
            curr.next = t2
            t1.next = t2.next
            t2.next = t1
            curr = curr.next.next
        
        return ans.next
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
    ListNode* swapPairs(ListNode* head) {
         if (head == NULL || head->next == NULL) {
        return head;
    }
    struct ListNode* ans = (struct ListNode*) malloc(sizeof(struct ListNode));
    ans->next = head;
    struct ListNode* curr = ans;
    while (curr->next != NULL && curr->next->next != NULL) {
        struct ListNode* t1 = curr->next;
        struct ListNode* t2 = curr->next->next;
        curr->next = t2;
        t1->next = t2->next;
        t2->next = t1;
        curr = curr->next->next;
    }
    return ans->next;
    }
};
```
```Javascript []
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
var swapPairs = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let ans = new ListNode(0);
    ans.next = head;
    let curr = ans;
    while (curr.next != null && curr.next.next != null) {
        let t1 = curr.next;
        let t2 = curr.next.next;
        curr.next = t2;
        t1.next = t2.next;
        t2.next = t1;
        curr = curr.next.next;
    }
    return ans.next;
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
    public ListNode SwapPairs(ListNode head) {
    if (head == null || head.next == null) {
            return head;
        }
        ListNode ans = new ListNode(0);
        ans.next = head;
        ListNode curr = ans;
        while (curr.next != null && curr.next.next != null) {
            ListNode t1 = curr.next;
            ListNode t2 = curr.next.next;
            curr.next = t2;
            t1.next = t2.next;
            t2.next = t1;
            curr = curr.next.next;
        }
        return ans.next;    
    }
}
```
```Kotlin []
/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun swapPairs(head: ListNode?): ListNode? {
         if (head == null || head.next == null) {
            return head
        }
        val ans = ListNode(0)
        ans.next = head
        var curr: ListNode? = ans
        while (curr?.next != null && curr.next?.next != null) {
            val t1 = curr.next
            val t2 = curr.next?.next
            curr.next = t2
            t1.next = t2?.next
            t2?.next = t1
            curr = curr.next?.next
        }
        return ans.next
    }
}
```
```C []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* swapPairs(struct ListNode* head){
 if (head == NULL || head->next == NULL) {
        return head;
    }
    struct ListNode* ans = (struct ListNode*) malloc(sizeof(struct ListNode));
    ans->next = head;
    struct ListNode* curr = ans;
    while (curr->next != NULL && curr->next->next != NULL) {
        struct ListNode* t1 = curr->next;
        struct ListNode* t2 = curr->next->next;
        curr->next = t2;
        t1->next = t2->next;
        t2->next = t1;
        curr = curr->next->next;
    }
    return ans->next;
}
```

UPVOTES ARE ENCOURAGING!