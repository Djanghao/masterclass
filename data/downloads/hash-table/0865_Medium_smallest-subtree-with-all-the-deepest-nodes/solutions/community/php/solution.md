# Smallest Subtree with all the Deepest Nodes | PHP - Solution, faster then 100% | 100% memory

**Author:** dragon13
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/970025/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/970025/)

---

Runtime: 8 ms, faster than 100.00% of PHP online submissions for Smallest Subtree with all the Deepest Nodes.
Memory Usage: 17.3 MB, less than 100.00% of PHP online submissions for Smallest Subtree with all the Deepest Nodes.

    function subtreeWithAllDeepest($root) {
        $this->max=0;
        $this->getdeepLeafs($root, 0);
        $leafs=$this->leafs;
        if (count($leafs)===1) return $leafs[0];
        do {
            $next=[];
            foreach ($leafs as $leaf) {
                if (array_search($leaf->last, $next) === false) {
                    $next[] = $leaf->last;
                    echo $leaf->last->val.'*';
                }
            }
            $leafs = $next;
        } while (count($leafs)>1);
        return $leafs[0];
    }
    
    function getdeepLeafs($root, $depth) {
        $depth++;
        if ($root->left===null && $root->right===null) {
            if ($depth===$this->max) {
                $this->leafs[] = $root;
            } elseif ($depth>$this->max) {
                $this->max = $depth;
                $this->leafs = [$root];
            }
        } else {
            if ($root->left!==null) {
                $root->left->last = $root;
                $this->getdeepLeafs($root->left, $depth);
            }
            if ($root->right!==null) {
                $root->right->last = $root;
                $this->getdeepLeafs($root->right, $depth);
            }
        }
    }