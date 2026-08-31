# Simple and Easy Solution | ✅✅✅Beats 100% | Brute force| C++| Java | Python | JavaScript

**Author:** BijoySingh7
**Votes:** 3
**Link:** [https://leetcode.com/problems/stone-removal-game/solutions/6076435/](https://leetcode.com/problems/stone-removal-game/solutions/6076435/)

---


# \u2B06\uFE0F Upvote if it helps \u2B06\uFE0F
## Connect with me on LinkedIn [Bijoy Sing](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/).

###### *Solution in C++, Python, Java, and JavaScript*

### C++ Solution:
```cpp
class Solution {
public:
    bool canAliceWin(int n) {
        int count = 0;
        int pile = 10;

        while (n >= pile) {
            n -= pile;
            pile--;
            count++;
        }

        return count % 2 != 0;
    }
};
```

### Python Solution:
```python
class Solution:
    def canAliceWin(self, n: int) -> bool:
        count = 0
        pile = 10

        while n >= pile:
            n -= pile
            pile -= 1
            count += 1

        return count % 2 != 0
```

### Java Solution:
```java
class Solution {
    public boolean canAliceWin(int n) {
        int count = 0;
        int pile = 10;

        while (n >= pile) {
            n -= pile;
            pile--;
            count++;
        }

        return count % 2 != 0;
    }
}
```

### JavaScript Solution:
```javascript
class Solution {
    canAliceWin(n) {
        let count = 0;
        let pile = 10;

        while (n >= pile) {
            n -= pile;
            pile--;
            count++;
        }

        return count % 2 !== 0;
    }
}
```

---

### Explanation:
1. We start with a pile of 10 stones.
2. In each round, we subtract the current pile size from `n` (remaining stones).
3. Alice plays on odd turns and Bob plays on even turns.
4. We count how many turns have been taken.
5. If the number of turns is odd, Alice wins (because she plays on odd turns).

---

### Approach:
1. Initialize `pile` to 10.
2. Use a while loop to subtract stones from `n` until we can't subtract the pile size anymore.
3. Track how many times stones are subtracted (this determines who plays last).
4. If the number of rounds is odd, Alice wins; otherwise, Bob wins.

---

### Complexity:
- **Time Complexity**: O(n), where `n` is the number of stones. The time complexity is proportional to the number of stones, as we keep subtracting stones from `n` by decreasing the pile size.
  
- **Space Complexity**: O(1), as we only use a constant amount of space for variables.

---

### *If you have any questions or need further clarification, feel free to drop a comment! \uD83D\uDE0A*