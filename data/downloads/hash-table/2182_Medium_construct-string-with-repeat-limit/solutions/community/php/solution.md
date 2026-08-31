# Easy to understand using Max Heap (Beats 100.00%)

**Author:** Kaursanampreet
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/5430226/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/5430226/)

---

# Intuition
We need to construct a string using characters from a given string such that it is lexicographically largest possible. However, there's a restriction that no letter can appear consecutively more times than a specified limit.

We can use a max heap to retrieve elements based on their highest priority. 

# Approach
Store string char's in a max heap
1. Go over the heap until its valid
2. Store current character that program is processing
3. If current is same as the largest, proceed to the next maximum. Add one char and push remaing back to the heap.
4. If the element's count does not exceed the repeat limit, we add it directly to the result.
5. If the count is greater than, add char until the limit, and push the remaining to the heap

At the end we will have final string based on required rules

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n+mlogm)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m)

# Code
```
class Solution {

    /**
     * @param String $s
     * @param Integer $repeatLimit
     * @return String
     */
    function repeatLimitedString($s, $repeatLimit) {
        $maxHeap = new SplMaxHeap();
        $hasMap = [];
        for($i = 0; $i < strlen($s); $i++) {
            $hasMap[$s[$i]]++;
        }

        foreach($hasMap as $key => $value) {
            $maxHeap->insert([$key, $value]);
        }

        $curr = '';
        $newString = '';
        while($maxHeap->valid()) {
            $largestCharSet = $maxHeap->extract();
            if ($curr == $largestCharSet[0]) {
                if ($maxHeap->valid()) {
                    $secondLargest = $maxHeap->extract();
                    $newString .= $this->filChars($secondLargest[0], 1);
                    if (($secondLargest[1] - 1) > 0) {
                        $maxHeap->insert([$secondLargest[0], $secondLargest[1] - 1]);
                    }
                    $maxHeap->insert($largestCharSet);
                    $curr = $secondLargest[0];
                }
            } else {
                $this->calString($maxHeap, $largestCharSet, $repeatLimit, $curr, $newString);
            }
        }
        return $newString;
    }

    function calString($maxHeap, $largestCharSet, $repeatLimit, &$curr, &$newString) {
        if($largestCharSet[1] < $repeatLimit) {
            $newString .= $this->filChars($largestCharSet[0], $largestCharSet[1]);
        } else {
            $remaining = $largestCharSet[1] - $repeatLimit;
            $newString .= $this->filChars($largestCharSet[0], $repeatLimit);
            if ($remaining > 0) {
                $maxHeap->insert([$largestCharSet[0], $remaining]);
            }
        }
        $curr = $largestCharSet[0];
    }

    function filChars($char, $count) {
        $newString = '';
        while($count > 0) {
            $newString .= $char;
            $count--;
        }
        return $newString;
    }
}
```