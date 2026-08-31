# [Java/C++/Python] Easy and Concise

**Author:** lee215
**Votes:** 67
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/128955/](https://leetcode.com/problems/masking-personal-information/solutions/128955/)

---

# **Intuition**
we first check if `S` contains the '@' character.
If contains `@`, `\uD835\uDC46` is an email address
otherwise, `\uD835\uDC46` is a phone number,

# **Explanation**
If `\uD835\uDC46` is an email address,
we keep the first and last characters of `\uD835\uDC46` before `@`,
and use `'*****'` to replace the middle characters.
We then convert the entire string to lowercase.

If `\uD835\uDC46` is a phone number, we only keep the digits in `\uD835\uDC46`.
We first convert the last `10` digits of the local number to the format `'--abcd'`,
and then check if there is any international code before it.
If there is, we add `'+'` and the international code before the local number:

- If \uD835\uDC46 has 10 digits, we add a leading empty string.
- If \uD835\uDC46 has 11 digits, we add a leading `'+*-'`.
- If \uD835\uDC46 has 12 digits, we do not add a leading `'+*-'`.
- If \uD835\uDC46 has 13 digits, we do not add a leading `'+*-'`.

# **Complexity**
Time O(n)
Space O(n) for output
<br>

**C++:**
```cpp
    vector<string> country = {"", "+*-", "+**-", "+***-"};
    string maskPII(string S) {
        string res;
        int at = S.find("@");
        if (at != string::npos) {
            transform(S.begin(), S.end(), S.begin(), ::tolower);
            return S.substr(0, 1) + "*****" + S.substr(at - 1);
        }
        S = regex_replace(S, regex("[^0-9]"), "");
        return country[S.size() - 10] + "***-***-" + S.substr(S.size() - 4);
    }

```

**Java:**
```java
    String[] country = {"", "+*-", "+**-", "+***-"};
    public String maskPII(String S) {
        int at = S.indexOf("@");
        if (at > 0) {
            S = S.toLowerCase();
            return (S.charAt(0) + "*****" + S.substring(at - 1)).toLowerCase();
        }
        S = S.replaceAll("[^0-9]", "");
        return country[S.length() - 10] + "***-***-" + S.substring(S.length() - 4);
    }

```


**Python:**
```python
    def maskPII(self, S):
        at = S.find('@')
        if at >= 0:
            return (S[0] + "*" * 5 + S[at - 1:]).lower()
        S = "".join(i for i in S if i.isdigit())
        return ["", "+*-", "+**-", "+***-"][len(S) - 10] + "***-***-" + S[-4:]
```
