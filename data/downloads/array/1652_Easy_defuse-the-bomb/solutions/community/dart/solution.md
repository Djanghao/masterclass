# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/defuse-the-bomb/solutions/6059077/](https://leetcode.com/problems/defuse-the-bomb/solutions/6059077/)

---

![image.png](./images/0.png)


---

### **Intuition**
The problem revolves around modifying each element of the list `code` based on its neighboring elements within a specified range.  
1. If `k > 0`, sum the next `k` elements.  
2. If `k < 0`, sum the previous `k` elements.  
3. If `k == 0`, replace all elements with `0`.

---

### **Approach**
1. Use modular arithmetic to handle the circular nature of the list.  
2. Traverse the list, and for each index, calculate the sum of `k` elements ahead or behind based on the sign of `k`.  
3. Return the transformed list.

---

### **Complexity**
- **Time complexity**: \\(O(n \	imes |k|)\\), where \\(n\\) is the size of the `code` list, and \\(k\\) determines the range for summation.  
- **Space complexity**: \\(O(n)\\), for the resulting list.

---

### **Code Implementation**

``` dart []
class Solution {
  List<int> decrypt(List<int> code, int k) {
    int n = code.length;
    List<int> result = List.filled(n, 0);
    if (k == 0) return result;

    for (int i = 0; i < n; i++) {
      int sum = 0, step = 0, j = i;
      while (step < k.abs()) {
        j = (j + (k > 0 ? 1 : -1) + n) % n;
        sum += code[j];
        step++;
      }
      result[i] = sum;
    }
    return result;
  }
}

void main() {
  Solution solution = Solution();
  print(solution.decrypt([5, 7, 1, 4], 3)); // Example usage
}
```

```java []
import java.util.*;

class Solution {
    public int[] decrypt(int[] code, int k) {
        int n = code.length;
        int[] result = new int[n];
        if (k == 0) return result;

        for (int i = 0; i < n; i++) {
            int sum = 0, step = 0, j = i;
            while (step < Math.abs(k)) {
                j = (j + (k > 0 ? 1 : -1) + n) % n;
                sum += code[j];
                step++;
            }
            result[i] = sum;
        }
        return result;
    }
}
```


```javascript []
function decrypt(code, k) {
    const n = code.length;
    const result = Array(n).fill(0);
    if (k === 0) return result;

    for (let i = 0; i < n; i++) {
        let sum = 0, step = 0, j = i;
        while (step < Math.abs(k)) {
            j = (j + (k > 0 ? 1 : -1) + n) % n;
            sum += code[j];
            step++;
        }
        result[i] = sum;
    }
    return result;
}
```


```python []
class Solution:
    def decrypt(self, code, k):
        n = len(code)
        if k == 0:
            return [0] * n
        
        result = []
        for i in range(n):
            j = i
            step = 0
            total = 0
            while step < abs(k):
                j = (j + (1 if k > 0 else -1)) % n
                total += code[j]
                step += 1
            result.append(total)
        
        return result
```


```cpp []
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) {
        int n = code.size();
        vector<int> result(n, 0);
        if (k == 0) return result;

        for (int i = 0; i < n; i++) {
            int sum = 0, step = 0, j = i;
            while (step < abs(k)) {
                j = (j + (k > 0 ? 1 : -1) + n) % n;
                sum += code[j];
                step++;
            }
            result[i] = sum;
        }
        return result;
    }
};
```


```go []
func decrypt(code []int, k int) []int {
    n := len(code)
    result := make([]int, n)
    if k == 0 {
        return result
    }

    for i := 0; i < n; i++ {
        sum, step, j := 0, 0, i
        for step < abs(k) {
            if k > 0 {
                j = (j + 1) % n
            } else {
                j = (j - 1 + n) % n
            }
            sum += code[j]
            step++
        }
        result[i] = sum
    }
    return result
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