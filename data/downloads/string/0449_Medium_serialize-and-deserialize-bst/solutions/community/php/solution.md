# Serializing and Deserializing a Binary Search Tree in PHP

**Author:** arslanntariq
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/4952957/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/4952957/)

---

# Intuition
When we serialize a BST, we're essentially converting its structure and values into a string that can be easily reconstructed later. We'll just go through each node and remember its value. Then, during deserialization, we'll use those remembered values to rebuild the tree.

# Approach
Serialization involves going through the tree in a specific order and noting down the values of each node. For deserialization, we'll use those recorded values to recreate the tree structure

# Complexity
Time complexity:
- Serialization: It takes O(n) time because we need to visit each node once to serialize it.
- Deserialization: Also O(n) because we process each value once to reconstruct the tree.
Space complexity:
- Serialization: O(n) as we need to store values of all nodes.
- Deserialization: O(n) due to recursive function calls and space for the reconstructed tree.

# Code
```
class TreeNodeBST {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($value) { 
        $this->val = $value; 
    }
}

class Codec {
    /**
     * @param TreeNodeBST $root
     * @return String
     */
    function serialize($root) {
        if ($root === null) {
            return '';
        }
        
        $result = [];
        $this->preorder($root, $result);
        return implode(' ', $result);
    }
  
    /**
     * @param TreeNodeBST $node
     * @param String[] $result
     * @return void
     */
    function preorder($node, &$result) {
        if ($node === null) {
            $result[] = 'null'; // Serialize null nodes
            return;
        }
        
        $result[] = $node->val;
        $this->preorder($node->left, $result);
        $this->preorder($node->right, $result);
    }
  
    /**
     * @param String $data
     * @return TreeNodeBST
     */
    function deserialize($data) {
        if (empty($data)) {
            return null;
        }
        
        $values = explode(' ', $data);
        return $this->buildBST($values);
    }
  
    /**
     * @param String[] $values
     * @return TreeNodeBST
     */
    function buildBST(&$values) {
        $val = array_shift($values);
        if ($val === 'null') {
            return null;
        }
        
        $root = new TreeNodeBST($val);
        $root->left = $this->buildBST($values);
        $root->right = $this->buildBST($values);
        
        return $root;
    }
}

```