# Dart Solution

**Author:** Coaspe
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-addition/solutions/2949442/](https://leetcode.com/problems/range-addition/solutions/2949442/)

---

# Code
```
class Solution {
  List<int> getModifiedArray(int length, List<List<int>> updates) {
      List<int> answer = List.filled(length, 0);

      for (var q in updates){
        answer[q[0]] += q[2];
        if(q[1] + 1 < length){
          answer[q[1]+1] -= q[2];
        }
      }

      for (var i = 1; i < length; i++){
        answer[i] += answer[i-1];
      }
      return answer;
  }
}
```