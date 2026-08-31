# Using hash-map and set || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 6
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4886443/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4886443/)

---


# Approach
- Create a map of all items that comes after another character
- Then iterate over the word again and check if we can find the previous char of current char in the map after the current char or not. If found return true.


# Code
```
bool isSubstringPresent(string s) {
    unordered_map<int, unordered_set<int>> ump;
    for(int i = 1; i < s.size(); ++i){
        ump[s[i-1]].insert(s[i]);
    }
    for(int i = 1; i < s.size(); ++i){
        if(ump[s[i]].find(s[i-1]) != ump[s[i]].end()) return true;
    }
    return false;
}
```

---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---