# Using sliding window for O(n) complexity

**Author:** meg4cyberc4t
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/6081888/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/6081888/)

---

# Intuition & Approach
We go through the elements using the left and right index. If a vowel enters the step on the right index, we add it to a certain "buffer". If it leaves the left index, we remove it. Each step we try to output the maximum value of the buffer.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```dart []
class Solution {
    static const String vowels = "aieou";

    int maxVowels(String s, int k) {
        int count = 0;
        int maxCount = 0;
        for (int rightPointer = 0; rightPointer < s.length; rightPointer++) {
            final int leftPointer = rightPointer - (k - 1);
            if (leftPointer > 0 && vowels.contains(s[leftPointer - 1])) {
                count--;
            }
            if (vowels.contains(s[rightPointer])) {
                count++;
            }
            if (leftPointer >= 0) {
                maxCount = max(maxCount, count);
            }
        }
        return maxCount;
    }
}
```