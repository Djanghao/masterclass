# 4 lines in Java

**Author:** StefanPochmann
**Votes:** 283
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/67188/](https://leetcode.com/problems/strobogrammatic-number/solutions/67188/)

---

Just checking the pairs, going inwards from the ends.

    public boolean isStrobogrammatic(String num) {
        for (int i=0, j=num.length()-1; i <= j; i++, j--)
            if (!"00 11 88 696".contains(num.charAt(i) + "" + num.charAt(j)))
                return false;
        return true;
    }