# Simple C++ solution

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/5992108/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/5992108/)

---

# Code
```cpp []
/**
 * Definition for doubly-linked list.
 * class Node {
 *     int val;
 *     Node* prev;
 *     Node* next;
 *     Node() : val(0), next(nullptr), prev(nullptr) {}
 *     Node(int x) : val(x), next(nullptr), prev(nullptr) {}
 *     Node(int x, Node *prev, Node *next) : val(x), next(next), prev(prev) {}
 * };
 */
class Solution {
public:
	vector<int> toArray(Node *head){
        vector<int> ans;
        while (head != nullptr) {
            ans.push_back(head->val);
            head = head->next;
        }
        return ans;
    }
};
```