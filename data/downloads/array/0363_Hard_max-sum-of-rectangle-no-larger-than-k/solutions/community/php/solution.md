# Beating 100% in Runtime and memory both using PHP

**Author:** nishk2
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/5472766/](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/5472766/)

---

# Code
```
class Solution {
    function maxSumSubmatrix($matrix, $k) {
        $rows = count($matrix);
        $cols = count($matrix[0]);
        
        // Calculate prefix sums to get submatrix sums efficiently
        for ($i = 0; $i < $rows; $i++) {
            for ($j = 0; $j < $cols; $j++) {
                if ($i > 0) {
                    $matrix[$i][$j] += $matrix[$i - 1][$j];
                }
                if ($j > 0) {
                    $matrix[$i][$j] += $matrix[$i][$j - 1];
                }
                if ($i > 0 && $j > 0) {
                    $matrix[$i][$j] -= $matrix[$i - 1][$j - 1];
                }
            }
        }
        
        $result = PHP_INT_MIN;
        $dpHigh = array_fill(0, $rows, array_fill(0, $rows + 1, 0)); 
        $dpLow = array_fill(0, $rows, array_fill(0, $rows + 1, 0)); 
        
        for ($i = $rows - 1; $i >= 0; $i--) {
            for ($h = 1; $h <= $rows - $i; $h++) {
                $theValue = $this->getSum($matrix, $i, $cols - 1, $h, 1);
                $dpLow[$i][$h] = $theValue;
                $dpHigh[$i][$h] = $theValue;
                
                if ($theValue == $k) {
                    return $theValue; 
                }
                if ($theValue < $k) {
                    $result = max($result, $theValue);
                }
            }
        }

        for ($i = $rows - 1; $i >= 0; $i--) {
            for ($j = $cols - 2; $j >= 0; $j--) {
                for ($h = 1; $h <= $rows - $i; $h++) {
                    $newSum = $this->getSum($matrix, $i, $j, $h, 1);
                    
                    if ($dpLow[$i][$h] > 0) {
                        $dpHigh[$i][$h] += $newSum;
                        $dpLow[$i][$h] = $newSum;
                    } elseif ($dpHigh[$i][$h] < 0) {
                        $dpLow[$i][$h] += $newSum;
                        $dpHigh[$i][$h] = $newSum;
                    } else {
                        $dpHigh[$i][$h] += $newSum;
                        $dpLow[$i][$h] += $newSum;
                    }
                    
                    if ($dpHigh[$i][$h] >= $result && $dpLow[$i][$h] <= $k) {
                        for ($w = 1; $w <= $cols - $j; $w++) {
                            $sum = $this->getSum($matrix, $i, $j, $h, $w);
                            if ($sum == $k) {
                                return $sum; 
                            } elseif ($sum < $k) {
                                $result = max($result, $sum);
                            }
                        }
                    }
                }
            }
        }
        
        return $result;
    }

    private function getSum($matrix, $i, $j, $h, $w) {
        $sum = $matrix[$i + $h - 1][$j + $w - 1];
        if ($i > 0) {
            $sum -= $matrix[$i - 1][$j + $w - 1];
        }
        if ($j > 0) {
            $sum -= $matrix[$i + $h - 1][$j - 1];
        }
        if ($i > 0 && $j > 0) {
            $sum += $matrix[$i - 1][$j - 1];
        }
        return $sum;
    }
}
```