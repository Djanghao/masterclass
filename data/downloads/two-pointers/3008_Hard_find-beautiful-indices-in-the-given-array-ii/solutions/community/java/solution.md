# C++ & Java || KMP string pattern matching || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4561729/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4561729/)

---

# Intuition
- Basically the problem statement suggest that we need to find the index of string a matching in string s and then check if there is any index j which is matching with b in s and abs(i - j) <= k. 
- So to find the matching index need calculate the longest prefix which is suffix array ( LPS array ) and in that if the lps[i] matches with pattern string length then we found a match - KMP algo. 
- If you don't know KMP algo for pattern matching then first go through it then come back to solution. Here is a [link to the KMP tutorial](https://youtu.be/V5-7GzOfADQ?si=6RwxcnP50xvK9F5p)

# Approach
- Get index of the matched pattern for the string a - lets call it v1
- Get index of the matched pattern for the string b - lets call it v2
- Check for possible combination of i & j in the v1 and v2.
    - to do so we need to check if the abs(i - j). If so then simple add it to answer.
    - If v1[i] is > v2[j]&& abs( i- j) > k then keep moving pointer j till v1[i] > v2[j]
    - Check again if abs(i - j)  or not. If it is less, then add it to ans

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

# C++
```
void getPatternMatchingIndex(string& s, string& a, vector<int>& v){
    string t = a + "@" + s;
    vector<int> lps(1, 0);
    for(int i = 1; i < t.size(); ++i){
        int ind = lps[i-1]; 
        while(ind > 0 && t[ind] != t[i]) { ind = lps[ind-1]; }
        lps.push_back((t[ind] == t[i])?ind + 1 : 0);
    }
    for(int i = 0; i < lps.size(); ++i){
        if(lps[i] == a.size()) v.push_back(i - 2*a.size());
    }
}

vector<int> beautifulIndices(string s, string a, string b, int k) {
    vector<int> ans, v1, v2;
    getPatternMatchingIndex(s, a, v1);
    getPatternMatchingIndex(s, b, v2);
    for(int i = 0, j = 0; i < v1.size(); ++i){
        while(j < v2.size() && v1[i] > v2[j] && abs(v1[i] - v2[j]) > k) j++;
        if(j < v2.size() && abs(v1[i] - v2[j]) <= k) ans.push_back(v1[i]);
    }
    return ans;
}
```


# Java
```
void getPatternMatchingIndex(String s, String a, List<Integer> v){
    String t = a + "@" + s;
    List<Integer> lps = new ArrayList<>();
    lps.add(0);
    for(int i = 1; i < t.length(); ++i){ 
        int ind = lps.get(i - 1);
        while(ind > 0 && t.charAt(ind) != t.charAt(i)) { ind = lps.get(ind - 1); }
        lps.add((t.charAt(ind) == t.charAt(i))?ind + 1 : 0);
    }
    for(int i = 0; i < lps.size(); ++i){
        if(lps.get(i) == a.length()) v.add(i - 2*a.length());
    }
}

public List<Integer> beautifulIndices(String s, String a, String b, int k) {
    List<Integer> ans = new ArrayList<>();
    List<Integer> v1 = new ArrayList<>();
    List<Integer> v2 = new ArrayList<>();
    getPatternMatchingIndex(s, a, v1);
    getPatternMatchingIndex(s, b, v2);
    for(int i = 0, j = 0; i < v1.size(); ++i){
        while(j < v2.size() && v1.get(i) > v2.get(j) && Math.abs(v1.get(i) - v2.get(j)) > k) j++;
        if(j < v2.size() && Math.abs(v1.get(i) - v2.get(j)) <= k) ans.add(v1.get(i));
    }
    return ans;
}
```


---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---