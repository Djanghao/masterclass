# 466. Count The Repetitions.cpp

**Author:** 202021ganesh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-repetitions/solutions/4504865/](https://leetcode.com/problems/count-the-repetitions/solutions/4504865/)

---

**Code**
```
class Solution {
public:
    int getMaxRepetitions(string s1, int n1, string s2, int n2) {
        int len1 = s1.length(), len2 = s2.length();
        vector<int> repeatCount(len2 + 1, 0);
        vector<int> nextIndex(len2 + 1, 0);

        int count1 = 0, count2 = 0, j = 0;
        for (int k = 1; k <= n1; k++) {
            for (int i = 0; i < len1; i++) {
                if (s1[i] == s2[j]) {
                    j++;
                    if (j == len2) {
                        j = 0;
                        count2++;
                    }
                }
            }
            count1++;
            repeatCount[k] = count2;
            nextIndex[k] = j;

            for (int start = 0; start < k; start++) {
                if (nextIndex[start] == j) {
                    int prefixCount = repeatCount[start];
                    int patternCount = (n1 - start) / (k - start) * (repeatCount[k] - repeatCount[start]);
                    int suffixCount = repeatCount[start + (n1 - start) % (k - start)] - repeatCount[start];
                    return (prefixCount + patternCount + suffixCount) / n2;
                }
            }
        }
        return count2 / n2;
    }
};
```