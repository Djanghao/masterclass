# Dart 100% 🔥🚀✅

**Author:** Mahmoud_Zakaria
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-town-judge/solutions/3089026/](https://leetcode.com/problems/find-the-town-judge/solutions/3089026/)

---


If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int findJudge(int n, List<List<int>> trust) {
      List<int> count = List<int>.filled(n+1,0);

      for(List<int> i in trust){
          count[i[0]]--;
          count[i[1]]++;
      }
      for(int i=1; i<n+1; i++){
          if(count[i]== n-1)return i ;
      }
      return -1;
  }
}
```



Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)