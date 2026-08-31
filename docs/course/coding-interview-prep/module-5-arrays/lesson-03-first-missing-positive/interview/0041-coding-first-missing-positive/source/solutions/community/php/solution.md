# O(n) PHP Solution

**Author:** luissimioni
**Votes:** 4
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/1553646/](https://leetcode.com/problems/first-missing-positive/solutions/1553646/)

---

First we flip the array, so we have the numbers as indexes.
Then we check if the index exists, starting by 1 and incrementing one by one.
As soon as the index does not exist, we can return the current number.

Checking if a index exists is done in constant time, so this differs from PHP solutions that use in_array function because in_array is a linear search. When you use in_array inside a loop, it turns your function into a O(n*m) solution.

```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function firstMissingPositive($nums) {
        $nums = array_flip($nums);
        
        $firstMissingPositive = 1;
        
        while(isset($nums[$firstMissingPositive])) {
            $firstMissingPositive++;
        }
        
        return $firstMissingPositive;
    }
}
```