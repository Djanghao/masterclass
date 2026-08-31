# Simple Solution | 2ms  Beats 99.9%| Easy to understand | Java | C++ | Kotlin | Javascript | C# | C

**Author:** antovincent
**Votes:** 39
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3525672/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3525672/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Traverse the list twice - once to find the kth node from the beginning, and then again to find the kth node from the end. After the two nodes are identified, their values can be swapped.
# Approach
<!-- Describe your approach to solving the problem. -->
- First initializes two pointers left and right to point to the head of the list. It then moves the left pointer k-1 times to reach the k-th node from the beginning of the list. At this point, left points to the node that needs to be swapped.

- The function then initializes a new pointer curr to point to the same node as left. It then moves curr forward until it reaches the end of the list, while also moving right pointer to point to the kth node from the end of the list. Once curr reaches the end of the list, right will point to the kth node from the end.

- Finally, the swap the values of the two nodes pointed to by left and right, and returns the head of the modified list.
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
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
    public ListNode swapNodes(ListNode head, int k) {
        ListNode left=head,rigth=head;
        for(int i=1;i<k;i++)
        left=left.next;
        ListNode curr = left;
        while(curr.next!=null){
            curr = curr.next;
            rigth=rigth.next;
        }
        int t = left.val;
        left.val = rigth.val;
        rigth.val =t;
        return head;
    }
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
    ListNode* swapNodes(ListNode* head, int k) {
          ListNode *left = head, *right = head;
    for(int i = 1; i < k; i++)
        left = left->next;
    ListNode *curr = left;
    while(curr->next != nullptr){
        curr = curr->next;
        right = right->next;
    }
    int t = left->val;
    left->val = right->val;
    right->val = t;
    return head;
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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {

      if (!head) {
        return null;
    }
    let left = head, right = head;
    for (let i = 1; i < k; i++) {
        left = left.next;
    }
    let curr = left;
    while (curr.next) {
        curr = curr.next;
        right = right.next;
    }
    let temp = left.val;
    left.val = right.val;
    right.val = temp;
    return head;
    
};
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
    fun swapNodes(head: ListNode?, k: Int): ListNode? {
         if (head == null) {
            return null
        }
        var left = head
        var right = head
        for (i in 1 until k) {
            left = left?.next
        }
        var curr = left
        while (curr?.next != null) {
            curr = curr.next
            right = right?.next
        }
        val temp = left?.`val`
        left?.`val` = right?.`val`
        right?.`val` = temp
        return head
    }
}
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
    public ListNode SwapNodes(ListNode head, int k) {
        
        if (head == null) {
            return null;
        }
        ListNode left = head, right = head;
        for (int i = 1; i < k; i++) {
            left = left.next;
        }
        ListNode curr = left;
        while (curr.next != null) {
            curr = curr.next;
            right = right.next;
        }
        int temp = left.val;
        left.val = right.val;
        right.val = temp;
        return head;
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
struct ListNode* swapNodes(struct ListNode* head, int k){

 struct ListNode *left = head, *right = head;
    for(int i = 1; i < k; i++)
        left = left->next;
    struct ListNode *curr = left;
    while(curr->next != NULL){
        curr = curr->next;
        right = right->next;
    }
    int t = left->val;
    left->val = right->val;
    right->val = t;
    return head;
}
```
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Upvotes Are Encouraging