# Python3 easy solution using bit manipulation

**Author:** leetkido
**Votes:** 17
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/1585689/](https://leetcode.com/problems/hamming-distance/solutions/1585689/)

---

		value = str(bin(x^y))
        return(value.count('1'))