# Annotated PHP solution

**Author:** quartarian
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-even-jump/solutions/2791126/](https://leetcode.com/problems/odd-even-jump/solutions/2791126/)

---

# I'm just out here winging it. I thought others might find a working PHP solution helpful.

# Code
```
class Solution {
    private $jumpMap = [];

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function oddEvenJumps($arr) {
        // Generates hash table of all possible jump locations
        $this->generateJumpMap($arr);

        $totalGoodStartingPoints = 0;
        for($i=0;$i<count($arr);$i++) {
            if($this->isGoodStartingPoint($i, $arr)) {
                $totalGoodStartingPoints++;
            }
        }
        return $totalGoodStartingPoints;
    }

    /**
     * @param Integer[] $arr
     * @return void
     */
    function generateJumpMap($arr) {
        $jumpMap = [];

        /*
        * STEP 1: Calculate all odd jumps
        */
        // Sort array and retain original indexing (as opposed to sort())
        asort($arr);

        // During the first, and subsequent *odd* jumps,
        // look for the smallest value that is greater than
        // or equal to the starting point.
        foreach($arr as $originalIndex=>$value) {
            $loopCounter = 0;
            $nextIndex = false;

            // Starting at the current index, step forward
            // until we find the next jump location, or reach
            // the end of the array.
            while(true) {
                $loopCounter++;
                $nextValue = next($arr);
                if($nextValue === false) {
                    // If we've reached the end, we should set the pointer
                    // back to the end, as next() moves it back to the beginning.
                    end($arr);
                    // Skip the rewind
                    $loopCounter--;
                    break;
                }
                // Make sure the the next index comes after
                // the starting value in the original array.
                if(key($arr) > $originalIndex) {
                    $nextIndex = key($arr);
                    break;
                }
            }

            $jumpMap[$originalIndex]['odd'] = $nextIndex;

            // Undo all but 1 of the previous loops to set iterator pointer
            // to next element.
            for($i=0;$i<$loopCounter-1;$i++) {
                prev($arr);
            }
        }

        /*
        * STEP 2: Calculate all even jumps
        */
        // Reverse sort array and retain original indexing
        arsort($arr);

        // During the second, and subsequent *even* jumps,
        // look for the largest value that is less than 
        // or equal to the starting point.
        foreach($arr as $originalIndex=>$value) {
            $loopCounter = 0;
            $nextIndex = false;

            // Starting at the current index, step forward
            // until we find the next jump location, or reach
            // the end of the array.
            while(true) {
                $loopCounter++;
                $nextValue = next($arr);
                if($nextValue === false) {
                    // If we've reached the end, we should set the pointer
                    // back to the end, as next() moves it back to the beginning.
                    end($arr);
                    // Skip the rewind
                    $loopCounter--;
                    break;
                }
                // Make sure the the next index comes after
                // the starting value in the original array.
                if(key($arr) > $originalIndex) {
                    $nextIndex = key($arr);
                    break;
                }
            }
            $jumpMap[$originalIndex]['even'] = $nextIndex;


            // Undo all but 1 of the previous loops
            // to set iterator pointer to next
            // element
            for($i=0;$i<$loopCounter-1;$i++) {
                prev($arr);
            }
        }

        $this->jumpMap = $jumpMap;
    }

    /**
     * @param Integer $startIndex
     * @param Integer[] $arr
     * @param Integer $jumpCount
     * @return boolean
     */
    function isGoodStartingPoint($startIndex, $arr, $jumpCount = 1) {
        $isEven = $jumpCount % 2 === 0;

        // Base case #1: We've reached the end
        if($startIndex === count($arr)-1) {
            return true;
        }
        // Base case #2: We've reached a dead end
        else if($startIndex === false) {
            return false;
        }
        // Recursive call
        else {
            $nextIndex = $this->jumpMap[$startIndex][ $isEven ? 'even' : 'odd'];
            return $this->isGoodStartingPoint($nextIndex, $arr, $jumpCount+1);
        }
    }
}
```