# [C++ with explanation] Digit Dynamic Programming

**Author:** Code-O-Maniac
**Votes:** 125
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/2422090/](https://leetcode.com/problems/count-special-integers/solutions/2422090/)

---

**Overview**
This problem was a standard **Digit DP** problem. THANKYOU Leetcode for a really good D question, after a long time! 

**How I figured it out as Digit DP?**
* The answer was to calculated for a range and the range was given from [1,N]. 
* Value of N was super high. Iterating all numbers was not possible.

**Pre-requisite:**
* Knowledge of Digit DP.
* The resources I used were:
	* 	https://www.youtube.com/watch?v=5ag4kmHVs8k
	* 	The above video is from [Paras Saini](https://www.youtube.com/c/faadcoder/videos) Youtube Channel. You can look out his channel for some practice problems on Digit DP.
	
**How to calculate state required?**
* For any Digit DP problem, 2 states are for sure required, ```pos``` and ```tight```
* The last state that I used was ```mask```. This was required to keep a track of all the digits used. 

**Code**
```class Solution {
    
    int dp[11][2][1024];
    
    int gogo(string &s, int tight = 1, int pos = 0, int mask = 0) {
        // Base case
        if(pos == s.size()) {
            // Mask = 0, represents 00000...0 which should not be counted
            return mask != 0;
        }
        
        // DP state
        if(dp[pos][tight][mask] != -1)
            return dp[pos][tight][mask];
        
        int ans = 0;

        if(tight == 1) {
            
            // Limit the current digit
            for(int i = 0; i <= s[pos] - '0'; i++) {
                
                // Check if digit repeated, ie, present in the mask
                if(mask & (1 << i)) continue;
                

                int newMask = (mask == 0 && i == 0 ? mask : (mask | (1 << i)));
                
                if(i == s[pos] - '0') {
                    // Tight case
                    ans += gogo(s, 1, pos + 1, newMask);
                } else {
                    ans += gogo(s, 0, pos + 1, newMask);
                }
            }
        } else {
            for(int i = 0; i <= 9; i++) {
                
                // Check if digit repeated, ie, present in the mask
                if(mask & (1 << i)) continue;
                
                int newMask = (mask == 0 && i == 0 ? mask : (mask | (1 << i)));
                ans += gogo(s, 0, pos + 1, newMask);
            }
        }
        return dp[pos][tight][mask] = ans;
    }
public:
    int countSpecialNumbers(int n) {
        string s = to_string(n);
        memset(dp, -1, sizeof(dp));
        return gogo(s);
    }
};
```
**Comments:**
Handling the edge case of 0 was tricky. You can see the solution where I formed ```newMask```. It uses a filter for the cases where 0 comes at the beginning.