# C++ and C# very easy solution.

**Author:** aloneguy
**Votes:** 6
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/3405457/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/3405457/)

---

![photo_2023-04-11_21-30-14.jpg](./images/0.jpeg)
![photo_2023-04-11_21-30-20.jpg](./images/1.jpeg)

```C# []
public class Solution {
    public string FreqAlphabets(string s) {
    StringBuilder str=new();
    for (int i = 0; i < s.Length;) {
    if (i < s.Length - 2 && s[i + 2] == '#') {
      str.Append((char)('j' + (s[i] - '1') * 10 + s[i + 1] - '0'));
      i += 3;
    }
    else {
    str.Append((char)('a' + (s[i] - '1')));
    i++;
    }
  }
  return str.ToString();
    }
}
```
```C++ []
class Solution {
public:
    string freqAlphabets(string s) {
    string res;
    for (int i = 0; i < s.size();) {
    if (i < s.size() - 2 and s[i + 2] == '#') {
      res += 'j' + (s[i] - '1') * 10 + s[i + 1] - '0';
      i += 3;
    }
    else {
    res += 'a' + (s[i] - '1');
    i++;
    }
  }
  return res;
}
};
```

