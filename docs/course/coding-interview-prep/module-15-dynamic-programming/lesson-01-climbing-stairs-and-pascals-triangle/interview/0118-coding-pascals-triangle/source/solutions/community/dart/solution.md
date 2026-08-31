# Generating Pascal's Triangle in C++, Python, and Dart 😃

**Author:** deleted_user
**Votes:** 6
**Link:** [https://leetcode.com/problems/pascals-triangle/solutions/4313170/](https://leetcode.com/problems/pascals-triangle/solutions/4313170/)

---

# Intuition
My initial thoughts on solving this problem revolve around traversing through the array and keeping track of the maximum sum obtained so far. I might consider using Kadane's algorithm, which efficiently finds the maximum subarray sum in a single traversal.

# Approach
1. Initialize variables: max_sum to store the maximum sum found so far, and current_sum to keep track of the current sum.
2. Start iterating through the array from the first element.
3. At each iteration, update current_sum by adding the current element or starting a new subarray if the current element itself is larger than the sum of the previous subarray.
4. Update max_sum if current_sum exceeds it.
5. Continue iterating through the array and repeat steps 3-4.
6. Finally, return the max_sum obtained, which represents the maximum sum of a subarray.

# Complexity
- Time complexity:
    O(n) - We traverse the array only once.

- Space complexity:
O(1) - We use a constant amount of extra space for variables max_sum and current_sum regardless of the input size.

# Code
``` C++ []
class Solution {
  List<List<int>> generate(int numRows) {
    List<List<int>> triangle = [];

    if (numRows <= 0) {
      return triangle;
    }

    for (int i = 0; i < numRows; i++) {
      List<int> row = List.filled(i + 1, 1);

      if (i >= 2) {
        for (int j = 1; j < i; j++) {
          row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }

      triangle.add(row);
    }

    return triangle;
  }
}

```
``` Python []
class Solution(object):
    def generate(self, numRows):
        if numRows <= 0:
            return []
        
        triangle = []
        
        for i in range(numRows):
            row = [1] * (i + 1)
            
            if i >= 2:
                for j in range(1, i):
                    row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
            
            triangle.append(row)
        
        return triangle

```
``` Dart []
class Solution {
  List<List<int>> generate(int numRows) {
    List<List<int>> triangle = [];

    if (numRows <= 0) {
      return triangle;
    }

    for (int i = 0; i < numRows; i++) {
      List<int> row = List.filled(i + 1, 1);

      if (i >= 2) {
        for (int j = 1; j < i; j++) {
          row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }

      triangle.add(row);
    }

    return triangle;
  }
}
```
``` Python3 []
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows <= 0:
            return []
        
        triangle = []
        
        for i in range(numRows):
            row = [1] * (i + 1)
            
            if i >= 2:
                for j in range(1, i):
                    row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
            
            triangle.append(row)
        
        return triangle
```