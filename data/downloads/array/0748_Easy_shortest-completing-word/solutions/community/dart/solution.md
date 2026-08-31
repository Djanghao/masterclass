# Simple Solution

**Author:** dslmnvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/4007188/](https://leetcode.com/problems/shortest-completing-word/solutions/4007188/)

---



# Code
```
class Solution {
  String shortestCompletingWord(String licensePlate, List<String> words) {
   List<String> license = stringToList( licensePlate.replaceAll(RegExp(r"[0-9]|\\s+"), '')
       .toLowerCase());


    List<String> result = List.generate(words.length, (index) => words[index]);

    for (int i = 0; i < words.length; i++) {
      List<String> tempWord = stringToList(words[i]);

      String initialWord = words[i];

      for (int j = 0; j < license.length; j++) {
        if (tempWord.contains(license[j])) {

          tempWord.remove(license[j]);

        } else {

          result.remove(initialWord);
          break;
        }
      }
    }

    if(result.length == 1){
      return result.first;
    }else{

      String value = result.first;
      for(String word in result){
        if(word.length < value.length){
          value = word;
        }
      }
      return value;
    }


  }


  List<String> stringToList(String value){

    List<String> result = [];

    for(int i = 0; i < value.length; i++){

      result.add(value[i]);

    }

    return result;

  }
}
```