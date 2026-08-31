# Beats 100% | C#

**Author:** user6825MU
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/6112862/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/6112862/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```csharp []
public class Solution {
    public enum Sign{LT, GT, EQ, NONE}
    
    public int MaxTurbulenceSize(int[] arr) {
        int maxSize=0, tempCount=0, n=arr.Length;
        Sign sign = Sign.NONE;

        if(n==1) return 1;

        for(int i=0;i<n-1;i++){
            if(arr[i]>arr[i+1]){
                if(sign==Sign.NONE || sign==Sign.LT) tempCount++;
                else if(sign==Sign.GT || i==n-2){
                    if(tempCount+1>maxSize) maxSize=tempCount+1;
                    tempCount=1;
                } else
                    tempCount++;
                sign=Sign.GT;
            } else if(arr[i]<arr[i+1]){
                if(sign==Sign.NONE || sign==Sign.GT) tempCount++;
                else if(sign==Sign.LT || i==n-2){
                    if(tempCount+1>maxSize) maxSize=tempCount+1;
                    tempCount=1;
                } else
                    tempCount++;
                sign=Sign.LT;
            } else {
                if(tempCount+1>maxSize) maxSize=tempCount+1;
                sign=Sign.EQ;
                tempCount=0;
            }
        }
        if(tempCount+1>maxSize) maxSize=tempCount+1;
        return maxSize;
    }
}
```