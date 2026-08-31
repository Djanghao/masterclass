# [PHP] Hash table is a True O(n) solution, not an array_diff()

**Author:** mamyta
**Votes:** 2
**Link:** [https://leetcode.com/problems/destination-city/solutions/4406670/](https://leetcode.com/problems/destination-city/solutions/4406670/)

---

The time complexity of the provided solution is particularly efficient, especially when considering the worst-case scenario. In this scenario, the solution requires passing through all elements twice, which results in a linear time complexity of $$O(n)$$. This is notably efficient because it maintains a consistent increase in processing time relative to the number of elements, ensuring scalability.

In contrast, an alternative approach that utilizes the **array_diff()** function in PHP exhibits a time complexity of $$O(nlog n)$$. This increased complexity is due to the internal workings of array_diff(), which involves sorting each array using the **zend_sort** function. As sorting operations generally have a higher time complexity, this approach is less efficient compared to the linear solution. The details of the array_diff() function's implementation can be found in the PHP source code, specifically in the array.c file, available at the PHP GitHub repository.
https://github.com/php/php-src/blob/master/ext/standard/array.c

# Code
```
class Solution {
    function destCity($paths) {
        $map = [];
        foreach($paths as $one){
            if(!isset($map[$one[1]])){
                $map[$one[1]] = true;
            }
            $map[$one[0]] = false;
        }
        foreach($map as $city=>$c){
            if($c){
                return $city;
            }
        }
        return false;
    }
}
```
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->