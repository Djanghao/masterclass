# EASY soultion with DRY RUN - JAVA

**Author:** harin_mehta
**Votes:** 602
**Link:** [https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/820072/](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/820072/)

---

**Intuition**
At every iteration, tracking maximum length of positive multiplicative result and negative multiplicative result can help.
Multiplicative Result : result(+ve/-ve) of multiplication of bunch of numbers(some of which can be +ve/-ve)

**Algorithm**
1. If we see a 0, we gotta start off things again
2. If we see a positive number :
		2.1. Increase length of positive mutilpicative result till now.
		2.2. Increase length of negative  mutilpicative result till now, unless we had not encountered any negative before.
3. If we see a negative number:
		3.1. It's time to swap positive and negative multiplicative results' lengths and do similar task as we did in above case.
4. In each iteration, use the length of positive mutilpicative result to compute answer. 

**Dry Run**
```
elements      :   9    5    8    2    -6    4    -3    0    2    -5    15    10    -7    9    -2
positive_len  :   1    2    3    4     0    1     7    0    1     0     1     2     5    6     5
negative_len  :   0    0    0    0     5    6     2    0    0     2     3     4     3    4     7

```
Answer : Max(all these positive_len values) => 7
```
class Solution {
    public int getMaxLen(int[] nums) {
        int positive = 0, negative = 0;    // length of positive and negative results
        int ans = 0;
        for(int x : nums) {
            if(x == 0)  {
                positive = 0;
                negative = 0;
            }
            else if(x > 0) {
                positive++;
                negative = negative == 0 ? 0  : negative+1;
            }
            else {
                int temp = positive;
                positive = negative == 0 ? 0  : negative+1;
                negative = temp+1;
            }
            ans = Math.max(ans, positive);
        }
        return ans;
    }
}
```