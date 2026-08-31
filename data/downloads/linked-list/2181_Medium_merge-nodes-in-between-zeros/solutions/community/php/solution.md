# [Linked List Two Solutions Tutorial] Merge Nodes in Between Zeros

**Author:** never_get_piped
**Votes:** 26
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5412084/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5412084/)

---

**Topic** :  Linked List
A linked list is a fundamental data structure in computer science. It consists of nodes where each node contains data and a reference (link) to the next node in the sequence. This allows for dynamic memory allocation and efficient insertion and deletion operations compared to arrays. (GFG)

The crucial aspect to note about linked list:
* For adding a new node or deleting an existing node, the operations in a linked list are `O(1)`.
* To traverse the entire list, the time complexity in a linked list is `O(n)`.
* It can also serve as a stack or a queue.

___

## Solution1
To traverse a linked list, we can employ the following straightforward pseudocode:
```
while(node != null) {
	print(node);
	node = node.next;
}
```

We begin traversing the linked list from the second node onward, as the first node always contains the value `0`. Simultaneously during our traversal, we calculate the accumulated sum for all non-zero nodes.

Once it reaches the next node with a value of 0, we simply create a new node with the accumulated sum value and add it to our new list.

<br/>

```c++ []
class Solution {
public:
    ListNode* mergeNodes(ListNode* head) {
        ListNode* dummy = new ListNode();
        ListNode* cur = dummy;
        head = head->next;
        int sum = 0;
        while (head != nullptr) {
            if (head->val == 0) {
                cur->next = new ListNode(sum);
                cur = cur->next;
                sum = 0;
            }
            sum += head->val;
            head = head->next;
        }
        return dummy->next;
    }
};
```
```java []
class Solution {
    public ListNode mergeNodes(ListNode head) {
        ListNode dummy = new ListNode(), cur = dummy;
        head = head.next;
        int sum = 0;
        while(head != null) {
            if(head.val == 0) {
                cur.next = new ListNode(sum);
                cur = cur.next;
                sum = 0;
            } 
            sum += head.val;
            head = head.next;
        }
        return dummy.next;
    }
}
```
```python []
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        cur = dummy
        head = head.next
        sum_val = 0
        while head:
            if head.val == 0:
                cur.next = ListNode(sum_val)
                cur = cur.next
                sum_val = 0
            sum_val += head.val
            head = head.next
        return dummy.next
```
```Go []
func mergeNodes(head *ListNode) *ListNode {
    dummy := &ListNode{}
    cur := dummy
    head = head.Next
    sum := 0
    for head != nil {
        if head.Val == 0 {
            cur.Next = &ListNode{Val: sum}
            cur = cur.Next
            sum = 0
        }
        sum += head.Val
        head = head.Next
    }
    return dummy.Next
}
```
```PHP []
class Solution {

    /**
     * @param ListNode $head
     * @return ListNode
     */
    function mergeNodes($head) {
        $dummy = new ListNode();
        $cur = $dummy;
        $head = $head->next;
        $sum = 0;
        while ($head != null) {
            if ($head->val == 0) {
                $cur->next = new ListNode($sum);
                $cur = $cur->next;
                $sum = 0;
            }
            $sum += $head->val;
            $head = $head->next;
        }
        return $dummy->next;
    }
}
```
```javascript []
var mergeNodes = function(head) {
    let dummy = new ListNode();
    let cur = dummy;
    head = head.next;
    let sum = 0;
    while (head !== null) {
        if (head.val === 0) {
            cur.next = new ListNode(sum);
            cur = cur.next;
            sum = 0;
        }
        sum += head.val;
        head = head.next;
    }
    return dummy.next;    
};
```

**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`

## Solution2
Note that when we encounter a node with a value of 0, we do not need to create a new node. Instead, we can directly assign the accumulated sum to the zero-node and append it to our new list.

<br/>

```c++ []
class Solution {
public:
    ListNode* mergeNodes(ListNode* head) {
        ListNode* dummy = new ListNode();
        ListNode* cur = dummy;
        head = head->next;
        int sum = 0;
        while (head != nullptr) {
            if (head->val == 0) {
                cur->next = head;
                head -> val = sum;
                cur = cur->next;
                sum = 0;
            } else {
                sum += head->val;
            }
            head = head->next;
        }
        return dummy->next;
    }
};
```
```java []
class Solution {
    public ListNode mergeNodes(ListNode head) {
        ListNode dummy = new ListNode(), cur = dummy;
        head = head.next;
        int sum = 0;
        while(head != null) {
            if(head.val == 0) {
                cur.next = head;
                head.val = sum;
                cur = cur.next;
                sum = 0;
            } else {
                sum += head.val;
            }
            head = head.next;
        }
        return dummy.next;
    }
}
```
```python []
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        cur = dummy
        head = head.next
        sum_val = 0
        while head:
            if head.val == 0:
                cur.next = head
                head.val = sum_val
                cur = cur.next
                sum_val = 0
            else:
                sum_val += head.val
            head = head.next
        return dummy.next
```
```Go []
func mergeNodes(head *ListNode) *ListNode {
    dummy := &ListNode{}
    cur := dummy
    head = head.Next
    sum := 0
    for head != nil {
        if head.Val == 0 {
            cur.Next = head
            head.Val = sum
            cur = cur.Next
            sum = 0
        } else {
           sum += head.Val 
        }
        head = head.Next
    }
    return dummy.Next
}
```
```PHP []
class Solution {

    /**
     * @param ListNode $head
     * @return ListNode
     */
    function mergeNodes($head) {
        $dummy = new ListNode();
        $cur = $dummy;
        $head = $head->next;
        $sum = 0;
        while ($head != null) {
            if ($head->val == 0) {
                $cur->next = $head;
                $head->val = $sum;
                $cur = $cur->next;
                $sum = 0;
            } else {
               $sum += $head->val; 
            }
            $head = $head->next;
        }
        return $dummy->next;
    }
}
```
```javascript []
var mergeNodes = function(head) {
    let dummy = new ListNode();
    let cur = dummy;
    head = head.next;
    let sum = 0;
    while (head !== null) {
        if (head.val === 0) {
            cur.next = head;
            head.val = sum;
            cur = cur.next;
            sum = 0;
        } else {
            sum += head.val;
        }
        head = head.next;
    }
    return dummy.next;    
};
```

**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**