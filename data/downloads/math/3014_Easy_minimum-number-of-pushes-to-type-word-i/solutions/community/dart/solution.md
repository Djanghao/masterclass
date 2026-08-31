# simple dart solution

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/5483950/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/5483950/)

---



# Code
```
class Solution {
  int minimumPushes(String word) {
 
   int count=1;
   
   int ans=0;
   for(int i=1;i<=word.length;i++){
    ans+=count;
    if(  i%8==0){
        count++;
    }
    
   }
   return ans;
  }
}
```