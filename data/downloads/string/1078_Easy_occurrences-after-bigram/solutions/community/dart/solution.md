# Dart solution that beats 100% of users

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/4881758/](https://leetcode.com/problems/occurrences-after-bigram/solutions/4881758/)

---



# Code
```
class Solution {
  List<String> findOcurrences(String text, String first, String second) {
    List<String> stringList=text.split(" ");
    List<String>result=[];
    for(int i=0;i<stringList.length-2;i++){
  if(stringList[i]== first && stringList[i+1]==second){
    result.add(stringList[i+2]);
  }
    }
    return result;
  }
}
```