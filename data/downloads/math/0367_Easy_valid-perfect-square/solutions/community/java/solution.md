# 3-4 short lines, Integer Newton, Most Languages

**Author:** StefanPochmann
**Votes:** 76
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/83907/](https://leetcode.com/problems/valid-perfect-square/solutions/83907/)

---

Just slightly modified my [sqrt solutions](https://leetcode.com/discuss/58631/3-4-short-lines-integer-newton-every-language). You can find some explanation there.

(Note I renamed the parameter to x because that's the name in the sqrt problem and I like it better.)

**Java, C++, C, C#**

        long r = x;
        while (r*r > x)
            r = (r + x/r) / 2;
        return r*r == x;

**Python**

        r = x
        while r*r > x:
            r = (r + x/r) / 2
        return r*r == x

**Ruby**

        r  = x
        r = (r + x/r) / 2 while r*r > x
        r*r == x

**JavaScript**

        r = x;
        while (r*r > x)
            r = ((r + x/r) / 2) | 0;
        return r*r == x;