# Python concise solution.

**Author:** OldCodingFarmer
**Votes:** 103
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/52304/](https://leetcode.com/problems/excel-sheet-column-number/solutions/52304/)

---


    def titleToNumber(self, s):
        res = 0
        for c in s:
            res = res*26 + ord(c)-ord('A')+1
        return res