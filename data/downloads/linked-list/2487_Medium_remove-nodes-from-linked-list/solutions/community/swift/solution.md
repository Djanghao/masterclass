# ✅✅ Beat 💯💯💯% runtime. Swift simple recursive solution ✅✅

**Author:** wavealpha2023
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5121473/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5121473/)

---

# Intuition
The intuition behind this solution lies in recursively traversing the linked list and removing nodes whose value is not valid.

# Approach
1. We recursively traverse the linked list, starting the actual run at the end of the list. 
2. We then proceed backward to the head of the linked list.
3. While moving backward, if the previous node has a value that is smaller than the current node, we skip this node (since we only accept greater values while moving backward). 
4. By continuously skipping these invalid nodes, we will achieve a descending list at the end of the algorithm.

# Code
```
class Solution {
    func removeNodes(_ head: ListNode?) -> ListNode? {
        guard let head else {
            return nil
        }

        guard let next = removeNodes(head.next) else {
            return head
        }
        
        if head.val >= next.val {
            head.next = next
            return head
        } else {
            return next
        }
    }
}

```