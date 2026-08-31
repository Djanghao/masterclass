# Java Solution in O(n) time complexity

**Author:** akshatmathur23
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/1809390/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/1809390/)

---

```
class Solution {
    public int maxAbsValExpr(int[] arr1, int[] arr2) {
        if(arr1.length != arr2.length)
            return 0;
        int max1 = Integer.MIN_VALUE;
        int max2 = Integer.MIN_VALUE;
        int max3 = Integer.MIN_VALUE;
        int max4 = Integer.MIN_VALUE;
        int min1 = Integer.MAX_VALUE;
        int min2 = Integer.MAX_VALUE;
        int min3 = Integer.MAX_VALUE;
        int min4 = Integer.MAX_VALUE;
        for(int i = 0 ; i < arr1.length; i++) {
            max1 = Math.max(arr1[i] + arr2[i] + i, max1);
            min1 = Math.min(arr1[i] + arr2[i] + i, min1);
            max2 = Math.max(i - arr1[i] - arr2[i], max2);
            min2 = Math.min(i - arr1[i] - arr2[i], min2);
            max3 = Math.max(arr1[i] - arr2[i] + i, max3);
            min3 = Math.min(arr1[i] - arr2[i] + i, min3);
            max4 = Math.max(arr2[i] - arr1[i] + i, max4);
            min4 = Math.min(arr2[i] - arr1[i] + i, min4);
        }
        return Math.max(Math.max(max1 - min1, max2 - min2),Math.max(max3 - min3, max4 - min4));   
    }
}
```
Guy's if you find this solution helpful \uD83D\uDE0A, PLEASE do UPVOTE.