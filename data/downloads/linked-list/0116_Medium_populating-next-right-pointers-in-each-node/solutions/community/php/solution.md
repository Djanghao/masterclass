# Easy and stupid PHP solution

**Author:** kexxx777xxx
**Votes:** 2
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/1551025/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/1551025/)

---

```
class Solution {
    /**
     * @param Node $root
     * @return Node
     */
    public function connect($root) 
    {
        $l = $root->left; 
        if ($l) {
            $l->next = $root->right;
            $this->connect($l);
        }
        
        $r = $root->right;
        if ($r) {
            $r->next = $root->next->left;
            $this->connect($r);
        }
        
        return $root;
    }
}
```