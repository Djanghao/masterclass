# Finding Number of Equivalent Domino Pairs using Dart GOAT language.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/5855060/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/5855060/)

---

# Intuition
- **To solve that problem all we need to do is iterating the argument nested list and check if iterated value can be equivalent by following the description.**

# Approach
1. First, I created a variable that contains integer. I used this to keep track of number of equivalent pairs.
2. After that, I used a nested for() loop and checked in each iteration if iterated values can be equal using if statement. If the values can be equal then, I added 1 to the variable that was created in the first step.
3. At last, I returned the value of the variable that was used to count equivalent pairs.

# Code
```dart []
class Solution {
  int numEquivDominoPairs(List<List<int>> dominoes) {
  int count = 0;
  for(int i = 0; i < dominoes.length-1; i++){
    for(int j = i+1; j < dominoes.length; j++){
      if(dominoes[i][0] == dominoes[j][0] && dominoes[i][1] == dominoes[j][1] || dominoes[i][0] == dominoes[j][1] && dominoes[i][1] == dominoes[j][0]){
        count++;
      }
    }
  }
  return count;
}
}
```