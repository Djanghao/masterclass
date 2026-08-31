# php recursive sum nodes

**Author:** tamer-kamel
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/1830962/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/1830962/)

---

Recursive function to get nodes sum in php

```
	private $n = 0;
    /**
     * @param TreeNode $root
     * @return Integer
     */
    function equalToDescendants($root) {
        $this->sumNodes($root);
        
        return $this->n;
    }
    
    function sumNodes($root){
        if(!$root)
            return 0;
        
        $sum = $this->sumNodes($root->left, $sum) + $this->sumNodes($root->right, $sum);
        
        if($sum == $root->val)
            $this->n++;
        
        return $sum+$root->val;
    }
```