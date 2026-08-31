# Understandable and simple solution

**Author:** Abdullo_
**Votes:** 0
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/5682847/](https://leetcode.com/problems/subrectangle-queries/solutions/5682847/)

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
```php []
class SubrectangleQueries {
    /**
     * @param Integer[][] $rectangle
     */
    function __construct($rectangle) {
        $this->rectangle = $rectangle;
    }
  
    /**
     * @param Integer $row1
     * @param Integer $col1
     * @param Integer $row2
     * @param Integer $col2
     * @param Integer $newValue
     * @return NULL
     */
    function updateSubrectangle($row1, $col1, $row2, $col2, $newValue) {
        for ($i = $row1; $i <= $row2; $i++) {
            for ($j = $col1; $j <= $col2; $j++) {
                $this->rectangle[$i][$j] = $newValue;
            }
        }
    }
  
    /**
     * @param Integer $row
     * @param Integer $col
     * @return Integer
     */
    function getValue($row, $col) {
        return $this->rectangle[$row][$col];

    }
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * $obj = SubrectangleQueries($rectangle);
 * $obj->updateSubrectangle($row1, $col1, $row2, $col2, $newValue);
 * $ret_2 = $obj->getValue($row, $col);
 */
```
# Code
```php []
class SubrectangleQueries:

    def __init__(self, rectangle: List[List[int]]):
        self.rectangle = rectangle

    def updateSubrectangle(self, row1: int, col1: int, row2: int, col2: int, newValue: int) -> None:
        for i in range(row1, row2 + 1):
            for j in range(col1, col2 + 1):
                self.rectangle[i][j] = newValue

    def getValue(self, row: int, col: int) -> int:
        return self.rectangle[row][col]

```