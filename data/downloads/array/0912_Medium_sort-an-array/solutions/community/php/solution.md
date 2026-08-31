# Merge Sort algorithm (O(n log n))

**Author:** Angielf
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/5532057/](https://leetcode.com/problems/sort-an-array/solutions/5532057/)

---

# Approach
The approach used in this solution is called the Merge Sort algorithm. It is an algorithm that follows the divide-and-conquer strategy:

1. Divide: The array is divided into two halves recursively until each subarray contains only one element or is empty.
2. Conquer: The subarrays are sorted by recursively calling the sortArray function on each half.
3. Merge: The sorted subarrays are merged together to produce a sorted array.

The sortArray function is the main function that implements the Merge Sort algorithm. 
- It recursively divides the array into smaller subarrays and then merges them back together in sorted order.

The merge function is a helper function that merges two sorted subarrays into a single sorted array. 
- It compares the elements from the left and right subarrays and appends the smaller element to the result array. 
- It continues this process until all elements from both subarrays have been appended to the result array.

# Complexity
- Time complexity:
$$O(n log n)$$, where n is the number of elements in the array. This is because the array is divided into two halves at each step, resulting in a logarithmic number of divisions. The merging step takes linear time, so the overall time complexity is O(n log n).

- Space complexity:
$$O(n)$$, where n is the number of elements in the array. This is because additional space is required to store the divided subarrays during the merge step. In the worst case, the algorithm needs to allocate space for the entire array

# Code
``` python3 []
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        if n < 2:
            return nums[:]
        else:
            middle = int(n / 2)
            left = self.sortArray(nums[:middle])
            right = self.sortArray(nums[middle:])
            return self.merge(left, right)

    def merge(self, left, right):
        result = []
        i, j = 0, 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                result.append(left[i])
                i += 1
            else:
                result.append(right[j])
                j += 1
        while i < len(left):
            result.append(left[i])
            i += 1
        while j < len(right):
            result.append(right[j])
            j += 1
        return result
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const n = nums.length;
    if (n < 2) {
        return [...nums];
    } else {
        const middle = Math.floor(n / 2);
        const left = sortArray(nums.slice(0, middle));
        const right = sortArray(nums.slice(middle));
        return merge(left, right);
    }
};

var merge = function(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortArray($nums) {
        $n = count($nums);
        if ($n < 2) {
            return $nums;
        } else {
            $middle = floor($n / 2);
            $left = $this->sortArray(array_slice($nums, 0, $middle));
            $right = $this->sortArray(array_slice($nums, $middle));
            return $this->merge($left, $right);
        }
    }

    function merge($left, $right) {
        $result = [];
        $i = 0;
        $j = 0;
        while ($i < count($left) && $j < count($right)) {
            if ($left[$i] < $right[$j]) {
                $result[] = $left[$i];
                $i++;
            } else {
                $result[] = $right[$j];
                $j++;
            }
        }
        while ($i < count($left)) {
            $result[] = $left[$i];
            $i++;
        }
        while ($j < count($right)) {
            $result[] = $right[$j];
            $j++;
        }
        return $result;
    }
}
```