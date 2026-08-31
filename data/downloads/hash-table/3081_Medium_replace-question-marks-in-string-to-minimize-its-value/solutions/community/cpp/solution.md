# Check freq and consider min with priority for replacement

**Author:** kreakEmp
**Votes:** 24
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4884124/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4884124/)

---


# Approach
- Iterate over the string s and count the frequency of the each chars except '?'
- Again start iterating over the string s and this time when ever we find a '?' we need to figure out the possible value for it.
    - To do so, we first find the min frequency char item from the frequency array and add it to temp string as a possible char replacement for the existing '?'.
    - Also increment the char count which ever we replaced with '?'
- After complete iteration over s, sort the temp array.
- Then reiterate over s and now replace the ith '?' char of s with ith char form temp.


# Code 
        
```
string minimizeStringValue(string s) {
    vector<int> freq(26, 0);
    string temp = "";
    for(auto c: s) if(c != '?') freq[c - 'a']++;
    for(auto ind = 0; ind < s.size(); ++ind){
        if(s[ind] != '?') continue;
        int minFreqInd = 0, minFreq = INT_MAX;
        for(int i = 0; i < 26; ++i){
            if(minFreq > freq[i]){
                minFreq = freq[i];
                minFreqInd = i;
            }
        }
        temp += ('a' + minFreqInd);
        freq[minFreqInd]++;
    }
    sort(temp.begin(), temp.end());
    for(int i = 0, j = 0; i < s.size(); ++i){
        if(s[i] == '?') s[i] = temp[j++];
    }
    return s;
}
```



---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---