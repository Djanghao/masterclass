# My Dart Solution

**Author:** ttzein6
**Votes:** 0
**Link:** [https://leetcode.com/problems/text-justification/solutions/5782039/](https://leetcode.com/problems/text-justification/solutions/5782039/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. first step is to combine strings that have length <=16 and by taking into condidartion to have at least 1 space between words
        
```
        int currentRowIndex = 0;
        for (int i = 0; i < words.length; i++) {
            var currentWord = words[i];
            if (result.length <= currentRowIndex) {
            result.add(currentWord);
            } else if ((result[currentRowIndex].length + currentWord.length + 1) <=
                maxWidth) {
            result[currentRowIndex] += ' $currentWord';
            } else {
            currentRowIndex++;
            result.add(currentWord);
            }
        }
```
2. Then i created a function that justifies each String in the list (each line or row)
    In this function on each iteration i calculate the remaining spaces available to achieve a width of 16 chars.
then i calculate the spaces i want to add after the current string (ceilSpaces) here i take always ceil value (for example 1.2 returns 2)

   ``` 
     String justifyCurrentString(String string, int maxWidth, bool forceAddAtEnd) {
        if (string.contains(' ') == false || forceAddAtEnd) {
            return "$string${' ' * (maxWidth - string.length)}";
        }
        List<String> splittedStrings = string.split(' ');
        int remainingSpaces = (maxWidth - splittedStrings.join().length);

        String newString = '';
        for (var i = 0; i < splittedStrings.length; i++) {
            
            remainingSpaces = maxWidth -
                newString.length -
                splittedStrings.getRange(i, splittedStrings.length).join().length;

            int ceilSpaces;
            if (remainingSpaces == 0) {
            ceilSpaces = 0;
            } else {
            ceilSpaces = (remainingSpaces /
                    (splittedStrings.getRange(i, splittedStrings.length).length - 1))
                .ceil();
            }

            newString += splittedStrings[i] + (' ' * ceilSpaces);
        }

        return newString;
    }```

3. Last step is to call the function we created 
``` 
for (int i = 0; i < result.length; i++) {
            String currentString = result[i];
            result[i] =
                justifyCurrentString(currentString, maxWidth, i == result.length - 1);
        }
```


# Code
```dart []
class Solution {
  List<String> fullJustify(List<String> words, int maxWidth) {
        List<String> result = [];

        int currentRowIndex = 0;
        for (int i = 0; i < words.length; i++) {
            var currentWord = words[i];
            if (result.length <= currentRowIndex) {
            result.add(currentWord);
            } else if ((result[currentRowIndex].length + currentWord.length + 1) <=
                maxWidth) {
            result[currentRowIndex] += ' $currentWord';
            } else {
            currentRowIndex++;
            result.add(currentWord);
            }
        }
        for (int i = 0; i < result.length; i++) {
            String currentString = result[i];
            result[i] =
                justifyCurrentString(currentString, maxWidth, i == result.length - 1);
        }
        return result;
    }

    String justifyCurrentString(String string, int maxWidth, bool forceAddAtEnd) {
        if (string.contains(' ') == false || forceAddAtEnd) {
            return "$string${' ' * (maxWidth - string.length)}";
        }
        List<String> splittedStrings = string.split(' ');
        int remainingSpaces = (maxWidth - splittedStrings.join().length);

        String newString = '';
        for (var i = 0; i < splittedStrings.length; i++) {
            
            remainingSpaces = maxWidth -
                newString.length -
                splittedStrings.getRange(i, splittedStrings.length).join().length;

            int ceilSpaces;
            if (remainingSpaces == 0) {
            ceilSpaces = 0;
            } else {
            ceilSpaces = (remainingSpaces /
                    (splittedStrings.getRange(i, splittedStrings.length).length - 1))
                .ceil();
            }

            newString += splittedStrings[i] + (' ' * ceilSpaces);
        }

        return newString;
    }
}
```


