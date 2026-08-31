# ✅ two solutions in java, c/c++/c#, javascript, python, go, ruby, php, kotlin, racket

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/4905614/](https://leetcode.com/problems/reverse-linked-list/solutions/4905614/)

---

This problem may sound like an easy one, but it's actually challenging to write a correct solution. Good luck.

also checkout the recursion solution

# Iterative solution
``` java []
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        while (head != null) {
            ListNode next = head.next;
            head.next = prev;
            prev = head;
            head = next;           
        }

        return prev;
    }
}
```
``` python []
class Solution(object):
    def reverseList(self, head):
        prev = None
        while head:
            next = head.next
            head.next = prev
            prev = head
            head = next
        return prev
```
``` javascript []
var reverseList = function(head) {
    var prev = null;
    while (head) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
};
```
``` c []
struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* prev = NULL;
    while (head) {
        struct ListNode* next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }

    return prev;
}
```
``` cpp []
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* tmp = nullptr;
        while (head != nullptr) {
            tmp = head->next;
            head->next = prev;
            prev = head;
            head = tmp;            
        }

        return prev;
    }
};
```
``` csharp []
public class Solution {
    public ListNode ReverseList(ListNode head) {
        ListNode prev = null;
        while (head != null) {
            ListNode tmp = head.next;
            head.next = prev;
            prev = head;
            head = tmp;
        }

        return prev;
    }
}
```
``` golang []
func reverseList(head *ListNode) *ListNode {
    var prev *ListNode
    for head != nil {
        next := head.Next
        head.Next = prev
        prev = head
        head = next
    }

    return prev
}
```
``` ruby []
def reverse_list(head)
    prev = nil
    while head do
        nxt = head.next
        head.next = prev
        prev = head
        head = nxt
    end

    return prev
end
```
``` php []
class Solution {
    function reverseList($head) {
        $prev = null;
        while ($head) {
            $next = $head->next;
            $head->next = $prev;
            $prev = $head;
            $head = $next;
        }

        return $prev;
    }
}
```
``` kotlin []
class Solution {
    fun reverseList(head: ListNode?): ListNode? {
        var prev: ListNode? = null;
        var cur: ListNode? = head;
        var tmp: ListNode? = null;
        while (cur != null) {
            tmp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = tmp;            
        }

        return prev;
    }
}
```
``` swift []
class Solution {
    func reverseList(_ head: ListNode?) -> ListNode? {
        var prev : ListNode? = nil;
        var cur = head;
        while (cur != nil) {
            var next = cur?.next;
            cur?.next = prev;
            prev = cur;
            cur = next;
        }

        return prev;
    }
}
```

# Recursion
``` java []
class Solution {
    public ListNode reverseList(ListNode head, ListNode prev) {
        if (head == null) {
            return prev;
        } else {
            return reverseList(head.next, new ListNode(head.val, prev));
        }
    }

    public ListNode reverseList(ListNode head) {
        return reverseList(head, null);
    }
}
```
``` python []
class Solution(object):
    def reverseList(self, head):
        def reverse(head, prev):
            if head:
                return reverse(head.next, ListNode(head.val, prev))
            else:
                return prev
        
        return reverse(head, None)
```
``` javascript []
var reverseList = function(head, prev = null) {
    if (head) {
       return reverseList(head.next, new ListNode(head.val, prev));
    } else {
        return prev;
    }
};
```
``` c []
struct ListNode* reverseListPrev(struct ListNode* head, struct ListNode* prev) {
    if (head == NULL) return prev;
    struct ListNode* next = malloc(1 * sizeof(struct ListNode));
    next->val = head->val;
    next->next = prev;
    return reverseListPrev(head->next, next);
}

struct ListNode* reverseList(struct ListNode* head) {
    return reverseListPrev(head, NULL);
}
```
``` cpp []
class Solution {
public:
    ListNode* reverseList(ListNode* head, ListNode* prev = NULL) {
        if (head == NULL) {
            return prev;
        }

        return reverseList(head->next, new ListNode(head->val, prev));
    }
};
```
``` golang []
func reverse(head, prev *ListNode) *ListNode {
    if head == nil {
        return prev
    }
    return reverse(head.Next, &ListNode{Val: head.Val, Next: prev})
}

func reverseList(head *ListNode) *ListNode {
    return reverse(head, nil)
}
```
``` php []
class Solution {
    function reverseList($head, $prev = null) {
        if ($head == null) {
            return $prev;
        } else {
            return $this->reverseList($head->next, new ListNode($head->val, $prev));
        }
    }
}
```
``` ruby []
def reverse_list(head, prev = nil)
    return prev if head.nil?
    return reverse_list(head.next, ListNode.new(head.val, prev))
end
```
``` racket []
(define (reverse-list head [prev #f])
  (if (not head)
      prev
      (reverse-list (list-node-next head) (list-node (list-node-val head) prev)))) 
```

Upvote if you like it \uD83D\uDC4D