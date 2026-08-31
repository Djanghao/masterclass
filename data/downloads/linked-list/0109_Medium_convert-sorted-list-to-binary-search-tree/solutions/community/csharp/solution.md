# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/5815325/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/5815325/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/submissions/1397211072
- ***C++ Code -->*** https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/submissions/1396963778
- ***Python3 Code -->*** https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/submissions/1397208400
- ***Java Code -->*** https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/submissions/1397165519
- ***C Code -->*** https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/submissions/1397235522
- ***Python Code -->*** https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/submissions/1397199986
- ***C# Code -->*** https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/submissions/1397214029
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(N)
# Code
```c []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct ListNode* findMiddle(struct ListNode* head) {
    struct ListNode* prev = NULL;
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    while (fast != NULL && fast->next != NULL) {
        prev = slow;
        fast = fast->next->next;
        slow = slow->next;
    }
    if (prev) {
        prev->next = NULL;
    }
    return slow;
}

struct TreeNode* sortedListToBST(struct ListNode* head) {
    if (!head)
        return NULL;
    struct ListNode* mid = findMiddle(head);
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = mid->val;
    root->left = NULL;
    root->right = NULL;
    if (mid != head) {
        root->left = sortedListToBST(head);
    }
    root->right = sortedListToBST(mid->next);
    return root;
}
```
