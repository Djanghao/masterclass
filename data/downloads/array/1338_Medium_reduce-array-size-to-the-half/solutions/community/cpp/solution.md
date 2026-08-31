# Greedy || CPP || Simple

**Author:** Executioner01
**Votes:** 26
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/2442006/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/2442006/)

---

1. Count the frequency of all the elements
2. reverse sort or put the frequencies in pq
3. pop one by one and check if poped items sum up to n

```
class Solution {
public:
    int minSetSize(vector<int>& arr) {
        unordered_map<int,int>h;
        for(int i = 0; i < arr.size(); i++) h[arr[i]]++;
        priority_queue<int> pq;
        for(auto it: h) pq.push(it.second);
        int ans = 0, minus = 0;
        while(!pq.empty())
        {
            ans++;
            minus += pq.top();
            pq.pop();
            if(minus >= (arr.size()/2)) break;
        }
        return ans;
    }
};
```