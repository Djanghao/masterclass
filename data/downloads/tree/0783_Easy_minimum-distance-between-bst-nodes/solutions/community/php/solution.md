# A solution

**Author:** pburkett
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/5127199/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/5127199/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    protected $valuesArray = [];
    protected $smallestDistanceSeen = 9999999999;

    function addValueToArray($val) {
        if (count($this->valuesArray) === 0){ 
            $this->valuesArray[] = $val;
            return 0;
        }

        else if ($this->valuesArray[count($this->valuesArray) - 1] <= $val ){
            $this->valuesArray[] = $val;
            return count($this->valuesArray) - 1;
        }
        else if ($this->valuesArray[0] >= $val ){
            array_unshift($this->valuesArray, $val);
            return 0;
        }
        else {
            for ($i = 0; $i < count($this->valuesArray); $i++ ){
                if ($this->valuesArray[$i] > $val ){
                    array_splice($this->valuesArray, $i, 0, $val);
                    return $i;
                }
            }
        }
    }

    function checkForSmallestDistance($indexAppended){
        if ($indexAppended !== (count($this->valuesArray) -1)){
            $distanceToNextVal = $this->valuesArray[$indexAppended + 1] -  $this->valuesArray[$indexAppended] ;
            if ($distanceToNextVal < $this->smallestDistanceSeen){
                $this->smallestDistanceSeen = $distanceToNextVal;
            }
        }
        
        if ($indexAppended !== 0){
            $distanceToPrevVal = $this->valuesArray[$indexAppended] - $this->valuesArray[$indexAppended - 1] ;
            if ($distanceToPrevVal < $this->smallestDistanceSeen){
                    $this->smallestDistanceSeen = $distanceToPrevVal;
            }

        }
    }
        
    function traverseNode($node){
        $indexAppended = $this->addValueToArray($node->val);
        if (count($this->valuesArray) > 1) $this->checkForSmallestDistance($indexAppended);
        if ($node->left) $this->traverseNode($node->left);
        if ($node->right) $this->traverseNode($node->right);
    }   



    /**
     * @param TreeNode $root
     * @return Integer
     */
    function minDiffInBST($root) {
        $this->traverseNode($root);
        return $this->smallestDistanceSeen;
    }

}
```