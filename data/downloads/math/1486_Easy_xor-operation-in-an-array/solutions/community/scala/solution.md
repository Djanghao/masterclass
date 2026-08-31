# scala solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/2118486/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/2118486/)

---

```

    def xorOperation(n: Int, start: Int): Int = {
           (0 to n-1).map(start+_*2).reduce(_^_)

    }
```