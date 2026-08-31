# My 1 lines code in Java, C++, and Python

**Author:** xcv58
**Votes:** 382
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/51398/](https://leetcode.com/problems/excel-sheet-column-title/solutions/51398/)

---

Java:

    return n == 0 ? "" : convertToTitle(--n / 26) + (char)('A' + (n % 26));

C++:

    return n == 0 ? "" : convertToTitle(n / 26) + (char) (--n % 26 + 'A');

update: because the behavior of different compilers, the safe version should be:

    return n == 0 ? "" : convertToTitle((n - 1) / 26) + (char) ((n - 1) % 26 + 'A');

Python:

    return "" if num == 0 else self.convertToTitle((num - 1) / 26) + chr((num - 1) % 26 + ord('A'))