# Basic C++ Solution | Non-Hashmap & Non-Set Solution | Basic Vector Solution | Most efficient | 85%

**Author:** shriyansh_jn
**Votes:** 286
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/2418134/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/2418134/)

---

Please do UPVOTE if this solution helps you.
```
class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        int i = 0;
        sort(arr.begin(),arr.end());
        vector<int> ans;
        while (i < arr.size()){
            int count = 1;
            for (int j = i+1; j< arr.size(); j++){
                if (arr[i] == arr[j])
                    count++;
            }
            ans.push_back(count);
            i = i + count;
        }
        sort(ans.begin(),ans.end());
        for (int i = 0; i < ans.size() - 1; i++){
            if (ans[i] == ans [i+1])
                return false;
        }
        return true;
    }
};
```