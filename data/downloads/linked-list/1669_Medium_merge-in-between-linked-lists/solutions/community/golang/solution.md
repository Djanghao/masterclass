# Go O(n) beats 78%

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-in-between-linked-lists/solutions/2190883/](https://leetcode.com/problems/merge-in-between-linked-lists/solutions/2190883/)

---

```
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeInBetween(list1 *ListNode, a int, b int, list2 *ListNode) *ListNode {
    newList1, count, prev := list1, -1, &ListNode{}
    
    for newList1 != nil {
        count++
        
        if count == a {
            if prev != nil {
                prev.Next = list2
            }
        }
        
        if count == b {
            newList1 = newList1.Next
            break
        }
        
        prev = newList1
        newList1 = newList1.Next
    }
    
    for list2.Next != nil {
        list2 = list2.Next
    }
    
    list2.Next = newList1
    
    return list1
}

// Runtime: 106 ms, faster than 78.38% of Go online submissions for Merge In Between Linked Lists.
// Memory Usage: 7.2 MB, less than 100.00% of Go online submissions for Merge In Between Linked Lists.
```