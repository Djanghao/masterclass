# C++ || Simple Explanation || Sliding Window ||

**Author:** khalidalam980
**Votes:** 131
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5846415/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5846415/)

---

## Problem Statement
###### We are given a string word and a non-negative integer **`k`**. Our task is to find the total number of substrings of word that meet two criteria:

1. The substring contains every vowel **`('a', 'e', 'i', 'o', and 'u')`** at least once.
2. The substring contains exactly **`k`** consonants.

###### Let's consider an example to understand this better:
###### Example:
```
word = "iqeaouqier"
k = 2
```
###### In this example, we need to find substrings that contain all **five** vowels and exactly **2** consonants.
###### **In this string:**
- We have all five vowels: **`'a', 'e', 'i', 'o', 'u'`**
- We have consonants: **`'q'`** (appears twice), **`'r'`**

###### The goal is to find substrings that contain:
1. All five vowels at least once each
2. Exactly 2 consonants

**Valid Substrings**
###### Let's identify the valid substrings:
1. **`"iqeaouq"`** - contains all vowels and exactly **`2`** consonants (**`'q'`** at the start and end)
2. **`"iqeaouqi"`** - all vowels and **`2`** consonants (**`'q'`** at start and middle)
3. **`"qeaouqi"`** - all vowels and **`2`** consonants (both **`'q's`**)

###### Notice that **`"iqeaouqier"`** is not a valid substring because it contains **`3`** consonants **`('q', 'q', 'r')`**, exceeding our **`k`** value of **`2`**.
## Intuition
###### The problem naturally lends itself to a sliding window approach because we're dealing with substrings, which are contiguous segments of the original string. However, this problem requires some modifications to the general sliding window technique:

1. We need to keep track of two conditions simultaneously: the presence of all vowels and the count of consonants.
2. The valid window can extend beyond the point where we find a valid substring, as adding more characters to the right might create more valid substrings. The right can extend before the point where the next consonent found(this will alter the condition of **`k`** consonents).
3. The efficiency of this solution hinges on a crucial insight: we don't need to explicitly extend our window to the right to count all valid substrings starting at the left pointer. Instead, we use precalculation to achieve this in constant time.

##### Note: Now you can try yourself before moving forward.

## Approach
###### Let's walk through the code for the countOfSubstrings function, explaining each part in detail.
```
long long countOfSubstrings(string word, int k) {
        int n = word.size();
        unordered_map<char, int> vowels;
        int consonantCount = 0;
        long long result = 0;
```
###### We initialize our variables:
- **`n`**: length of the input string
- **`vowels`**: a hash map to keep track of vowels and their counts
- **`consonantCount`**: to keep track of the number of consonants in our current window
- **`result`**: to store the final count of valid substrings
```
// Precompute next consonant positions
        vector<int> nextConsonant(n);
        int lastConsonant = n;
        for (int i = n - 1; i >= 0; i--) {
            nextConsonant[i] = lastConsonant;
            if (!isVowel(word[i])) lastConsonant = i;
        }
```
###### We precompute the nextConsonant array. For each index, it stores the position of the next consonant. This is crucial for efficiently counting valid substrings later.
###### **Important:** The efficiency of this solution hinges on a crucial insight: we don't need to explicitly extend our window to the right to count all valid substrings starting at the left pointer. Instead, we use precalculation to achieve this in constant time. Specifically, we precompute the **`nextConsonant`** array, which tells us the position of the next consonant for each index in the string. When we find a valid substring (containing all **`vowels`** and exactly **`k`** consonants), we can immediately count all valid extensions of this substring without actually extending the window. The calculation **`result += (nextConsonant[right] - right)`** adds the count of all these valid substrings in one operation. This approach allows us to count multiple valid substrings in constant time, rather than requiring additional iterations to extend the window. It's this clever use of precalculation that enables the algorithm to achieve linear time complexity, making it highly efficient for processing long strings.

```
// Sliding window
    int left = 0, right = 0;
    while (right < n) {
        // Expand window
        if (isVowel(word[right])) {
            vowels[word[right]]++;
        } else {
            consonantCount++;
        }
    }
```
###### We start our sliding window. As we move the right pointer, we either increment the count of a vowel or the consonant count.

```
// Shrink window if too many consonants
    while (left <= right && consonantCount > k) {
        if (isVowel(word[left])) {
            if (--vowels[word[left]] == 0) vowels.erase(word[left]);
        } else {
            consonantCount--;
        }
        left++;
    }
```
###### If we have more than **`k`** consonants, we shrink the window from the left until we have exactly **`k`** consonants.
```
// Count valid substrings
    while (left < right && vowels.size() == 5 && consonantCount == k) {
        result += (nextConsonant[right] - right);
        if (isVowel(word[left])) {
            if (--vowels[word[left]] == 0) vowels.erase(word[left]);
        } else {
            consonantCount--;
        }
        left++;
    }
```
###### **Important:** This is the key part of the algorithm. When we have all **`5`** vowels and exactly **`k`** consonants:

