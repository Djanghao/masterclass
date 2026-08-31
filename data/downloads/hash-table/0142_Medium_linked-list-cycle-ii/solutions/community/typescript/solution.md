# [C++, TypeScript, JavaScript] 🔥 - Very Easy Solution in Only 4 Lines ✅

**Author:** ab_elhaddad
**Votes:** 7
**Link:** [https://leetcode.com/problems/linked-list-cycle-ii/solutions/3274386/](https://leetcode.com/problems/linked-list-cycle-ii/solutions/3274386/)

---

# Approach
Iterating through the list and and changing the value of each visited node to **100500**; as the constraints of node value are `-10^5 <= Node.val <= 10^5`, so any node with value of **100500** is already visited and changed by the compiler. If the compiler enters a node with value of **100500** return this node, indicating that I have already visited it and the cycle begins with it, or If the compiler enters a **NULL** node return this node (returning **NULL** basically), indicating that the compiler iterated through the list to the end without encountering any cycles.


# Complexity
- Time complexity:
`O(n)`

- Space complexity:
`O(1)`

# Code
## C++
```
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if(!head || head->val == 100500)
            return head;

        head->val = 100500;

        return detectCycle(head->next);
    }
};
```
## TypeScript
```
function detectCycle(head: ListNode | null): ListNode | null {
    if(!head || head.val === 100500)
        return head;

    head.val = 100500;

    return detectCycle(head.next);
};
```
## JavaScript
```
function detectCycle(head) {
    if(!head || head.val === 100500)
        return head;

    head.val = 100500;

    return detectCycle(head.next);
};
```