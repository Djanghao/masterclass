# Easy to understand C++ Solution

**Author:** rajvir_singh
**Votes:** 34
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/5686683/](https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/5686683/)

---

# Complexity
- Time complexity: O(n^2)

- Space complexity: O(1)

# Code
```cpp []
class Solution {
private:
    bool almostEqual(int x, int y){
        string s1 = to_string(x), s2 = to_string(y);
        int n = s1.length(), m = s2.length();
        int maxLen = max(n, m);
        // make the lengths of 2 strings equal by adding zeros to the front
        while(n != maxLen){
            s1 = "0" + s1; n++;
        }
        while(m != maxLen){
            s2 = "0" + s2; m++;
        }
        int diff = 0;
        unordered_map<char,int> mp1, mp2;
        for(int i = 0; i < n; i++){
            diff += (s1[i] != s2[i]);
            mp1[s1[i]]++; mp2[s2[i]]++;
        }
        return diff <= 2 && mp1 == mp2;
    }
public:
    int countPairs(vector<int>& nums) {
        int n = nums.size(), count = 0;
        for(int i = 0; i < n; i++){
            for(int j = i+1; j < n; j++){
                count += almostEqual(nums[i], nums[j]);
            }
        }
        return count;
    }
};
```