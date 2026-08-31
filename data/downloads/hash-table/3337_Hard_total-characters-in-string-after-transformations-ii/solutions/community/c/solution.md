# [Super-fast 45 ms] Matrix Fast Power

**Author:** votrubac
**Votes:** 6
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5982144/](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5982144/)

---

Each character `i` results in `cnt[i]` characters after `t` transformations.

Here, we compute `cnt`, and sum it for all characters in `s`.

To do this computation, we represent transformations using a matrix.

If character `i` transforms into `n` consecutive characters, then:
- m[i][i + 1] = m[i][i + 2] = ... = m[i][i + n] = 1.

We need to multiply this matrix `t` times to find resulting characters after `t` transformations. 

Since `t` could be large, we need to use the fast power, so that `pow(m, t)` is computed as:  
- `pow(m, t / 2) * pow(m, t / 2)` if `t` is even,
- `pow(m, t / 2) * pow(m, t / 2) * m` if `t` is odd,

Finally, `cnt[i] = sum(m[i])`, since `m[i]` represents count of all characters produced by character `i`.

Performance optimizations:
- use `array` instead of `vector`.
- skip a row if `other[k][j] == 0` when multiplying matrices.

<img src="https://assets.leetcode.com/users/images/577cd640-b13c-4a95-a74a-4451adb7f4b5_1730197038.8028169.png" alt="drawing" width="600"/>

**C++**
```cpp
static const int mod = 1e9 + 7;    
struct Matrix {
    array<array<long long, 26>, 26> m{};
    auto &operator[](int idx) { return m[idx]; }
    auto &operator[](int idx) const { return m[idx]; }
    Matrix operator*(const auto& other) const {
        Matrix res{};
        for (int j = 0; j < 26; ++j)
            for (int k = 0; k < 26; ++k)
                for (int i = 0; other[k][j] && i < 26; ++i)                    
                    res[i][j] = (res[i][j] + m[i][k] * other[k][j]) % mod;
        return res;        
    }
};     
Matrix pow(const Matrix &m, int p) {
    if (p == 1)
        return m;
    auto res = pow(m, p / 2);
    res = res * res;
    return p % 2 ? res * m : res;
}  
int lengthAfterTransformations(string s, int t, vector<int>& nums) {
    Matrix m;
    long long cnt[26] = {};
    for (int i = 0; i < nums.size(); ++i)
        for (int j = 0; j < nums[i]; ++j)
            m.m[i][(i + j + 1) % 26] = 1;        
    auto mp = pow(m, t);
    for (int i = 0; i < 26; ++i)
        cnt[i] = accumulate(begin(mp[i]), end(mp[i]), 0LL, [&](auto sum, auto cnt){
            return (sum + cnt) % mod;
        }); 
    return accumulate(begin(s), end(s), 0, [&](int res, char ch){
       return  (res + cnt[ch - 'a']) % mod;
    });
}
```