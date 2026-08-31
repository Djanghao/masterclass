# [C++] My thought process | Explanation with code | LIS

**Author:** annashekhawat
**Votes:** 26
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/999142/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/999142/)

---

**Important observation 1**: We need to find the minimum number of integers missing in arr such that target can be a subsequence of arr. Or in other words, we need to find the maximum number of integers in target such that they already form a subsequence of arr. Then we\u2019ll know that the remaining integers will have to be inserted in arr. Or in simpler words, we need to find the length of longest common subsequence between target and arr.

**Important observation 2**: Normally finding the longest common subsequence is an O(n * m) problem. But here, we have additional information, which is that target has distinct integers. This allows us to create a reverse index, in which we can store the index at which an integer appears in target. Now the problem becomes finding the longest subsequence in arr such that the corresponding indices of those integers in target are strictly increasing. This is the longest increasing subsequence problem that can be solved in O(nlogn). We can ignore the integers that do not occur in the target array.

**Time complexity**: O(n log(m)) because of the binary search, where n = length of arr, and m = length of target.

```
class Solution {
public:
    vector<int> ans;
    
    void bin(int lo, int hi, int num) {
        if(lo == hi) {
            ans[lo] = num;
            return;
        }
        int mid = (lo + hi) / 2;
        if(ans[mid] < num) bin(mid + 1, hi, num);
        else bin(lo, mid, num);
    }
    
    int minOperations(vector<int>& target, vector<int>& arr) {
        unordered_map<int, int> idx;
        for(int i = 0; i < target.size(); i++) {
            idx[target[i]] = i;
        }
        
        for(int i = 0; i < arr.size(); i++) {
            if(idx.find(arr[i]) == idx.end()) continue;
            int num = idx[arr[i]];
            if(ans.size() == 0 || num > ans.back()) {
                ans.push_back(num);
            }
            else {
                bin(0, ans.size() - 1, num);
            }
        }
        
        return (target.size() - ans.size());
    }
};
```