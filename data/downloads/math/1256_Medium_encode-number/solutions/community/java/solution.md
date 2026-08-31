# Java || One line solution with explanation

**Author:** Chris___Yang
**Votes:** 1
**Link:** [https://leetcode.com/problems/encode-number/solutions/3099425/](https://leetcode.com/problems/encode-number/solutions/3099425/)

---

# Intuition
**Observations** from the given table

| Decimal | Binary | Secret Conversion| Observations |
| --- | ---- | --|-- |
| 0 | 0 | - | 1- |
| 1 | 1 | 0 | 1- **0**|
| 2 | 10 | 1 |1- **1**|
| 3 | 11 | 00 |1- **00**|
| 4 | 100 | 01 |1- **01**|
| 5 | 101 | 10 |1- **10**|
| 6 | 110 | 11 |1- **11**|
| 7 | 111 | 000 |1- **000**|

We can observe that the secret conversion is the **Binary** form of the current **number + 1** without the first character, that is, 
`toBinaryString(n + 1).substring(1)`

# Code
```
class Solution {
    public String encode(int num) {
        return Integer.toBinaryString(num + 1).substring(1);
    }
}
```