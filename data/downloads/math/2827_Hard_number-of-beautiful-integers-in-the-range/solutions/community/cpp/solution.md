# [C++ with explanation] Digit Dynamic Programming

**Author:** Code-O-Maniac
**Votes:** 62
**Link:** [https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3932035/](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3932035/)

---

**Overview**
This problem was a standard **Digit DP** problem. 

**How I figured it out as Digit DP?**
* The answer was to calculated for a range and the range was given from [low,high]. 
* Value of N was high. Iterating all numbers was not possible.

**Pre-requisite:**
* Knowledge of Digit DP.
* The resources I used were:
	* 	https://www.youtube.com/watch?v=5ag4kmHVs8k
	* 	The above video is from [Paras Saini](https://www.youtube.com/c/faadcoder/videos) Youtube Channel. You can look out his channel for some practice problems on Digit DP.
	
**How to calculate state required?**
* For any Digit DP problem, 2 states are for sure required, ```pos``` and ```tight```
* We can maintain 2 states for counting odd and even digits, ```odd``` and ```even``` 
* We need to maintain 1 state for storing the formed number as number % ```k``` because if this value is 0, we can say that number is divisible by ```k```. I named this state as ```sum```
Eg: 
```43 % 2 = 1, now I am attaching 6 to 43 => (43 * 10 + 6) % 2 = 0```
* The last state that I used was ```zero```. This was required to tackle numbers like ```09```, the leading zeros are not be considered. 

**Code**
```class Solution {
    int dp[2][12][12][12][20][2];
    int k;
    
    int gogo(string &s, int tight = 1, int pos = 0, int odd = 0, int even = 0, int sum = 0, bool zero = true) {
        if(pos == s.size())
            return !zero && sum == 0 && odd == even;
    
        if(dp[tight][pos][odd][even][sum][zero] != -1)
            return dp[tight][pos][odd][even][sum][zero];
        
        int start = 0;
        int end = (tight ? s[pos] - '0' : 9);
        int ans = (zero ? gogo(s, 0, pos + 1, odd, even, sum, zero) : 0);
        
        for(int i = start; i <= end; i++) {
            int newTight = (tight && (i == s[pos] - '0'));
            int newOdd = odd + (i % 2);
            int newEven = even + ((!zero || i > 0) && i % 2 == 0);
            
            if(zero && i != 0) {
                ans += gogo(s, newTight, pos + 1, newOdd, newEven, i, false);
            } else if(!zero) {
                ans += gogo(s, newTight, pos + 1, newOdd, newEven, (sum * 10 + i) % k, false);
            }
        }
        
        return dp[tight][pos][odd][even][sum][zero] = ans;
    }
public:
    int numberOfBeautifulIntegers(int low, int high, int k) {
        string s_low = to_string(low - 1);
        string s_high = to_string(high);
        this->k = k;
        
        memset(dp, -1, sizeof(dp));
        int maxi = gogo(s_high);

        memset(dp, -1, sizeof(dp));
        int mini = gogo(s_low);
        
        return maxi - mini;
    }
};
```
Please do upvote if you liked it! :)