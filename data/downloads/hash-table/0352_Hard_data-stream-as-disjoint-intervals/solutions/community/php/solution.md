# beating 100% in runtime as well as memory using PHP

**Author:** nishk2
**Votes:** 1
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/5472759/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/5472759/)

---

# Code
```
class SummaryRanges {

    private $arr = [];

    function __construct() {
        $this->arr = [];
    }

    function addNum($value) {
        $valIsInside = false;
        for ($i = 0; $i < count($this->arr); $i++) {
            $x = $this->arr[$i][0];
            $y = $this->arr[$i][1];
            
            if ($value >= $x && $value <= $y) {
                $valIsInside = true;
                break;
            } else if ($value === $y + 1) {
                $this->arr[$i][1] = $value;
                if (isset($this->arr[$i + 1]) && $value + 1 === $this->arr[$i + 1][0]) {
                    $this->arr[$i][1] = $this->arr[$i + 1][1];
                    array_splice($this->arr, $i + 1, 1); 
                }
                $valIsInside = true;
                break;
            } else if ($value < $x) {
                if ($value + 1 == $x) {
                    $this->arr[$i][0] = $value;
                } else {
                    array_splice($this->arr, $i, 0, [[$value, $value]]);
                }
                $valIsInside = true;
                break;
            }
        }
        if (!$valIsInside) {
            $this->arr[] = [$value, $value];
        }
    }
  
    function getIntervals() {
        return $this->arr;
    }
}
```