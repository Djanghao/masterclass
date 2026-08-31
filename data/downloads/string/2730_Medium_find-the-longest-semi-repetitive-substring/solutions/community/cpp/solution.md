# Two pointer || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 68
**Link:** [https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622348/](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622348/)

---

<b>Up vote if you like the solution</b>
# Approach 
Need to consider two pointer i(backward) & j(forward). Also strore the index of the char where there is a duplicay of pair( in last variable).
So when j encountered a pair then i will be shifted to "last" and "last" will be shifted to j. Same will contiue till end. Keep tracking the max diff between i & j.

s = 02345118932236544
......^.............^.........^
......i.............last.....j

# Code
```
    int longestSemiRepetitiveSubstring(string s) {
        int ans = 1, i = 0, j = 1, last = 0;
        while(j < s.size()){
            if(s[j] == s[j-1]) {
                if(last) i = last; //This is needed only for the first duplicate found, as we don't want to update the value of i for the first duplicate. As one duplicate is allowed.
                last = j;
            }
            ans = max(ans, j - i+1);
            j++;
        }
        return ans;
    }
```
<b> Here is an article of my recent interview experience at Amazon, you may like :
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted