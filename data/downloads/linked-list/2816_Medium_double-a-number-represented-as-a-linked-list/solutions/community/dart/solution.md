# 🔥 Dart DFS solution

**Author:** VeesileNavi
**Votes:** 1
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5124003/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5124003/)

---

# Intuition
We need to traveres trough linked list in reverse order and if current number is greater than 10 add 1 to previous number.
We can perform it by using DFS.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? doubleIt(ListNode? head) {
    final firstDigit = dfs(head);

    if(firstDigit==0){
        return head;
    }
    
    return ListNode(1, head);
  }
}

int dfs(ListNode? cur){
    if(cur == null){
        return 0;
    }

    final newVal = cur.val * 2 + dfs(cur.next);
    cur.val = newVal % 10;

    return newVal > 9 ? 1 : 0;
}
```