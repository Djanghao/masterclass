# Just find the list head and traverse to tail from there - C++ O(N) solution

**Author:** strahd
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/6004113/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/6004113/)

---

# Approach
If you find the list head first, you don't need any additional data structure. 

# Complexity
- Time complexity:
O(N) -> worst case you start from the tail, traverse to head and traverse to tail again. 

- Space complexity:
O(N) -> need a an array same size as the given list to return
# Code
```cpp []

class Solution {
public:
	vector<int> toArray(Node *node){
        Node *c = node;
        vector<int> res;
        while (c->prev) c = c->prev;
        while (c) {
            res.push_back(c->val);
            c = c->next;
        }
        return res;
    }
};
```