# Dart 100% 🔥🚀✅

**Author:** Mahmoud_Zakaria
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2994904/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2994904/)

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
  int minimumRounds(List<int> tasks) {
      Map<int, int> freq = {} ;
        int cont=0 ;
        for(int t in tasks)freq[t]=(freq[t] ?? 0) + 1;
        for(int it in freq.values){
            if(it == 1)return -1;
            if(it%3 == 0)cont += it~/3;
            else cont += it~/3+1 ;
        }
        return cont ;
  }
}
```


Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)