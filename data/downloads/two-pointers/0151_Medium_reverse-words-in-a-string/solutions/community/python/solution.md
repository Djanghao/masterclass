# My Accept Answer of Python with one line

**Author:** Lendfating
**Votes:** 66
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/47726/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/47726/)

---

My Python code using the function of array and string. Both time and memory is O(n).

    class Solution:
    # @param s, a string
    # @return a string
    def reverseWords(self, s):
        return " ".join(s.strip().split()[::-1])