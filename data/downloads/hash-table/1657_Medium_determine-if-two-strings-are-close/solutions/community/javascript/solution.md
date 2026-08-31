# ✅☑Beats 99.46% Users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 248
**Link:** [https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4561223/](https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4561223/)

---

# PLEASE UPVOTE IF IT HELPED

---

![Screenshot 2024-01-14 053231.png](./images/0.png)

---

# Approaches
(Also explained in the code)

1. **Frequency Counting:**

    - Two vectors (`freq1` and `freq2`) are used to count the frequency of each letter in `word1` and `word2`.
    - `freq1[i]` stores the count of the i-th letter in the English alphabet in `word1`, and similarly for `freq2`.
1. **Checking Presence of Characters:**

    - Iterate over each character in the alphabet.
    - If a character is present in one word and not in the other (or vice versa), return `false`.
    - This ensures that both words contain the same set of characters.
1. **Sorting Frequencies:**

    - Sort the frequency vectors (`freq1` and `freq2`).
    - This step is necessary because the order of frequencies doesn't matter, only their values.
1. **Comparing Sorted Frequencies:**

    - Iterate through the sorted frequency vectors and compare corresponding elements.
    - If any corresponding elements are not equal, return `false`.
1. **Final Result:**

    - If all the checks pass, return `true`, indicating that the two words are "close" as per the problem definition.



# Complexity
- Time complexity:
   $$O(n)$$
*(Sorting on a constant Array (n=26) does not affect the time complexity of the algorithm)*
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    bool closeStrings(std::string word1, std::string word2) {
        std::vector<int> freq1(26, 0);
        std::vector<int> freq2(26, 0);

        for (char ch : word1) {
            freq1[ch - 'a']++;
        }

        for (char ch : word2) {
            freq2[ch - 'a']++;
        }

        for (int i = 0; i < 26; i++) {
            if ((freq1[i] == 0 && freq2[i] != 0) || (freq1[i] != 0 && freq2[i] == 0)) {
                return false;
            }
        }

        std::sort(freq1.begin(), freq1.end());
        std::sort(freq2.begin(), freq2.end());

        for (int i = 0; i < 26; i++) {
            if (freq1[i] != freq2[i]) {
                return false;
            }
        }

        return true;
    }
};




```
```Java []
class Solution {
    public boolean closeStrings(String word1, String word2) {
        int[] freq1 = new int[26];
        int[] freq2 = new int[26];

        for (char ch : word1.toCharArray()) {
            freq1[ch - 'a']++;
        }

        for (char ch : word2.toCharArray()) {
            freq2[ch - 'a']++;
        }

        for (int i = 0; i < 26; i++) {
            if ((freq1[i] == 0 && freq2[i] != 0) || (freq1[i] != 0 && freq2[i] == 0)) {
                return false;
            }
        }

        Arrays.sort(freq1);
        Arrays.sort(freq2);

        for (int i = 0; i < 26; i++) {
            if (freq1[i] != freq2[i]) {
                return false;
            }
        }

        return true;
    }
}


```
```python3 []

class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        freq1 = [0] * 26
        freq2 = [0] * 26

        for ch in word1:
            freq1[ord(ch) - ord('a')] += 1

        for ch in word2:
            freq2[ord(ch) - ord('a')] += 1

        for i in range(26):
            if (freq1[i] == 0 and freq2[i] != 0) or (freq1[i] != 0 and freq2[i] == 0):
                return False

        freq1.sort()
        freq2.sort()

        for i in range(26):
            if freq1[i] != freq2[i]:
                return False

        return True


```
```javascript []
var closeStrings = function(word1, word2) {
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    for (let ch of word1) {
        freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let ch of word2) {
        freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false;
        }
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }

    return true;
};


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---