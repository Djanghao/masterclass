# Dart Solution

**Author:** kamran8545
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solutions/6023905/](https://leetcode.com/problems/find-the-original-typed-string-i/solutions/6023905/)

---

# Intuition
Itterate through the given string. comapre the current alphabet with previous one if the alphabet matches, It means alphabets repeats it self and Alice might have typed it mistakenly.


# Complexity
- Time complexity => O(n)
- Space complexity => O(1)


# Code
```dart []

class Solution {
  int possibleStringCount(String word) {
    int totalCount = 1;
    for(int index = 1; index < word.length; index++){
        if(word[index -1] == word[index]){
            totalCount++;
        }
    }
    return totalCount;
  }
}
```