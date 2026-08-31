# Accepted clean Java solution with explanation (two pointers)

**Author:** jeantimex
**Votes:** 45
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/50107/](https://leetcode.com/problems/one-edit-distance/solutions/50107/)

---

The basic idea is we keep comparing s and t from the beginning, once there's a difference, we try to replace s(i) with t(j) or insert t(j) to s(i) and see if the rest are the same.

Example: i and j are the two pointers of S and T, we found that 'b' != 'c' and we try to replace it:

         i                           i
    S: a c d      replace       S: a b d
    T: a b c d   --------->     T: a b c d    --->  "d" != "cd", no good
         j                           j

now we try to insert T(j) to S(i) and we get:

         i                           i
    S: a c d      insert        S: a b c d
    T: a b c d   --------->     T: a b c d    --->  "cd" == "cd", viola!
         j                           j


To keep the code simple, we make s is always shorter than t, so we don't need to try deletion.

Code:

    public boolean isOneEditDistance(String s, String t) {
      if (s == null || t == null)
        return false;
          
      if (s.length() > t.length())
        return isOneEditDistance(t, s);
          
      int i = 0, j = 0;
      
      while (i < s.length() && j < t.length()) {
        if (s.charAt(i) != t.charAt(j)) {
          // we try to replace s[i] with s[j] or insert s[j] to s[i]
          // then compare the rest and see if they are the same
          return s.substring(i + 1).equals(t.substring(j + 1)) ||
                 s.substring(i).equals(t.substring(j + 1));
        }
        
        i++; j++;
      }
      
      return t.length() - j == 1;
    }