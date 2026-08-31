# DART Solution simple Idea

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4492117/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4492117/)

---


# Code
```
class Solution {
  List<List<int>> findMatrix(List<int> nums) {
      List<List<int>> ans=[];
      bool added;
      nums.forEach((n){
          added=false;
          for(int i=0;i<ans.length;i++){
              if(!ans[i].contains(n)){
                  ans[i].add(n);
                  added=true;
                  break;
              }
          }
          if(added==false){
              ans.add([n]);
          }
      });
      return ans;
  }
}
```