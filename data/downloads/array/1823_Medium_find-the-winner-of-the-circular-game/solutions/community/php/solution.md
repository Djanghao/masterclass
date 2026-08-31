# 🔄🏆 Winning the Circular Game: A Josephus Problem Explained🎯|🔥Beats 100% O(n) Time 0(1) space 🔥|

**Author:** Dozzergeeky
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5440442/](https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5440442/)

---


![image.png](./images/0.png)

The provided C++ code implements a solution to find the winner of a circular game using a mathematical approach known as **the Josephus problem**. The Josephus problem is a theoretical problem related to a certain elimination game. The game is played with `n` people standing in a circle, and in each step, a fixed number `k` of people are skipped, and the next person is eliminated. The elimination proceeds around the circle (which is becoming smaller and smaller as people are removed), until only one person remains, who is declared the winner. The task is to find the position of that last person.

### Approach and Intuition

The solution uses a zero-based index to keep track of the elimination process. It iteratively calculates the position of the person to be eliminated in each round until only one person is left. The key intuition behind this solution is that with each person eliminated, the circle becomes smaller, and we can simulate the process of elimination by using modular arithmetic.

The algorithm starts with `idx = 0`, which represents the position of the person to be eliminated in the first round. In each iteration of the loop, it calculates the new `idx` by adding `k` to the current `idx` and taking the modulo with `i` (the current size of the circle). This effectively simulates moving `k` steps forward in the circle and finding the next person to eliminate. After the loop completes, `idx + 1` is returned to convert the zero-based index to a one-based index, as typically required by the problem statement.

### Time Complexity

The time complexity of this solution is **O(n)**, where `n` is the number of people in the circle. This is because the solution iterates from 1 to `n`, performing a constant amount of work in each iteration (updating `idx` using addition and modulo operations).

### Space Complexity

The space complexity of this solution is **O(1)**. The algorithm uses a fixed amount of extra space (a few variables) regardless of the input size, making it highly space-efficient.

This elegant solution leverages the power of modular arithmetic to efficiently solve a problem that, at first glance, might seem to require more complex data structures or algorithms.
<!-- Describe your first thoughts on how to solve this problem. -->

---
# Code 
### C++
```cpp
#include <bits/stdc++.h>
class Solution {
public:
 
    int findTheWinner(int n, int k) {
        
        int idx = 0;
        for (int i = 1; i <= n; i++) {
            idx = (idx + k) % i;
        }
        return idx + 1;
    }
};
```
### Java

```java
public class Solution {
    public int findTheWinner(int n, int k) {
        int idx = 0;
        for (int i = 1; i <= n; i++) {
            idx = (idx + k) % i;
        }
        return idx + 1;
    }
}
```

### Python

```python
class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        idx = 0
        for i in range(1, n + 1):
            idx = (idx + k) % i
        return idx + 1
```

### JavaScript

```javascript
class Solution {
    findTheWinner(n, k) {
        let idx = 0;
        for (let i = 1; i <= n; i++) {
            idx = (idx + k) % i;
        }
        return idx + 1;
    }
}
```

```php
class Solution {

    public function findTheWinner($n, $k) {
        $idx = 0;
        for ($i = 1; $i <= $n; $i++) {
            $idx = ($idx + $k) % $i;
        }
        return $idx + 1;
    }
}
```

### TypeScript

```typescript
class Solution {
    findTheWinner(n: number, k: number): number {
        let idx = 0;
        for (let i = 1; i <= n; i++) {
            idx = (idx + k) % i;
        }
        return idx + 1;
    }
}
```
### Rust

```rust
impl Solution {
    pub fn find_the_winner(n: i32, k: i32) -> i32 {
        let mut idx = 0;
        for i in 1..=n {
            idx = (idx + k as usize) % i as usize;
        }
        (idx + 1) as i32
    }
}
```

### Go

```go
package main

func findTheWinner(n int, k int) int {
    idx := 0
    for i := 1; i <= n; i++ {
        idx = (idx + k) % i
    }
    return idx + 1
}
```