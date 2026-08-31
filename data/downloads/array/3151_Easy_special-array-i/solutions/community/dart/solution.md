# Identifiying if given Array is Special Array using Dart GOAT 🐐 programming language.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-i/solutions/5902792/](https://leetcode.com/problems/special-array-i/solutions/5902792/)

---

# Intuition
- **To solve that problem all we need to do is to make list of pairs using given argument list and check wheather the lists contains two numbers with different parity. Here is how I did it:**

# Approach
1. First of all, I created an empty nested list which I used to store list of pairs.
2. After that, I used for loop to iterate through the argument list and in each iteration I added iterated value and it pair next to it as list to the nested list which I created in the first step.
3. After that I used another loop to iterate through the nested list that contains pairs and in each iteratation I checked if iterated lists contains two numbers with different parity. If it doesn't contains then I returned else I keeps going.
4. After the checking the nested list it was ready to return true because there were no any issues during the checking.

# Code
```dart []
class Solution {
  bool isArraySpecial(List<int> nums) {
  List<List<int>> list = [];
  for(int i = 0; i < nums.length-1; i++){
    list.add([nums[i], nums[i+1]]);
  }

  for(var elem in list){
    if(elem.first % 2 == 0 && elem.last % 2 == 0 || elem.first % 2 != 0 && elem.last % 2 != 0){
      return false;
    }
  }

  return true;
}
}
```