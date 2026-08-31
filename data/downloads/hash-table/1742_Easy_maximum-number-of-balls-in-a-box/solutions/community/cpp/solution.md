# с++(0ms 100%) without calculating sum for EACH number (with comments)

**Author:** ZX007PI
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1168342/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1168342/)

---

Runtime: 0 ms, faster than 100.00% of C++ online submissions for Maximum Number of Balls in a Box.
Memory Usage: 5.9 MB, less than 89.76% of C++ online submissions for Maximum Number of Balls in a Box.
**General idea**
1. maximal number of boxes is 46 (minimum for ball with number 0 - sum of digits is equal 0 and maximum for ball with number 99999 - sum of digits is equal 45)
2. first of all calculate sum of lowLimit`s digits and put all digits of lowLimit in array digits
3. after this organaze cycle from lowLimit to highLimit and for each iteration will increase box with index that is equal sum and for the same time will increase last digit in array digits and increase sum . if last digit will be equal 10 transform digits in array and recalculate sum.

**Noteworth**
I recalculate sum for each ten numbers and recalculate only digits that is equal ten. But this idea would be improved and for hundreds and for thousands. But it will be not EASY task. But it possible. 
```
class Solution {
public:
  int countBalls(int lowLimit, int highLimit) {
    int table[46] = {0}, digits[6], k = lowLimit, sum = 0, answer = 0;
    
    for(int i = 5; i >= 0; i--, k /= 10)                           //calculate sum for lowLimit and fetch all digits 
      {digits[i] = k % 10; sum += digits[i];}
    
    while(lowLimit <= highLimit){
      while(lowLimit <= highLimit && digits[5] != 10)              //increasing for number for boxes
        table[sum++]++, digits[5]++, lowLimit++;
      
      for(int i = 5; i >= 0 && digits[i] == 10;i--)                //transform digits and recalculate sum
        digits[i] = 0, digits[i-1]++, sum -= 9;
    }
    
    for(int i = 0; i != 46; i++) answer = max(answer, table[i]);
    
    return answer;
  }
};
```