- We add to our result the number of valid substrings starting at left. This is computed as **`nextConsonant[right] - right`**, which gives us the number of characters we can add to the right before hitting the next consonant. This will count the number of substring starting at left pointer.
- We then move the left pointer, updating our **`vowel`** and **`consonant counts`** accordingly.

##### Below is the dry run in the table format you can take a look.
###### Example:
```
word = "iqeaouqier"
k = 2
```
| Step | left | right | Window    | Vowels             | Consonants | nextConsonant[right] | Valid Substrings | Result |
|------|------|-------|-----------|--------------------|-----------|-----------------------|------------------|--------|
| 1    | 0    | 0     | i         | {i:1}              | 0         | 1                     | 0                | 0      |
| 2    | 0    | 1     | iq        | {i:1}              | 1         | 6                     | 0                | 0      |
| 3    | 0    | 2     | iqe       | {i:1, e:1}         | 1         | 6                     | 0                | 0      |
| 4    | 0    | 3     | iqea      | {i:1, e:1, a:1}    | 1         | 6                     | 0                | 0      |
| 5    | 0    | 4     | iqeao     | {i:1, e:1, a:1, o:1}| 1        | 6                     | 0                | 0      |
| 6    | 0    | 5     | iqeaou    | {i:1, e:1, a:1, o:1, u:1}| 1   | 6                     | 0                | 0      |
| 7    | 0    | 6     | iqeaouq   | {i:1, e:1, a:1, o:1, u:1}| 2   | 9                     | 3                | 3      |
| 8    | 1    | 6     | qeaouq    | {e:1, a:1, o:1, u:1}| 2        | 9                     | 0                | 3      |
| 9    | 1    | 7     | qeaouqi   | {e:1, a:1, o:1, u:1, i:1}| 2   | 9                     | 2                | 5      |
| 10   | 2    | 7     | eaouqi    | {e:1, a:1, o:1, u:1, i:1}| 1   | 9                     | 0                | 5      |
| 11   | 2    | 8     | eaouqie   | {e:1, a:1, o:1, u:1, i:1}| 1   | 9                     | 0                | 5      |
| 12   | 2    | 9     | eaouqier    | {a:1, o:1, u:1, i:1, e:1}| 2   | 10                     | 1                | 6      |
| 13   | 3    | 9     | aouqier     | {a:1,o:1, u:1, i:1, e:1}| 2        | 10                     | 1                | 7      |
| 14   | 4    | 9     | ouqier    | {o:1, u:1, i:1, e:1}| 2   | 10                    | 0                | 7      |
| 15   | 5    | 9     | uqier     | {u:1, i:1, e:1}| 2        | 10                    | 0                | 7      |

# Complexity
- **Time complexity:** **`O(n)`**, where **`n`** is the length of the string. We traverse the string once with two pointers.

- **Space complexity:** **`O(n)`**, where **`n`** is the length of the string. We used **`nextConsonant`** vector of size **`n`**. **`vowels`** map and **`consonantCount`** is a fixed size **`O(1)`**.
The dominant factor is **`nextConsonant`** vector of size **`n`**.

### Comment any doubts or suggestions:

# Code
```cpp []
class Solution {
public:
    bool isVowel(char ch) {
        return (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u');
    }

    long long countOfSubstrings(string word, int k) {
        int n = word.size();
        unordered_map<char, int> vowels;
        int consonantCount = 0;
        long long result = 0;

        // Precompute next consonant positions
        vector<int> nextConsonant(n);
        int lastConsonant = n;
        for (int i = n - 1; i >= 0; i--) {
            nextConsonant[i] = lastConsonant;
            if (!isVowel(word[i])) lastConsonant = i;
        }

        // Sliding window
        int left = 0, right = 0;
        while (right < n) {
            // Expand window
            if (isVowel(word[right])) {
                vowels[word[right]]++;
            } else {
                consonantCount++;
            }

            // Shrink window if too many consonants
            while (left <= right && consonantCount > k) {
                if (isVowel(word[left])) {
                    if (--vowels[word[left]] == 0) vowels.erase(word[left]);
                } else {
                    consonantCount--;
                }
                left++;
            }

            // Count valid substrings
            while (left < right && vowels.size() == 5 && consonantCount == k) {
                result += (nextConsonant[right] - right);
                if (isVowel(word[left])) {
                    if (--vowels[word[left]] == 0) vowels.erase(word[left]);
                } else {
                    consonantCount--;
                }
                left++;
            }

            right++;
        }

        return result;
    }
};
```

### If you found this helpful, an upvote would be greatly appreciated!