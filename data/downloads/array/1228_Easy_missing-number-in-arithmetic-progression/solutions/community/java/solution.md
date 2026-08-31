# Simple Java Solution(Beats 100%)

**Author:** coderInUS
**Votes:** 4
**Link:** [https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/998671/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/998671/)

---

```
class Solution {
    public int missingNumber(int[] arr) {
        int a=arr[0];
        int n=arr.length+1;
        int d=0;
        if(arr[1]-arr[0]>0)
            d=Math.min(arr[1]-arr[0],arr[arr.length-1]-arr[arr.length-2]);
        else
            d=Math.max(arr[1]-arr[0],arr[arr.length-1]-arr[arr.length-2]);


        for(int i=1;i<arr.length;i++){
            if(arr[i]!=arr[i-1]+d){
                return arr[i-1]+d;
            }
        }
        return arr[0];        
    }
}
```