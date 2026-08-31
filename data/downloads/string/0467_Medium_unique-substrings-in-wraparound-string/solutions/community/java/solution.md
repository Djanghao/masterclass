# EASY JAVA SOLUTION O(N) TIME & SPACE COMPLEXITY ✅

**Author:** vijayanvishnu
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/4532928/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/4532928/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There is a infinite stream of alphabets with ***abc...zabc..zabc.***.We need to find the total number of unique substring possible on the given **String s**.Let's consider a example 

**Example :** `zababc ` , possible substrings from starting..
Starts with z : `z`,`za`,`zab`
Starts with a : `a`,`ab` --> **Eqn . 1**
Starts with b : `b`
Starts with a : `a`,`ab`,`abc` --> **Eqn . 2**
Starts with b :`b`,`bc`
Starts with c : `c`
From the above conditions we can notice that the total unique sub-strings starts with any character is the maximum of the letter that holds after in the sequence as common (**Consider Eqn 1 and 2** from **Eqn 2** we can have longest and all substring that we can obtain form **Eqn 1**) from Infinite stream and  String s.
# Approach
<!-- Describe your approach to solving the problem. -->
Find the increasing sequnce of each character and store it in the DP , then maximum of the each charcater is added to get the total possible unique substrings.
# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int findSubstringInWraproundString(String s){
        int dp[] = new int[s.length()];
        dp[s.length() - 1] = 1;
        int maxArray[] = new int[26];
        maxArray[s.charAt(s.length()-1) - 'a'] = 1;
        for(int i = s.length() - 2 ; i >= 0 ; i--){
            if(s.charAt(i) == s.charAt(i+1) - 1 || s.charAt(i) == 'z' && s.charAt(i+1) == 'a'){
                dp[i] = 1 + dp[i+1];
            }else{
                dp[i] = 1;
            }
            int key = s.charAt(i) - 'a';
            maxArray[key] = Math.max(maxArray[key],dp[i]);
        }
        int res = 0;
        for(int i=0;i<26;i++){
            res = res + maxArray[i];
        }
        return res;
    }
}
```