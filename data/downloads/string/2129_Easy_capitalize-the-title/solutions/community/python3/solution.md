# [Java/Python 3] Clean code w/ brief analysis.

**Author:** rock
**Votes:** 13
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/1675380/](https://leetcode.com/problems/capitalize-the-title/solutions/1675380/)

---

**Q & A**
Q1: Where can I find the material about togglling letter cases in Java?
A1: You can find [here](https://www.techiedelight.com/bit-hacks-part-4-playing-letters-english-alphabet/). - credit to **@Aaditya_Burujwale**

**End of Q & A**

----

```java
    public String capitalizeTitle(String title) {
        List<String> ans = new ArrayList<>();
        for (String w : title.split(" ")) {
            if (w.length() < 3) {
                ans.add(w.toLowerCase());
            }else {
                char[] ca = w.toLowerCase().toCharArray();
                ca[0] ^= 32; // toggle letter case.
                ans.add(String.valueOf(ca));
            }
        }
        return String.join(" ", ans);
    }
```
```python
    def capitalizeTitle(self, title: str) -> str:
        ans = []
        for s in title.split():
            if len(s) < 3:
                ans.append(s.lower())
            else:
                ans.append(s.capitalize())
        return ' '.join(ans)    
```
**Analysis:**

Time & space: `O(n)`, where `n = title.length()`.