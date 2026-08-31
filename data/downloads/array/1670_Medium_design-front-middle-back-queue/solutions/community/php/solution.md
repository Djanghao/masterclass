# Solution Design Front Middle Back Queue

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-front-middle-back-queue/solutions/5240286/](https://leetcode.com/problems/design-front-middle-back-queue/solutions/5240286/)

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
class FrontMiddleBackQueue {
    private $queue;

    public function __construct() {
        $this->queue = [];
    }

    public function pushFront($val) {
        array_unshift($this->queue, $val);
    }

    public function pushMiddle($val) {
        $middle = intdiv(count($this->queue), 2);
        array_splice($this->queue, $middle, 0, $val);
    }

    public function pushBack($val) {
        array_push($this->queue, $val);
    }

    public function popFront() {
        if (count($this->queue) === 0) {
            return -1;
        } else {
            return array_shift($this->queue);
        }
    }

    public function popMiddle() {
        if (count($this->queue) === 0) {
            return -1;
        } else {
            $middle = intdiv(count($this->queue) - 1, 2);
            $val = $this->queue[$middle];
            array_splice($this->queue, $middle, 1);
            return $val;
        }
    }

    public function popBack() {
        if (count($this->queue) === 0) {
            return -1;
        } else {
            return array_pop($this->queue);
        }
    }
}

```