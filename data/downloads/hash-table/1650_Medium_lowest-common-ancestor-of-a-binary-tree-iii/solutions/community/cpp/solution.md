# [C++] in 7 Lines with 100% Fast Space and Time

**Author:** kalEl_MS
**Votes:** 63
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/937341/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/937341/)

---

```
//It is just a variation of Intersection of LinkedList!
class Solution {
public:
    Node* lowestCommonAncestor(Node* p, Node * q) {
        Node* a = p;
        Node* b = q;
        while(a != b) {
            a = a == nullptr ? q : a->parent;
            b = b == nullptr ? p : b->parent;  
        }
        return a;
    }
};

```