# Share my Java backtracking solution

**Author:** jeantimex
**Votes:** 166
**Link:** [https://leetcode.com/problems/flip-game-ii/solutions/73962/](https://leetcode.com/problems/flip-game-ii/solutions/73962/)

---

The idea is try to replace every `"++"` in the current string `s` to `"--"` and see if the opponent can win or not, if the opponent cannot win, great, we win!

For the time complexity, here is what I thought, let's say the length of the input string `s` is `n`, there are at most `n - 1` ways to replace `"++"` to `"--"` (imagine `s` is all `"+++..."`), once we replace one `"++"`, there are at most `(n - 2) - 1` ways to do the replacement, it's a little bit like solving the N-Queens problem, the time complexity is `(n - 1) x (n - 3) x (n - 5) x ...`, so it's `O(n!!)`, [double factorial][1]. 

That's what I thought, but I could be wrong :)

    public boolean canWin(String s) {
      if (s == null || s.length() < 2) {
        return false;
      }
        
      for (int i = 0; i < s.length() - 1; i++) {
        if (s.startsWith("++", i)) {
          String t = s.substring(0, i) + "--" + s.substring(i + 2);
          
          if (!canWin(t)) {
            return true;
          }
        }
      }
        
      return false;
    }


  [1]: https://en.wikipedia.org/wiki/Double_factorial