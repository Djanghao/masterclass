# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5819085/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5819085/)

---

![image.png](./images/0.png)



---

# Intuition
To find the k-th smallest number in lexicographical order among the numbers from 1 to n, we can think of the problem as traversing a tree. Each number can be seen as a prefix that leads to its children (numbers that start with that prefix). We can effectively "navigate" this tree to find the k-th number without generating all numbers.

# Approach
1. **Prefix Tree Traversal**: Start with the smallest prefix (1) and traverse the tree. For each prefix, count how many numbers exist under it within the limit `n`.
  
2. **Count Steps**: Use a helper function `countSteps` to count how many numbers fall within the range of the current prefix. If the count is less than or equal to k, move to the next prefix. Otherwise, go deeper into the current prefix (multiply it by 10).

3. **Adjusting k**: As you move down the tree or switch prefixes, adjust k accordingly. This helps in determining how many more steps are needed to reach the k-th number.

4. **Return Result**: Once k reaches zero, the current prefix is the k-th number in lexicographical order.

# Complexity
- **Time complexity**:  
  The time complexity is approximately **O(log(n) * log(k))** due to the logarithmic depth of the tree traversal, as we effectively halve the problem size with each iteration.

- **Space complexity**:  
  The space complexity is **O(1)** since we use a constant amount of space.

---

# Code Implementations


```dart []
class Solution {
  int findKthNumber(int n, int k) {
    int current = 1; // Start from 1
    k--; // Decrease k since we start counting from 1

    while (k > 0) {
      int count = countSteps(n, current, current + 1); // Count numbers in the range
      if (count <= k) {
        current++; // Move to the next prefix
        k -= count; // Decrease k by the count
      } else {
        current *= 10; // Go deeper in the tree
        k--; // We include the current number
      }
    }
    
    return current; // Return the kth number
  }

  int countSteps(int n, int curr, int next) {
    int steps = 0;
    while (curr <= n) {
      steps += min(n + 1, next) - curr; // Count numbers in range [curr, next)
      curr *= 10; // Move to the next level
      next *= 10; // Move next prefix
    }
    return steps;
  }
}
```


```java []
class Solution {
    public int findKthNumber(int n, int k) {
        int current = 1;
        k--;
        
        while (k > 0) {
            int count = countSteps(n, current, current + 1);
            if (count <= k) {
                current++;
                k -= count;
            } else {
                current *= 10;
                k--;
            }
        }
        
        return current;
    }

    private int countSteps(int n, int curr, int next) {
        int steps = 0;
        while (curr <= n) {
            steps += Math.min(n + 1, next) - curr;
            curr *= 10;
            next *= 10;
        }
        return steps;
    }
}
```


```cpp []
class Solution {
public:
    int findKthNumber(int n, int k) {
        int current = 1;
        k--;
        
        while (k > 0) {
            int count = countSteps(n, current, current + 1);
            if (count <= k) {
                current++;
                k -= count;
            } else {
                current *= 10;
                k--;
            }
        }
        
        return current;
    }

    int countSteps(int n, long long curr, long long next) {
        int steps = 0;
        while (curr <= n) {
            steps += min(n + 1, next) - curr;
            curr *= 10;
            next *= 10;
        }
        return steps;
    }
};
```


```python []
class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        current = 1
        k -= 1
        
        while k > 0:
            count = self.countSteps(n, current, current + 1)
            if count <= k:
                current += 1
                k -= count
            else:
                current *= 10
                k -= 1
        
        return current

    def countSteps(self, n: int, curr: int, next: int) -> int:
        steps = 0
        while curr <= n:
            steps += min(n + 1, next) - curr
            curr *= 10
            next *= 10
        return steps
```


```javascript []
var findKthNumber = function(n, k) {
    let current = 1;
    k--;
    
    while (k > 0) {
        let count = countSteps(n, current, current + 1);
        if (count <= k) {
            current++;
            k -= count;
        } else {
            current *= 10;
            k--;
        }
    }
    
    return current;
};

function countSteps(n, curr, next) {
    let steps = 0;
    while (curr <= n) {
        steps += Math.min(n + 1, next) - curr;
        curr *= 10;
        next *= 10;
    }
    return steps;
}
```


```go []
func findKthNumber(n int, k int) int {
    current := 1
    k--

    for k > 0 {
        count := countSteps(n, current, current+1)
        if count <= k {
            current++
            k -= count
        } else {
            current *= 10
            k--
        }
    }
    
    return current
}

func countSteps(n int, curr int, next int) int {
    steps := 0
    for curr <= n {
        steps += min(n+1, next) - curr
        curr *= 10
        next *= 10
    }
    return steps
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```


```typescript []
function findKthNumber(n: number, k: number): number {
    let current = 1;
    k--;

    while (k > 0) {
        const count = countSteps(n, current, current + 1);
        if (count <= k) {
            current++;
            k -= count;
        } else {
            current *= 10;
            k--;
        }
    }

    return current;
}

function countSteps(n: number, curr: number, next: number): number {
    let steps = 0;
    while (curr <= n) {
        steps += Math.min(n + 1, next) - curr;
        curr *= 10;
        next *= 10;
    }
    return steps;
}
```

---


![image.png](./images/1.png) {:style='width:250px'}