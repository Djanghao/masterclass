# Java 100% faster with explanation

**Author:** samdam__30
**Votes:** 17
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/1308882/](https://leetcode.com/problems/construct-the-rectangle/solutions/1308882/)

---

In the problem its is mention that we want to get minimun differnce btw L and W.
Hence we will start a for loop from its **sqrt(area)** so that we can get minimun differnce.

Example area=120.
its factors=1,2,3,4,5,6,8,10
After **10 we can get its remaining factor just by iteration all the factor from 10**
ie. 120/10=12
120/8=15
20,24,30,60,120.

Hence we can clearly see that minimun differnce btw 2 factors is **12-10=2.**
Hence we can say that all we can** start the loop from sqrt(area)** and if it is divisible then it is the minimum difference multiple.

If we come out of the loop then we can say that **no. is prime  and return [area,1]**
Please **Upvote** if found useful.If any **doubts** do comment .
Thank You
```
class Solution {
    public int[] constructRectangle(int area) {
        for(int i=(int)Math.sqrt(area);i>=1;i--)
        {
            if(area%i==0)
            {
                return new int[]{Math.max(i,area/i),Math.min(i,area/i)};
            }
        }
        return new int[]{area,1};
    }
}
```