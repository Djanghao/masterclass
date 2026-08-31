# Java

**Author:** AaveshK
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/1953639/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/1953639/)

---

Understanding : At max there can be two numbers with least difference, one positive and one negative.
In this case, the positive number has to be considered as the answer.
    
```
class Solution
{
    public int findClosestNumber(int[] nums)
    {
        int res = Integer.MAX_VALUE;
        for(int i: nums)
            if(Math.abs(i) < Math.abs(res) || i == Math.abs(res))
                res = i;
        return res;
    }
}
```