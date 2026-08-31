# Simple Python Solution

**Author:** ZachLiu
**Votes:** 91
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/67197/](https://leetcode.com/problems/strobogrammatic-number/solutions/67197/)

---

    def isStrobogrammatic(self, num):
        """
        :type num: str
        :rtype: bool
        """
        maps = {("0", "0"), ("1", "1"), ("6", "9"), ("8", "8"), ("9", "6")}
        i,j = 0, len(num) - 1
        while i <= j:
            if (num[i], num[j]) not in maps:
                return False
            i += 1
            j -= 1
        return True