# ✅☑️Three Approaches🔥||Beginner Friendly✅☑️||Full Explanation🔥||C++||Java||Python✅☑️

**Author:** singhhh_sidhantttt
**Votes:** 2160
**Link:** [https://leetcode.com/problems/pascals-triangle/solutions/4016203/](https://leetcode.com/problems/pascals-triangle/solutions/4016203/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**The problem** of generating Pascal's triangle can be approached in **various ways.**
**Here are some approaches and their intuition to solve the problem:**

# Approach 1: Using Recursion
<!-- Describe your approach to solving the problem. -->
**Intuition:** In Pascal's triangle, **each element is the sum of the two elements directly above it**. We can use a **recursive approach** to generate the triangle. **The base case is when numRows is 1**, in which case we return [[1]]. **Otherwise, we recursively generate the triangle for numRows - 1** and then calculate the current row by summing the adjacent elements from the previous row.

# Approach 2: Using Combinatorial Formula

**Intuition:** Pascal's triangle **can also be generated using combinatorial formula C(n, k) = C(n-1, k-1) + C(n-1, k)**, where C(n, k) **represents the binomial coefficient**. **We can calculate each element of the triangle using this formula.** This approach avoids the need for storing the entire triangle in memory, **making it memory-efficient.**

# Approach 3: Using Dynamic Programming with 1D Array

**Intuition:** **We can use a dynamic programming approach with a 1D array to generate Pascal's triangle row by row**. Instead of maintaining a 2D array, we can use a single array to store the current row and update it as we iterate through the rows. This approach reduces space complexity.

# Here's a brief outline of each approach:
1. **Recursion Approach:**

    - Base case: If numRows is 1, return [[1]].
    - Recursively generate the triangle for numRows - 1.
    - Calculate the current row by summing adjacent elements from the previous row.

2. **Combinatorial Formula Approach:**

    - Use the binomial coefficient formula C(n, k) to calculate each element.
    - Build the triangle row by row using the formula.

3. **Dynamic Programming with 1D Array:**
    - Initialize a 1D array to store the current row.
    - Iterate through numRows and update the array for each row.


# Complexity
**In terms of time complexity**, all three methods have the same overall time complexity of **O(numRows^2)** because we need to generate all the elements of Pascal's triangle. **However, in terms of space complexity,** Method 3 is the most efficient as it uses only O(numRows) space, while the other two methods use O(numRows^2) space due to storing the entire triangle or previous rows in recursion.

---

# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A

---



# Method 1: Using Recursion
```C++ []
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        if (numRows == 0) return {};
        if (numRows == 1) return {{1}};
        
        vector<vector<int>> prevRows = generate(numRows - 1);
        vector<int> newRow(numRows, 1);
        
        for (int i = 1; i < numRows - 1; i++) {
            newRow[i] = prevRows.back()[i - 1] + prevRows.back()[i];
        }
        
        prevRows.push_back(newRow);
        return prevRows;
    }
};

```
```Java []
class Solution {
    public List<List<Integer>> generate(int numRows) {
        if (numRows == 0) return new ArrayList<>();
        if (numRows == 1) {
            List<List<Integer>> result = new ArrayList<>();
            result.add(Arrays.asList(1));
            return result;
        }
        
        List<List<Integer>> prevRows = generate(numRows - 1);
        List<Integer> newRow = new ArrayList<>();
        
        for (int i = 0; i < numRows; i++) {
            newRow.add(1);
        }
        
        for (int i = 1; i < numRows - 1; i++) {
            newRow.set(i, prevRows.get(numRows - 2).get(i - 1) + prevRows.get(numRows - 2).get(i));
        }
        
        prevRows.add(newRow);
        return prevRows;
    }
}

```
```Python3 []
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        if numRows == 1:
            return [[1]]
        
        prevRows = self.generate(numRows - 1)
        newRow = [1] * numRows
        
        for i in range(1, numRows - 1):
            newRow[i] = prevRows[-1][i - 1] + prevRows[-1][i]
        
        prevRows.append(newRow)
        return prevRows

```
```JavaScript []
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    
    let prevRows = generate(numRows - 1);
    let newRow = new Array(numRows).fill(1);
    
    for (let i = 1; i < numRows - 1; i++) {
        newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
    }
    
    prevRows.push(newRow);
    return prevRows;
};

```

# Method 2: Using Combinatorial Formula
```C++ []
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> result;
        for (int i = 0; i < numRows; i++) {
            vector<int> row(i + 1, 1);
            for (int j = 1; j < i; j++) {
                row[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
            result.push_back(row);
        }
        return result;
    }
};

```
```java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> result = new ArrayList<>();
        if (numRows == 0) {
            return result;
        }

        List<Integer> firstRow = new ArrayList<>();
        firstRow.add(1);
        result.add(firstRow);

        for (int i = 1; i < numRows; i++) {
            List<Integer> prevRow = result.get(i - 1);
            List<Integer> currentRow = new ArrayList<>();
            currentRow.add(1);

            for (int j = 1; j < i; j++) {
                currentRow.add(prevRow.get(j - 1) + prevRow.get(j));
            }

            currentRow.add(1);
            result.add(currentRow);
        }

        return result;
    }
}

```
```Python3 []
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []
        if numRows == 0:
            return result

        first_row = [1]
        result.append(first_row)

        for i in range(1, numRows):
            prev_row = result[i - 1]
            current_row = [1]

            for j in range(1, i):
                current_row.append(prev_row[j - 1] + prev_row[j])

            current_row.append(1)
            result.append(current_row)

        return result

```
```Javascript []
var generate = function(numRows) {
    let result = [];
    if (numRows === 0) {
        return result;
    }

    let firstRow = [1];
    result.push(firstRow);

    for (let i = 1; i < numRows; i++) {
        let prevRow = result[i - 1];
        let currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        result.push(currentRow);
    }

    return result;
};

```

---

# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A

---


# Method 3: Using Dynamic Programming with 1D Array
```C++ []
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> result;
        vector<int> prevRow;
        
        for (int i = 0; i < numRows; i++) {
            vector<int> currentRow(i + 1, 1);
            
            for (int j = 1; j < i; j++) {
                currentRow[j] = prevRow[j - 1] + prevRow[j];
            }
            
            result.push_back(currentRow);
            prevRow = currentRow;
        }
        
        return result;
    }
};

```
```Java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> result = new ArrayList<>();
        if (numRows == 0) {
            return result;
        }

        if (numRows == 1) {
            List<Integer> firstRow = new ArrayList<>();
            firstRow.add(1);
            result.add(firstRow);
            return result;
        }

        result = generate(numRows - 1);
        List<Integer> prevRow = result.get(numRows - 2);
        List<Integer> currentRow = new ArrayList<>();
        currentRow.add(1);

        for (int i = 1; i < numRows - 1; i++) {
            currentRow.add(prevRow.get(i - 1) + prevRow.get(i));
        }

        currentRow.add(1);
        result.add(currentRow);

        return result;
    }
}

```
```Python []
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        if numRows == 1:
            return [[1]]

        prev_rows = self.generate(numRows - 1)
        prev_row = prev_rows[-1]
        current_row = [1]

        for i in range(1, numRows - 1):
            current_row.append(prev_row[i - 1] + prev_row[i])

        current_row.append(1)
        prev_rows.append(current_row)

        return prev_rows

```
```Javascript []
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }

    let prevRows = generate(numRows - 1);
    let prevRow = prevRows[prevRows.length - 1];
    let currentRow = [1];

    for (let i = 1; i < numRows - 1; i++) {
        currentRow.push(prevRow[i - 1] + prevRow[i]);
    }

    currentRow.push(1);
    prevRows.push(currentRow);

    return prevRows;
};

```


---

#SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A

---

![UPVOTE.png](./images/0.png)

