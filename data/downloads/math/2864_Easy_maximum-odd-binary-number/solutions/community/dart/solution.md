# 🟢🔴🟢 6 Lines Solution || Best And Most Easiest Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/5614134/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/5614134/)

---

# Intuition
The problem requires us to form the maximum possible odd binary number by rearranging the bits in a given binary string `s`. To make the number odd, the last bit must be '1'. Given that the remaining bits can be rearranged to form the largest possible value, the strategy is to sort and position the bits accordingly.

# Approach
1. **Convert the String to a List**:
   - Split the binary string `s` into a list of characters to easily manipulate individual bits.

2. **Sort the Bits**:
   - Sort the list of bits in ascending order. Sorting helps us position the '0's first and '1's last when reversed.

3. **Rearrange to Maximize the Value**:
   - Remove one '1' from the sorted list (which will be used as the last bit to ensure the number is odd).
   - Reverse the list so that the remaining '1's are positioned before the '0's.

4. **Ensure the Number is Odd**:
   - Add the removed '1' to the end of the list, guaranteeing that the number is odd.

5. **Join the List Back into a String**:
   - Finally, join the list back into a string to get the result.

# Complexity
- **Time complexity**:
  - Sorting the list takes $$O(n \\log n)$$, where `n` is the length of the string `s`.
  - The remaining operations (removing, reversing, and joining) take linear time, $$O(n)$$.
  - Overall, the time complexity is $$O(n \\log n)$$.

- **Space complexity**:
  - The space complexity is $$O(n)$$ for storing the list of bits.

# Example Walkthrough

Given the binary string:
- `s = "0101"`

### 1. **Convert the String to a List**
   - `nums = ['0', '1', '0', '1']`

### 2. **Sort the Bits**
   - After sorting: `nums = ['0', '0', '1', '1']`

### 3. **Rearrange to Maximize the Value**
   - Remove one '1': `nums = ['0', '0', '1']`
   - Reverse the list: `nums = ['1', '0', '0']`

### 4. **Ensure the Number is Odd**
   - Add the removed '1' at the end: `nums = ['1', '0', '0', '1']`

### 5. **Join the List Back into a String**
   - The final string is `"1001"`, which is the maximum odd binary number that can be formed.

**Output**: `"1001"`

# Code
```dart
class Solution {
  String maximumOddBinaryNumber(String s) {
    List<String> nums = s.split("");
    nums.sort(); 
    nums.removeLast(); 
    nums = nums.reversed.toList(); 
    nums.add("1"); 
    return nums.join();
  }
}
