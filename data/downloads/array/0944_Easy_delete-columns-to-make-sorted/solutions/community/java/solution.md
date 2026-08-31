# Simple Java solution with comments.

**Author:** Sarthak_Singh_
**Votes:** 101
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2989644/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2989644/)

---

```
class Solution {
    public int minDeletionSize(String[] strs) {
        // Initialize the delete count to 0
        int deleteCount = 0;
        // Get the number of rows and columns in the grid
        int n = strs.length;
        int m = strs[0].length();
        // Iterate through each column of the grid
        for (int i = 0; i < m; i++) {
            // Iterate through each element in the column
            for (int j = 1; j < n; j++) {
                // If the current element is lexicographically smaller than the previous element,
                // increment the delete count and break out of the loop
                if (strs[j].charAt(i) < strs[j - 1].charAt(i)) {
                    deleteCount++;
                    break;
                }
            }
        }
        // Return the delete count
        return deleteCount;
    }
}
```


# Code
```
class Solution{
public int minDeletionSize(String[] strs) {
    // Return 0 if the input array is null or empty
    if (strs == null || strs.length == 0) {
        return 0;
    }
    // Initialize the number of columns to the length of the first string
    int numColumns = strs[0].length();
    int numColumnsToDelete = 0;
    // Iterate through each column of the grid
    for (int i = 0; i < numColumns; i++) {
        // Initialize the current character to the first character in the column
        char currChar = strs[0].charAt(i);
        // Iterate through each element in the column
        for (int j = 1; j < strs.length; j++) {
            // If the current element is lexicographically smaller than the previous element,
            // increment the number of columns to delete and break out of the loop
            if (strs[j].charAt(i) < currChar) {
                numColumnsToDelete++;
                break;
            }
            // Otherwise, update the current character to the current element
            currChar = strs[j].charAt(i);
        }
    }
    // Return the number of columns to delete
    return numColumnsToDelete;
  }
}

```