# Dart Solution

**Author:** tashtanov333
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/3548680/](https://leetcode.com/problems/stone-game-vi/solutions/3548680/)

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
  int stoneGameVI(List<int> aliceValues, List<int> bobValues) {
      int bob=0,alice=0;
      List<int> stoneIndices=List.generate(aliceValues.length,(index)=>index);
      stoneIndices.sort((a,b)=>(aliceValues[b]+bobValues[b]).compareTo(aliceValues[a]+bobValues[a]));
      for(int i=0;i<stoneIndices.length;i++){
          var index=stoneIndices[i];
          if(i%2==0){
              alice+=aliceValues[index];
          }
          else{
              bob+=bobValues[index];
          }
      }

      return bob>alice?-1:bob<alice?1:0;
  }
}
```