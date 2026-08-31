# ✅✅O(N) Easy Solution✅✅ || Recursion💯|| C++ || Java  || Python

**Author:** AnishKrSingh
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3547015/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3547015/)

---

# Intuition
Since the Constraints are less n <= 1000 ```Try for each number i where 1 <= i <= n```

# Approach
For each number i where 1 <= i <= n 
Try whether the decimal representation of i * i can be partitioned into contiguous substrings such that the sum of the integer values of these substrings equals i.

``` For example if i = 36 then 36 * 36 can be partitioned in such way that it sums up to 36```
``` 36 * 36 = 1296 &&  1 + 29 + 6 = 36 ```

It can be easily check using recursion.

# Code - C++
```
class Solution {
public:
    bool check(int idx, string &p, int target)
    {
        if (idx == p.size())
        {
            if (target == 0)
                return true;
            else
                return false;
        }
        if (target < 0)
            return false;
        for (int i = idx; i < p.size(); ++i)
        {
            string x = p.substr(idx, i + 1 - idx);
            int y = stoi(x);
            if (check(i + 1, p, target - y))
                return true;
        }
        return false;
    }
    int punishmentNumber(int n) {
        long long ans = 0;
        for (long long i = 1; i <= n; ++i)
        {
            long long x = i * i;
            string p = to_string(x);
            if (check(0, p, i))
                ans += (i * i);
        }
        return ans;
    }
};
```
# Code - Java
```
public class Solution {
    public static boolean check(int idx, String p, int target) {
        if (idx == p.length()) {
            return target == 0;
        }
        if (target < 0) {
            return false;
        }
        for (int i = idx; i < p.length(); ++i) {
            String x = p.substring(idx, i + 1);
            int y = Integer.parseInt(x);
            if (check(i + 1, p, target - y)) {
                return true;
            }
        }
        return false;
    }
    
    public static int punishmentNumber(int n) {
        long ans = 0;
        for (long i = 1; i <= n; ++i) {
            long x = i * i;
            String p = Long.toString(x);
            if (check(0, p, (int) i)) {
                ans += (i * i);
            }
        }
        return (int) ans;
    }
    
    public static void main(String[] args) {
        int result = punishmentNumber(10);
        System.out.println(result);
    }
}
```
# Code - Python
```
class Solution:
    def check(self, idx, p, target):
        if idx == len(p):
            return target == 0
        if target < 0:
            return False
        for i in range(idx, len(p)):
            x = p[idx:i + 1]
            y = int(x)
            if self.check(i + 1, p, target - y):
                return True
        return False

    def punishmentNumber(self, n):
        ans = 0
        for i in range(1, n + 1):
            x = i * i
            p = str(x)
            if self.check(0, p, i):
                ans += (i * i)
        return ans


solution = Solution()
result = solution.punishmentNumber(10)
print(result)
```
``` Please Upvote if it was helpful ```