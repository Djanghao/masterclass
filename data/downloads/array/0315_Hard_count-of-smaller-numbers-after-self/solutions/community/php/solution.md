# Count of Smaller Numbers After Self || Beats 100.00% of users with PHP

**Author:** logusivam
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/5279380/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/5279380/)

---

![Screenshot 2024-06-08 174352.png](./images/0.png)



# Explanation

- **Initialization:**

  - Initialize `result` array to store the counts of smaller elements to the right of each element.
  - `indexes` array keeps track of the original indices of the elements as they get sorted.

- **Merge Sort:**

  - The `mergeSort` function recursively divides the array into smaller subarrays until each subarray has one element.
  - The `merge` function then merges the subarrays back together while counting the number of smaller elements to the right.

- **Counting Process in Merge:**

  - Use two pointers, `i` and `j`, to iterate through the left and right halves of the subarray.
  - If `nums[indexes[j]] < nums[indexes[i]]`, it means the element at `indexes[j]` is smaller than the element at `indexes[i]`, and thus it should be counted.
  - Increment the `rightCount` for each element in the right half that is smaller than the current element in the left half.
- Update the `result` array to reflect the count of smaller elements to the right of each element.

- **Final Result:**

  - After the merge sort completes, the `result` array contains the count of smaller elements to the right of each original element.

# Code
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function countSmaller($nums) {
        $n = count($nums);
        if ($n == 0) return [];
        
        $result = array_fill(0, $n, 0);
        $indexes = range(0, $n - 1);
        
        $this->mergeSort($nums, $indexes, $result, 0, $n - 1);
        
        return $result;
    }
    
    private function mergeSort(&$nums, &$indexes, &$result, $left, $right) {
        if ($left >= $right) return;
        
        $mid = $left + (int)(($right - $left) / 2);
        $this->mergeSort($nums, $indexes, $result, $left, $mid);
        $this->mergeSort($nums, $indexes, $result, $mid + 1, $right);
        
        $this->merge($nums, $indexes, $result, $left, $mid, $right);
    }
    
    private function merge(&$nums, &$indexes, &$result, $left, $mid, $right) {
        $tempIndexes = [];
        $i = $left;
        $j = $mid + 1;
        $rightCount = 0;
        
        while ($i <= $mid && $j <= $right) {
            if ($nums[$indexes[$j]] < $nums[$indexes[$i]]) {
                $tempIndexes[] = $indexes[$j];
                $rightCount++;
                $j++;
            } else {
                $tempIndexes[] = $indexes[$i];
                $result[$indexes[$i]] += $rightCount;
                $i++;
            }
        }
        
        while ($i <= $mid) {
            $tempIndexes[] = $indexes[$i];
            $result[$indexes[$i]] += $rightCount;
            $i++;
        }
        
        while ($j <= $right) {
            $tempIndexes[] = $indexes[$j];
            $j++;
        }
        
        for ($k = $left; $k <= $right; $k++) {
            $indexes[$k] = $tempIndexes[$k - $left];
        }
    }
}

// Example usage:
$solution = new Solution();
$nums = [5, 2, 6, 1];
print_r($solution->countSmaller($nums));  // Output: [2, 1, 1, 0]

```

![UPVOTE FOR MORE.png](./images/1.png)