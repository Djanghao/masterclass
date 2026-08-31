# Sliding window with 2 pointer | with exp ✅

**Author:** deleted_user
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5846240/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5846240/)

---

# Approach
1. Use a sliding window with two pointers (`leftPointer` and `midPointer`).
2. Maintain a count of each vowel and the number of distinct vowels in the current window.
3. Expand the window by moving the right pointer and updating counts.
4. When the conditions for distinct vowels and consonant count are met, calculate the number of valid substrings by moving the `midPointer` and adjusting counts accordingly.
5. Contract the window from the left as needed to maintain the conditions.

# Complexity
- **Time complexity**: $$O(n)$$, where \\(n\\) is the length of `word`, since we traverse the string with two pointers.
- **Space complexity**: $$O(1)$$ for the vowel and counted arrays since their size is constant.

# Code
```java
class Solution {
    public long countOfSubstrings(String word, int k) {
        String vowels = "aeiou";
        int leftPointer = 0, midPointer = 0, distinctVowelCount = 0;
        int[] vowelCount = new int[6];
        int[] countedVowels = new int[6];
        long result = 0;

        for (int i = 0; i < word.length(); i++) {
            int vowelIndex = vowels.indexOf(word.charAt(i)) + 1;
            vowelCount[vowelIndex]++;
            distinctVowelCount += (vowelCount[vowelIndex] == 1 && vowelIndex > 0) ? 1 : 0;

            while (vowelCount[0] > k) {
                int leftVowelIndex = vowels.indexOf(word.charAt(leftPointer)) + 1;
                vowelCount[leftVowelIndex]--;
                distinctVowelCount -= (vowelCount[leftVowelIndex] == 0 && leftVowelIndex > 0) ? 1 : 0;
                leftPointer++;
            }

            if (distinctVowelCount == 5 && vowelCount[0] == k) {
                if (midPointer < leftPointer) {
                    midPointer = leftPointer;
                    Arrays.fill(countedVowels, 0);
                }
                while (true) {
                    int midVowelIndex = vowels.indexOf(word.charAt(midPointer)) + 1;
                    if (midVowelIndex == 0 || vowelCount[midVowelIndex] - countedVowels[midVowelIndex] == 1) break;
                    countedVowels[midVowelIndex]++;
                    midPointer++;
                }
                result += midPointer - leftPointer + 1;
            }
        }

        return result;
    }
}
```
# Upvote if you found this helpful! \uD83D\uDE0A