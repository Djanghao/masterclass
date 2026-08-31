# BEATS 100% || Java Solution || Beats 100%

**Author:** yallavamsipavan1234
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5973973/](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5973973/)

---

# Intuition
- The problem is about transforming a string s over t iterations with specific rules dictated by a list nums. Each character's frequency shifts to other characters based on the transformation rules. The goal is to compute the length of the string after all transformations.

# Approach
- **Initial Frequency Calculation :**

  - Count the initial frequency of each character in the string and store it in an array freq.

- **Transformation Matrix Setup :**

  - Create a 26x26 matrix m representing character transitions based on the nums list.

- **Matrix Exponentiation :**

  - Compute the matrix power mt using matrix exponentiation to efficiently handle multiple transformations.

- **Final Frequency Calculation :**

  - Multiply the initial frequency array with the matrix mt to get the final character frequencies.

- **Sum and Modulo :**

  - Sum the final character frequencies and take modulo `(int)(1e9+7)` to get the result.

# Complexity
- Time complexity: `O(t)`

- Space complexity: `O(1)`

# Code
```java []
class Solution {
    private final int mod = (int) (1e9 + 7);
    public int lengthAfterTransformations(String s, int t, List<Integer> nums) {
        if(t == 0) return s.length() % mod;
        long[] freq = new long[26];
        for(char ch : s.toCharArray()) {
            freq[ch - 'a']++;
        }
        long[][] m = new long[26][26];
        for(int i=0; i<26; i++) {
            int num = nums.get(i);
            for(int j=1; j<=num; j++) {
                m[i][(i + j) % 26] = 1;
            }
        }
        long[][] mt = matrixPower(m, t);
        long[] rowsum = new long[26];
        for(int i=0; i<26; i++) {
            for(int j=0; j<26; j++) {
                rowsum[i] = (rowsum[i] + mt[i][j]) % mod;
            }
        }
        long total = 0;
        for(int i=0; i<26; i++) {
            total = (total + (freq[i]*rowsum[i]) % mod) % mod;
        }
        return (int) total;
    }
    private long[][] matrixPower(long[][] m, int power) {
        long[][] ans = new long[26][26];
        for(int i=0; i<26; i++) {
            ans[i][i] = 1;
        }
        long[][] base = new long[26][26];
        for(int i=0; i<26; i++) {
            System.arraycopy(m[i], 0, base[i], 0, 26);
        }
        while(power > 0) {
            if((power & 1) == 1) ans = multiply(ans, base);
            base = multiply(base, base);
            power >>= 1;
        }
        return ans;
    }
    private long[][] multiply(long[][] a, long[][] b) {
        long[][] c = new long[26][26];
        for(int i=0; i<26; i++) {
            for(int k=0; k<26; k++) {
                if(a[i][k] != 0) {
                    for(int j=0; j<26; j++) {
                        c[i][j] = (c[i][j] + a[i][k]*b[k][j]) % mod;
                    }
                }
            }
        }
        return c;
    }
}
```