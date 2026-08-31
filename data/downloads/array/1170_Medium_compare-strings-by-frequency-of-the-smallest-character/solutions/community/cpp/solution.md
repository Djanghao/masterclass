# ✅ [c++] || frequency array + sorting + binary search(upper_bound)

**Author:** xor09
**Votes:** 4
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/1767409/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/1767409/)

---

**Time:** `O(n*log(n))`
```
class Solution {
public:
    int helper(string &word){
        vector<int> arr(26,0);
        for(char &ch : word){
            arr[ch-'a']++;
        }
        for(int i=0; i<26; ++i){
            if(arr[i]!=0){ 
                return arr[i];
            }
        }
        return -1;
    }
    
    vector<int> numSmallerByFrequency(vector<string>& queries, vector<string>& words) {
        vector<int> ans;
        
        vector<int> v;
        for(auto &w : words){
            int freq = helper(w);
            v.push_back(freq);
        }
        sort(v.begin(), v.end());
        int size = v.size();
        
        for(auto &q : queries){
            int freq = helper(q);
            int idx = upper_bound(v.begin(), v.end(), freq) - v.begin();
            ans.push_back(size-idx);
        }
        
        return ans;
    }
};
```
please **UPVOTE**