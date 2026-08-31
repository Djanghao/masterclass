# 🟢🔴🟢 Simple Way of Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/5603466/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/5603466/)

---

# Problem Description

Given three strings representing words (`firstWord`, `secondWord`, and `targetWord`), each word is converted to a number where 'a' is 0, 'b' is 1, ..., and 'z' is 25. The task is to determine if the sum of the numerical values of `firstWord` and `secondWord` equals the numerical value of `targetWord`.

## Intuition

The problem requires converting characters to their respective numeric values based on their position in the alphabet and then checking if the sum of two words equals the third word when converted to their numeric equivalents.

## Approach

1. **Create a Mapping**:
   - Create a list `abc` where each index corresponds to a character ('a' to 'z').

2. **Convert Words to Numbers**:
   - Initialize a list to store the numeric values of the words.
   - Iterate through each word and convert each character to its corresponding numeric value using the `abc` list.
   - Concatenate the numeric values of characters to form the numeric value of the word.

3. **Check the Sum**:
   - Add the numeric values of `firstWord` and `secondWord`.
   - Compare the sum with the numeric value of `targetWord`.

4. **Return the Result**:
   - Return `true` if the sum equals the numeric value of `targetWord`, otherwise return `false`.

## Complexity

- **Time complexity**:
  - The time complexity is $$O(n)$$, where `n` is the total number of characters in the three words combined. This is because each character is processed once.

- **Space complexity**:
  - The space complexity is $$O(n)$$ for storing the numeric values of the words.

## Example Walkthrough

Consider the example:
- `firstWord = "acb"`
- `secondWord = "cba"`
- `targetWord = "cdb"`

### 1. **Convert Words to Numbers**

- Convert `firstWord` ("acb"):
  - 'a' -> 0, 'c' -> 2, 'b' -> 1
  - Numeric value: "021" -> 21

- Convert `secondWord` ("cba"):
  - 'c' -> 2, 'b' -> 1, 'a' -> 0
  - Numeric value: "210" -> 210

- Convert `targetWord` ("cdb"):
  - 'c' -> 2, 'd' -> 3, 'b' -> 1
  - Numeric value: "231" -> 231

### 2. **Check the Sum**
- Sum of `firstWord` and `secondWord` numeric values: 21 + 210 = 231
- Compare with `targetWord` numeric value: 231

### 3. **Return the Result**
- The sum equals the numeric value of `targetWord`, so return `true`.

**Output**: `true`

## Code

```dart
class Solution {
  bool isSumEqual(String firstWord, String secondWord, String targetWord) {
    List<String> abc = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    List<String> word = [firstWord, secondWord, targetWord];
    List<int> numbers = [];
    for (int i = 0; i < word.length; i++) {
        String value = "";
        for (int j = 0; j < word[i].length; j++) {
            value += abc.indexOf(word[i][j]).toString();
        }
        numbers.add(int.parse(value));
    }
    return (numbers[0] + numbers[1]) == numbers.last;
  }
}
