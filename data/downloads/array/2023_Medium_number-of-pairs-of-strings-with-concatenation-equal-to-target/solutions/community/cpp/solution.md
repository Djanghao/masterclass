# ✅ Short & Self Explanatory | 2 Approaches | C++ | Beginner friendly

**Author:** rajat_gupta_
**Votes:** 28
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/1500500/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/1500500/)

---

**Brute Force Approach**
**Time: O(n^2) where n is size of nums**
**Space: O(1)**
```
class Solution {
public:
    int numOfPairs(vector<string>& nums, string target) {
        int ans=0;
        for(int i=0;i<nums.size();i++){
            for(int j=0;j<nums.size();j++){
                if(i!=j and target == nums[i]+nums[j]){
                    ans++;
                }
            }
        }
        return ans;
    }
};
```
**Using unordered map**
**Time: O(n + mk) where where n is size of nums, m is target size and k is the length of the resulting substring.
Space: O(n)**
```
class Solution {
public:
    int numOfPairs(vector<string>& nums, string target) {
        int cnt=0;
        int n=target.size();
        unordered_map<string, int> map;
        for(auto digit : nums)
            map[digit]++;
        
        for(int i=0; i<target.size(); i++){
            string s1=target.substr(0,i);
            string s2=target.substr(i,n);
            if(s1 == s2){
               cnt+=map[s1]*(map[s2]-1);
            }else{
                cnt+=map[s1]*map[s2]; 
            }
        }
        return cnt;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
