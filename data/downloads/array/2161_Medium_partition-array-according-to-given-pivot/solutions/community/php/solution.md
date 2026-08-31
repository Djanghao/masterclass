# Simple solution in PHP

**Author:** laurentpartu
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/5858791/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/5858791/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize 3 arrays to keep track of numbers less than pivot, greater than pivot and equal to pivot.
2. Iterate over the given array and for each element in the array.
    - All element less than the pivot are appended to the array for  less than element.
    - All element greater than the pivot are appended to the array for  greater element.
    - Elements equal to the pivot are appended to the array for equal elements.
3. return the original array as the merge of the 3 arrays in this order: less, equal and greater
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $pivot
     * @return Integer[]
     */
    function pivotArray($nums, $pivot) {
        $l = [];
        $g = [];
        $e = [];
        foreach($nums as $el){
            if($el < $pivot){
                $l[] = $el;
            }else if($el > $pivot){
                $g[] = $el;
            }else{
                $e[] = $el;
            }
        }
       
        return $nums = array_merge($l,$e,$g);
    }
}
```