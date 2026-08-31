# Skip 'a' & change until next 'a' || Very simple & easy to understand solution

**Author:** kreakEmp
**Votes:** 22
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3624091/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3624091/)

---

<b> Up vote if you like the solution </b>

# Approach
1. Skip all initial 'a' from start.
2. Check if you reach to end, then replace the last char with 'z' and  return it as ans. ( We need to do this as it is required to perform exactly one operation )
3. If above is not the case keep on changeing each char to previous untill found 'a' or reached the end.
4. Return final s as ans.

# Code
```
string smallestString(string s) {
    int i = 0;
    while(i < s.size() && s[i] == 'a') i++;
    if(i >= s.size()) { s[s.size()-1] = 'z'; return s; }
    while(i < s.size() && s[i] != 'a') { s[i]--; i++; }
    return s;
}
```

<b>Here is an article of my recent interview experience at Amazon, you may like :
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted