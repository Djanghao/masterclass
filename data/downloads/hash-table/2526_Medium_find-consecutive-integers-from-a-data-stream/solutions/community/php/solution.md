# PHP solution

**Author:** nor1999
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3035457/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3035457/)

---

# Code
```
class DataStream {
    private $k;
    private $value;
    private $counter;

    public function __construct($value, $k) {
        $this->k = $k;
        $this->value = $value;
        $this->counter = 0;
    }

    public function consec($num) {
        if ($num == $this->value) {
            $this->counter++;
        } else {
            $this->counter = 0;
        }
        return $this->counter >= $this->k;
    }
}
```