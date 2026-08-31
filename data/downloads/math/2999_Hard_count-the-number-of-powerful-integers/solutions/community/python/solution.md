# simple    O(1) - Time, O(1) - Memory      Solution.         Beats 100%.         C++ | Python | Java

**Author:** OtabekJurabekov
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4520758/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4520758/)

---


# Complexity
- Time complexity:   
 O(d), where d is the number of digits in the given range. The function iterates through the digits of the input numbers.


- Space complexity:
O(d), where d is the number of digits in the input number n. The space is used to store the string representation of the number.
```C++ []

using ll = long long;
using namespace std;

class Solution {
public:
    // Function to calculate a^b
    ll pw(ll a, ll b) {
        ll ans = 1;
        while (b--) ans *= a;
        return ans;
    }

    // Function to count powerful integers up to n with a given limit and suffix s
    ll get(ll n, ll l, string &s) {
        // Convert n to a string representation
        string N = to_string(n);
        ll ans = 0;

        // If the length of N is less than the length of s, there are no powerful integers
        if (N.size() < s.size()) {
            return 0;
        } else if (N.size() > s.size()) {
            // If the length of N is greater than the length of s
            bool ok = 1; // Flag to check if all digits are within the limit
            for (int i = 0; i < N.size() - s.size(); i++) {
                ok &= ((N[i] - '0') <= l); // Check if each digit is less than or equal to the limit
                ll cur = min(l + 1, ll(N[i] - '0')); // Calculate the contribution of the current digit

                // Adjust the contribution for the last segment of digits, considering the suffix s
                if (i == (N.size() - s.size() - 1LL))
                    cur += ok && (N.substr(N.size() - s.size(), s.size()) >= s);

                // Multiply the current contribution by the count of remaining digits
                for (int j = i + 1; j < N.size() - s.size(); j++)
                    cur *= l + 1;

                // Add the current contribution to the total count
                ans += cur;

                // If the current digit exceeds the limit, break the loop
                if ((N[i] - '0') > l) break;
            }
        } else {
            // If the length of N is equal to the length of s
            ans += N >= s; // Check if N is greater than or equal to s
        }
        return ans;
    }


    long long numberOfPowerfulInt(long long start, long long finish, int limit, string s) {
        return get(finish, limit, s) - get(start - 1, limit, s);
    }
};

```
```python []
class Solution:
    def pw(self, a, b):
        ans = 1
        while b:
            ans *= a
            b -= 1
        return ans

    def get(self, n, l, s):
        N = str(n)
        ans = 0

        if len(N) < len(s):
            return 0
        elif len(N) > len(s):
            ok = True
            for i in range(len(N) - len(s)):
                ok &= (int(N[i]) - 0) <= l
                cur = min(l + 1, int(N[i]) - 0)

                if i == (len(N) - len(s) - 1):
                    cur += ok and (N[len(N) - len(s):] >= s)

                for j in range(i + 1, len(N) - len(s)):
                    cur *= l + 1

                ans += cur

                if int(N[i]) > l:
                    break
        else:
            ans += int(N >= s)

        return ans

    def numberOfPowerfulInt(self, start, finish, limit, s):
        return self.get(finish, limit, s) - self.get(start - 1, limit, s)
```
```java []
public class Solution {
    // Function to calculate a^b
    private long pw(long a, long b) {
        long ans = 1;
        while (b-- > 0) {
            ans *= a;
        }
        return ans;
    }

    // Function to count powerful integers up to n with a given limit and suffix s
    private long get(long n, long l, String s) {
        String N = Long.toString(n);
        long ans = 0;

        if (N.length() < s.length()) {
            return 0;
        } else if (N.length() > s.length()) {
            boolean ok = true;
            for (int i = 0; i < N.length() - s.length(); i++) {
                ok &= (N.charAt(i) - '0') <= l;
                long cur = Math.min(l + 1, Long.parseLong(String.valueOf(N.charAt(i))));

                if (i == (N.length() - s.length() - 1)) {
                    cur += (ok && (N.substring(N.length() - s.length()).compareTo(s) >= 0)) ? 1 : 0;

                }

                for (int j = i + 1; j < N.length() - s.length(); j++) {
                    cur *= l + 1;
                }

                ans += cur;

                if ((N.charAt(i) - '0') > l) {
                    break;
                }
            }
        } else {
            ans += N.compareTo(s) >= 0 ? 1 : 0;
        }

        return ans;
    }

    public long numberOfPowerfulInt(long start, long finish, int limit, String s) {
        return get(finish, limit, s) - get(start - 1, limit, s);
    }

    
}
```

