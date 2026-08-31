# PHP - serialize and deserialize

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/5667803/](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/5667803/)

---

Credit: 
https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/151421/java-preorder-recursive-solution-using-queue

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
```php []
/**
 * Definition for a Node.
 * class Node {
 *     public $val = null;
 *     public $children = null;
 *     function __construct($val = 0) {
 *         $this->val = $val;
 *         $this->children = array();
 *     }
 * }
 */
class Codec {

    // Encodes a tree to a single string.
    public function serialize($root) {
        $list = [];
        $this->serializeHelper($root, $list);
        return implode(",", $list);
    }

    private function serializeHelper($root, &$list) {
        if ($root === null) {
            return;
        } else {
            $list[] = strval($root->val);
            $list[] = strval(count($root->children));
            foreach ($root->children as $child) {
                $this->serializeHelper($child, $list);
            }
        }
    }

    // Decodes your encoded data to tree.
    public function deserialize($data) {
        if (empty($data)) {
            return null;
        }

        $ss = explode(",", $data);
        $queue = new SplQueue();
        foreach ($ss as $s) {
            $queue->enqueue($s);
        }

        return $this->deserializeHelper($queue);
    }

    private function deserializeHelper($queue) {
        $root = new Node(0);
        $root->val = intval($queue->dequeue());
        $size = intval($queue->dequeue());
        $root->children = [];
        for ($i = 0; $i < $size; $i++) {
            $root->children[] = $this->deserializeHelper($queue);
        }
        return $root;
    }
}



/**
 * Your Codec object will be instantiated and called as such:
 * $obj = Codec();
 * $ret_1 = $obj->serialize($root);
 * $ret_2 = $obj->deserialize($data);
 */
```