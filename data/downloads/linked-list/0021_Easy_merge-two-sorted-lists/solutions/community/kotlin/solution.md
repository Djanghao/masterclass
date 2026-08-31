# [Fastest Solution Explained][0ms][100%] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 40
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/2383569/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/2383569/)

---

**As a professional with a passion for problem-solving and collaboration, I am always looking to expand my network of like-minded individuals on LinkedIn. By connecting with me, we can work together to tackle complex challenges, share ideas, and grow both professionally and personally.**

**Whether you're an expert in your field or just starting out, I welcome connections from all backgrounds and experiences. By building a diverse and collaborative network, we can leverage our unique perspectives and skill sets to push the boundaries of what's possible.**

**So, if you're interested in connecting and exploring the potential for future collaborations, please don't hesitate to reach out. Let's start a conversation and see where it takes us!**

---

https://www.linkedin.com/in/cucerdariancatalin/
https://www.linkedin.com/in/cucerdariancatalin/
https://www.linkedin.com/in/cucerdariancatalin/

---
(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 3.27MB*** (beats 99.04% / 90.42%).
* *** Java ***

```

public ListNode mergeTwoLists(ListNode l1, ListNode l2){
		if(l1 == null) return l2;
		if(l2 == null) return l1;
		if(l1.val < l2.val){
			l1.next = mergeTwoLists(l1.next, l2);
			return l1;
		} else{
			l2.next = mergeTwoLists(l1, l2.next);
			return l2;
		}
}

```

```
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode head = new ListNode(0);
        
        if(list1 == null && list2 == null) return null;  //null checking
        if(list1 == null) return list2;
        if(list2 == null) return list1;
        
        if(list1.val > list2.val) { //comparing and merging
            head = list2;
            list2 = list2.next;
        }
        else {
            head = list1;
            list1 = list1.next;
        }
        
        head.next = mergeTwoLists(list1, list2);
        return head;
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 10MB*** (beats 100.00% / 95.49%).
* *** Python ***

```

# iteratively
def mergeTwoLists1(self, l1, l2):
    dummy = cur = ListNode(0)
    while l1 and l2:
        if l1.val < l2.val:
            cur.next = l1
            l1 = l1.next
        else:
            cur.next = l2
            l2 = l2.next
        cur = cur.next
    cur.next = l1 or l2
    return dummy.next
    
# recursively    
def mergeTwoLists2(self, l1, l2):
    if not l1 or not l2:
        return l1 or l2
    if l1.val < l2.val:
        l1.next = self.mergeTwoLists(l1.next, l2)
        return l1
    else:
        l2.next = self.mergeTwoLists(l1, l2.next)
        return l2
        
# in-place, iteratively        
def mergeTwoLists(self, l1, l2):
    if None in (l1, l2):
        return l1 or l2
    dummy = cur = ListNode(0)
    dummy.next = l1
    while l1 and l2:
        if l1.val < l2.val:
            l1 = l1.next
        else:
            nxt = cur.next
            cur.next = l2
            tmp = l2.next
            l2.next = nxt
            l2 = tmp
        cur = cur.next
    cur.next = l1 or l2
    return dummy.next

```

```
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:

        head = sort_list = ListNode(0)
        
        while(l1 and l2):
            if (l1.val < l2.val):
                sort_list.next = l1
                l1 = l1.next
                sort_list = sort_list.next
                
            elif (l1.val >= l2.val):
                sort_list.next = l2
                l2 = l2.next
                sort_list = sort_list.next

        sort_list.next = l1 or l2
        return head.next
```

```
```

```
```

The best result for the code below is ***0ms / 23.7MB*** (beats 59.24% / 60.42%).
* *** C++ ***

**RECURSIVE APPROACH**
```

class Solution {
public:
	ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) 
  {
		// if list1 happen to be NULL
		// we will simply return list2.
		if(l1 == NULL)
        {
			return l2;
		}
		
		// if list2 happen to be NULL
		// we will simply return list1.
		if(l2 == NULL)
        {
			return l1;
		} 
		
		// if value pointend by l1 pointer is less than equal to value pointed by l2 pointer
		// we wall call recursively l1 -> next and whole l2 list.
		if(l1 -> val <= l2 -> val)
        {
			l1 -> next = mergeTwoLists(l1 -> next, l2);
			return l1;
		}
		// we will call recursive l1 whole list and l2 -> next
		else
        {
			l2 -> next = mergeTwoLists(l1, l2 -> next);
			return l2;            
		}
	}
};	

