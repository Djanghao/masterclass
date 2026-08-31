# Solution Design Skiplist

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/4900195/](https://leetcode.com/problems/design-skiplist/solutions/4900195/)

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
class Node {
    public $val;
    public $next;
    public $down;

    public function __construct($val) {
        $this->val = $val;
        $this->next = null;
        $this->down = null;
    }
}

class Skiplist {
    private $head;
    private $globaltail;
    private $count;

    public function __construct($levels = 30) {
        $this->head = new Node(-INF);
        $this->globaltail = new Node(INF);
        $this->count = 0;

        $curr = $this->head;
        $curr->next = $this->globaltail;
        for ($i = 0; $i < $levels - 1; $i++) {
            $curr->down = new Node(-INF);
            $curr = $curr->down;
            $curr->next = $this->globaltail;
        }
    }

    public function search($target) {
        $curr = $this->head;
        while ($curr != null) {
            if ($curr->val == $target) {
                return true;
            } elseif ($curr->next->val <= $target) {
                $curr = $curr->next;
            } else {
                $curr = $curr->down;
            }
        }
        return false;
    }

    public function add($num) {
        $stack = [];
        $curr = $this->head;

        while ($curr != null) {
            if ($num <= $curr->next->val) {
                array_push($stack, $curr);
                $curr = $curr->down;
            } else {
                $curr = $curr->next;
            }
        }

        $prev = null;
        $numNextLevel = sqrt($this->count);

        while (!empty($stack)) {
            $curr = array_pop($stack);
            $node = new Node($num);
            $node->next = $curr->next;
            $curr->next = $node;

            if ($prev != null) {
                $node->down = $prev;
            } else {
                $prev = $node;
                $this->count++;
            }

            if (random_int(0, PHP_INT_MAX) / PHP_INT_MAX > ($numNextLevel / $this->count)) {
                break;
            }

            $numNextLevel = sqrt($numNextLevel);
        }
    }

    public function erase($num) {
        $curr = $this->head;
        $result = false;

        while ($curr != null && $curr->val < $num) {
            if ($num <= $curr->next->val) {
                if ($curr->next != null && $curr->next->val == $num) {
                    $this->count--;
                    $result = true;
                    $curr->next = $curr->next->next;
                }
                $curr = $curr->down;
            } else {
                $curr = $curr->next;
            }
        }

        return $result;
    }
}

```