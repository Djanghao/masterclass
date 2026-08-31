# ✅Simple C# Solution || Difference array || Beats 100%✅

**Author:** shukhratutaboev
**Votes:** 1
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3052987/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3052987/)

---

The first step is to create a 2D array called arr with n rows and n columns, filled with zeroes.

Then, it iterates over the queries, for each query, it adds +1 to the specific position in the array and -1 to the next column if it's less than n. This is done to mark the range of the query, the first element of the range will be incremented by one, and the next element after the range will be decremented by one. This way, the difference between the two elements will be the value that is added to the range.

Then, it iterates over the array, for each element of the array, it adds the current element to the previous one, this is done to convert the marked array to the final array.

This approach is similar to the difference array algorithm, as it's using the same technique to solve the problem, it's updating the range by marking it with +1 and -1 and then converting it to the final array by adding up the current element to the previous one.

The time complexity of this solution is $$O(n^2)$$ as we are iterating over the array multiple times and the space complexity is $$O(n^2)$$ as we are using a 2D array with n*n elements.
# Approach
Difference array

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int[][] RangeAddQueries(int n, int[][] queries) {
        var arr = new int[n][];
        for (var i = 0; i < n; i++)
        {
            arr[i] = new int[n];
        }

        for (var i = 0; i < queries.Length; i++)
        {
            var row1 = queries[i][0];
            var row2 = queries[i][2];
            var col1 = queries[i][1];
            var col2 = queries[i][3];
            for (var j = row1; j <= row2; j++)
            {
                arr[j][col1]++;
                if (col2 + 1 < n) arr[j][col2+1]--;
            }
        }

        for (var i = 0; i < n; i++)
        {
            for (var j = 1; j < n; j++)
            {
                arr[i][j] += arr[i][j-1];
            }
        }

        return arr;
    }
}
```