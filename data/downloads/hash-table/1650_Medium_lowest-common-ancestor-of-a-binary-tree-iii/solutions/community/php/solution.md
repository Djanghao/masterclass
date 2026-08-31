# PHP solution with hash table

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4453919/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4453919/)

---

# Code
```
class Solution {
    function lowestCommonAncestor($p, $q) {
        $map = [];
        while($p){
            $map[$p->val] = true;
            $p = $p->parent;
        }
        while($q){
            if(isset($map[$q->val])){
                return $q;
            }
            $q = $q->parent;
        }
    }
}
```