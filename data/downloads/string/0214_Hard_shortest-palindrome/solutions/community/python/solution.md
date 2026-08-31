# AC in 288 ms, simple brute force

**Author:** StefanPochmann
**Votes:** 419
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/60099/](https://leetcode.com/problems/shortest-palindrome/solutions/60099/)

---

    def shortestPalindrome(self, s):
        r = s[::-1]
        for i in range(len(s) + 1):
            if s.startswith(r[i:]):
                return r[:i] + s

Example: s = `dedcba`. Then r = `abcded` and I try these overlays (the part in `(...)` is the prefix I cut off, I just include it in the display for better understanding):

      s          dedcba
      r[0:]      abcded    Nope...
      r[1:]   (a)bcded     Nope...
      r[2:]  (ab)cded      Nope...
      r[3:] (abc)ded       Yes! Return abc + dedcba