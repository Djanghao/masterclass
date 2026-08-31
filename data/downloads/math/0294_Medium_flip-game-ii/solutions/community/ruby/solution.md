# Short Java & Ruby

**Author:** StefanPochmann
**Votes:** 7
**Link:** [https://leetcode.com/problems/flip-game-ii/solutions/74010/](https://leetcode.com/problems/flip-game-ii/solutions/74010/)

---

You win if and only if you can make some move so that the resulting state can't be won. One thing I do differently from everyone else so far is that I replace `"++"` with `"-"` instead of `"--"`.

---

**Ruby**

    def can_win(s)
      (0..s.size).any? { |i| s[i,2] == "++" && !can_win(s[0, i] + "-" + s[i+2..-1]) }
    end

---

**Java**

I let the library do the searching for "++", which I find nicer and apparently it's faster as well (see below).

    public boolean canWin(String s) {
        for (int i=-1; (i = s.indexOf("++", i+1)) >= 0; )
            if (!canWin(s.substring(0, i) + "-" + s.substring(i+2)))
                return true;
        return false;
    }

Both the library-searching and the `"-"`-replacement seem to speed it up significantly, here are results of submitting different similar solutions five times each:

Average 153 ms: Mine with `"-"` (150, 156, 152, 149 and 156)  
Average 169 ms: Mine with `"--"` (184, 169, 156, 162 and 174)  
Average 209 ms: [easonhu's](https://leetcode.com/discuss/64330/4-line-java-solution) (214, 204, 207, 207 and 213)  
Average 221 ms: [jeantimex's](https://leetcode.com/discuss/64291/share-my-java-backtracking-solution) (168, 196, 202, 194 and 345) (without the 345 the average is 190 ms)