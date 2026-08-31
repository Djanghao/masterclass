# Finding Number of Distinct Averages using Dart GOAT language 🐐.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/5643653/](https://leetcode.com/problems/number-of-distinct-averages/solutions/5643653/)

---

# Intuition
- **Solving that problem will be straightforward if we know how to use sort() method. So I used that sort() method to find the smallest and the gratest number from the list.**

# Approach
1. First I created a new List variable to store distinct averages.
2. After that used while() loop. The loop will work until there are no any values left. Inside the loop I sorted the loop and created another variable to store calculation of average number from the sorted list where I took the smallest and the greatest value, then stored sum of those values to the calculation variable by dividing by 2.
3. After that I checked if the list that I created in the first step where I stored the distinct values, contains the value of that calculated varaible. If it doesn't contains then I added else just ignored and kept going.
4. After checking using if else I removed the smallest and the gratest values from the list.
5. At last the while loop stops, I returned the length of the list that I stored the distinct values.

# Code
```
class Solution {
 int distinctAverages(List<int> nums) {

  List<num> list = [];

  while(nums.isNotEmpty){

    nums.sort((a, b) => a.compareTo(b));
    double calc = 0;
    calc = (nums.first + nums.last) / 2;

    if(!list.contains(calc)){
      list.add(calc);
    }

    nums.remove(nums.first);
    nums.remove(nums.last);
  }

  return list.length;
}
}
```