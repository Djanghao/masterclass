# Java, counting, linear time, constant space, explained

**Author:** gthor10
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/786651/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/786651/)

---

Algorithm ideas:
each next consequent 1 contributes to all unique strings with length 1 to k (where k is number of subsequent 1s), k substrings overall. In other words count of possible substrings increased by k
each 0 should reset the count of 1s

O(n) time - scan every character in S once
O(1) space - no extra space

```
    public int numSub(String s) {
        long count = 0;
        int ones = 0;
        
        for (char ch : s.toCharArray()) {
            if (ch == '0') {
                ones = 0;
            } else {
                count+=++ones;
            }
        }
        return (int) (count%1_000_000_007);
    }
```