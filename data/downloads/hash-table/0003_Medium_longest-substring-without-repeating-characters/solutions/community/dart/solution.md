# Top 1% solution (Dart)

**Author:** ahmedamr989dyhdhdhd
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/3224033/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/3224033/)

---

# Intuition
My initial thoughts on how to solve this problem are:

We can use a sliding window approach, where we keep track of the current substring using two pointers, left and right.
We can use a Set to keep track of the characters in the current substring.
We can iterate through the string using a for loop, and at each step, check if the character at the current index is already in the Set.
If it is, we need to remove the characters from the Set until we remove the character that is equal to the current character. This will give us a new substring that starts at the index immediately after the index of the repeated character.
We update the maximum length of the substring seen so far, and continue iterating through the string.
Finally, we return the maximum length of the substring.
# Approach
Initialize an empty set called letters and variables right and maxSubString to 0.

Loop through the string s using a for loop with index i.

Inside the loop, use a while loop to remove the first character from letters until it no longer contains the current character at index i.

Add the current character at index i to the letters set.

If the length of letters is greater than maxSubString, update maxSubString to the current length of letters.

Return maxSubString at the end of the loop.

Finally, the maximum substring length is returned.
# Complexity
- Time complexity:
 The space complexity of the  script is O(n).

- Space complexity:
The space complexity of the  script is O(k)
# Code
```
class Solution {
  int lengthOfLongestSubstring(String s) {
    var input = s;
    Set<String> letters = {};
    int maxSubString = 0;
    for (var i = 0; i < input.length; i++) {

      while (letters.contains(input[i])) {
        letters.remove(letters.first);
      }
      letters.add(input[i]);
      if (letters.length > maxSubString) {
        maxSubString = letters.length;
      }
    }
    print('$letters, ${maxSubString}');
    return maxSubString;
  
}}
```