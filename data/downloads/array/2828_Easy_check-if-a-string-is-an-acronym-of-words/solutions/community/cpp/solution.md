# C++ & Java || simple iteration

**Author:** kreakEmp
**Votes:** 9
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3934113/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3934113/)

---


# C++
```
bool isAcronym(vector<string>& words, string s) {
    string t = "";
    for(auto w: words) t += w[0];
    return t == s;
}
```

# Java
```
boolean isAcronym(List<String> words, String s) {
    StringBuilder t = new StringBuilder();
    for (String w : words) t.append(w.charAt(0));
    return t.toString().equals(s);
}
```

---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---