# Java, counting, no map, array, O(1) space, beats 100%, explained

**Author:** gthor10
**Votes:** 18
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/564225/](https://leetcode.com/problems/count-largest-group/solutions/564225/)

---

Count sum of digits for every number separately. Keep current max freq count and number of such groups, so we don't need to do a second pass after counting is finished.

Catch is - we know possible values of sum beforehead - as per statement n <= 10_000, os the number with max sum of digits is 9_999 => 36. Its a pretty limited number and array can be used to track those sums effectively. 

O(N) time - iterate over array element once. 
O(1) space - few state vars, array for sums is of a fixed size.

```
 public int countLargestGroup(int n) {
    int[] map = new int[37];
    int maxCount = 0, res = 0;
    for (int i = 1; i <= n; i++) {
      //get the sum of digits for current number
      int num = i, sum = 0;
      while (num > 0) {
        sum += num %10;
        num/=10;
      }
      //increment freq counter
      ++map[sum];
      //check if this is our new max = start counting from 1, if it next occurance of current max
      //increment count
      if (maxCount < map[sum]) {
        maxCount = map[sum];
        res = 1;
      } else if (maxCount == map[sum]) {
        res++;
      }
    }
    return res;
  }
```