# Iterate || Very simple & easy to understand

**Author:** kreakEmp
**Votes:** 8
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/3570456/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/3570456/)

---

<b> Up vote if you like the solution </b>

Find the ith index from last which is not equal to zero, then take substring up to (i + 1)th index.

# Code
```
string removeTrailingZeros(string num) {
    int i = num.size() -1; 
    while(i >= 0 && num[i] == '0') i--;
    return num.substr(0, i+1);
}
```

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted