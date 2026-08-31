# 🟢🔴🟢 Beats 100.00%👏 || Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5623151/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5623151/)

---

# Example Walkthrough

Given:
- `words = ["ab", "abcab", "abc", "ababc", "abab", "cab"]`

We need to count how many pairs of words exist where one word is both a prefix and a suffix of another word.

### Step-by-Step Evaluation:

1. **Initial State**:
   - `count = 0`
   - We will check each pair of words `(word1, word2)` where `word1` is both a prefix and suffix of `word2`.

2. **First Word Pair**:
   - Pair: `("ab", "abcab")`
   - Check if `"abcab".startsWith("ab") && "abcab".endsWith("ab")`: **True**
   - Increment `count = 1`

3. **Second Word Pair**:
   - Pair: `("ab", "abc")`
   - Check if `"abc".startsWith("ab") && "abc".endsWith("ab")`: **False**
   - `count` remains `1`

4. **Third Word Pair**:
   - Pair: `("ab", "ababc")`
   - Check if `"ababc".startsWith("ab") && "ababc".endsWith("ab")`: **False**
   - `count` remains `1`

5. **Fourth Word Pair**:
   - Pair: `("ab", "abab")`
   - Check if `"abab".startsWith("ab") && "abab".endsWith("ab")`: **True**
   - Increment `count = 2`

6. **Fifth Word Pair**:
   - Pair: `("ab", "cab")`
   - Check if `"cab".startsWith("ab") && "cab".endsWith("ab")`: **False**
   - `count` remains `2`

7. **Sixth Word Pair**:
   - Pair: `("abcab", "abc")`
   - Check if `"abc".startsWith("abcab") && "abc".endsWith("abcab")`: **False**
   - `count` remains `2`

8. **Seventh Word Pair**:
   - Pair: `("abcab", "ababc")`
   - Check if `"ababc".startsWith("abcab") && "ababc".endsWith("abcab")`: **False**
   - `count` remains `2`

9. **Eighth Word Pair**:
   - Pair: `("abcab", "abab")`
   - Check if `"abab".startsWith("abcab") && "abab".endsWith("abcab")`: **False**
   - `count` remains `2`

10. **Ninth Word Pair**:
    - Pair: `("abcab", "cab")`
    - Check if `"cab".startsWith("abcab") && "cab".endsWith("abcab")`: **False**
    - `count` remains `2`

11. **Tenth Word Pair**:
    - Pair: `("abc", "ababc")`
    - Check if `"ababc".startsWith("abc") && "ababc".endsWith("abc")`: **False**
    - `count` remains `2`

12. **Eleventh Word Pair**:
    - Pair: `("abc", "abab")`
    - Check if `"abab".startsWith("abc") && "abab".endsWith("abc")`: **False**
    - `count` remains `2`

13. **Twelfth Word Pair**:
    - Pair: `("abc", "cab")`
    - Check if `"cab".startsWith("abc") && "cab".endsWith("abc")`: **False**
    - `count` remains `2`

14. **Thirteenth Word Pair**:
    - Pair: `("ababc", "abab")`
    - Check if `"abab".startsWith("ababc") && "abab".endsWith("ababc")`: **False**
    - `count` remains `2`

15. **Fourteenth Word Pair**:
    - Pair: `("ababc", "cab")`
    - Check if `"cab".startsWith("ababc") && "cab".endsWith("ababc")`: **False**
    - `count` remains `2`

16. **Fifteenth Word Pair**:
    - Pair: `("abab", "cab")`
    - Check if `"cab".startsWith("abab") && "cab".endsWith("abab")`: **False**
    - `count` remains `2`

### Conclusion:
- There are 2 pairs where one word is both a prefix and a suffix of another word.

**Final Output**: 2

# Intuition
The problem requires identifying pairs of words where one word serves as both the prefix and suffix of another word in the list. The goal is to count such pairs.

# Approach
1. **Pairwise Comparison**:
   - Iterate through each possible pair `(word1, word2)` in the list.
   - Check if `word2` starts and ends with `word1`.

2. **Count Valid Pairs**:
   - Increment the count when a valid prefix-suffix pair is found.

3. **Return Result**:
   - After examining all pairs, return the total count.

# Complexity
- **Time complexity**:
  - $$O(n^2 \	imes m)$$, where `n` is the number of words and `m` is the average length of the words.

- **Space complexity**:
  - $$O(1)$$, as no additional storage beyond the counter is required.

# Code
```dart
class Solution {
  int countPrefixSuffixPairs(List<String> words) {
    int count = 0;
    for(int i = 0; i < words.length; i++){
        String word1 = words[i];
        for(int j = i+1; j < words.length; j++){
            String word2 = words[j];
            if(word2.startsWith(word1) && word2.endsWith(word1)) count++;
        }
    }
    return count;
  }
}
