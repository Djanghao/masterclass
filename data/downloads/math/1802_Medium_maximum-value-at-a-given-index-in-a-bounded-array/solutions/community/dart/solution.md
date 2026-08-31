# 🔥BEATS 💯 % 🎯 | SUPER EASY AND SIMPLE🔥|

**Author:** CodeWithSparsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/5789403/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/5789403/)

---

### Solution Explanation

**Intuition**:
The goal is to maximize the value at the given index while ensuring that the sum of all elements in the array does not exceed `maxSum`. We can use binary search to determine the maximum possible value at the given index. The main idea is to adjust the possible maximum value and verify if the total sum with that value is within the allowed limit.

**Approach**:
1. **Binary Search**: Use binary search to find the maximum possible value for the element at the specified index.
2. **Sum Calculation**:
   - Calculate the total sum of the array elements with the value at the index as `a`, and check if it fits within `maxSum`.
   - The `check` function determines the sum of the array given a value at the specified index by accounting for values on both sides of the index.
   
**Complexity**:
- **Time Complexity**: \\(O(\\log(\	ext{maxSum}))\\) due to binary search.
- **Space Complexity**: \\(O(1)\\) as the space used is constant.



```dart []
class Solution {
  int maxValue(int n, int index, int maxSum) {
    maxSum -= n;  // Decrement by n since each element must be at least 1
    int left = 0, right = maxSum;
    while (left < right) {
      int mid = (left + right + 1) ~/ 2;
      if (check(mid, index, n) <= maxSum) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    return left + 1;
  }

  int check(int a, int index, int n) {
    int leftOffset = (a - index).clamp(0, a);
    int result = (a + leftOffset) * (a - leftOffset + 1) ~/ 2;
    int rightOffset = (a - ((n - 1) - index)).clamp(0, a);
    result += (a + rightOffset) * (a - rightOffset + 1) ~/ 2;
    return result - a;
  }
}
```



```java []
public class Solution {
    public int maxValue(int n, int index, int maxSum) {
        maxSum -= n; // Decrement by n since each element must be at least 1
        int left = 0, right = maxSum;
        while (left < right) {
            int mid = (left + right + 1) / 2;
            if (check(mid, index, n) <= maxSum) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left + 1;
    }

    private int check(int a, int index, int n) {
        int leftOffset = Math.max(0, a - index);
        int result = (a + leftOffset) * (a - leftOffset + 1) / 2;
        int rightOffset = Math.max(0, a - (n - 1 - index));
        result += (a + rightOffset) * (a - rightOffset + 1) / 2;
        return result - a;
    }
}
```



```javascript []
class Solution {
    maxValue(n, index, maxSum) {
        maxSum -= n; // Decrement by n since each element must be at least 1
        let left = 0, right = maxSum;
        while (left < right) {
            let mid = Math.floor((left + right + 1) / 2);
            if (this.check(mid, index, n) <= maxSum) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left + 1;
    }

    check(a, index, n) {
        let leftOffset = Math.max(0, a - index);
        let result = (a + leftOffset) * (a - leftOffset + 1) / 2;
        let rightOffset = Math.max(0, a - (n - 1 - index));
        result += (a + rightOffset) * (a - rightOffset + 1) / 2;
        return result - a;
    }
}
```



```python []
class Solution:
    def maxValue(self, n: int, index: int, maxSum: int) -> int:
        maxSum -= n  # Decrement by n since each element must be at least 1
        left, right = 0, maxSum
        while left < right:
            mid = (left + right + 1) // 2
            if self.check(mid, index, n) <= maxSum:
                left = mid
            else:
                right = mid - 1
        return left + 1

    def check(self, a: int, index: int, n: int) -> int:
        leftOffset = max(0, a - index)
        result = (a + leftOffset) * (a - leftOffset + 1) // 2
        rightOffset = max(0, a - (n - 1 - index))
        result += (a + rightOffset) * (a - rightOffset + 1) // 2
        return result - a
```


```cpp []
class Solution {
public:
    int maxValue(int n, int index, int maxSum) {
        maxSum -= n; // Decrement by n since each element must be at least 1
        int left = 0, right = maxSum;
        while (left < right) {
            int mid = (left + right + 1) / 2;
            if (check(mid, index, n) <= maxSum) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left + 1;
    }

private:
    int check(int a, int index, int n) {
        int leftOffset = std::max(0, a - index);
        int result = (a + leftOffset) * (a - leftOffset + 1) / 2;
        int rightOffset = std::max(0, a - (n - 1 - index));
        result += (a + rightOffset) * (a - rightOffset + 1) / 2;
        return result - a;
    }
};
```



```c []
#include <stdio.h>

int check(int a, int index, int n) {
    int leftOffset = (a - index > 0) ? (a - index) : 0;
    int result = (a + leftOffset) * (a - leftOffset + 1) / 2;
    int rightOffset = (a - (n - 1 - index) > 0) ? (a - (n - 1 - index)) : 0;
    result += (a + rightOffset) * (a - rightOffset + 1) / 2;
    return result - a;
}

int maxValue(int n, int index, int maxSum) {
    maxSum -= n; // Decrement by n since each element must be at least 1
    int left = 0, right = maxSum;
    while (left < right) {
        int mid = (left + right + 1) / 2;
        if (check(mid, index, n) <= maxSum) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left + 1;
}
```



```go []
func maxValue(n int, index int, maxSum int) int {
    maxSum -= n // Decrement by n since each element must be at least 1
    left, right := 0, maxSum
    for left < right {
        mid := (left + right + 1) / 2
        if check(mid, index, n) <= maxSum {
            left = mid
        } else {
            right = mid - 1
        }
    }
    return left + 1
}

func check(a int, index int, n int) int {
    leftOffset := max(0, a - index)
    result := (a + leftOffset) * (a - leftOffset + 1) / 2
    rightOffset := max(0, a - (n - 1 - index))
    result += (a + rightOffset) * (a - rightOffset + 1) / 2
    return result - a
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```



```typescript []
class Solution {
    maxValue(n: number, index: number, maxSum: number): number {
        maxSum -= n; // Decrement by n since each element must be at least 1
        let left = 0, right = maxSum;
        while (left < right) {
            const mid = Math.floor((left + right + 1) / 2);
            if (this.check(mid, index, n) <= maxSum) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left + 1;
    }

    check(a: number, index: number, n: number): number {
        const leftOffset = Math.max(0, a

 - index);
        let result = (a + leftOffset) * (a - leftOffset + 1) / 2;
        const rightOffset = Math.max(0, a - (n - 1 - index));
        result += (a + rightOffset) * (a - rightOffset + 1) / 2;
        return result - a;
    }
}
```

The core logic remains the same: using binary search and feasibility check to determine the maximum value at the specified index while ensuring the sum of all elements does not exceed `maxSum`.