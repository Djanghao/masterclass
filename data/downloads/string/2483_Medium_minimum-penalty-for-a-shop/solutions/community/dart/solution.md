# Simple Approach. Simple solution

**Author:** arpitawasthi5724
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3976580/](https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3976580/)

---

# Intuition
Problem is easy if you once understand this. For every occurence of N, hour is wasted and Y represents there is customer in shop thus it is good and hour is useful. Shop is closed after end of an hour.

# Approach
For every Y = +1
For every N = -1
Do this for every char in string and find the value corresponding to each index. We are interested in largest value possible. That index + 1 is our ans

# Code
```
class Solution {
  int bestClosingTime(String customers) {

      List<int> list = [customers[0] == 'Y' ? 1 : -1];

      for(int i=1; i<customers.length; i++){

          if(customers[i] == 'Y'){
              list.add(list[list.length - 1] + 1);
          } else {
              list.add(list[list.length - 1] - 1);
          }

      }

      var largest = 0;
      var hour = 0;
      for(int i=0; i<list.length; i++){

          if(list[i] < 0) continue;

          if(list[i]>largest){
              largest = list[i];
              hour = i+1;
          }
      }

      return hour;
  }
}
```