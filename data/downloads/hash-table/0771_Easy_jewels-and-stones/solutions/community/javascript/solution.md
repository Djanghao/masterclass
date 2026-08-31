# Two-line JavaScript solution

**Author:** loctn
**Votes:** 59
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/113563/](https://leetcode.com/problems/jewels-and-stones/solutions/113563/)

---

```
const numJewelsInStones = (J, S) => {
    const jewels = new Set(J)
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};
```
This is O(S) space and time - could be taken down to O(J) space by normal iteration.