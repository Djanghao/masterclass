# C# solution

**Author:** like2learn
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/3129410/](https://leetcode.com/problems/game-of-nim/solutions/3129410/)

---

# Code
```
public class Solution {
    public bool NimGame(int[] piles) {
        return TopDown(piles, 1, new Dictionary<int, int>()) == 2;
    }

    public int TopDown(int[] piles, int player, Dictionary<int, int> cache) {
        int otherPlayer = 3 - player;

        int result = 0;

        int[] copy = new int[piles.Length];
        for (int i = 0; i < piles.Length; i++) {
            copy[i] = piles[i];
        }
        Array.Sort(copy);

        int key = player;
        for (int i = 0; i < copy.Length; i++) {
            if (copy[i] > 0) {
                key *= 10;
                key += copy[i];
            }
        }

        if (key < 100) {
            return otherPlayer;
        }

        if (cache.ContainsKey(key)) {
            return cache[key];
        }

        cache[key] = player;

        bool done = false;

        for (int i = 0; i < piles.Length && !done; i++) {
            int orig = piles[i];
            while (piles[i] > 0) {
                --piles[i];
                
                int whoLoses = TopDown(piles, otherPlayer, cache);
                if (whoLoses == otherPlayer) {
                    cache[key] = otherPlayer;
                    done = true;
                    break;
                }
            }

            piles[i] = orig;
        }

        return cache[key];
    }
}

```