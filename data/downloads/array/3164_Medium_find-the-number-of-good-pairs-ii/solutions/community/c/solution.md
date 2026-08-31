# 🏆💢💯 Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅💥🔥💫Explained☠💥🔥 Beats 💯

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5212241/](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5212241/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    long long numberOfPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        unordered_map<int, int> map;
        for(auto& num : nums2)
            map[num * k]++;
        
        long long ans = 0;
        for(auto& num : nums1){
            vector<int> help;
            int b = num;
            for(int i = 1; i * i <= b; i++){
                if(b % i == 0){
                    ans += map[i];
                    if(i * i != b)
                        ans += map[b / i];
                }
            }
        }
        return ans;
    }
};
```