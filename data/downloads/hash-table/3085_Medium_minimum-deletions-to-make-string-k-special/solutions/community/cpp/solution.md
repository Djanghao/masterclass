# Explained - using simple freq check

**Author:** kreakEmp
**Votes:** 34
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886196/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886196/)

---

# Approach
- Find the frequency of each of the characters in word
- Sort the freq array
- Consider each of the freq as the minFreq possible and with this consideration we need to evaluate how many char from the higher frequency to be deleted to get the condition satisfied for all freq
- Consider the next frequency as min and collect all lower freq count as deleted one and then again evaluate the hiher side freq deletion

# Code
```
int minimumDeletions(string word, int k) {
    vector<int> freq(26, 0);
    int deleted = 0, ans = word.size();
    for(auto c: word) freq[c-'a']++;             // find frequency of each chars
    sort(freq.begin(), freq.end());              // sort the freq array
    for(int i = 0; i < freq.size(); ++i){        // Iterate over freq 
        int res = deleted, minFreq = freq[i];    // consider the current freq as the min freq after deletion. Also add the already deleted freq to temporary result
        for(int j = freq.size()-1; j > i; --j){  // iterate over freq array to evaluate the chars to be deleted from the higher freq side of the freq array
            if(freq[j] - minFreq <= k) break;    // Once condition is satisfied then exit from the loop
            res += freq[j] - minFreq - k;        // accumulate on the result - number of items to be deleted
        }
        ans = min(ans, res);                     // keep tracking the min possible value
        deleted += freq[i];                      // update the deleted freq with current freq
    }
    return ans;
}
```


---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---