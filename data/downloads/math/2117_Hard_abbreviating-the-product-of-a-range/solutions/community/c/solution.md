# Modulo and Double

**Author:** votrubac
**Votes:** 52
**Link:** [https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/1647115/](https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/1647115/)

---

First, after any multiplication, we get rid of trailing zeros, counting them in `c`.

Now, how to find out the last 5 digits of the product? For that, we multiply numbers, remove trailing zeros, and keep last `n` digits using the modulo operation. Simple.

What about the first 5 digits? We could use `double`, multiply numbers, and *divide* the result by 10 until we only have 5 digits before the decimal point. The precision seems to be sufficient enough.

**C++**
```cpp
string abbreviateProduct(int left, int right) {
    long long suff = 1, c = 0, total = 0, max_suff = 100000000000;
    double pref = 1.0;
    for (int i = left; i <= right; ++i) {
        pref *= i;
        suff *= i;
        while (pref >= 100000) {
            pref /= 10;
            total = total == 0 ? 6 : total + 1; 
        }
        while (suff % 10 == 0) {
            suff /= 10;
            ++c;
        }
        suff %= max_suff;
    }
    string s = to_string(suff);
    return to_string((int)pref) + (total - c <= 10 ? "" : "...") 
            + (total - c < 5 ? "" : s.substr(s.size() - min(5LL, total - c - 5))) + "e" + to_string(c);
}
```