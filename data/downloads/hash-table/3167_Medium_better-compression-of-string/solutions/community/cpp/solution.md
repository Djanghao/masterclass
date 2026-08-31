# Judge Segment End, to avoid Extra Statement

**Author:** Benlegend
**Votes:** 0
**Link:** [https://leetcode.com/problems/better-compression-of-string/solutions/5579972/](https://leetcode.com/problems/better-compression-of-string/solutions/5579972/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The input consists of one or more segments in the form of `cdddd`. Extract the char and number is not hard. Accumulate the frequency for each character, and generate the result in order a-z.

# Approach
<!-- Describe your approach to solving the problem. -->
We have two options to check each segment:

Judge the start. At each lowercase letter conclude the previous segment (if any), and reset for the next. In the end we should handle the last segment outside of the loop.

Judge the end. At the last digit conclude the current segment, and reset for the next. In this way everything is done inside the loop.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    // string; hashtable;
    // O(1) space O(n) time;
    string betterCompression(string compressed) {
        int n = compressed.size();
        unordered_map<char, int> freq;

        for (int i = 0, j = -1, num = 0; i < n; i++) {
            if (isdigit(compressed[i])) {
                num = 10 * num + (compressed[i] - '0');
                // end of segment
                if (i + 1 == n || islower(compressed[i + 1])) {
                    freq[compressed[j]] += num;
                    num = 0;
                }
            } else {
                j = i;
            }
        }

        string ans;
        for (char c = 'a'; c <= 'z'; c++) {
            if (freq.find(c) != freq.end()) {
                ans.push_back(c);
                ans.append(to_string(freq[c]));
            }
        }

        return ans;
    }
};
```