```
**ITERATIVE APPROACH**
```
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
       
	    // if list1 happen to be NULL
		// we will simply return list2.
        if(list1 == NULL)
            return list2;
		
		// if list2 happen to be NULL
		// we will simply return list1.
        if(list2 == NULL)
            return list1;
        
        ListNode * ptr = list1;
        if(list1 -> val > list2 -> val)
        {
            ptr = list2;
            list2 = list2 -> next;
        }
        else
        {
            list1 = list1 -> next;
        }
        ListNode *curr = ptr;
        
		// till one of the list doesn't reaches NULL
        while(list1 &&  list2)
        {
            if(list1 -> val < list2 -> val){
                curr->next = list1;
                list1 = list1 -> next;
            }
            else{
                curr->next = list2;
                list2 = list2 -> next;
            }
            curr = curr -> next;
                
        }
		
		// adding remaining elements of bigger list.
        if(!list1)
            curr -> next = list2;
        else
            curr -> next = list1;
            
        return ptr;
       
    }
};
```
* Maintain a head and a tail pointer on the merged linked list.

* Then choose the head of the merged linked list by comparing the first node of both linked lists.

* For all subsequent nodes in both lists, you choose the smaller current node and link it to the tail of the merged list, and moving the current pointer of that list one step forward.

* You keep doing this while there are some remaining elements in both the lists.

* If there are still some elements in only one of the lists, you link this remaining list to the tail of the merged list.

* Initially, the merged linked list is NULL.

* Compare the value of the first two nodes and make the node with the smaller value the head node of the merged linked list.

* Since it\u2019s the first and only node in the merged list, it will also be the tail.

* Then move head1 one step forward.
```
```

```
```

The best result for the code below is ***0ms / 78MB*** (beats 100.00% / 100.00%).
* *** JavaScript ***


```

var mergeTwoLists = function(l1, l2) {
    var mergedHead = { val : -1, next : null },
        crt = mergedHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;
    
    return mergedHead.next;
};

```

```
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return l1 || l2
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
        
};
```

```
```

```
```

The best result for the code below is ***0ms / 15.23MB*** (beats 89.94% / 90.99%).
* *** Python3 ***


```

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        cur = dummy = ListNode()
        while list1 and list2:               
            if list1.val < list2.val:
                cur.next = list1
                list1, cur = list1.next, list1
            else:
                cur.next = list2
                list2, cur = list2.next, list2
                
        if list1 or list2:
            cur.next = list1 if list1 else list2
            
        return dummy.next

```

For simplicity, we create a dummy node to which we attach nodes from lists. We iterate over lists using two-pointers and build up a resulting list so that values are monotonically increased.

Time: **O(n)**
Space: **O(1)**

```
```

```
```

The best result for the code below is ***0ms / 33.33MB*** (beats 99.00% / 60.12%).
* *** Kotlin ***

**RECURSIVE**
```

fun mergeTwoLists(l1: ListNode?, l2: ListNode?): ListNode? {
        if (l1 == null && l2 == null) {
            return null
        }
        if (l1 == null) {
            return l2
        }
        if (l2 == null) {
            return l1
        }
        if (l1.`val` < l2.`val`) {
            l1.next = mergeTwoLists(l1.next, l2)
            return l1
        }
        l2.next = mergeTwoLists(l2.next, l1)
        return l2
    }

```

```
```

```
```

The best result for the code below is ***0ms / 13.17MB*** (beats 79.34% / 99.92%).
* *** Swift ***


```

class Solution {
    func mergeTwoLists(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        if l1 == nil || l2 == nil { return l1 == nil ? l2 : l1 }
        if l1!.val <= l2!.val {
            l1?.next = mergeTwoLists(l1?.next, l2)
            return l1
        } else {
            l2?.next = mergeTwoLists(l1, l2?.next)
            return l2
        }
    }
}

```

```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func mergeTwoLists(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
		if l1 == nil { return l2 }
		if l2 == nil { return l1 }
        
		if l1!.val < l2!.val 
			 { l1!.next = mergeTwoLists(l1!.next, l2); return l1 } 
		else { l2!.next = mergeTwoLists(l2!.next, l1); return l2 }
    }

}
```

```
```

```
```

The best result for the code below is ***0ms / 62.07MB*** (beats 99.99% / 99.99%).
* *** PHP ***


```

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $list1
     * @param ListNode $list2
     * @return ListNode
     */
    function mergeTwoLists($list1, $list2) {
        if($list1== null) return $list2;
        if($list2== null) return $list1;
      if($list1->val < $list2->val) {
            $list1->next = $this->mergeTwoLists($list1->next, $list2);
            return $list1;
        } else {
            $list2->next = $this->mergeTwoLists($list2->next, $list1);
            return $list2;
        }
}}

```

```
     * @param ListNode $list1
     * @param ListNode $list2
     * @return ListNode
     */
    function mergeTwoLists($list1, $list2) {
        $head = $list = new ListNode();
        
        do {
            if (!$list1 || ($list2 && $list1->val > $list2->val)) {
                $list->next = new ListNode($list2->val);
                $list2 = $list2->next;
            } else {
                $list->next = new ListNode($list1->val);
                $list1 = $list1->next;
            }
            $list = $list->next;
        } while ($list1 || $list2);
        
        return $head->next;
    }
```

```
```

```
```

The best result for the code below is ***0ms / 1.17MB*** (beats 99.64% / 99.92%).
* *** C ***


```

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2)
{
    struct ListNode head;
    struct ListNode *h = &head;
    
    if (l1 == NULL && l2 == NULL)
        return NULL;
    
    while (l1 && l2) {
        if (l1->val < l2->val) {
            h->next = l1;
            l1 = l1->next;
            h = h->next;
        } else {
            h->next = l2;
            l2 = l2->next;
            h = h->next;
        }
    }

    if (l1) {
        h->next = l1;
    }
    if (l2) {
        h->next = l2;
    }
  
    return head.next;
}

```

```
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2){
    if (!l1) return l2;
    if (!l2) return l1;
    struct ListNode* head = l1->val <= l2->val? l1 : l2;
    head->next = l1->val <= l2->val ? mergeTwoLists(l1->next, l2) : mergeTwoLists(l1, l2->next);
    return head;
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
