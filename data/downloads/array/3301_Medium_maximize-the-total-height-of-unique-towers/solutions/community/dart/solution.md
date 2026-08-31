# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5846899/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5846899/)

---

![image.png](./images/0.png)

## Intuition
The problem requires maximizing the total sum of heights, given certain constraints. To achieve the largest sum, we start by ensuring that each height is not greater than its neighbors, and we decrement heights as needed.

## Approach
1. **Sorting the Heights**: Start by sorting the array of heights to easily process them from the largest to the smallest.
2. **Traverse from the End**: We iterate from the second-to-last height and make sure that no height is taller than the one after it. We reduce heights if necessary to maintain this condition.
3. **Early Exit**: If any height becomes non-positive, the solution becomes invalid, so we return `-1` immediately.
4. **Sum of Heights**: After adjusting heights, we add them to the total sum.

## Complexity
- **Time complexity**:  
  - Sorting takes \\(O(n \\log n)\\), where \\(n\\) is the number of heights.
  - The loop that processes the heights takes \\(O(n)\\).  
  - Overall, the time complexity is \\(O(n \\log n)\\).

- **Space complexity**:  
  - \\(O(1)\\), since we modify the input list in place and use only a few extra variables.

## Code


```dart []
class Solution {
  int maximumTotalSum(List<int> maximumHeight) {
    // Sort the list of maximum heights
    maximumHeight.sort(); 

    // Initialize result with the largest element
    int totalSum = maximumHeight.last; 
    int n = maximumHeight.length;

    // Iterate from the second last element down to the first
    for (int i = n - 2; i >= 0; i--) {
      // Assign the smaller value between current height and the next height - 1
      maximumHeight[i] = (maximumHeight[i] < maximumHeight[i + 1] - 1) 
          ? maximumHeight[i] 
          : (maximumHeight[i + 1] - 1);

      // If any height becomes non-positive, return -1 as it's not possible
      if (maximumHeight[i] <= 0) return -1; 

      // Add the height to the total sum
      totalSum += maximumHeight[i]; 
    }

    return totalSum;
  }
}
```


```python []
class Solution:
    def maximumTotalSum(self, maximumHeight: list[int]) -> int:
        # Sort the heights in ascending order
        maximumHeight.sort()
        
        # Initialize result with the largest element
        total_sum = maximumHeight[-1]
        n = len(maximumHeight)

        # Iterate from the second last element down to the first
        for i in range(n - 2, -1, -1):
            # Assign the smaller value between current height and the next height - 1
            maximumHeight[i] = min(maximumHeight[i], maximumHeight[i + 1] - 1)
            
            # If any height becomes non-positive, return -1 as it's not possible
            if maximumHeight[i] <= 0:
                return -1
            
            # Add the height to the total sum
            total_sum += maximumHeight[i]

        return total_sum
```


```java []
import java.util.Arrays;

class Solution {
    public int maximumTotalSum(int[] maximumHeight) {
        // Sort the heights
        Arrays.sort(maximumHeight);
        
        // Initialize result with the largest element
        int totalSum = maximumHeight[maximumHeight.length - 1];
        int n = maximumHeight.length;

        // Iterate from the second last element down to the first
        for (int i = n - 2; i >= 0; i--) {
            // Assign the smaller value between current height and the next height - 1
            maximumHeight[i] = Math.min(maximumHeight[i], maximumHeight[i + 1] - 1);
            
            // If any height becomes non-positive, return -1 as it's not possible
            if (maximumHeight[i] <= 0) {
                return -1;
            }
            
            // Add the height to the total sum
            totalSum += maximumHeight[i];
        }

        return totalSum;
    }
}
```


```cpp []
#include <vector>
#include <algorithm>

class Solution {
public:
    int maximumTotalSum(std::vector<int>& maximumHeight) {
        // Sort the heights
        std::sort(maximumHeight.begin(), maximumHeight.end());

        // Initialize result with the largest element
        int totalSum = maximumHeight.back();
        int n = maximumHeight.size();

        // Iterate from the second last element down to the first
        for (int i = n - 2; i >= 0; --i) {
            // Assign the smaller value between current height and the next height - 1
            maximumHeight[i] = std::min(maximumHeight[i], maximumHeight[i + 1] - 1);

            // If any height becomes non-positive, return -1 as it's not possible
            if (maximumHeight[i] <= 0) return -1;

            // Add the height to the total sum
            totalSum += maximumHeight[i];
        }

        return totalSum;
    }
};
```


```javascript []
class Solution {
  maximumTotalSum(maximumHeight) {
    // Sort the list of maximum heights
    maximumHeight.sort((a, b) => a - b);

    // Initialize result with the largest element
    let totalSum = maximumHeight[maximumHeight.length - 1];
    const n = maximumHeight.length;

    // Iterate from the second last element down to the first
    for (let i = n - 2; i >= 0; i--) {
      // Assign the smaller value between current height and the next height - 1
      maximumHeight[i] = Math.min(maximumHeight[i], maximumHeight[i + 1] - 1);

      // If any height becomes non-positive, return -1 as it's not possible
      if (maximumHeight[i] <= 0) return -1;

      // Add the height to the total sum
      totalSum += maximumHeight[i];
    }

    return totalSum;
  }
}
```


```go []
package main

import (
    "sort"
)

func maximumTotalSum(maximumHeight []int) int {
    // Sort the list of maximum heights
    sort.Ints(maximumHeight)

    // Initialize result with the largest element
    totalSum := maximumHeight[len(maximumHeight)-1]
    n := len(maximumHeight)

    // Iterate from the second last element down to the first
    for i := n - 2; i >= 0; i-- {
        // Assign the smaller value between current height and the next height - 1
        if maximumHeight[i] > maximumHeight[i+1]-1 {
            maximumHeight[i] = maximumHeight[i+1] - 1
        }

        // If any height becomes non-positive, return -1 as it's not possible
        if maximumHeight[i] <= 0 {
            return -1
        }

        // Add the height to the total sum
        totalSum += maximumHeight[i]
    }

    return totalSum
}
``` 

This approach ensures that the constraints are respected while maximizing the total sum of heights.

![image.png](./images/1.png) {:style='width:250px'}

