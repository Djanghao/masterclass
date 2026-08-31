# Concise Binary Search || C++

**Author:** JakevK
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278127/](https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278127/)

---

No need for a trie - just do a whole lotta binary searching.
```
class Solution {
public:
    int bsearch(vector<int>& nums, int l, int r, int mask) {
        // Return min index i (l <= i < r), such that (nums[i] & mask) != 0
        while (l < r) {
            int mid = (l+r) / 2;
            if (mask & nums[mid]) r = mid;
            else l = mid+1;
        }
        return l;
    }
    
    int maximumStrongPairXor(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int ans = 0;
        
        for (int i = 0; i < nums.size(); ++i) {
            int l = i, r = upper_bound(nums.begin(), nums.end(), nums[i]*2) - nums.begin();
            
            for (int mask = 1 << 20; mask; mask >>= 1) {
                int nl = l, nr = r;
                ((mask & nums[i]) ? nr : nl) = bsearch(nums, l, r, mask);
                if (nl != nr) l = nl, r = nr;
            }
            
            ans = max(ans, nums[i] ^ nums[l]);
        }
        
        return ans;
    }
};
```