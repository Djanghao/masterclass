# Beating 100% users in Runtime & Memory using PHP

**Author:** nishk2
**Votes:** 2
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5483507/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5483507/)

---

# Code
```
class Solution {
    function getDirections($root, $startValue, $destValue) {
        $pathToStart = [];
        $pathToDest = [];
        $this->findPath($root, $startValue, $pathToStart);
        $this->findPath($root, $destValue, $pathToDest);

        $i = 0;
        while ($i < count($pathToStart) && $i < count($pathToDest) && $pathToStart[$i] == $pathToDest[$i]) {
            $i++;
        }

        $stepsUp = str_repeat('U', count($pathToStart) - $i);
        $stepsDown = implode('', array_slice($pathToDest, $i));

        return $stepsUp . $stepsDown;
    }

    private function findPath($node, $value, &$path) {
        if ($node == null) return false;
        if ($node->val == $value) return true;

        $path[] = 'L';
        if ($this->findPath($node->left, $value, $path)) return true;
        array_pop($path);

        $path[] = 'R';
        if ($this->findPath($node->right, $value, $path)) return true;
        array_pop($path);

        return false;
    }
}
```