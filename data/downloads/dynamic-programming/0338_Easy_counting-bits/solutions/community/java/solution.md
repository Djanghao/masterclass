# Three-Line Java Solution

**Author:** lixx2100
**Votes:** 1345
**Link:** [https://leetcode.com/problems/counting-bits/solutions/79539/](https://leetcode.com/problems/counting-bits/solutions/79539/)

---

An easy recurrence for this problem is f[i] = f[i / 2] + i % 2.


    public int[] countBits(int num) {
        int[] f = new int[num + 1];
        for (int i=1; i<=num; i++) f[i] = f[i >> 1] + (i & 1);
        return f;
    }