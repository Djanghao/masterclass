# Counting Character Changes in a String in Dart

**Author:** akhilsnediyathu
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/5678687/](https://leetcode.com/problems/number-of-changing-keys/solutions/5678687/)

---

# Intuition
The problem requires counting how many times the character changes as we traverse the string. The first thought is to iterate through the string and compare each character with the previous one. If they differ, it means there's a change in characters, so we increase the count.

# Approach
1. Convert the string to uppercase to ensure the comparison is case-insensitive.
2. Initialize a counter `count` to zero.
3. Iterate through the string starting from the second character.
4. For each character, compare it with the previous one:
   - If they differ, increment the `count`.
5. Return the `count` as the result.

# Complexity
- Time complexity:  
  O(n), where n is the length of the string. We traverse the string once.

- Space complexity:  
  O(1), as no additional space is required apart from a few variables.

# Code
```dart []
class Solution {
  int countKeyChanges(String s) {
    int count = 0;
    s= s.toUpperCase();
    if(s.length !=1){
  for(int i = 1; i <s.length;i ++){
    if(s[i]!=s[i-1]){
        count ++;
    }
  }
    }
    return count;
  }
}
```