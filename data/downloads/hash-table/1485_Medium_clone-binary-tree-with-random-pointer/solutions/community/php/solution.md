# PHP Solution with Hashmap, Beats 100% time/space

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/954217/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/954217/)

---

We can simply iterate through whole tree making clones for all nodes and cache them into hashmap using spl_object_id function for hash key without setting random pointers to avoid loops. On second step reiterate tree setting random pointers from precreated clones

```
class Solution {
    
    private $clonedNodes = [];
    
    public function copyRandomBinaryTree($root) {
        //first step will pre-create whole tree except random pointers
		//it is important because otherwise it will go into unlimited loops
        $this->newOrExisting($root);
        //second step will set random pointers using pre-created cloned nodes
        $this->applyRandom($root);
        return $this->newOrExisting($root);
    }
    
    public function applyRandom($node){
        if(empty($node))
            return null;
        if($node->random)
            $this->newOrExisting($node)->random = $this->newOrExisting($node->random); 
        $this->applyRandom($node->left);
        $this->applyRandom($node->right);
    }
    
    public function newOrExisting($node){
        if(empty($node))
            return null;
        $id = spl_object_id($node);
        if(isset($this->clonedNodes[$id]))
            return $this->clonedNodes[$id];
        else {
            $clone = new NodeCopy(
                $node->val,
                $this->newOrExisting($node->left),
                $this->newOrExisting($node->right),
                null
            );
            $this->clonedNodes[$id] = $clone;
            return $clone;
        }
    }
    
}
```