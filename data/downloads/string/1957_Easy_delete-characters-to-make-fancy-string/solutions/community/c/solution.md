# One-liner and Two Pointers

**Author:** votrubac
**Votes:** 26
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/1390110/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/1390110/)

---

#### One Liner
Using streams in Java.

**Java**
```java
public String makeFancyString(String s) {
    return IntStream.range(0, s.length())
        .filter(i -> i < 2 || (s.charAt(i) != s.charAt(i - 1) || s.charAt(i) != s.charAt(i - 2)))
        .mapToObj(i -> String.valueOf(s.charAt(i)))
        .collect(Collectors.joining());
}
```

#### Two Pointers
To avoid creating another string, we use the two pointers approach. We do not copy a character if it's the same as two previous ones.
**C++**
```cpp
string makeFancyString(string s) {
    int j = 2;
    for (int i = 2; i < s.size(); ++i)
        if (s[i] != s[j - 1] || s[i] != s[j - 2])
            s[j++] = s[i];
    s.resize(min(j, (int)s.size()));
    return s;
}
```