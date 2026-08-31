# C++ O(n log(n-k)) unordered_map and priority_queue(maxheap) solution

**Author:** sxycwzwzq
**Votes:** 322
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/81624/](https://leetcode.com/problems/top-k-frequent-elements/solutions/81624/)

---


    class Solution {
    public:
        vector<int> topKFrequent(vector<int>& nums, int k) {
            unordered_map<int,int> map;
            for(int num : nums){
                map[num]++;
            }
            
            vector<int> res;
            // pair<first, second>: first is frequency,  second is number
            priority_queue<pair<int,int>> pq; 
            for(auto it = map.begin(); it != map.end(); it++){
                pq.push(make_pair(it->second, it->first));
                if(pq.size() > (int)map.size() - k){
                    res.push_back(pq.top().second);
                    pq.pop();
                }
            }
            return res;
        }
    };