# [C++] Very Simple Solution

**Author:** Samuel3Shin
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/5534269/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/5534269/)

---

# Code
```
class Solution {
public:
    int sumOfDigits(vector<int>& A) {
        int mn = *min_element(A.begin(), A.end());
        int digits = 0;
        while(mn > 0) {
            digits += mn%10;
            mn /= 10;
        }
        return digits % 2 == 0;
    }
};
```