# Dart Solution

**Author:** user2353y
**Votes:** 0
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/4875114/](https://leetcode.com/problems/available-captures-for-rook/solutions/4875114/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int numRookCaptures(List<List<String>> board) {
    int conteggio = 0;

    // Unifica le funzioni di controllo in una singola funzione
    void checkDirection(int startX, int startY, int deltaX, int deltaY) {
      int x = startX + deltaX;
      int y = startY + deltaY;
      
      while (x >= 0 && x < board.length && y >= 0 && y < board[x].length) {
        String pedina = board[x][y];
        if (pedina != ".") {
          if (pedina == "p") {
            conteggio++;
          }
          break;
        }
        x += deltaX;
        y += deltaY;
      }
    }

    // Trova la posizione della Torre (R)
    for (int x = 0; x < board.length; x++) {
      for (int y = 0; y < board[x].length; y++) {
        if (board[x][y] == "R") {
          // Controlla in tutte e quattro le direzioni dalla posizione della Torre
          checkDirection(x, y, -1, 0); // Su
          checkDirection(x, y, 1, 0);  // Gi\xF9
          checkDirection(x, y, 0, -1); // Sinistra
          checkDirection(x, y, 0, 1);  // Destra
          return conteggio; // Esce dopo aver controllato tutte le direzioni
        }
      }
    }
    return conteggio;
  }
}

```