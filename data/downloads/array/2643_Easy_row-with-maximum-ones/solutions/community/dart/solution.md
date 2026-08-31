# easy

**Author:** ANSINA_ROSE_ISMAYEEL
**Votes:** 0
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/5077988/](https://leetcode.com/problems/row-with-maximum-ones/solutions/5077988/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> rowAndMaximumOnes(List<List<int>> mat) {
  List<int> result =[];
  int position=0;
  int counts =0;

  for(int i=0;i<mat.length;i++){
    int count =0;
    for(int j=0; j<mat[0].length; j++){
      if(mat[i][j] == 1){
        count ++;
      }
      
    }
    if(count>counts){
        counts = count;
        position = i;
      }
  }
  return result =[position,counts];
  }
}
```