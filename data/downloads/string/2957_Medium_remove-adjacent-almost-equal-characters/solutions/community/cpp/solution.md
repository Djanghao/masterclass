# Explained - Greedy - single pass || very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 20
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4382595/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4382595/)

---

# Approach 
- Iterate from i = 1 to the string end.
- For each i check if its prev char is almost equal aplohabet or not => where abs diff of current char and prev char is less than equal to 1.
- If almost equal found then we have to change the curr index char to a char diff from prev as well as diff from the next. So we increment the change count. We don't hv to care about the what the new char will be.
- Also if we change the char to a new one that means we are sure that the next char should not be checked so iterate one more to skip check for the immidiate next char.

### C++
```
int removeAlmostEqualCharacters(string word) {
    int ans = 0;
    for(int i = 1; i < word.size(); i ++){
        if(abs(word[i] - word[i-1]) <= 1){ ans++; i++; }
    }
    return ans;
}
```

### Java
```
public int removeAlmostEqualCharacters(String word) {
    int ans = 0;
    for(int i = 1; i < word.length(); ++i){
        if(Math.abs(word.charAt(i) - word.charAt(i-1)) <= 1) { ans++; i++; }
    }
    return ans;
}
```


---


<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---