# 99.42% runtime & 97.66% memory Beats. With explanation.

**Author:** Lainaaa
**Votes:** 8
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/3375471/](https://leetcode.com/problems/length-of-last-word/solutions/3375471/)

---

# Intuition
This code is written to find the length of the last word in a given string. The intuition behind this code is to start from the end of the string and count the number of characters in the last word until a space is encountered.


# Approach
The approach taken in this code is to first initialize an index variable to the length of the string minus one. Then, the code enters a while loop that checks if the character at the current index is a space. If it is, the index is decremented by 1 until a non-space character is encountered.

After this, another while loop is entered that checks if the character at the current index is a space or not. If it is not a space, the count variable is incremented. If it is a space or the index becomes 0, the loop is broken and the count is returned.



# Complexity
- Time complexity O(n):
The time complexity of this code is O(n) where n is the length of the string. This is because the code iterates through the string twice, once to find the last non-space character and then to count the length of the last word.


- Space complexity O(1):
The space complexity of this code is O(1) because the only extra space used is for two integer variables, index and count.


# Code
```
class Solution {
  int lengthOfLastWord(String s) {
    // Initialize the index variable to the last index of the string
    int index = s.length - 1;
    // Loop through any trailing spaces at the end of the string
    while (s[index] == " "){
      index--;
    }
    // Initialize the count variable to 0
    int count = 0;
    // Loop through the last word in the string
    while(s[index] != " "){
      // Increment the count variable for each character in the last word
      count++;
      // Check if the previous character was a space or if we have reached the beginning of the string
      if (s[index] == " " || index == 0){
        // Break out of the loop if the previous character was a space or if we have reached the beginning of the string
        break;
      } 
      // Move the index to the previous character in the string
      index--;
    }
    // Return the count variable which contains the length of the last word in the string
    return count;
  }
}
```