# 🔥BEATS 💯 % 🎯 | SUPER EASY AND SIMPLE🔥|

**Author:** CodeWithSparsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5816772/](https://leetcode.com/problems/lexicographical-numbers/solutions/5816772/)

---


---

# Intuition
The problem is to generate numbers from 1 to \\(n\\) in lexicographical order. The idea is similar to performing a **Depth First Search (DFS)** on a **tree**, where each node represents a number. Starting from 1, we explore all possible numbers by appending digits (0-9) to the current number until we exceed the limit \\(n\\). This ensures that the numbers are generated in lexicographical order.

# Approach
1. We start the DFS with each number from 1 to 9 as the root.
2. For each number, we recursively explore its children by multiplying the current number by 10 and adding digits from 0 to 9.
3. If the generated number exceeds \\(n\\), we stop further exploration.
4. This guarantees that all numbers are explored in lexicographical order.

# Complexity
- **Time complexity**:  
  The time complexity is **O(n)**, where \\(n\\) is the number of integers between 1 and \\(n\\), as we visit each number exactly once.

- **Space complexity**:  
  The space complexity is **O(n)** for storing the result.

---

# Code Implementations


```dart []
class Solution {
  List<int> lexicalOrder(int n) {
    List<int> result = [];

    void dfs(int num) {
      if (num > n) return;
      result.add(num);
      for (int i = 0; i < 10; i++) {
        if (num * 10 + i > n) break;
        dfs(num * 10 + i);
      }
    }

    for (int i = 1; i < 10; i++) {
      dfs(i);
    }

    return result;
  }
}
```


```java []
import java.util.*;

class Solution {
    public List<Integer> lexicalOrder(int n) {
        List<Integer> result = new ArrayList<>();
        for (int i = 1; i < 10; i++) {
            dfs(i, n, result);
        }
        return result;
    }

    private void dfs(int num, int n, List<Integer> result) {
        if (num > n) return;
        result.add(num);
        for (int i = 0; i < 10; i++) {
            if (num * 10 + i > n) break;
            dfs(num * 10 + i, n, result);
        }
    }
}
```


```javascript []
var lexicalOrder = function(n) {
    let result = [];

    const dfs = (num) => {
        if (num > n) return;
        result.push(num);
        for (let i = 0; i < 10; i++) {
            if (num * 10 + i > n) break;
            dfs(num * 10 + i);
        }
    }

    for (let i = 1; i < 10; i++) {
        dfs(i);
    }

    return result;
};
```


```python []
class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        result = []
        
        def dfs(num):
            if num > n:
                return
            result.append(num)
            for i in range(10):
                if num * 10 + i > n:
                    break
                dfs(num * 10 + i)

        for i in range(1, 10):
            dfs(i)
            
        return result
```


```cpp []
class Solution {
public:
    vector<int> lexicalOrder(int n) {
        vector<int> result;
        for (int i = 1; i < 10; ++i) {
            dfs(i, n, result);
        }
        return result;
    }

    void dfs(int num, int n, vector<int>& result) {
        if (num > n) return;
        result.push_back(num);
        for (int i = 0; i < 10; ++i) {
            if (num * 10 + i > n) break;
            dfs(num * 10 + i, n, result);
        }
    }
};
```


```go []
func lexicalOrder(n int) []int {
    result := []int{}
    
    var dfs func(int)
    dfs = func(num int) {
        if num > n {
            return
        }
        result = append(result, num)
        for i := 0; i < 10; i++ {
            if num * 10 + i > n {
                break
            }
            dfs(num * 10 + i)
        }
    }

    for i := 1; i < 10; i++ {
        dfs(i)
    }
    
    return result
}
```


```typescript []
function lexicalOrder(n: number): number[] {
    const result: number[] = [];
    
    const dfs = (num: number) => {
        if (num > n) return;
        result.push(num);
        for (let i = 0; i < 10; i++) {
            if (num * 10 + i > n) break;
            dfs(num * 10 + i);
        }
    }

    for (let i = 1; i < 10; i++) {
        dfs(i);
    }

    return result;
}
```

---

These implementations across different programming languages solve the problem using a **Depth-First Search (DFS)** approach, exploring each number in lexicographical order by appending digits (0-9) to the current number until we exceed the limit.