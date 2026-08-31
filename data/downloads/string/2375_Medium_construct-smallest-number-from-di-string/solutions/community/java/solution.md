# [Java/C++/Python] Easy Reverse

**Author:** lee215
**Votes:** 307
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2422380/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2422380/)

---

# **Intuition**
If we meet `I`,`II`,`III`...
we can greedily pick the smallest numebr.

If we meet `D`,
we can pick second smallest and then pick the smallest,
like 21.

If we meet `D`,
we can pick the third smallest, then the second smallest, then the smallest,
like 321.
<br>

# **Explanation**
1 2 3 4 5 6 7 8 9
D D I D D I D D

Match the input string and the sequence 1,2,3,4,5,6,7,8,9.
Reverse all numbers between "I".

For example:
first 'I' at 3, then reverse `1,2,3`, we have `3,2,1`
second 'I' at 6, then reverse `4,5,6`, we have `6,5,4`
Reverse the last group `7,8,9`, we have `9,8,7`

Final result for D D I D D I D D,
is `3,2,1,6,5,4,9,8,7`

We can have multiple approach to implement this process.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public String smallestNumber(String s) {
        StringBuilder res = new StringBuilder(), stack = new StringBuilder();
        for (int i = 0; i <= s.length(); i++) {
            stack.append((char)('1' + i));
            if (i == s.length() || s.charAt(i) == 'I') {
                res.append(stack.reverse());
                stack = new StringBuilder();
            }
        }
        return res.toString();
    }
```
**C++**
```cpp
   string smallestNumber(string s) {
        string res, stack;
        for (int i = 0; i <= s.length(); i++) {
            stack.push_back('1' + i);
            if (i == s.length() || s[i] == 'I') {
                while (!stack.empty()) {
                    res.push_back(stack.back());
                    stack.pop_back();
                }
            }
        }
        return res;
    }

    string smallestNumber(string s) {
        string res;
        int n = s.size(), j = 0;
        for (int i = 0; i <= s.size(); ++i) {
            res.push_back('1' + i);
            if (i == n || s[i] == 'I') {
                reverse(res.begin() + j, res.end());
                j = i + 1;
            }
        }
        return res;
    }
```
**Python**
```py
    def smallestNumber(self, s):
        res, stack = [], []
        for i,c in enumerate(s + 'I', 1):
            stack.append(str(i))
            if c == 'I':
                res += stack[::-1]
                stack = []
        return ''.join(res)

    def smallestNumber(self, s):
        res = []
        for i,c in enumerate(s + 'I', 1):
            if c == 'I':
                res += range(i, len(res), -1)
        return ''.join(map(str,res))

    def smallestNumber(self, s):
        res, pool = [], list('987654321')
        for k in map(len,s.split('I')):
            res += [pool.pop() for _ in range(k + 1)][::-1]
        return ''.join(res)
```
<br>

# **More DI string problems**
[942. DI String Match](https://leetcode.com/problems/di-string-match/discuss/194904/C%2B%2BJavaPython-Straight-Forward)
[903. Valid Permutations for DI Sequence](https://leetcode.com/problems/valid-permutations-for-di-sequence/discuss/168278/C%2B%2BJavaPython-DP-Solution-O(N2))
