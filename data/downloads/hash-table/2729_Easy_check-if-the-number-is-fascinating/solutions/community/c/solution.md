# ✅ Bits (O(1) Space)

**Author:** Rowque
**Votes:** 16
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3622454/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3622454/)

---

We just traverse all digits in all `3` numbers & use `bit manipulation` to check if every digit is between `[1, 9]`.
# C++
    bool isFascinating(int n) {
        int freq = 0;
        function<bool(int)> repd = [&](int n) {
            while(n) {
                int d = n % 10;
                if(d == 0 || (freq >> d & 1)) return false;
                freq |= (1 << d);
                n /= 10;
            }
            return true;
        };
        return repd(n) and repd(2 * n) and repd(3 * n);
    }
