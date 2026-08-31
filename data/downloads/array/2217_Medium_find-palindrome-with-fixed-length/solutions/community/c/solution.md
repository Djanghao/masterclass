# Formula

**Author:** votrubac
**Votes:** 244
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1886915/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1886915/)

---

Only the first `(intLength + 1) / 2` characters matter. The remaining characters are just a reflection.

Say `intLength == 7`, so we consider only 4 characters. The minimum number is `1000` and maximum - `9999`.

Therefore, we can have `9999 - 1000 + 1 == 9000` palindromes. To find out the palindrome, we add a `q - 1` to the minimum number, reverse, and concatenate.

For example, for query `8765`, the base number is `1000 + 8765 - 1 == 9764`. Concatenating it with `679`, we get `9764679` as the result.

**C++**
The code could be shorter if we use string operations, but I wanted to avoid those for the efficiency. 

```cpp
int reverse(long long n, bool skip) {
    long long res = 0;
    for (n = skip ? n / 10 : n; n > 0; n /= 10)
        res = res * 10 + n % 10;
    return res;
}
vector<long long> kthPalindrome(vector<int>& queries, int sz) {
    vector<long long> res;
    long long start = pow(10, (sz + 1) / 2 - 1), end = pow(10, (sz + 1 ) / 2), mul = pow(10, sz / 2);    
    for (int q : queries)
        res.push_back(start + q > end ? -1 : 
            (start + q - 1) * mul + reverse(start + q - 1, sz % 2));
    return res;
}
```