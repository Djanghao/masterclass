# Finding Consecutive Characters using Dart 🐐 Programming language.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/5939983/](https://leetcode.com/problems/consecutive-characters/solutions/5939983/)

---

# Code
```dart []
class Solution {
int maxPower(String s) {

  List<int> list = [];
  for(int i = 0; i < s.length; i++){
    int count = 0;
    for(int j = i; j < s.length; j++){
      if(s[i] == s[j]){
        count++;
        if(j == s.length-1){
          list.add(count);
        }
      }else{
        list.add(count);
        i = j-1;
        break;
      }
    }
  }

  list.sort((a, b) => a.compareTo(b));

  return list.last;
}
}
```