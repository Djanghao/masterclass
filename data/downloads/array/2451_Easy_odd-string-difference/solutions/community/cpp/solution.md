# [Java/C++] Constant space, no hashmaps

**Author:** ivey
**Votes:** 17
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/2763310/](https://leetcode.com/problems/odd-string-difference/solutions/2763310/)

---

# Intuition
Since we don't need to return the differences we don't need to store them or even calculate them; we only need to compare the differences one by one.

# Approach
Take the first word from the input and see if its difference matches other words. If there is one word that doesn't match, we return that word; if no other words match then the first word is the odd one out.

# Complexity
- Time complexity: `O(n * m)` where `n` is the number of words and `m` is the length of words.

- Space complexity: `O(1)` as we make no allocations and don't use recursion.

# Java
```
class Solution {
    public String oddString(String[] words) {
        int matchesFirst = 0;
        int mismatchIdx = -1;
        for (int i = 1; i < words.length; i++) {
            if (matchesDiff(words[0], words[i])) {
                matchesFirst++;
            } else {
                mismatchIdx = i;
            }
        }
        if (matchesFirst == 0) {
            return words[0];
        }
        return words[mismatchIdx];
    }

    private static boolean matchesDiff(String a, String b) {
        for (int i = 0; i < a.length() - 1; i++) {
            if (a.charAt(i + 1) - a.charAt(i) != b.charAt(i + 1) - b.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}
```

# C++
```
class Solution {
public:
    string oddString(const vector<string>& words) {
        int matchingFirst = 0;
        int mismatchIndex = 0;
        for (size_t i = 1; i < words.size(); i++) {
            if (matchesDiff(words[0], words[i])) {
                matchingFirst++;
            } else {
                mismatchIndex = i;
            }
        }
        return matchingFirst > 0 ? words[mismatchIndex] : words[0];
    }

private:
    static bool matchesDiff(const std::string& a, const std::string& b) {
        for (size_t i = 0; i < a.length() - 1; i++) {
            if (a[i + 1] - a[i] != b[i + 1] - b[i]) {
                return false;
            }
        }
        return true;
    }
    
};
```