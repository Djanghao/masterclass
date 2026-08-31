# 🔥Beats 100.00% 🔥 PHP - Runtime 🚀 3 ms 🚀

**Author:** ImAbuSayed
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4863804/](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4863804/)

---

# Intuition
The given problem asks to remove all sublists whose sum is zero from a given linked list. 

# Approach
To solve the problem, we can use a hashmap to keep track of the sum of the elements encountered so far. We iterate through the linked list and calculate the running sum at each node. If we encounter a sum that is already present in the hashmap, it means that the sublist between the previous occurrence of the sum and the current node has a sum of zero. In this case, we skip this sublist by updating the next pointer of the previous node to the next node of the current node. 

# Complexity
- Time complexity: The algorithm iterates through the linked list once, so the time complexity is O(n), where n is the number of nodes in the linked list.
- Space complexity: The algorithm uses a hashmap to store the sum of the elements encountered so far. In the worst case, when all the elements have distinct sums, the hashmap will store all the sums, resulting in a space complexity of O(n), where n is the number of nodes in the linked list.

# Code
```
class Solution {
    public function removeZeroSumSublists($head) {
        $dummy = new ListNode(null);
        $dummy->next = $head;
        $last = [];
        $s = 0;
        $cur = $dummy;
        
        while ($cur) {
            $s += $cur->val;
            $last[$s] = $cur;
            $cur = $cur->next;
        }
        
        $s = 0;
        $cur = $dummy;
        
        while ($cur) {
            $s += $cur->val;
            $cur->next = $last[$s]->next;
            $cur = $cur->next;
        }
        
        return $dummy->next;
    }
}

```