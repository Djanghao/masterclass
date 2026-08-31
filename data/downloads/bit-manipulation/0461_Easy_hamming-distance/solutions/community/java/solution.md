# 6 Line Easy Java Solution | 0ms 100 % faster

**Author:** himanshuramranjan
**Votes:** 35
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/1585496/](https://leetcode.com/problems/hamming-distance/solutions/1585496/)

---

**Upvote if you LIKE** \uD83D\uDE42

class Solution {

    public int hammingDistance(int x, int y) {
        int res = 0;
        int m = x^y;                  // take the xor of two numbers
        while(m != 0){                // count the no of "1"s 
            if((m&1) == 1)
                res++;
            m = m>>1;
        }
        return res;
    }
}