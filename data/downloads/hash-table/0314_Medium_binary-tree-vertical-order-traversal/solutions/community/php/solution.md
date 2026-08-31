# PHP solution with comments. Traversal with queue. O(n)

**Author:** mamyta
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/4419509/](https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/4419509/)

---

# Code
```
class Solution {
    function verticalOrder($root) {
        // Initialize minimum and maximum horizontal distances from the root
        $minIndex = PHP_INT_MAX;
        $maxIndex = PHP_INT_MIN;
        // Map to store nodes at each horizontal distance
        $map = [];
        // Check if the root is not null
        if($root){
            // Queue for level order traversal, storing nodes and their horizontal distance
            $q = [[$root,0]];
        }
        // Perform level order traversal
        while($q){
            // Dequeue an element from the queue
            $curr = array_shift($q);
            $node = $curr[0]; // Current node
            $index = $curr[1]; // Horizontal distance of the current node
            // Initialize the list for this horizontal distance if not already
            if(!isset($map[$index])){
                $map[$index] = [];
            }
            // Update the minimum and maximum horizontal distances
            $minIndex = min($minIndex,$index);
            $maxIndex = max($maxIndex,$index);
            // Add the current node's value to its corresponding horizontal distance list
            $map[$index][] = $node->val;
            // If left child exists, add it to the queue with horizontal distance decremented
            if($node->left){
                $q[] = [$node->left,$index-1];
            }
            // If right child exists, add it to the queue with horizontal distance incremented
            if ($node->right){
                $q[] = [$node->right,$index+1];
            }
        }
        // Prepare the result array
        $res=[];
        // Traverse the map from minIndex to maxIndex and add lists to the result
        for($i=$minIndex;$i<=$maxIndex;$i++){
            if(isset($map[$i])){
                $res[] = $map[$i];
            }
        }
        return $res;
    }
}
```
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
