# Complete Explanation || Easy to understand || Binary Search

**Author:** MohakHarjani
**Votes:** 31
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620008/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620008/)

---

We can do binary search on answer (value at index)

Assume you are assigning \u201Cval\u201D at index [for some \u201Cmid\u201D value by Binary search]
Now we want **our total sum to be as minimum as possible** [to stay within maxSum limit]
So we will **try to minimize our leftSum and righSum**

Left elements => [1,1, 1, 1, \u2026, val - 2, val - 1] , decrease val till 1, and rest all 1\u2019s
Right elements => [val - 1, val - 2, \u2026., 1, 1, 1, 1], decrease val till 1, and rest all 1\u2019s
Eg.
If val = 3
Index = 5
**[1, 1, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1]** 


Now the only problem is to calculate the left and right Sum in O(1)
There are two cases => [val = 5]
1) => (**5**, 4, 3, 2, 1, 1, 1, 1, 1) [index = 0]
2) =>   (x, x, x, x, x, x, **5**, 4, 3)  [index = 5]

To calculate rightSum (similarly will have leftSum)
**Case-1** => sum of elements from [5 to 1] + remaining all 1\u2019s
**Case-2** => sum of elements from [5 to 3] is same as
   =>sum of elements from [5 to 1] - sum of elements from [3 to 1]

```
class Solution {
public:
    long calc(long n) //sum of numbers from [1 to n]
    {
        return ((n * (n + 1)) / 2);
    }
    //=========================================================================================
    long getSum(int totalLen, int val)
    {
        long totalSum = 0;
        int decreasingLen = val; //count of decreasing elements [val, val - 1, .., 1]
        
        //[val, val - 1, val - 2, ... 1, 1, 1, 1]
        if (totalLen >= decreasingLen)
        {
            long currSum = calc(val);
            int remainingSum = totalLen - decreasingLen; //all 1's
            totalSum = currSum + remainingSum;
        }
        else //[val, val - 1, val - 2]
        {
            long lastVal = decreasingLen - totalLen;
            totalSum = calc(val) - calc(lastVal);
        }
        return totalSum; 
    }
    //===========================================================================================
    int maxValue(int n, int index, int maxSum) 
    {
        int low = 1, high = maxSum;
        int leftCount = index, rightCount = n - index - 1;
        int ans = -1;
        while(low <= high)
        {
            int mid = low + (high - low) / 2;
            //=====================================================
            long  leftSum = getSum(leftCount, mid - 1);
            long  rightSum = getSum(rightCount, mid - 1);
            long  totalSum = leftSum + mid + rightSum;
            //=======================================================
            if (totalSum > maxSum)
                high = mid - 1;
            else { ans = mid; low = mid + 1; }
        }
        return ans; 
    }
};

```