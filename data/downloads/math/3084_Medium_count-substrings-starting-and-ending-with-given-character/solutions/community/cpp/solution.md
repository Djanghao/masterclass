# C++ & Java || Explained - freq count and ans = n*(n+1)/2

**Author:** kreakEmp
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886224/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886224/)

---


# Approach
- Count frequency of char c in s
- We cna form a substring by selecting any two of the chars from the frequency and n substring when consider each char as a separate substring. So this can be done by n*(n+1)/2

# C++
```
long long countSubstrings(string s, char c) {
    long long count = 0;
    for(auto ch: s) count += (ch == c);
    return count * (count + 1)/2;
}
```

# Java
```
public long countSubstrings(String s, char c) {
    long count = 0;
    for(char ch: s.toCharArray()) count += (ch == c)?1:0;
    return count * (count + 1)/2;
}
```


---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---