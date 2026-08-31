# Populating Next Right Pointers in Each Node II | [PHP] Solution faster then 100% | O(n)

**Author:** dragon13
**Votes:** 1
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/962155/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/962155/)

---

Runtime: 16 ms, faster than 100.00% of PHP online submissions for Populating Next Right Pointers in Each Node II.

    public function connect($root) {
        if ($root===null) return [];
        $this->nextLevel([$root]);
        return $root;
    }
    function nextLevel($nodes) {
        if (count($nodes)===0) return;
        $init=true;
        foreach ($nodes as $node) {
            if ($init) {
                $init=false;
            } else {
                $last->next = $node;
            }
            $last = $node;
            if ($node->left!==null) $next[] = $node->left;
            if ($node->right!==null) $next[] = $node->right;
        }
        unset($nodes);
        $this->nextLevel($next);
    }