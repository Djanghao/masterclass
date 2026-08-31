# PHP graph + BFS solution

**Author:** GVA-ranepa
**Votes:** 0
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4539779/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4539779/)

---

# Approach
Follow the hints - convert tree into graph, then find the longest distance.
First: convert tree into graph, using inorder traversal. Use an array to describe the graph, where each key is a unique node of the tree, and value is a one to three elements array of connected nodes (parent, left child, right child). 
Second: perform BFS from the start point. Form the array with distances from the start. Maximum distance equals needed result.

![2024-01-10_11-09-51.png](./images/0.png)


# Code
```
class Solution {
    public $graph = []; // declare array for the graph
    function inorderConvert($root,$parent) {
        if ($root->left != NULL){
            $this->inorderConvert($root->left,$root->val);
        };
        if (!array_key_exists($root->val,$this->graph)){
            $this->graph[$root->val] = array();
            if ($parent > 0){  // constraint: node.val>=1, so if parent == 0, then current value is the rrot of the tree
                $this->graph[$root->val][] = $parent;
            }
            if ($root->left != NULL){
                $this->graph[$root->val][] = $root->left->val;
            };
            if ($root->right != NULL){
                $this->graph[$root->val][] = $root->right->val;
            };
        }
        if ($root->right != NULL){
            $this->inorderConvert($root->right,$root->val);
        };

        return $this->graph;
    }

    function amountOfTime($root, $start) {
        $graphAr = $this->inorderConvert($root,0); // form the graph
        $dist = array();   
        $dist[$start] = 0;    // declare distances array, add start with distance == 0
        $q = new SplQueue();    // start BFS
        $q->push($start);
        while (!$q->isEmpty()){   
            $curr = $q->pop();
            foreach ($graphAr[$curr] as $node) {  // iterate through all connected nodes
                if (!array_key_exists($node,$dist)){
                    $dist[$node] = $dist[$curr]+1;
                    $q->push($node);
                }
            }
        }
        return max($dist);
    }
}
```