# C++ & Java || O(n) Solution - Match odd & even places characters

**Author:** kreakEmp
**Votes:** 34
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/3992947/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/3992947/)

---

# Approach 
Here key thing is if we accumulate the even char of s1 and s2 then both have same charaters and with same frequency. Same is the case for odd index characters.

1. Take two vecotrs odd and even of size 26.
2. Traverse s2 & s2 and increment the corresponding char count for s1 and decreament fo s2.
3. Finally traverse the odd and even and check that there is no char count missmatch ( basically not equal to zero) in the vecotrs. If found so return false. Other wise return true.

# C++
```
bool checkStrings(string s1, string s2) {
    vector<char> odd(26,0), even(26,0);
    for(int i = 0; i < s1.size(); ++i){
        if(i%2) { odd[s1[i] - 'a']++; odd[s2[i] - 'a']--; }
        else { even[s1[i] - 'a']++; even[s2[i] - 'a']--; }
    }
    for(int i = 0; i < odd.size(); ++i){
        if(odd[i] || even[i]) return false;
    }
    return true;
}
```

# Java
```
public boolean checkStrings(String s1, String s2) {
    int[] odd = new int[26], even = new int[26];
    for (int i = 0; i < s1.length(); ++i) {
        if (i % 2 == 1) {
            odd[s1.charAt(i) - 'a']++;
            odd[s2.charAt(i) - 'a']--;
        } else {
            even[s1.charAt(i) - 'a']++;
            even[s2.charAt(i) - 'a']--;
        }
    }
    for (int i = 0; i < odd.length; ++i) {
        if (odd[i] != 0 || even[i] != 0) return false;
    }
    return true;
}
```


---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---