# 🚀🚀🚀 SPEED iS THE KEY || EXPLAiNED ✅ || EFFiCiENT ✅✅✅ 🚀

**Author:** prodonik
**Votes:** 140
**Link:** [https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4862118/](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4862118/)

---

# Intuition
The intuition behind this approach is to use the concept of prefix sum combined with a hash map. A prefix sum here represents the cumulative sum of the nodes from the start up to the current node. By storing these prefix sums and their corresponding nodes in a hash map, we can easily identify parts of the list that sum up to zero. When we encounter a prefix sum that we've seen before, it indicates that the sum of the nodes between the previous occurrence and the current node is zero, and those nodes can be removed.

# Approach
1.    Initialize a dummy head node (result) to simplify edge cases, such as when the starting elements of the list sum to zero.
2.    Traverse the linked list, calculating the cumulative or prefix sum of node values as you go.
3.    Use a hash map to keep track of the first occurrence of each prefix sum and the corresponding node.
4.    If a prefix sum is encountered that already exists in the map, it indicates the sublist from the next of the stored node up to the current node sums to zero. Remove this sublist by linking the stored node's next pointer to the current node's next.
5.    After adjusting pointers, continue traversing the list from the next node.
# Complexity
-    Time complexity: O(n)O(n) - The entire list is traversed only once.
-    Space complexity: O(n)O(n) - In the worst case, the hash map could store an entry for each node if no zero-sum sublists are found or if they are found at the end.

# WORTH FOR AN UPVOTE ? :)

![image.png](./images/0.png)


