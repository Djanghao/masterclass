# Elegant Java solution

**Author:** jeantimex
**Votes:** 749
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/12807/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/12807/)

---

    public int strStr(String haystack, String needle) {
      for (int i = 0; ; i++) {
        for (int j = 0; ; j++) {
          if (j == needle.length()) return i;
          if (i + j == haystack.length()) return -1;
          if (needle.charAt(j) != haystack.charAt(i + j)) break;
        }
      }
    }