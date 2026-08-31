# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5937658/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5937658/)

---

![image.png](./images/0.png)

---

### **Intuition**

The problem asks for the \\( k \\)-th bit in the binary string \\( S_n \\). The string \\( S_n \\) is recursively defined, which helps break the problem down:
- \\( S_1 = "0" \\)
- \\( S_n = S_{n-1} + "1" + \	ext{reverse and invert of } S_{n-1} \\)

The recursive structure of the string allows us to solve the problem without generating the entire string but instead focusing on how the \\( k \\)-th bit evolves.

### **Approach**

- The length of \\( S_n \\) is \\( 2^n - 1 \\).
- For any bit \\( k \\), there are three cases:
  1. If \\( k \\) is the middle element of the string, it is always `"1"`.
  2. If \\( k \\) is in the first half, it corresponds to the same position in \\( S_{n-1} \\).
  3. If \\( k \\) is in the second half, it corresponds to a mirrored position in \\( S_{n-1} \\), but the bit will be inverted.
  
Thus, we can reduce the problem recursively by adjusting the position and computing the mirrored positions.

### **Complexity**

- **Time Complexity**: \\( O(n) \\), since the recursion depth is determined by \\( n \\) and each recursive step simplifies the problem by reducing the length of the string.
- **Space Complexity**: \\( O(n) \\), for the recursive call stack.

---

### **Code Implementations**

```dart []
class Solution {
  String findKthBit(int n, int k) {
    return _findKthBitRecursive(n, k);
  }

  String _findKthBitRecursive(int n, int k) {
    // Length of Sn is 2^n - 1
    int len = (1 << n) - 1;

    // Base case: when n = 1, the string is "0"
    if (n == 1) return "0";

    // Middle position in the current string Sn
    int mid = (len + 1) ~/ 2;

    if (k == mid) {
      // The middle bit is always "1"
      return "1";
    } else if (k < mid) {
      // If k is in the first half, recurse on S_{n-1}
      return _findKthBitRecursive(n - 1, k);
    } else {
      // If k is in the second half, find the corresponding bit in S_{n-1}
      // and invert it
      int mirrorK = mid - (k - mid);
      String bit = _findKthBitRecursive(n - 1, mirrorK);
      return bit == "0" ? "1" : "0";
    }
  }
}
```

```python []
class Solution:
    def findKthBit(self, n: int, k: int) -> str:
        def findKthBitRecursive(n, k):
            len_sn = (1 << n) - 1  # Length of Sn is 2^n - 1
            
            if n == 1:  # Base case
                return "0"
            
            mid = (len_sn + 1) // 2  # Middle index
            
            if k == mid:
                return "1"
            elif k < mid:
                return findKthBitRecursive(n - 1, k)
            else:
                mirror_k = mid - (k - mid)
                bit = findKthBitRecursive(n - 1, mirror_k)
                return "1" if bit == "0" else "0"
        
        return findKthBitRecursive(n, k)
```

```java []
class Solution {
    public String findKthBit(int n, int k) {
        return findKthBitRecursive(n, k);
    }

    private String findKthBitRecursive(int n, int k) {
        int len = (1 << n) - 1;  // Length of Sn is 2^n - 1
        
        if (n == 1) return "0";  // Base case
        
        int mid = (len + 1) / 2;  // Middle index
        
        if (k == mid) return "1";
        else if (k < mid) return findKthBitRecursive(n - 1, k);
        else {
            int mirrorK = mid - (k - mid);
            String bit = findKthBitRecursive(n - 1, mirrorK);
            return bit.equals("0") ? "1" : "0";
        }
    }
}
```

```cpp []
class Solution {
public:
    string findKthBit(int n, int k) {
        return findKthBitRecursive(n, k);
    }

private:
    string findKthBitRecursive(int n, int k) {
        int len = (1 << n) - 1;  // Length of Sn is 2^n - 1
        
        if (n == 1) return "0";  // Base case
        
        int mid = (len + 1) / 2;  // Middle index
        
        if (k == mid) return "1";
        else if (k < mid) return findKthBitRecursive(n - 1, k);
        else {
            int mirrorK = mid - (k - mid);
            string bit = findKthBitRecursive(n - 1, mirrorK);
            return bit == "0" ? "1" : "0";
        }
    }
};
```

```javascript []
class Solution {
    findKthBit(n, k) {
        const findKthBitRecursive = (n, k) => {
            let len = (1 << n) - 1;  // Length of Sn is 2^n - 1
            
            if (n === 1) return "0";  // Base case
            
            let mid = Math.floor((len + 1) / 2);  // Middle index
            
            if (k === mid) return "1";
            else if (k < mid) return findKthBitRecursive(n - 1, k);
            else {
                let mirrorK = mid - (k - mid);
                let bit = findKthBitRecursive(n - 1, mirrorK);
                return bit === "0" ? "1" : "0";
            }
        }
        
        return findKthBitRecursive(n, k);
    }
}
```

```go []
package main

import (
	"fmt"
)

func findKthBit(n, k int) string {
	return findKthBitRecursive(n, k)
}

func findKthBitRecursive(n, k int) string {
	lenSn := (1 << n) - 1 // Length of Sn is 2^n - 1

	if n == 1 {
		return "0" // Base case
	}

	mid := (lenSn + 1) / 2 // Middle index

	if k == mid {
		return "1"
	} else if k < mid {
		return findKthBitRecursive(n-1, k)
	} else {
		mirrorK := mid - (k - mid)
		bit := findKthBitRecursive(n-1, mirrorK)
		if bit == "0" {
			return "1"
		}
		return "0"
	}
}

func main() {
	fmt.Println(findKthBit(3, 5))
}
```

```c []
#include <stdio.h>
#include <math.h>

char findKthBitRecursive(int n, int k);

char findKthBit(int n, int k) {
    return findKthBitRecursive(n, k);
}

char findKthBitRecursive(int n, int k) {
    int len = (1 << n) - 1;  // Length of Sn is 2^n - 1
    
    if (n == 1) return '0';  // Base case
    
    int mid = (len + 1) / 2;  // Middle index
    
    if (k == mid) return '1';
    else if (k < mid) return findKthBitRecursive(n - 1, k);
    else {
        int mirrorK = mid - (k - mid);
        char bit = findKthBitRecursive(n - 1, mirrorK);
        return bit == '0' ? '1' : '0';
    }
}

int main() {
    printf("%c\
", findKthBit(3, 5));
    return 0;
}
```

---

These implementations efficiently find the \\( k \\)-th bit in \\( S_n \\) using recursive logic and avoid generating the entire binary sequence explicitly.
---
![image.png](./images/1.png) {:style='width:250px'}