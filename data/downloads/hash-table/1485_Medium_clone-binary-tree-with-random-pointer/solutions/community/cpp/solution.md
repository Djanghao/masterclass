# short ^^

**Author:** andrii_khlevniuk
**Votes:** 1
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/971652/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/971652/)

---

```
class Solution
{
    unordered_map<Node*, NodeCopy*> m;
    
public:
    NodeCopy* create(Node* r)
    {
        return r ? m[r] = new NodeCopy(r->val, create(r->left), create(r->right), 0) : 0;
    }
    
    void fillRandom(NodeCopy* cr, Node* r)
    {
        if(cr) 
        {
            cr->random = m[r->random];
            fillRandom(cr->left,  r->left);
            fillRandom(cr->right, r->right);
        }
    }
    
    NodeCopy* copyRandomBinaryTree(Node* r) 
    {
        auto out = create(r);
        fillRandom(out, r);
        return out;
    }
};
```