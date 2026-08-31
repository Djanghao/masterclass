# Using Map Data type!

**Author:** senorita143
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/5711423/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/5711423/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To determine if a given sentence is a pangram (a sentence containing every letter of the alphabet at least once), we need to check if all 26 letters from 'a' to 'z' are present in the sentence.

# Approach
<!-- Describe your approach to solving the problem. -->
Just Taking map and counting every different alphabet and checking whether its length equals to 26 or not..!
# Complexity
- Time complexity: $$O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  bool checkIfPangram(String sentence) {

        Map<String,int> hassh = Map();
        for(int i=0; i<sentence.length ; i++){
            hassh[sentence[i]]=1;
        }

        return hassh.length == 26;
  }
}
```