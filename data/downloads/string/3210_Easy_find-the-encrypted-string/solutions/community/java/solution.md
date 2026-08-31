# 1 Line Java

**Author:** navid
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/5432068/](https://leetcode.com/problems/find-the-encrypted-string/solutions/5432068/)

---

![image.png](./images/0.png)

If you want explanation, please comment

# 4 Lines (more readable)
```
int size = s.length();
k %= size;
s = s + s;
return s.substring(k, k + size);
```


# 1 Line

```
return (s + s).substring(k % s.length(), k % s.length() + s.length());
```
But if it deserves an upvote without any explanation, ... ;)