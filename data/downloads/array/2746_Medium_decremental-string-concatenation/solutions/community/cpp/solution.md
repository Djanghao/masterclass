# Explained - DP with memorisation

**Author:** kreakEmp
**Votes:** 38
**Link:** [https://leetcode.com/problems/decremental-string-concatenation/solutions/3677602/](https://leetcode.com/problems/decremental-string-concatenation/solutions/3677602/)

---

#### Up vote if you like the solution
# Approach 
Simply check all possible cases with recursion.
So to do so we will try to add the new word to the previous ans by two ways:
1. placing the new word after the current ans string or
2. placing the new word before the current ans string
Now in each of the above cases there wold be two cases if the characters at the point of conctanation are equal or not. If equel then simply add word length - 1 to ans where as if not match then add the word size to answer.

Note : for ans string we are just tracking its first and last character. And while calling the new recursive call we are updating there value as per concatanations.

# Code
```
class Solution {
public:
    int dp[1001][30][30] = {};

    int solve(vector<string>& words, int i, char firstChar, char lastChar){
        if(i >= words.size()) return 0;
        if(dp[i][firstChar - 'a'][lastChar - 'a'] != 0) return dp[i][firstChar - 'a'][lastChar - 'a'];
        int res1, res2, wordSize = words[i].size();

        //When word is kept first & then the ans string 
        res1 = wordSize + solve(words, i+1, words[i][0], lastChar);
        if(words[i].back() == firstChar) res1--;

        //When word is kept at last after the ans string 
        res2 = wordSize + solve(words, i+1, firstChar, words[i].back());
        if(words[i][0] == lastChar) res2--;

        return dp[i][firstChar - 'a'][lastChar - 'a'] = min(res1, res2);
    }

    int minimizeConcatenatedLength(vector<string>& words) {
        return words[0].size() + solve(words, 1, words[0][0], words[0].back());
    }
};
```

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted