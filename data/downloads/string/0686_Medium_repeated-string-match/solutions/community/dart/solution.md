# KMP algorithm with explanation

**Author:** user6770yv
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/5437222/](https://leetcode.com/problems/repeated-string-match/solutions/5437222/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves determining how many repetitions of string a are required so that string b becomes a substring of the repeated string. The challenge arises from potential overlaps between the repetitions of a.
# Approach
<!-- Describe your approach to solving the problem. -->
1. **KMP (Knuth-Morris-Pratt) Algorithm:** We use the KMP algorithm to efficiently find if b is a substring of the repeated a. This involves two main steps:
    - **LPS Array Creation:** The Longest Prefix Suffix (LPS) array helps in skipping unnecessary comparisons during the string matching process.
    - **String Matching:** Using the LPS array, we perform the actual string matching to find if b is a substring of the repeated a.
1. **String Repetition:** We initially concatenate a to itself until its length is at least equal to the length of b. This ensures that all possible alignments of b within the repeated a are checked.
2. **Additional Repetition:** If b is not found, we concatenate a one more time to account for any potential overlaps between the end of one repetition of a and the start of the next.
# Complexity
- **Time complexity:** The time complexity is O(n+m), where n is the length of the repeated string and m is the length of b. This is because the KMP algorithm runs in linear time relative to the combined length of the strings.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- **Space complexity:** The space complexity is O(m) for storing the LPS array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int repeatedStringMatch(String a, String b) {
    List<int> lps = lpsCreation(b);
    int count = 1;
    String s = a;
    while(s.length < b.length) {
        s += a;
        count++;
    }
    if (kmpMatch(lps, s, b) == 1) {
      return count;
    }
    s += a;
    count++;
    if (kmpMatch(lps, s, b) == 1) {
      return count;
    }
    return -1;   
  }
  List<int> lpsCreation(String b) {
    int i = 1;
    int j = 0;
    int len_b = b.length;
    List<int> lps = [for(int i = 0; i < len_b; i++) 0];
    while(i < len_b) {
        if(b[i] == b[j]) {
            lps[i] = ++j;
            i++;
        }
        else if(j == 0)
            i++;
        else
            j = lps[j - 1];
    }
    return lps;
  }
  int kmpMatch(List<int> lps, String s, String b) {
    int i = 0;
    int j = 0;
    int n1 = s.length;
    int n2 = b.length;
    while(i < n1) {
        if(s[i] == b[j]) {
            i++;
            j++;
        }
        if(j == n2)
            return 1;
        else if(i < n1 && s[i] != b[j]) {
            if(j == 0)
                i++;
            else {
                j = lps[j - 1];
            }
        }
    }
    return -1;
  }
}
```