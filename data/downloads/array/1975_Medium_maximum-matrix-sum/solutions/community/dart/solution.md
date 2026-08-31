# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-matrix-sum/solutions/6095074/](https://leetcode.com/problems/maximum-matrix-sum/solutions/6095074/)

---

![image.png](./images/0.png)

---


## Intuition
The problem asks us to maximize the sum of a matrix's elements while potentially flipping the signs of some elements. Observations:
1. The absolute values of the numbers determine the sum; flipping a negative number to positive increases the sum.
2. The result depends on whether the count of negative numbers is even or odd:
   - **Even negatives**: All can be flipped to positive, resulting in the maximum sum.
   - **Odd negatives**: At least one negative must remain. To minimize its impact, we subtract twice the smallest absolute value from the total absolute sum.

---

## Approach
1. **Calculate the total absolute sum** of all matrix elements.
2. **Count the negative numbers** in the matrix.
3. **Track the smallest absolute value** for cases where the number of negatives is odd.
4. **Determine the final result**:
   - If the count of negatives is even, return the total absolute sum.
   - If odd, subtract \\( 2 \	imes \	ext{(smallest absolute value)} \\) from the absolute sum to account for the single negative.

---

## Complexity
- **Time Complexity**:  
  \\(O(n^2)\\), where \\(n\\) is the dimension of the square matrix.  
  We iterate through each element once.

- **Space Complexity**:  
  \\(O(1)\\), as no extra space is used apart from a few variables.

---


```dart []
import 'dart:math';

class Solution {
  int maxMatrixSum(List<List<int>> matrix) {
    int n = matrix.length;
    int negativeCount = 0;
    int absSum = 0;
    int smallestAbsValue = 100000; // A very large number within constraints

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        int value = matrix[i][j];
        absSum += value.abs();
        if (value < 0) negativeCount++;
        smallestAbsValue = min(smallestAbsValue, value.abs());
      }
    }

    // If the number of negatives is even, return the absolute sum
    if (negativeCount % 2 == 0) return absSum;

    // If odd, subtract twice the smallest absolute value
    return absSum - 2 * smallestAbsValue;
  }
}
```


```java []
import java.util.*;

public class Solution {
    public long maxMatrixSum(int[][] matrix) {
        int n = matrix.length;
        int negativeCount = 0;
        long absSum = 0;
        int smallestAbsValue = Integer.MAX_VALUE;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int value = matrix[i][j];
                absSum += Math.abs(value);
                if (value < 0) negativeCount++;
                smallestAbsValue = Math.min(smallestAbsValue, Math.abs(value));
            }
        }

        if (negativeCount % 2 == 0) return absSum;

        return absSum - 2L * smallestAbsValue;
    }
}
```


```python []
class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        n = len(matrix)
        negative_count = 0
        abs_sum = 0
        smallest_abs_value = float('inf')

        for i in range(n):
            for j in range(n):
                value = matrix[i][j]
                abs_sum += abs(value)
                if value < 0:
                    negative_count += 1
                smallest_abs_value = min(smallest_abs_value, abs(value))

        if negative_count % 2 == 0:
            return abs_sum

        return abs_sum - 2 * smallest_abs_value
```


```javascript []
var maxMatrixSum = function(matrix) {
    const n = matrix.length;
    let negativeCount = 0;
    let absSum = 0;
    let smallestAbsValue = Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let value = matrix[i][j];
            absSum += Math.abs(value);
            if (value < 0) negativeCount++;
            smallestAbsValue = Math.min(smallestAbsValue, Math.abs(value));
        }
    }

    if (negativeCount % 2 === 0) return absSum;

    return absSum - 2 * smallestAbsValue;
};
```


```cpp []
#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;

class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
        int n = matrix.size();
        int negativeCount = 0;
        long long absSum = 0;
        int smallestAbsValue = INT_MAX;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int value = matrix[i][j];
                absSum += abs(value);
                if (value < 0) negativeCount++;
                smallestAbsValue = min(smallestAbsValue, abs(value));
            }
        }

        if (negativeCount % 2 == 0) return absSum;

        return absSum - 2LL * smallestAbsValue;
    }
};
```


```go []
package main

import "math"

func maxMatrixSum(matrix [][]int) int64 {
    n := len(matrix)
    negativeCount := 0
    absSum := int64(0)
    smallestAbsValue := math.MaxInt32

    for i := 0; i < n; i++ {
        for j := 0; j < n; j++ {
            value := matrix[i][j]
            absSum += int64(abs(value))
            if value < 0 {
                negativeCount++
            }
            if abs(value) < smallestAbsValue {
                smallestAbsValue = abs(value)
            }
        }
    }

    if negativeCount%2 == 0 {
        return absSum
    }
    return absSum - 2*int64(smallestAbsValue)
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```

---

![image.png](./images/1.png) {:style='width:250px'}
