# Matrix Exponentiation, clean code

**Author:** Geethkrishna
**Votes:** 13
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5973253/](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5973253/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use matrix exponentiation for efficient tranformations.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Transform the given 'nums' array into a 26x26 matrix representing a single transformation. 

2. The 26x26 matrix represents transformations between characters. For example, `transform[1][0] = 1` indicates that character 'a' can be transformed into character 'b', where 0 represents 'a' and 1 represents 'b'. Essentially, each row `i` represents the characters from which the `i-th` character can be derived, or which transformations produce the `i-th` character.

3. Then, exponentiate this matrix to the power of 't' (indicating 't' transformations) which can be done in `log(t)` time complexity. 

4. Finally, multiply the frequency array of the given string with the transformed matrix to get the final frequencies, then return the sum of this array.

# Complexity
- Time complexity: `O(log t * 26^3)` [the 26^3 is the time complexity of matrix multiplication]
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n + 26x26) => O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    using Matrix = vector<vector<long long>>;
    const int MOD = 1e9 + 7;
    Matrix multiply(const Matrix& A, const Matrix& B) {
        Matrix result(26, vector<long long>(26, 0));
        for (int i = 0; i < 26; ++i) {
            for (int j = 0; j < 26; ++j) {
                for (int k = 0; k < 26; ++k) {
                    result[i][j] = (result[i][j] + A[i][k] * B[k][j]) % MOD;
                }
            }
        }
        return result;
    }
    Matrix matrixExpo(Matrix base, int exp) {
        Matrix result(26, vector<long long>(26, 0));
        for (int i = 0; i < 26; ++i) {
            result[i][i] = 1;
        }
        while (exp > 0) {
            if (exp % 2 == 1) {
                result = multiply(result, base);
            }
            base = multiply(base, base);
            exp /= 2;
        }
        return result;
    }
    int lengthAfterTransformations(string s, int t, vector<int>& nums) {
        vector<long long> mp(26, 0);
        for (char c : s) {
            mp[c - 'a']++;
        }
        Matrix transform(26, vector<long long>(26, 0));
        for (int i = 0; i < 26; ++i) {
            for (int j = 1; j <= nums[i]; ++j) {
                transform[(i + j) % 26][i]++;
            }
        }
        Matrix poweredTransform = matrixExpo(transform, t);
        vector<long long> ans(26, 0);
        for (int i = 0; i < 26; ++i) {
            for (int j = 0; j < 26; ++j) {
                ans[i] = (ans[i] + poweredTransform[i][j] * mp[j]) % MOD;
            }
        }
        long long sum = 0;
        for (int i = 0; i < 26; ++i) {
            sum = (sum + ans[i]) % MOD;
        }
        return static_cast<int>(sum);
    }
};
```