# Solution Design an Ordered Stream

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/5229922/](https://leetcode.com/problems/design-an-ordered-stream/solutions/5229922/)

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
class OrderedStream {
    private $data;
    private $i;
    private $x;

    public function __construct($n) {
        $this->x = $n;
        $this->data = array_fill(0, $n, "");
        $this->i = 1;
    }
    
    public function insert($idKey, $value) {
        $ans = [];
        $this->data[$idKey - 1] = $value;
        if ($idKey == $this->i) {
            for ($j = $this->i - 1; $j < $this->x; ++$j) {
                if (!empty($this->data[$j])) {
                    $ans[] = $this->data[$j];
                    $this->i++;
                } else {
                    break;
                }
            }
        }
        return $ans;
    }
}

```