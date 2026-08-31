# PHP - easy soltuion

**Author:** tinghaolai
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/3314211/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/3314211/)

---

# Intuition

While looping every position, 
store current position info into hash table,
and check if previous and next step info is valid from hash table,
no worry if next/prev step is not in hash table,
cuz we'll run the next/prev step in the loop later.

# Code
```
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Boolean
     */
    function checkValidGrid($grid) {
        if ($grid[0][0] != 0) {
            return false;
        }
        
        $haventCheck = [];
        // run every possible direction
        $directions = [
            [-1, -2],
            [-2, -1],
            [-1, 2],
            [-2, 1],
            [1, -2],
            [2, -1],
            [1, 2],
            [2, 1]
        ];
        foreach ($grid as $i => $row) {
            foreach ($row as $j => $val) {
                // store current position into havent run
                $haventCheck[$val] = ['i' => $i, 'j' => $j];
                // check previos and next step valid
                foreach ([$val - 1, $val + 1] as $checkVal) {
                    if (!empty($haventCheck[$checkVal])) {
                        $checkPos = $haventCheck[$checkVal];
                        foreach ($directions as $direction) {
                            $biasI = $direction[0];
                            $biasJ = $direction[1];
                            // continue if valid
                            if ($biasI + $i == $checkPos['i'] && $biasJ + $j == $checkPos['j']) {
                                continue 2;
                            }
                        }

                        // return false if not found any valid
                        return false;
                    }
                }
            }
        }

        // valid
        return true;
    }
}
```