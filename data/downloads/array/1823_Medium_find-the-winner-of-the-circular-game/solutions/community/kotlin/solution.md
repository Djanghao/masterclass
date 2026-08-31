# Josephus Problem | Beats 100% 🔥🔥 | Clear and Efficient Solution Explained

**Author:** guanboo-yang
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5439923/](https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5439923/)

---

# Intuition

Let the answer be $$f(n, k)$$. The intuition is to find $$f(n, k)$$ from $$f(n-1, k)$$. We need to find the relation between the two. We can easily notice that when we remove the first friend among $$n$$ friends, the problem becomes $$n - 1$$ friends but the initial position is shifted by $$k$$ indexes. Therefore, we know the relation is $$f(n, k) = f(n-1, k) + k$$. Considering overflow, we get $$f(n, k) \\equiv f(n-1, k) + k \\mod n$$. We use 0 indexing for simpler modulo operations.

Here is an example of removing one friend from 8 friends when $$k = 3$$ to understand the relation between $$f(8, 3)$$ and $$f(7, 3)$$. The red one is the first friend left and the green one is the winner.

<img src="https://assets.leetcode.com/users/images/c4cd9300-31a5-4320-b7a7-a40eef0c9c0b_1720621367.6973476.png" alt="f(8, 3)" width="420" style="margin: 16px auto">

We can see that $$f(8, 3) = f(7, 3) + 3 \\mod 8$$.

# Approach

After understanding the relation, we can easily find the initial condition. When $$n = 1$$, the answer is 0 (0 indexed). Then we use the recursive relation to find $$f(n, k)$$. The final answer should be incremented by 1 since we use 0 indexing.

# Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code

```cpp []
class Solution {
public:
    int findTheWinner(int n, int k) {
        int winner = 0;
        for (int i = 1; i <= n; ++i) {
            winner = (winner + k) % i;
        }
        return winner + 1;
    }
};
```
```java []
class Solution {
    public int findTheWinner(int n, int k) {
        int winner = 0;
        for (int i = 1; i <= n; ++i) {
            winner = (winner + k) % i;
        }
        return winner + 1;
    }
}
```
```python []
class Solution:
    def findTheWinner(self, n, k):
        winner = 0
        for i in range(1, n + 1):
            winner = (winner + k) % i
        return winner + 1
```
```javascript []
var findTheWinner = function(n, k) {
    let winner = 0;
    for (let i = 1; i <= n; ++i) {
        winner = (winner + k) % i;
    }
    return winner + 1;
};
```
```csharp []
public class Solution {
    public int FindTheWinner(int n, int k) {
        int winner = 0;
        for (int i = 1; i <= n; ++i) {
            winner = (winner + k) % i;
        }
        return winner + 1;
    }
}
```
```ruby []
def find_the_winner(n, k)
    winner = 0
    (1..n).each do |i|
        winner = (winner + k) % i
    end
    winner + 1
end
```
```swift []
class Solution {
    func findTheWinner(_ n: Int, _ k: Int) -> Int {
        var winner = 0
        for i in 1...n {
            winner = (winner + k) % i
        }
        return winner + 1
    }
}
```
```golang []
func findTheWinner(n int, k int) int {
    winner := 0
    for i := 1; i <= n; i++ {
        winner = (winner + k) % i
    }
    return winner + 1
}
```
```kotlin []
class Solution {
    fun findTheWinner(n: Int, k: Int): Int {
        var winner = 0
        for (i in 1..n) {
            winner = (winner + k) % i
        }
        return winner + 1
    }
}
```