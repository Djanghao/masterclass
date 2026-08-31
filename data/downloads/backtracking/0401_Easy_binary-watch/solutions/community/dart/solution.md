# Fast and easy solution with explanation (beats 100%)

**Author:** user6770yv
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-watch/solutions/5362062/](https://leetcode.com/problems/binary-watch/solutions/5362062/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The binary watch problem can be thought of as turning on a certain number of LEDs on a watch to display time. Each hour (0-11) and minute (0-59) can be represented in binary form. The problem is to find all possible combinations of hours and minutes such that the total number of LEDs that are on equals the given number.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Loop through all possible hours and minutes:

    - The hours range from 0 to 11.
    - The minutes range from 0 to 59.
1. Count the number of 1s (LEDs that are on) in the binary representation of each hour and minute:

    - Combine the binary representations of the hour and minute.
    - Count the number of 1s in this combined binary string.
1. Check if the total number of 1s matches the given number of turned on LEDs:

    - If it matches, format the time as a string and add it to the result list.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The solution involves iterating through all combinations of hours (12) and minutes (60). Thus, the time complexity is O(12\xD760)=O(720), which is effectively constant time O(1) because these values are fixed and small.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) for the variables used in the loops and O(k) for the output list where k is the number of valid times found.
# Code
```
class Solution {
  List<String> readBinaryWatch(int turnedOn) {
    List<String> res = [];
    for(int hour = 0; hour < 12; hour++) {
        for(int min = 0; min < 60; min++) {
            String temp = hour.toRadixString(2) + min.toRadixString(2);
            int count = 0;
            for(int i = 0; i < temp.length; i++) {
                if(temp[i] == '1')
                    count++;
            }
            if(count == turnedOn) {
                res.add('$hour:${min.toString().padLeft(2, '0')}');
            }
        }
    }
    return res;
  }
}
```