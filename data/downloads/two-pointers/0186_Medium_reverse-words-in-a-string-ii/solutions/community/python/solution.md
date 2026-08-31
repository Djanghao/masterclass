# Python solution

**Author:** autekwing
**Votes:** 64
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/53832/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/53832/)

---

reverse the whole string and then reverse words by words

    def reverseWords(self, s):
        self.reverse(s, 0, len(s) - 1)
        
        beg = 0
        for i in xrange(len(s)):
            if s[i] == ' ':
                self.reverse(s, beg, i-1)
                beg = i + 1
            elif i == len(s) -1:
                self.reverse(s, beg, i)
    
    def reverse(self, s, start, end):
        while start < end:
            s[start], s[end] = s[end], s[start]
            start += 1
            end -= 1