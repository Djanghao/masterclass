# Can Convert String in K Moves

**Author:** subhash-chandra-verma
**Votes:** 3
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/3039833/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/3039833/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
First, it checks if the length of two strings are not equal, it returns false
It calculates the number of shift required for each character to convert the first string to the second one.
Then it iterates over the number of shift required and for each shift, it checks if the number of shift * 26 + the current shift greater than k, if so it returns false.
If all the indexes can be shifted in k moves or less, it returns true.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(n) where n is the length of the string.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 The space complexity is O(1) since we are using a fixed size array of size 26 to store the shift count.
# Code
```
class Solution {
    public boolean canConvertString(String s, String t, int k) {
        // Edge case: if the length of the two strings are not equal, return false
        if (s.length() != t.length()) return false;
        int n = s.length();
        int[] diff = new int[n];
        for (int i = 0; i < n; i++) {
            diff[i] = (t.charAt(i) - s.charAt(i) + 26) % 26;
        }
        int[] count = new int[26];
        for (int i = 0; i < n; i++) {
            if (diff[i] == 0) continue;
            if (count[diff[i]] * 26 + diff[i] > k) return false;
            count[diff[i]]++;
        }
        return true;
    }
}

```