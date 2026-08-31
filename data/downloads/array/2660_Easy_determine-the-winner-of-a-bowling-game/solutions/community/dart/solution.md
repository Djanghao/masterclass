# Finding the Winner of a Bowling Game using Dart GOAT 🐐 Programming Language.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/5900115/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/5900115/)

---

# Code
```dart []
class Solution {
int isWinner(List<int> player1, List<int> player2) {

  int sumP1 = 0;
  int sumP2 = 0;
  List<int> index1 = [];
  List<int> index2 = [];

  for(int i = 0; i < player1.length; i++){
    if(player1[i] == 10){
      if(i+1 < player1.length && i+2 < player1.length){
        if(!index1.contains(i+1) && !index1.contains(i+2)){
          index1.addAll([i+1, i+2]);
        }else if(!index1.contains(i+1) && index1.contains(i+2)){
          index1.addAll([i+1]);
        }else if(index1.contains(i+1) && !index1.contains(i+2)){
          index1.addAll([i+2]);
        }
      }else if(i+1 < player1.length){
        if(!index1.contains(i+1)){
          index1.addAll([i+1]);
        }
      }
    }
  }

  for(int i = 0; i < player2.length; i++){
    if(player2[i] == 10){
      if(i+1 < player2.length && i+2 < player2.length){
        if(!index2.contains(i+1) && !index2.contains(i+2)){
          index2.addAll([i+1, i+2]);
        }else if(!index2.contains(i+1) && index2.contains(i+2)){
          index2.addAll([i+1]);
        }else if(index2.contains(i+1) && !index2.contains(i+2)){
          index2.addAll([i+2]);
        }
      }else if(i+1 < player2.length){
        if(!index2.contains(i+1)){
          index2.addAll([i+1]);
        }
      }
    }
  }

  for(int i = 0; i < index1.length; i++){
    player1.replaceRange(index1[i], index1[i]+1, [player1[index1[i]] * 2]);
  }

  for(int i = 0; i < index2.length; i++){
      player2.replaceRange(index2[i], index2[i]+1, [player2[index2[i]] * 2]);
  }

  for(int i = 0; i < player1.length; i++){
    sumP1+=player1[i];
  }

  for(int i = 0; i < player2.length; i++){
    sumP2+=player2[i];
  }

  print(player1);

  if(sumP1 > sumP2){
    return 1;
  }else if(sumP2 > sumP1){
    return 2;
  }

  return 0;
}
}
```