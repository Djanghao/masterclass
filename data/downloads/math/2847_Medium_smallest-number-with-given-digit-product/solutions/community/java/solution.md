# Solutions in C++, java & python

**Author:** cpcs
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4010706/](https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4010706/)

---

# Intuition
Factor n into pow(2, a) * pow(3, b) * pow(5, c) * pow(7, d)
If n has other divisors then there is no solution.
The special case is n == 1.

# Approach
We can do nothing about 5 and 7.

Baiscally to make the answer smaller, we should make the digits as large as possible, so that we'll have least number of digits.

For 3,
If there are at least two 3s, we can make a 9. So at last we'll have at most one 3 left.

For 2,
If there are at least three 2s, we can make a 8. So at last we'll have at most two 2s left.

If we still have one 3 and at least one 2, we can make a 6.
Finally if still have two 2s, we can make a 4.

Connect all the digits from smallest to largest (from 1 to 9).



# Complexity
- Time complexity:
O(logn)

- Space complexity:
O(logn) if we count the output space otherwise it's O(1)

# Code
C++
```
class Solution {
public:
    string smallestNumber(long long n) {
        if (n == 1) {
            return "1";
        }
        const vector<int> p = {2, 3, 5, 7};
        vector<int> v(10);
        for (int x : p) {
            while (n % x == 0) {
                n /= x;
                ++v[x];
            }
        }
        if (n > 1) {
            return "-1";
        }
        v[9] = v[3] >> 1;
        v[3] &= 1;
        v[8] = v[2] / 3;
        v[2] %= 3;
        if (v[3] && v[2]) {
            --v[2];
            v[3] = 0;
            v[6] = 1;
        }
        v[4] = v[2] >> 1;
        v[2] &= 1;
        string r;
        for (int i = 1; i < 10; ++i) {
            const char c = i + '0';
            while (v[i]--) {
                r.push_back(c);
            }
        }
        return r;
    }
};
```

Java
```
public class Solution {
    public String smallestNumber(long n) {
        if (n == 1) {
            return "1";
        }
        
        final int[] p = {2, 3, 5, 7};
        int[] v = new int[10];
        
        for (int x : p) {
            while (n % x == 0) {
                n /= x;
                v[x]++;
            }
        }
        
        if (n > 1) {
            return "-1";
        }
        
        v[9] = v[3] >> 1;
        v[3] &= 1;
        v[8] = v[2] / 3;
        v[2] %= 3;
        
        if (v[3] > 0 && v[2] > 0) {
            v[2]--;
            v[3] = 0;
            v[6] = 1;
        }
        
        v[4] = v[2] >> 1;
        v[2] &= 1;
        
        StringBuilder r = new StringBuilder();
        for (int i = 1; i < 10; ++i) {
            char c = (char) (i + '0');
            while (v[i]-- > 0) {
                r.append(c);
            }
        }
        
        return r.toString();
    }   
}
```

Python
```
class Solution:
    def smallestNumber(self, n: int) -> str:
        if n == 1:
            return "1"
        
        p = [2, 3, 5, 7]
        v = [0] * 10
        
        for x in p:
            while n % x == 0:
                n //= x
                v[x] += 1
        
        if n > 1:
            return "-1"
        
        v[9] = v[3] // 2
        v[3] %= 2
        v[8] = v[2] // 3
        v[2] %= 3
        
        if v[3] > 0 and v[2] > 0:
            v[2] -= 1
            v[3] = 0
            v[6] = 1
        
        v[4] = v[2] // 2
        v[2] %= 2
        
        r = ""
        for i in range(1, 10):
            c = str(i)
            r += c * v[i]
        
        return r

```