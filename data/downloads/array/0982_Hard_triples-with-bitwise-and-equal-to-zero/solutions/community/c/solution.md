# C++ || MAP || TIME O(N*N) || EASY TO UNDERSTAND || SHORT & SWEET CODE

**Author:** yash___sharma_
**Votes:** 6
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/3347809/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/3347809/)

---

````
class Solution {
public:
    int countTriplets(vector<int>& nums) {
        unordered_map<int,int> mp;
        for(auto &i: nums){
            for(auto &j: nums){
                mp[i&j]++;
            }
        }
        int ans = 0;
        for(auto &i: nums){
            for(auto &j: mp){
                if((i&j.first)==0)ans += j.second;
            }
        }
        return ans;
    }
};
````