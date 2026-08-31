# First Ever Solution in PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/5572964/](https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/5572964/)

---

# Code
```
class Solution {
    private $radius;
    private $x_center;
    private $y_center;

    public function __construct($radius, $x_center, $y_center) {
        $this->radius = $radius;
        $this->x_center = $x_center;
        $this->y_center = $y_center;
    }

    public function randPoint() {
        $r = sqrt(rand() / getrandmax()) * $this->radius;
        $theta = rand() / getrandmax() * 2 * pi();
        return [$this->x_center + $r * cos($theta), $this->y_center + $r * sin($theta)];
    }
}
```