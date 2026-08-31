# Easy to understand PHP solution with comment

**Author:** Vlados117
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/5566724/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/5566724/)

---

Upvote if it helps to you)
Have a nive day, champion!

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minOperations($nums) {
        //Here we keep our result
        $result = 0;

        //Case if we have only one element
        if (count($nums) == 1) {
            return 0;
        }

        //for every element in array we check prev element and in case 
        //prev element >= current element we increase result on differece 
        //between prev and current elements + 1
        //and copy prev el and increase it
        for ($i=1; $i < count($nums); $i++) {
            if ($nums[$i-1] >= $nums[$i]) {
                $result += $nums[$i-1] - $nums[$i] + 1;
                $nums[$i] = $nums[$i-1] + 1;
            }
        }

        return $result;
    }
}
```