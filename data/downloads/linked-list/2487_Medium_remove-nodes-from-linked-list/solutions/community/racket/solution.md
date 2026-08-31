# recursion

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5121643/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5121643/)

---



# Code
``` java []
class Solution {
    public ListNode removeNodes(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode next = removeNodes(head.next);

        if (next.val > head.val) {
            return next;
        }

        head.next = next;
        return head;
    }
}
```
``` python []
class Solution(object):
    def removeNodes(self, head):
        if head is None or head.next is None:
            return head
        
        next = self.removeNodes(head.next)

        if next.val > head.val:
            return next

        head.next = next
        return head
```
``` c []
struct ListNode* removeNodes(struct ListNode* head) {
    if (head == NULL || head->next == NULL) return head;

    struct ListNode* next = removeNodes(head->next);

    if (next->val > head->val) return next;

    head->next = next;
    return head;
}
```
``` javascript []
var removeNodes = function(head) {
    if (head == null || head.next == null) return head;

    const next = removeNodes(head.next);

    if (next.val > head.val) return next;

    head.next = next;
    return head;
};
```
``` racket []
(define (remove-nodes head)
    (let* ([next (if (list-node? head) (remove-nodes (list-node-next head)) #f)])
        (cond [(or (eq? head #f) (eq? (list-node-next head) #f)) head]
              [(> (list-node-val next) (list-node-val head)) next]
              [else (list-node (list-node-val head) next)])))
```