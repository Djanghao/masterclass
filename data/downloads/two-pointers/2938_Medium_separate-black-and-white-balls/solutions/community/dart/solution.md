# 🔥TWO POINTERS🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5916782/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5916782/)

---

### **Intuition**
The problem involves calculating the minimum number of steps (or swaps) needed to move all occurrences of '0' in the string to the beginning, preserving the relative order of '1's. Every time we encounter a '0', we count how many positions it needs to move left to reach its correct spot. This essentially translates to counting the distance each '0' is from its correct position.

### **Approach**
1. Traverse the string from left to right.
2. Each time a '0' is encountered, calculate how far it is from its correct position. This distance is the difference between its current index and the number of '0's that have already been placed correctly (`last`).
3. Sum up all the swaps required to place each '0' at its correct position, and return the total number of swaps.

### **Complexity**
- **Time Complexity**: \\(O(n)\\), where \\(n\\) is the length of the string. We traverse the string once.
- **Space Complexity**: \\(O(1)\\), since we are only using a few variables for tracking positions and the swap count.

---

### **Code Implementations**


```dart []
class Solution {
  int minimumSteps(String s) {
    int n = s.length;
    int last = 0;  // Tracks how many '0's have been placed correctly
    int swapCount = 0;
    
    for (int i = 0; i < n; i++) {
      if (s[i] == "0") {
        swapCount += (i - last);
        last++;
      }
    }
    return swapCount;
  }
}
```


```python []
class Solution:
    def minimumSteps(self, s: str) -> int:
        n = len(s)
        last = 0  # Tracks how many '0's have been placed correctly
        swapCount = 0
        
        for i in range(n):
            if s[i] == '0':
                swapCount += (i - last)
                last += 1
        
        return swapCount
```


```java []
class Solution {
    public int minimumSteps(String s) {
        int n = s.length();
        int last = 0;  // Tracks how many '0's have been placed correctly
        int swapCount = 0;
        
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == '0') {
                swapCount += (i - last);
                last++;
            }
        }
        
        return swapCount;
    }
}
```


```cpp []
class Solution {
public:
    int minimumSteps(string s) {
        int n = s.length();
        int last = 0;  // Tracks how many '0's have been placed correctly
        int swapCount = 0;
        
        for (int i = 0; i < n; i++) {
            if (s[i] == '0') {
                swapCount += (i - last);
                last++;
            }
        }
        
        return swapCount;
    }
};
```


```javascript []
class Solution {
    minimumSteps(s) {
        let n = s.length;
        let last = 0;  // Tracks how many '0's have been placed correctly
        let swapCount = 0;
        
        for (let i = 0; i < n; i++) {
            if (s[i] === '0') {
                swapCount += (i - last);
                last++;
            }
        }
        
        return swapCount;
    }
}
```


```go []
package main

func minimumSteps(s string) int {
    n := len(s)
    last := 0   // Tracks how many '0's have been placed correctly
    swapCount := 0
    
    for i := 0; i < n; i++ {
        if s[i] == '0' {
            swapCount += (i - last)
            last++
        }
    }
    
    return swapCount
}
```


```c []
#include <stdio.h>
#include <string.h>

int minimumSteps(const char* s) {
    int n = strlen(s);
    int last = 0;  // Tracks how many '0's have been placed correctly
    int swapCount = 0;
    
    for (int i = 0; i < n; i++) {
        if (s[i] == '0') {
            swapCount += (i - last);
            last++;
        }
    }
    
    return swapCount;
}

int main() {
    const char* s = "110100";
    printf("Minimum steps: %d\
", minimumSteps(s));
    return 0;
}
```

---
![image.png](./images/0.png) {:style='width:250px'}
