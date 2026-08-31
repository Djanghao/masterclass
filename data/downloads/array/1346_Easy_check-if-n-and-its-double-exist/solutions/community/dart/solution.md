# 🔥SIMPILL💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6099985/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6099985/)

---


---

## Intuition
The problem involves determining if there exist two numbers in the array such that one is double the other. This can be efficiently achieved by keeping track of elements we've seen so far and checking for the presence of either the double or half of the current number.

---

## Approach
1. **Iterate Through the Array**:
   - For each number, check if either its double (\\(2 \	imes \	ext{num}\\)) or half (\\(\	ext{num} / 2\\), only for even numbers) exists in the set of previously seen numbers.

2. **Use a Hash Set**:
   - Maintain a set to store all numbers encountered so far.
   - If a match (double or half) is found, return `true`.

3. **No Match**:
   - If the iteration completes without finding any match, return `false`.

This approach avoids the \\(O(n^2)\\) complexity of nested loops by using a hash set for \\(O(1)\\) average-time lookups.

---

## Complexity
- **Time Complexity**:  
  \\(O(n)\\), where \\(n\\) is the length of the array.  
  Each number is processed once, and set operations (insertion and lookup) are \\(O(1)\\) on average.

- **Space Complexity**:  
  \\(O(n)\\), due to the hash set storing up to \\(n\\) numbers.

---


```dart []
class Solution {
  bool checkIfExist(List<int> arr) {
    Set<int> seen = {}; // To store numbers we've encountered

    for (int num in arr) {
      // Check if double or half of the number exists in the set
      if (seen.contains(num * 2) || (num % 2 == 0 && seen.contains(num ~/ 2))) {
        return true;
      }
      // Add the current number to the set
      seen.add(num);
    }

    return false;
  }
}
```


```java []
import java.util.HashSet;
import java.util.Set;

public class Solution {
    public boolean checkIfExist(int[] arr) {
        Set<Integer> seen = new HashSet<>();

        for (int num : arr) {
            if (seen.contains(2 * num) || (num % 2 == 0 && seen.contains(num / 2))) {
                return true;
            }
            seen.add(num);
        }

        return false;
    }
}
```


```python []
class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        seen = set()
        
        for num in arr:
            if 2 * num in seen or (num % 2 == 0 and num // 2 in seen):
                return True
            seen.add(num)
        
        return False
```


```javascript []
var checkIfExist = function(arr) {
    const seen = new Set();

    for (const num of arr) {
        if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
            return true;
        }
        seen.add(num);
    }

    return false;
};
```


```cpp []
#include <unordered_set>
#include <vector>
using namespace std;

class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
        unordered_set<int> seen;

        for (int num : arr) {
            if (seen.count(num * 2) || (num % 2 == 0 && seen.count(num / 2))) {
                return true;
            }
            seen.insert(num);
        }

        return false;
    }
};
```


```go []
func checkIfExist(arr []int) bool {
    seen := make(map[int]struct{})

    for _, num := range arr {
        if _, exists := seen[num*2]; exists {
            return true
        }
        if num%2 == 0 {
            if _, exists := seen[num/2]; exists {
                return true
            }
        }
        seen[num] = struct{}{}
    }

    return false
}
```

---
![image.png](./images/0.png) {:style='width:250px'}