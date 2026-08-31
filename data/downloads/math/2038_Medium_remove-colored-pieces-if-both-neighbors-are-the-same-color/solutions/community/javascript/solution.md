# ✅96.44%🔥Easy Solution🔥Game Theory & Greedy

**Author:** MrAke
**Votes:** 131
**Link:** [https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4116704/](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4116704/)

---

# Problem Explanation:
#### In this problem, you are given a string colors representing a line of colored pieces, where each piece is either colored 'A' or 'B'. Alice and Bob are playing a game where they take alternating turns removing pieces from the line. Alice goes first, and they have certain rules for removing pieces:

- Alice can only remove a piece colored 'A' if both its neighbors are also colored 'A'. She cannot remove pieces that are colored 'B'.
- Bob can only remove a piece colored 'B' if both its neighbors are also colored 'B'. He cannot remove pieces that are colored 'A'.
- They cannot remove pieces from the edge of the line.

#### The game continues until one of the players cannot make a move, and in that case, the other player wins.

#### You need to determine, assuming both Alice and Bob play optimally, whether Alice can win the game or not.
---
# Solution Approach:
#### The given solution approach uses a Counter object to count how many valid moves Alice can make and how many valid moves Bob can make. It iterates through the input string colors to count these moves.

- The collections.Counter() is used to count the occurrences of characters in the string.
- The groupby(colors) function groups consecutive characters in the string.
- It iterates through the groups and counts how many 'A's and 'B's can be removed according to the game rules. Specifically, it counts the number of 'A's and 'B's that have at least two neighbors of the same color.
- Finally, it compares the counts of valid moves for Alice ('A') and Bob ('B'). If Alice has more valid moves, it returns True; otherwise, it returns False.

#### The idea is that if Alice can make more valid moves than Bob, she has a winning strategy because she will eventually force Bob into a position where he can't make a move.

#### This solution works under the assumption that both players play optimally and is a good approach to solve the problem efficiently.


---
# Code
```python []
class Solution:
    def winnerOfGame(self, colors: str) -> bool:
        c = collections.Counter()
        for x, t in groupby(colors):
            c[x] += max(len(list(t)) - 2, 0)

        if c['A'] > c['B']:
            return True
        return False
```
```C# []
public class Solution {
    public bool WinnerOfGame(string colors) {
        int countA = 0;
        int countB = 0;
        
        for (int i = 0; i < colors.Length; i++) {
            char x = colors[i];
            int count = 0;
            
            while (i < colors.Length && colors[i] == x) {
                i++;
                count++;
            }
            
            if (x == 'A') {
                countA += Math.Max(count - 2, 0);
            } else if (x == 'B') {
                countB += Math.Max(count - 2, 0);
            }
            
            i--;
        }

        return countA > countB;
    }
}

```
```C++ []
class Solution {
public:
    bool winnerOfGame(string colors) {
        map<char, int> c;
        for (auto it = colors.begin(); it != colors.end(); ) {
            char x = *it;
            auto t = it;
            while (t != colors.end() && *t == x) {
                t++;
            }
            c[x] += max(int(distance(it, t) - 2), 0);
            it = t;
        }

        if (c['A'] > c['B']) {
            return true;
        }
        return false;
    }
};

```
```C []
bool winnerOfGame(char *colors) {
    int len = strlen(colors);
    int countA = 0, countB = 0;

    for (int i = 0; i < len; i++) {
        char x = colors[i];
        int count = 0;

        while (i < len && colors[i] == x) {
            i++;
            count++;
        }

        if (x == 'A') {
            countA += (count - 2 > 0) ? count - 2 : 0;
        } else if (x == 'B') {
            countB += (count - 2 > 0) ? count - 2 : 0;
        }

        i--;  
    }

    return countA > countB;
}
```
```Java []
public class Solution {
    public boolean winnerOfGame(String colors) {
        Map<Character, Integer> c = new HashMap<>();
        c.put('A', 0);
        c.put('B', 0);
        
        for (int i = 0; i < colors.length(); i++) {
            char x = colors.charAt(i);
            int count = 0;
            
            while (i < colors.length() && colors.charAt(i) == x) {
                i++;
                count++;
            }
            
            c.put(x, c.get(x) + Math.max(count - 2, 0));
            i--;
        }

        return c.get('A') > c.get('B');
    }
}

```
```javascript []
var winnerOfGame = function(colors) {
    let countA = 0;
    let countB = 0;

    for (let i = 0; i < colors.length; i++) {
        const x = colors[i];
        let count = 0;

        while (i < colors.length && colors[i] === x) {
            i++;
            count++;
        }

        if (x === 'A') {
            countA += Math.max(count - 2, 0);
        } else if (x === 'B') {
            countB += Math.max(count - 2, 0);
        }

        i--;
    }

    return countA > countB;
};
```
```Typescript []
function winnerOfGame(colors: string): boolean {
    let countA = 0;
    let countB = 0;

    for (let i = 0; i < colors.length; i++) {
        const x = colors[i];
        let count = 0;

        while (i < colors.length && colors[i] === x) {
            i++;
            count++;
        }

        if (x === 'A') {
            countA += Math.max(count - 2, 0);
        } else if (x === 'B') {
            countB += Math.max(count - 2, 0);
        }

        i--;
    }

    return countA > countB;
}

```
```Go []
func winnerOfGame(colors string) bool {
    countA := 0
    countB := 0

    for i := 0; i < len(colors); i++ {
        x := colors[i]
        count := 0

        for i < len(colors) && colors[i] == x {
            i++
            count++
        }

        if x == 'A' {
            countA += max(count-2, 0)
        } else if x == 'B' {
            countB += max(count-2, 0)
        }

        i--
    }

    return countA > countB
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

```
![9c6f9412-c860-47d6-9a2e-7fcf37ff3321_1686334926.180891.png](./images/0.png)

