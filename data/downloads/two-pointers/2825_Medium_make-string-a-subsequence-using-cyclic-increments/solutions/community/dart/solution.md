# 100% Beat💪 || C++ || Java || Python || C# || Swift || JavaScript || Dart || Easy to Understand🫶

**Author:** ADITYAGABA1322
**Votes:** 12
**Link:** [https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/3935827/](https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/3935827/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The intuition behind this code lies in the idea of transforming characters in one string to match characters in another string, effectively determining if the second string can be formed as a subsequence of the first string through specific transformations.

- Character Matching: The code aims to compare characters from both strings and checks for conditions under which a character from the second string can be matched to a character in the first string or transformed to match it.

- Increment and Decrement Transformations: The code handles three scenarios for character transformation: exact matching, matching with an incremented ASCII value, and matching with a decremented ASCII value. These transformations capture different possibilities for how characters in the second string can relate to characters in the first string.

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialization: The code initializes two pointers i and j to keep track of the current positions in the strings str1 and str2, respectively. It also calculates the lengths of both strings and stores them in variables n and m.
2. Looping Through Strings: The code enters a while loop that iterates as long as there are characters left to be compared in both str1 and str2 (i.e., i is less than n and j is less than m).
3. Character Comparison and Transformation: Inside the loop, the code performs three types of comparisons between characters of str1 and str2:
- str1[i] == str2[j]: It checks if the current characters at positions i and j are the same.
- str1[i] + 1 == str2[j]: It checks if the ASCII value of the character at str1[i] incremented by 1 is equal to the character at str2[j].
- str1[i] - 25 == str2[j]: It checks if the ASCII value of the character at str1[i] decreased by 25 is equal to the character at str2[j].
- If any of these conditions are met, it means that the current character in str2 can be matched to a character in str1 after performing certain transformations (incrementing or decrementing the ASCII value). In this case, the code increments the j pointer to move to the next character in str2.
4. Pointer Advancement: After the comparison and possible transformation, the code increments the i pointer to move to the next character in str1.
Result Evaluation: After the loop, the code checks whether the j pointer has reached the end of str2 (i.e., j is equal to m). If it has, it means all characters in str2 were found as subsequences in str1 according to the specified transformations. The function returns true. Otherwise, it returns false.

---

# Complexity
- Time complexity: O(min(n, m))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

The time complexity of this code is primarily determined by the while loop that iterates through the characters of both str1 and str2. In the worst case scenario, where both strings are of length n and m, respectively, the loop will run min(n, m) times. Inside the loop, there are constant-time operations involving character comparisons and transformations.

Therefore, the overall time complexity is O(min(n, m)), where n is the length of str1 and m is the length of str2.

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

The space complexity of the code is determined by the usage of the integer variables i, j, n, and m, which occupy constant space. The usage of the strings str1 and str2 also contributes to the space complexity. However, since strings are passed by value in C++, the space occupied by these strings is not directly counted in the space complexity of the function.

Therefore, the space complexity of the code is O(1), constant space usage.

---
# Please Upvote \uD83E\uDEF6

---

# Code

```C++ []
class Solution {
public:
    bool canMakeSubsequence(std::string str1, std::string str2) {
        int i = 0; // variable to store the i
        int j = 0; // variable to store the j
        int n = str1.size(); // variable to store the size of the str1
        int m = str2.size(); // variable to store the size of the str2
        while(i<n && j<m){ // loop until i is less than n and j is less than m
            if(str1[i] == str2[j] || str1[i]+1 == str2[j] || str1[i] - 25 == str2[j]){  // if str1[i] is equal to str2[j] or str1[i]+1 is equal to str2[j] or str1[i] - 25 is equal to str2[j]
                j++; // increment the j
            }
            i++; // increment the i
        }
        return j == m; // return true if j is equal to m else return false
    }
};
```
```java []
class Solution {
    public boolean canMakeSubsequence(String str1, String str2) {
        int i = 0; // variable to store the i
        int j = 0; // variable to store the j
        int n = str1.length(); // variable to store the size of the str1
        int m = str2.length(); // variable to store the size of the str2
        while(i<n && j<m){ // loop until i is less than n and j is less than m
            if(str1.charAt(i) == str2.charAt(j) || str1.charAt(i)+1 == str2.charAt(j) || str1.charAt(i) - 25 == str2.charAt(j)){  // if str1[i] is equal to str2[j] or str1[i]+1 is equal to str2[j] or str1[i] - 25 is equal to str2[j]
                j++; // increment the j
            }
            i++; // increment the i
        }
        return j == m; // return true if j is equal to m else return false
    }
}
```
```python []
class Solution(object):
    def canMakeSubsequence(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: bool
        """
        i = 0 # variable to store the i
        j = 0 # variable to store the j
        n = len(str1) # variable to store the size of the str1
        m = len(str2) # variable to store the size of the str2
        while(i<n and j<m): # loop until i is less than n and j is less than m
              if str2[j] in {str1[i], chr(ord(str1[i]) + 1), chr(ord(str1[i]) - 25)}:  # if str1[i] is equal to str2[j] or str1[i]+1 is equal to str2[j] or str1[i] - 25 is equal to str2[j]
                j += 1 # increment the j
            i += 1 # increment the i
        return j == m # return true if j is equal to m else return false
```
```python3 []
class Solution:
    def canMakeSubsequence(self, str1: str, str2: str) -> bool:
        i = 0 # variable to store the i
        j = 0 # variable to store the j
        n = len(str1) # variable to store the size of the str1
        m = len(str2) # variable to store the size of the str2
        while(i<n and j<m): # loop until i is less than n and j is less than m
              if str2[j] in {str1[i], chr(ord(str1[i]) + 1), chr(ord(str1[i]) - 25)}:  # if str1[i] is equal to str2[j] or str1[i]+1 is equal to str2[j] or str1[i] - 25 is equal to str2[j]
                j += 1 # increment the j
            i += 1 # increment the i
        return j == m # return true if j is equal to m else return false
```
```c []
bool canMakeSubsequence(char * str1, char * str2){
    int i = 0; // variable to store the i
    int j = 0; // variable to store the j
    int n = strlen(str1); // variable to store the size of the str1
    int m = strlen(str2); // variable to store the size of the str2
    while(i<n && j<m){ // loop until i is less than n and j is less than m
        if(str1[i] == str2[j] || str1[i]+1 == str2[j] || str1[i] - 25 == str2[j]){  // if str1[i] is equal to str2[j] or str1[i]+1 is equal to str2[j] or str1[i] - 25 is equal to str2[j]
            j++; // increment the j
        }
        i++; // increment the i
    }
    return j == m; // return true if j is equal to m else return false
}

```
```c# []
public class Solution {
    public bool CanMakeSubsequence(string str1, string str2) {
        int i = 0; // variable to store the i
        int j = 0; // variable to store the j
        int n = str1.Length; // variable to store the size of the str1
        int m = str2.Length; // variable to store the size of the str2
        while(i<n && j<m){ // loop until i is less than n and j is less than m
            if(str1[i] == str2[j] || str1[i]+1 == str2[j] || str1[i] - 25 == str2[j]){  // if str1[i] is equal to str2[j] or str1[i]+1 is equal to str2[j] or str1[i] - 25 is equal to str2[j]
                j++; // increment the j
            }
            i++; // increment the i
        }
        return j == m; // return true if j is equal to m else return false
    }
}
```
```javascript []
var canMakeSubsequence = function(str1, str2) {
    let i = 0; // variable to store the i
    let j = 0; // variable to store the j
    let n = str1.length; // variable to store the size of the str1
    let m = str2.length; // variable to store the size of the str2
    while(i < n && j < m){ // loop until i is less than n and j is less than m
        if ((str2.charCodeAt(j) - str1.charCodeAt(i) + 26) % 26 <= 1) { 
            // If the absolute difference between the Unicode values is 0 or 1
            // str2.charCodeAt(j) and str1.charCodeAt(i): These are used to obtain the Unicode values of the characters at positions j in str2 and i in str1, respectively.
            // (str2.charCodeAt(j) - str1.charCodeAt(i) + 26) % 26: This part of the condition calculates the difference between the Unicode values of the two characters and ensures the result is non-negative by adding 26 (the number of letters in the English alphabet). This difference modulo 26 ensures that the result remains within the range of a single alphabet cycle.
            // <= 1: This checks whether the calculated difference is either 0 or 1. If the difference is 0, it means the characters are the same. If the difference is 1, it means the characters are consecutive in the alphabet.

            j++; // increment the j
        }
        i++; // increment the i
    }
    return j === m; // return true if j is equal to m else return false
};
```
```swift []
class Solution {
    func canMakeSubsequence(_ str1: String, _ str2: String) -> Bool {
        let str1Array = Array(str1) // Convert str1 to an array of characters
        let str2Array = Array(str2) // Convert str2 to an array of characters
        
        var i = 0 // variable to store the i
        var j = 0 // variable to store the j
        let n = str1Array.count // variable to store the size of the str1
        let m = str2Array.count // variable to store the size of the str2
        while(i<n && j<m){ // loop until i is less than n and j is less than m
            let char1 = str1Array[i] // variable to store the char1
            let char2 = str2Array[j] // variable to store the char2
            if char1 == char2 || char1.asciiValue! + 1 == char2.asciiValue! || char1.asciiValue! - 25 == char2.asciiValue!{  // if str1[i] is equal to str2[j] or str1[i]+1 is equal to str2[j] or str1[i] - 25 is equal to str2[j]
                j += 1 // increment the j
            }
            i += 1 // increment the i
        }
        return j == m // return true if j is equal to m else return false
    }
}

```
```Dart []
class Solution {
class Solution {
  bool canMakeSubsequence(String str1, String str2) {
    int i = 0; // variable to store the i
    int j = 0; // variable to store the j
    int n = str1.length; // variable to store the size of str1
    int m = str2.length; // variable to store the size of str2
    while (i < n && j < m) { // loop until i is less than n and j is less than m
      if (str1[i] == str2[j] || str1[i].codeUnitAt(0) + 1 == str2[j].codeUnitAt(0) || str1[i].codeUnitAt(0) - 25 == str2[j].codeUnitAt(0)) {
        // if str1[i] is equal to str2[j] or str1[i]+1 is equal to str2[j] or str1[i] - 25 is equal to str2[j]
        j++; // increment j
      }
      i++; // increment i
    }
    return j == m; // return true if j is equal to m else return false
  }
}

```