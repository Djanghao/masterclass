# Java | Brute Force | Straightforward Solution

**Author:** Divyansh__26
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-good-triplets/solutions/2564564/](https://leetcode.com/problems/count-good-triplets/solutions/2564564/)

---

```
class Solution {
    public int countGoodTriplets(int[] arr, int a, int b, int c){
      int i,j,k,count=0;
      for(i=0;i<(arr.length)-2;i++){
        for(j=i+1;j<(arr.length)-1;j++){
          if(Math.abs(arr[i]-arr[j]) <=a){
            for(k=j+1;k<arr.length;k++){
             if(Math.abs(arr[j]-arr[k]) <=b && Math.abs(arr[i]-arr[k]) <=c)
                  count++;
            }
          }
        }
      }
      return count;
    }
}
```
Kindly upvote if you like the code.