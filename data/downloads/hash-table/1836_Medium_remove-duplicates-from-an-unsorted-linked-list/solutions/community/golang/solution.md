# Hash Map Solution in Golang, Python

**Author:** willyboy
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5493410/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5493410/)

---



# Go
```
func deleteDuplicatesUnsorted(head *ListNode) *ListNode {
    // If the list is empty, just return nil
    if head == nil {
        return nil 
    }
    
    // Initialize a current pointer and a hash map to keep track of node counts
    cur := head
    hashCounter := map[int]int{} // {k: v} where k is the value and v is the count
    
    // Traverse the list, counting each node's value in the hash map
    for cur != nil {
        hashCounter[cur.Val] += 1
        cur = cur.Next
    }
    
    // Initialize a current pointer to the head of the list again
    cur = head 
    var prev *ListNode;
    
    // Traverse the list again, deleting any nodes with more than one occurrence
    for cur != nil {
        if hashCounter[cur.Val] > 1 {
            // If this is the first node in the list and it's a duplicate, skip it
            if head == cur {
                head = cur.Next
            } else {
                // Otherwise, skip to the next node in the current chain
                prev.Next = cur.Next 
            }
        } else {
            // If this is not a duplicate, make it the new last node
            prev = cur
        }
        cur = cur.Next
    } 
    return head
}
```


# Python
```
class Solution:
    def deleteDuplicatesUnsorted(self, head: ListNode) -> ListNode:
        hash_counter = {}
        cur = head 
        while cur:
            if not cur.val in hash_counter:
               hash_counter[cur.val] = 0
            hash_counter[cur.val] += 1   
            cur = cur.next

        cur = head 
        prev = None
        while cur:
            if hash_counter[cur.val] > 1:
                if head == cur:
                   head = cur.next 
                else:
                   prev.next = cur.next 
            else:       
                prev = cur 
            cur = cur.next 
        return head    

```
