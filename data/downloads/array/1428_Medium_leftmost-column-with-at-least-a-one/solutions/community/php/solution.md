# PHP beats 100% time and 100% space

**Author:** maxmtmn
**Votes:** 2
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/764376/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/764376/)

---

Since data is sorted we could start on the right top corner and move left if 1 is found and down if 0 is found (because 1 can't be located on the left side of 0) until we reach opposite corner

```
//O(N+M) time O(1) space
class Solution {
    /**
     * @param BinaryMatrix $binaryMatrix
     * @return Integer
     */
    public function leftMostColumnWithOne($binaryMatrix) {
        $dimensions = $binaryMatrix->dimensions();
        $xPointer = $dimensions[1] - 1;
        $yPointer = 0;
        $min = -1;
        while ($xPointer >= 0 && $yPointer < $dimensions[0]) {
            $val = $binaryMatrix->get($yPointer, $xPointer);
            if($val === 1) {
                $min = $xPointer;
                $xPointer--;
            }
            else
                $yPointer++;
        }
        return $min;
    }
}
```