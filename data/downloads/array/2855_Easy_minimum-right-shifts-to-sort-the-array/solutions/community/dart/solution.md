# Finding Minimum Right Shifts to Sort the Array using Dart GOAT language 🐐.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/5562692/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/5562692/)

---

# Intuition
- In this task the most import thing to consider is to check the orders of the elements to compare and match them in order to find the monimum shift. Here is how:

# Approach
1. In this task first we create a new list wich will be clone of list that was given as argument.
2. After that we sort the cloned list and the reason for that is to compare in further actions.
3. After that first have to check wether given argument is already good to go or should we continue. The for loop() will be used there to check and we compare sorted clone list with given argument list if it matches 0 asnwer will be returned else we continue our actions.
4. The next thing to do is to create a variable in order to calculate the minimum sum of right shifts, we add 1 to that variable in each iteration.
5. After that we use another for loop(). In the loop we take the last element and the first element of the argument list, the last element will be removed and we use replaceRange() method to replace the value that placed in the beginning. In 0 position we put 2 values that we took earlier.|Do not forget that in each iteration we have to add 1 to variable that we created in 4th step.
6. After each iteration there will be another foor loop to check if the sorted clone list is matches with the list that we replaced the elements of it.
7. If it matches we return value of variable that was created in 4th step else -1 will be returned.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int minimumRightShifts(List<int> nums) {


  List<int> newList = [];
  for(int elem in nums){
    newList.add(elem);
  }

  newList.sort((a, b) => a.compareTo(b));

  int count = 0;
  for(int i = 0; i < nums.length; i++){
    if(nums[i] == newList[i]){
      count++;
    }
  }

  if(count == nums.length){
    return 0;
  }else{

    int countOperation = 0;

    for(int i = 0; i < nums.length; i++){

      countOperation++;

      int number = nums.last;
      int number2 = nums.first;
      nums.removeAt(nums.length-1);
      nums.replaceRange(0, 1, [number, number2]);
      print(nums);

      int count2 = 0;
      for(int j = 0; j < nums.length; j++){
        if(nums[j] == newList[j]){
          count2++;
        }
      }

      if(count2 == nums.length){
        return countOperation;
      }
    }
  }


  return -1;
}
}
```