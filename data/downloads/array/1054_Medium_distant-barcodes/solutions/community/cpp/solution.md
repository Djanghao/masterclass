# Cpp || Greedy 100% easy with the help of Priority Queue

**Author:** 13_degree
**Votes:** 18
**Link:** [https://leetcode.com/problems/distant-barcodes/solutions/1060600/](https://leetcode.com/problems/distant-barcodes/solutions/1060600/)

---

```
class Solution {
public:
    vector<int> rearrangeBarcodes(vector<int>& nums) {
        if(nums.size() == 1 || nums.size() == 0)
            return nums;
        unordered_map<int,int> freq;
        for(auto& it:nums)
            freq[it]++;
        priority_queue<pair<int,int>> q;
        for(auto& it:freq)
            q.push(make_pair(it.second,it.first));
        nums.clear();
        while(q.top().first > 0)
        {
            pair<int,int> p = q.top();
            q.pop();
            nums.push_back(p.second);
            p.first--;
            pair<int,int> p2 = q.top();
            q.pop();
            if(p2.first > 0){
                nums.push_back(p2.second);
                p2.first--;
            }
            q.push(p);
            q.push(p2);
        }
        return nums;
    }
};
```

Upvote If You Like .................