# 🟢🔴🟢 Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/5738091/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/5738091/)

---

## Intuition
The problem is to determine if the numbers in a string are in strictly increasing order. To solve this, the approach involves:
1. Extracting numeric values from the string.
2. Checking if each number is greater than the previous one.

## Approach
1. **Split the String**:
   - Split the input string into individual words based on spaces.

2. **Extract Numeric Values**:
   - Parse each word to check if it's a number.
   - Add valid numbers to a list.

3. **Check Ascending Order**:
   - Iterate through the list of numbers.
   - Ensure each number is greater than the previous number.

## Complexity

- **Time Complexity**:
  - **Splitting the String**: $$O(n)$$, where `n` is the length of the string.
  - **Parsing and Checking**: Parsing each word and verifying the order is done in $$O(m)$$, where `m` is the number of words.
  - **Overall Time Complexity**: The combined time complexity is $$O(n + m)$$, which simplifies to $$O(n)$$.

- **Space Complexity**:
  - **Storage for Numbers**: $$O(k)$$, where `k` is the number of numeric words in the string.
  - **Overall Space Complexity**: $$O(k)$$.

## Example Walkthroughs

### Example 1

**Input**: `s = "1 box has 3 blue 4 red 7 green 12 yellow marbles"`

1. **Split the String**:
   - Result: `["1", "box", "has", "3", "blue", "4", "red", "7", "green", "and", "12", "yellow", "marbles"]`

2. **Extract Numeric Values**:
   - Extracted numbers: `nums = [1, 3, 4, 7, 12]`

3. **Check Ascending Order**:
   - `3 > 1` -> True
   - `4 > 3` -> True
   - `7 > 4` -> True
   - `12 > 7` -> True

   All numbers are in strictly increasing order. Result: `true`.

### Example 2

**Input**: `s = "2 apples 5 oranges 7 bananas 6 grapes"`

1. **Split the String**:
   - Result: `["2", "apples", "5", "oranges", "7", "bananas", "6", "grapes"]`

2. **Extract Numeric Values**:
   - Extracted numbers: `nums = [2, 5, 7, 6]`

3. **Check Ascending Order**:
   - `5 > 2` -> True
   - `7 > 5` -> True
   - `6 > 7` -> False

   The sequence is not strictly increasing because `6` is not greater than `7`. Result: `false`.

## Code
```dart
class Solution {
  bool areNumbersAscending(String s) {
    List<String> list = s.split(" ");
    List<int> nums = [];
    for (int i = 0; i < list.length; i++) {
        int? num = int.tryParse(list[i]);
        if (num != null) nums.add(num);     
    }
    print(nums);
    bool res = false;
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) res = true;
        else return false;
    }
    return res;
  }
}
