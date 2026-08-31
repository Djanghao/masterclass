# Easy JAVA code || beats 100% java users

**Author:** rini03
**Votes:** 14
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5019686/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5019686/)

---

# Algorithm
1. Convert the string to a character array for easier manipulation
2. Handle the hour part (HH) - a)Check the first digit of the hour (timeArray[0]) ,If the second digit is between 0 and 1, set the first digit to 1, otherwise 0 b)Check the second digit of the hour (timeArray[1]),Set the second digit to 1 if the first digit is 1, otherwise set it to 9
3.  Handle the minute part (MM) - a)Set the first digit of the minute to 5 to maximize the time b)Set the second digit of the minute to 9 to maximize the time
4. Convert the character array back to a string and return it

# Complexity
- Time complexity:
constant time complexity - O(1)


# Code
```
class Solution {
    public String findLatestTime(String s) {
        char[] timeArray = s.toCharArray();
        
        if (timeArray[0] == '?') timeArray[0] = (timeArray[1] == '?' || timeArray[1] < '2') ? '1' : '0';
        
        if (timeArray[1] == '?') timeArray[1] = (timeArray[0] == '1') ? '1' : '9';
        
        if (timeArray[3] == '?') timeArray[3] = '5';
        
        if (timeArray[4] == '?') timeArray[4] = '9';
        
        return new String(timeArray);
    }
}
```
![leetbilli.jpg](./images/0.jpeg)
