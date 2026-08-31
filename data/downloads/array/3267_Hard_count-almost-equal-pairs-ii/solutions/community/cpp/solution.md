# Video Explanation (Optimising brute force solution using pre-computation)

**Author:** codingmohan
**Votes:** 17
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5689092/](https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5689092/)

---

# Explanation

[Click here for the video](https://youtu.be/t_1vwZbUmzI)

# Code
```cpp []
const int N = 1e7;
int cnt[N];

class Solution {
    
    inline int MakeNumber (vector<int>& digits) {
        int ans = 0;
        for (auto it = digits.rbegin(); it != digits.rend(); it ++)
            ans = (ans * 10) + *it;
        return ans;
    } 
    
public:
    int countPairs(vector<int>& nums) {
        memset(cnt, 0, sizeof(cnt));
        int ans = 0;
        int n = 7;
        vector<int> digits(7, 0);
        
        for (auto i : nums) {
            ans += cnt[i];
            
            int ind = 0;
            while (i) {
                digits[ind ++] = i%10;
                i /= 10;
            }
            while (ind < 7) digits[ind++] = 0;
            
            unordered_set<int> all;
            for (int l1 = 0; l1 < n; l1 ++) {
                for (int r1 = l1+1; r1 < n; r1 ++) {
                    swap (digits[l1], digits[r1]);                            
                    all.insert(MakeNumber(digits));
                    swap (digits[l1], digits[r1]);
                    
                    for (int l2 = 0; l2 < n; l2 ++) {
                        for (int r2 = l2+1; r2 < n; r2 ++) {
                            swap (digits[l1], digits[r1]);
                            swap (digits[l2], digits[r2]);
                            
                            all.insert(MakeNumber(digits));
                            
                            swap (digits[l2], digits[r2]);
                            swap (digits[l1], digits[r1]);
                        }
                    }
                }
            } 
            for (auto it : all) cnt[it] ++;
        }
        return ans;
    }
};
```