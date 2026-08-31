# [C++ | Python3] 4ms Greedy Try From 9 To 2

**Author:** alexunxus
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4011973/](https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4011973/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Factorize n with digit from 9 down to 2, prioritizing greater digit. For example, to factorize 36, we will try 9 first but not 3, because if we use `3*3`, there will be two digits, and the overall concatenated number is always inferior than using one digit 9 no matter how one try to permutate those digits.

After factorizing n with respect to 9 to 2, if n does not becomes 1, then it must contain prime factors that are greater than 10, and it's impossible to factorize it with 9 to 2.

One edge case is number 1. For this case, simply return a string "1".
 
# Approach
<!-- Describe your approach to solving the problem. -->
Greedy

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(\\log n)$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(\\log n)$, as above the number of digit would be `O(log n)`

# Code
C++
```
class Solution {
public:
    string smallestNumber(long long n) {
        if (n == 1) return "1";
        std::string res;
        // Try to factorize n from 9 down to 2.
        // Append the factor to result `res`.
        for (int i = 9; i > 1; --i) {
            while (n%i == 0) {
                res.push_back('0'+i);
                n/=i;
            }
        }
        // Return -1 if n has prime factor > 10.
        if (n != 1) return "-1";
        // Minimize the result. Since we try to
        // append digit from digit 9 and end at 2,
        // Simply reverse the number is fine.
        std::reverse(begin(res), end(res));
        return res;
    }
};
```

Python
```
class Solution:
    def smallestNumber(self, n: int) -> str:
        if n == 1:
            return "1"
        res = ""
        for i in range(9, 1, -1):
            while n%i == 0:
                n = n//i
                res += str(i)
        if n!= 1:
            return "-1"
        return res[::-1]
```