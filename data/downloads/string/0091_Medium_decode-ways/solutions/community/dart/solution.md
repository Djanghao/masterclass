# Simple Dart Solution O(n)

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/decode-ways/solutions/3566441/](https://leetcode.com/problems/decode-ways/solutions/3566441/)

---


# Approach
Start by initializing the memoization map which will be used to remember the values associated with certain lengths of the string s as the recursive function is called. For each call check to see if the length of s is 0 or 1 which are the base cases. If 0 then return 0 if 1 return 1. From there check to see if the first 2 indexes are less than or equal to the integer 26 if they are less that means we should create two branches one for each way of expressing the next letter. Continue on and each time a value is returned make sure to memoize it so we can achieve an O(n) time.
# Complexity
- Time complexity:
O(n)

# Code
```
class Solution {
  Map<int,int> memo = {};
  int numDecodings(String s) {
    if(memo[s.length] != null){
      return (memo[s.length] ?? 0);
    }
    if(s.length <= 1){
      if(s.length != 0){
        if(s[0] == '0'){
          return 0;
        }
      }
      return 1;
    }
    if(s[0] == '0'){
      return 0;
    }
    int return_val = 0;
    return_val += numDecodings(s.substring(1));
    String second = s.substring(0,2);
    if(int.parse(second) <= 26){
      return_val += numDecodings(s.substring(2));
    }
    memo[s.length] = return_val;
    return return_val;
  }
}
```