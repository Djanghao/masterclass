# 🟢🔴🟢 Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/di-string-match/solutions/5646131/](https://leetcode.com/problems/di-string-match/solutions/5646131/)

---

# Intuition
The problem requires us to generate a permutation of integers based on a string `s` containing the characters "I" (Increase) and "D" (Decrease). The goal is to build an array such that the conditions imposed by the string `s` are met. Each "I" in the string indicates that the next number in the permutation should be greater than the previous one, and each "D" indicates that it should be smaller.

# Approach
1. **Initialization**:
   - Use two pointers, `low` initialized to `0` and `high` initialized to `n`, where `n` is the length of the string `s`. These pointers will help in assigning the smallest and largest available values respectively.

2. **Iterate through the string**:
   - For each character in the string `s`:
     - If the character is "I", add the current `low` value to the permutation list and increment `low`.
     - If the character is "D", add the current `high` value to the permutation list and decrement `high`.

3. **Final Step**:
   - After processing the entire string, add the remaining value (either `low` or `high` as they will be equal at this point) to the permutation list.

4. **Return the result**:
   - The permutation list now contains a sequence that satisfies the given "I" and "D" conditions.

# Complexity
- **Time complexity**: $$O(n)$$ 
  - The solution iterates through the string `s` once, where `n` is the length of `s`.

- **Space complexity**: $$O(n)$$ 
  - The permutation list `perm` stores `n + 1` integers, where `n` is the length of `s`.

# Code
```dart
class Solution {
  List<int> diStringMatch(String s) {
    int low = 0; 
    int high = s.length;
    List<int> perm = [];
    for(int i = 0; i< s.length; i++){
        if(s[i] == "I"){
            perm.add(low);
            low++;
        }else{
            perm.add(high);
            high--;
        }
    }
    perm.add(low);
    return perm;
  }
}
