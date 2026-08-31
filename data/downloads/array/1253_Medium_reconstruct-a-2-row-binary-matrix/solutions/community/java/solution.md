# ✅✅Java || 🚀🚀100% beats ||🔥 Simple || Explanation

**Author:** robin_kumar_rk
**Votes:** 6
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/4816867/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/4816867/)

---

# Intuition
If a column sum is 2, both the upper and lower rows must contain a 1 in that column. If a column sum is 0, both rows will have a 0 in that column. Therefore, our primary focus should be on managing columns where the column sum is 1.

# Approach
1. **Initialization :** Start by initializing two arrays to represent the upper and lower rows of the matrix, both filled with zeros.

2. **Handling Columns with Sum = 2 :** 
    For columns where the column sum is 2, set both the upper and lower rows to 1 in those columns. Decrease the upper and lower counts accordingly since we've used up one 1 from each row.

3. **Handling Columns with Sum = 1:** 

    - For columns where the column sum is 1, first try to place a 1 in the upper row if the remaining upper count is greater than 0. If successful, place 1 in the upper row and 0 in the lower row, then decrease the upper count.

    - If the upper count is 0, try to place a 1 in the lower row if the remaining lower count is greater than 0. If successful, place 1 in the lower row and 0 in the upper row, then decrease the lower count.

    - If neither the upper nor the lower rows can accommodate the 1, it means constructing the matrix is not possible, and we should return an empty list.

4. **Validation :** After processing all columns, check if both the upper and lower counts are 0. If not, return an empty list as it indicates that the matrix construction failed.
 
5. **Final answer :** Convert the upper and lower row arrays into lists and add them to the result list. Return the result list as the final reconstructed matrix.


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    public List<List<Integer>> reconstructMatrix(int upper, int lower, int[] colsum) {
        int n = colsum.length;
        List<List<Integer>> result = new ArrayList<>();
        Integer upperRow[] = new Integer[n];
        Integer lowerRow[] = new Integer[n];
        
        // Initialize both rows with zeros
        Arrays.fill(upperRow, 0);
        Arrays.fill(lowerRow, 0);
        
        // First pass: handle columns where colsum[i] is 2
        for (int i = 0; i < n; i++) {
            if (colsum[i] == 2) {
                // Both rows must have a 1 in the i-th column
                upperRow[i] = 1;
                lowerRow[i] = 1;
                upper--;
                lower--;
            }
        }
        
        // Second pass: handle columns where colsum[i] is 1
        for (int i = 0; i < n; i++) {
            if (colsum[i] == 1) {
                if (upper > 0) {
                    // Place 1 in the upper row if possible
                    upperRow[i] = 1;
                    upper--;
                } else if (lower > 0) {
                    // Otherwise, place 1 in the lower row
                    lowerRow[i] = 1;
                    lower--;
                } else {
                    // If neither row can accommodate the 1, return an empty list
                    return result;
                }
            }
        }
        
        // Check if all the required 1's are placed correctly
        if (upper != 0 || lower != 0) {
            return result;
        }
        
        // Convert arrays to lists and add to the result
        result.add(Arrays.asList(upperRow));
        result.add(Arrays.asList(lowerRow));
        return result;
    }
}

```