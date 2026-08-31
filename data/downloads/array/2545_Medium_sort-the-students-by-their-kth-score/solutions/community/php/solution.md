# Sort the students based on their scores in a specific exam, identified by index k.

**Author:** rajuraj8881
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/5367347/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/5367347/)

---

# Intuition
The task involves sorting rows of a matrix based on the values in a specific column. The key observation is that we need a custom sort based on one particular column, and we need to sort in descending order. This can be efficiently achieved using a sorting function with a custom comparator.

# Approach
1. **Extract the Key Column for Comparison:**
- For each row in the matrix, we need to compare the values in the specified column (k).
2. **Custom Comparator Function:**   
- Implement a custom comparator function that takes two rows and compares their values in the k-th column.
- The comparator should return values to indicate the order:
    - Return -1 if the first row should come before the second (for descending order, this is when the first row's k-th column value is greater than the second row's k-th column value).
    - Return 1 if the first row should come after the second.
    - Return 0 if the values are equal.
3. **Use usort for Sorting:**
    - PHP's usort function is ideal for this as it sorts arrays using a user-defined comparison function.

# Complexity
- **Time complexity:** Sorting an array of size \uD835\uDC5A m (number of students) has a time complexity of \uD835\uDC42 ( \uD835\uDC5A log \u2061 \uD835\uDC5A ) O(mlogm) due to the nature of the sorting algorithm.

- **Space complexity:** The space complexity is \uD835\uDC42 ( 1 ) O(1) for the sorting operation itself, but the overall space complexity is \uD835\uDC42 ( \uD835\uDC5A \xD7 \uD835\uDC5B ) O(m\xD7n) for storing the matrix, where \uD835\uDC5A m is the number of students and \uD835\uDC5B n is the number of exams.

# Code
```
class Solution {

    /**
     * @param Integer[][] $score
     * @param Integer $k
     * @return Integer[][]
     */
    function sortTheStudents($score, $k) {
        // Custom comparison function for usort
        $compare = function($a, $b) use ($k) {
        if ($a[$k] == $b[$k]) {
            return 0;
        }
        return ($a[$k] < $b[$k]) ? 1 : -1;
    };

    // Use usort with the custom comparison function
    usort($score, $compare);
    return $score;
    }
}
```