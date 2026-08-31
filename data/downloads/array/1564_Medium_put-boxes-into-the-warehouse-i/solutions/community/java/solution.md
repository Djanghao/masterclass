# brute force

**Author:** weill82
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/4168929/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/4168929/)

---



# Code
```
class Solution {
    public int maxBoxesInWarehouse(int[] boxes, int[] warehouse) {
        int m=boxes.length, n=warehouse.length;    
        Arrays.sort(boxes);
        int res=0;
        for(int i=m-1,j=0; i>=0 && j<n; i--){
            if(boxes[i]<=warehouse[j]){
                res++;
                j++;
            }
        }
        return res;
    }
}
```