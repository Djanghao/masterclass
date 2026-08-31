# M

**Author:** votrubac
**Votes:** 33
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/2229876/](https://leetcode.com/problems/decode-the-message/solutions/2229876/)

---

When filling the map (`m`), we need to track the character (`cur`) to assign the key for.

**C++**
```cpp    
string decodeMessage(string key, string mess) {
    char m[128] = {}, cur = 'a';
    for (char k : key)
        if (isalpha(k) && m[k] == 0)
            m[k] = cur++;
    for (int i = 0; i < mess.size(); ++i)
        mess[i] = m[mess[i]] ?: mess[i];
    return mess;
}
```

If the only "special" character is space, we can simplify the code a bit:

**Java**
```java
public String decodeMessage(String key, String message) {
    char[] m = new char[128];
    m[' '] = ' ';
    char cur = 'a';
    for (var k : key.toCharArray())
        m[k] = m[k] != 0 ? m[k] : cur++;
    return message.chars().mapToObj(i -> String.valueOf(m[i])).collect(Collectors.joining());
}
```
**C++**
```cpp
string decodeMessage(string key, string mess) {
    char m[128] = {}, cur = 'a';
    m[' '] = ' ';
    for (char k : key)
        m[k] = m[k] ?: cur++;
    transform(begin(mess), end(mess), begin(mess), [&](char ch){ return m[ch]; });
    return mess;
} 
```