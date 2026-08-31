# Easy Dart Solution

**Author:** tashtanov333
**Votes:** 0
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/3534906/](https://leetcode.com/problems/rabbits-in-forest/solutions/3534906/)

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
  int numRabbits(List<int> answers) {
      Map <int, int> map={};
        int sum=0;
      for(int i=0;i<answers.length;i++){
         if(answers[i]==0){ sum++;}
         else{
             map[answers[i]]=(map[answers[i]]??0)+1;
         }
        
      }
      print(sum);
      
      for(var s in map.keys){      
          if(s+1>=map[s]!){
              sum+=s+1;
          } 
          else{
              int su=((map[s]!)/(s+1)).ceil();
              sum+=(su*s)+su;
          } 
      }
      return sum;
  }
}
```