# Code
```Java []
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
    public ListNode removeZeroSumSublists(ListNode head) {
        // Dummy head to handle edge case when nodes at the beginning sum to zero
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        
        // Prefix sum initialization
        int prefixSum = 0;
        
        // Map to store the first occurrence of a prefix sum and its corresponding node
        Map<Integer, ListNode> prefixSumToNode = new HashMap<>();
        
        // Iterate over the list
        for (ListNode current = dummy; current != null; current = current.next) {
            prefixSum += current.val;
            // If this prefix sum has been seen before, it means the sublist sums to zero
            if (prefixSumToNode.containsKey(prefixSum)) {
                // Retrieve the node where this prefix sum was first seen
                ListNode prev = prefixSumToNode.get(prefixSum);
                ListNode toRemove = prev.next;
                int p = prefixSum + (toRemove != null ? toRemove.val : 0);
                
                // Remove nodes between 'prev' and 'current' from the map
                while (p != prefixSum) {
                    prefixSumToNode.remove(p);
                    toRemove = toRemove.next;
                    p += (toRemove != null ? toRemove.val : 0);
                }
                
                // Connect the previous node with current's next, effectively removing the zero-sum sublist
                prev.next = current.next;
            } else {
                // If this is a new prefix sum, just add it to the map
                prefixSumToNode.put(prefixSum, current);
            }
        }
        // Return the modified list, without the dummy head
        return dummy.next;
        // UPVOTE :)
    }
}

```
```C++ []
class Solution {
public:
    ListNode* removeZeroSumSublists(ListNode* head) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        unordered_map<int, ListNode*> prefixSumToNode;
        int prefixSum = 0;
        for (ListNode* current = dummy; current != nullptr; current = current->next) {
            prefixSum += current->val;
            if (prefixSumToNode.count(prefixSum)) {
                ListNode* prev = prefixSumToNode[prefixSum];
                ListNode* toRemove = prev->next;
                int p = prefixSum + (toRemove ? toRemove->val : 0);
                while (p != prefixSum) {
                    prefixSumToNode.erase(p);
                    toRemove = toRemove->next;
                    p += (toRemove ? toRemove->val : 0);
                }
                prev->next = current->next;
            } else {
                prefixSumToNode[prefixSum] = current;
            }
        }
        return dummy->next;
    }
};
```
```Python []
class Solution:
    def removeZeroSumSublists(self, head):
        dummy = ListNode(0)
        dummy.next = head
        prefixSumToNode = {}
        prefixSum = 0
        current = dummy
        while current:
            prefixSum += current.val
            if prefixSum in prefixSumToNode:
                prev = prefixSumToNode[prefixSum]
                toRemove = prev.next
                p = prefixSum + (toRemove.val if toRemove else 0)
                while p != prefixSum:
                    del prefixSumToNode[p]
                    toRemove = toRemove.next
                    p += toRemove.val if toRemove else 0
                prev.next = current.next
            else:
                prefixSumToNode[prefixSum] = current
            current = current.next
        return dummy.next
```
```C# []
public class Solution {
    public ListNode RemoveZeroSumSublists(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        Dictionary<int, ListNode> prefixSumToNode = new Dictionary<int, ListNode>();
        int prefixSum = 0;
        for (ListNode current = dummy; current != null; current = current.next) {
            prefixSum += current.val;
            if (prefixSumToNode.ContainsKey(prefixSum)) {
                ListNode prev = prefixSumToNode[prefixSum];
                ListNode toRemove = prev.next;
                int p = prefixSum + (toRemove != null ? toRemove.val : 0);
                while (p != prefixSum) {
                    prefixSumToNode.Remove(p);
                    toRemove = toRemove.next;
                    p += (toRemove != null ? toRemove.val : 0);
                }
                prev.next = current.next;
            } else {
                prefixSumToNode[prefixSum] = current;
            }
        }
        return dummy.next;
    }
}
```
```JS []
var removeZeroSumSublists = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prefixSumToNode = new Map();
    let prefixSum = 0;
    for (let current = dummy; current != null; current = current.next) {
        prefixSum += current.val;
        if (prefixSumToNode.has(prefixSum)) {
            let prev = prefixSumToNode.get(prefixSum);
            let toRemove = prev.next;
            let p = prefixSum + (toRemove ? toRemove.val : 0);
            while (p != prefixSum) {
                prefixSumToNode.delete(p);
                toRemove = toRemove.next;
                p += toRemove ? toRemove.val : 0;
            }
            prev.next = current.next;
        } else {
            prefixSumToNode.set(prefixSum, current);
        }
    }
    return dummy.next;
};
```
```Ruby []
class Solution
    def remove_zero_sum_sublists(head)
        dummy = ListNode.new(0)
        dummy.next = head
        prefix_sum_to_node = {}
        prefix_sum = 0
        current = dummy
        while current
            prefix_sum += current.val
            if prefix_sum_to_node.key?(prefix_sum)
                prev = prefix_sum_to_node[prefix_sum]
                to_remove = prev.next
                p = prefix_sum + (to_remove ? to_remove.val : 0)
                while p != prefix_sum
                    prefix_sum_to_node.delete(p)
                    to_remove = to_remove.next
                    p += to_remove ? to_remove.val : 0
                end
                prev.next = current.next
            else
                prefix_sum_to_node[prefix_sum] = current
            end
            current = current.next
        end
        dummy.next
    end
end
```
```Go []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeZeroSumSublists(head *ListNode) *ListNode {
    dummy := &ListNode{0, head}
    prefixSumToNode := make(map[int]*ListNode)
    prefixSum := 0
    for current := dummy; current != nil; current = current.Next {
        prefixSum += current.Val
        if prev, found := prefixSumToNode[prefixSum]; found {
            toRemove := prev.Next
            p := prefixSum
            if toRemove != nil {
                p += toRemove.Val
            }
            for toRemove != nil && p != prefixSum {
                delete(prefixSumToNode, p)
                toRemove = toRemove.Next
                if toRemove != nil {
                    p += toRemove.Val
                }
            }
            prev.Next = current.Next
        } else {
            prefixSumToNode[prefixSum] = current
        }
    }
    return dummy.Next
}

```
```PRODONiK []
-- WHY DON'T YOU UPVOTE ?)
```
![image.png](./images/1.png)
