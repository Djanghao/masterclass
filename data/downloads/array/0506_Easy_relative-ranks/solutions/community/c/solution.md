# [C++] | Easy | Priority Queue | Short | 12 ms

**Author:** dexter_2000
**Votes:** 25
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/1325427/](https://leetcode.com/problems/relative-ranks/solutions/1325427/)

---

```
vector<string> findRelativeRanks(vector<int>& score) {
        priority_queue<pair<int,int>>q;
        for(int i=0;i<size(score);i++)
            q.push({score[i],i});
        int i=0;
        vector<string>a(size(q));
        while(!q.empty()){
            a[q.top().second]=i==0?"Gold Medal":i==1?"Silver Medal":i==2?"Bronze Medal":to_string(i+1);
            i++;
            q.pop();
        }
        return a;
    }