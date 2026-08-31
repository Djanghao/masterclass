# Solution Throne Inheritance

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/throne-inheritance/solutions/5183533/](https://leetcode.com/problems/throne-inheritance/solutions/5183533/)

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
class ThroneInheritance {
    private $king;
    private $nameToNode;

    public function __construct($kingName) {
        $this->king = new genTreeNode($kingName);
        $this->nameToNode = array($kingName => $this->king);
    }

    public function birth($parentName, $childName) {
        $newChild = new genTreeNode($childName);
        $this->nameToNode[$childName] = $newChild;
        $this->nameToNode[$parentName]->children[] = $newChild;
    }

    public function death($name) {
        $this->nameToNode[$name]->alive = false;
    }

    public function getInheritanceOrder() {
        $inheritanceOrder = array();
        $stack = array($this->king);

        while (!empty($stack)) {
            $curSuccessor = array_pop($stack);

            if ($curSuccessor->alive) {
                $inheritanceOrder[] = $curSuccessor->name;
            }

            $children = $curSuccessor->children;
            for ($i = count($children) - 1; $i >= 0; $i--) {
                $stack[] = $children[$i];
            }
        }

        return $inheritanceOrder;
    }
}

class genTreeNode {
    public $name;
    public $alive;
    public $children;

    public function __construct($name) {
        $this->name = $name;
        $this->alive = true;
        $this->children = array();
    }
}

```