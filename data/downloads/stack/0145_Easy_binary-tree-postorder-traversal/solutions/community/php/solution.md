# PHP Iteractive Stack With 1 Loop

**Author:** maxmtmn
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/929947/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/929947/)

---

Instead of using two loops we can use single loop and track visited parts of each node in the wrapper around original node, for simplicty we can use array [$node, $lVisited, $rVisited] where lVisited and rVisited are flags which tell us if left and right parts are visited respectively

```
class Solution {
    function postorderTraversal($root) {
        if(empty($root))
            return [];
        $stack = new SplStack();
        $stack->push([$root, false, false]);
        $results = [];
        while(!$stack->isEmpty()){
            list($node, $lVisited, $rVisited) = $stack->pop();
            if(!empty($node->left) && !$lVisited){
			    //add the node again so we can revisit right part later
                $stack->push([$node, true, $rVisited]);
                $stack->push([$node->left, false, false]);
            } elseif(!empty($node->right) && !$rVisited) {
			    //add the node again so we can revisit and append its own value
                $stack->push([$node, $lVisited, true]);
                $stack->push([$node->right, false, false]);
            } else {
                $results[] = $node->val;
            }
        }
        return $results;
    }
}
```