# C++ || Very Easy and Simple To Understand Solution

**Author:** kreakEmp
**Votes:** 11
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/2947767/](https://leetcode.com/problems/reward-top-k-students/solutions/2947767/)

---


```
class Solution {
public:
    vector<int> topStudents(vector<string>& positive_feedback, vector<string>& negative_feedback, vector<string>& report, vector<int>& student_id, int k) {
        auto comp = [](pair<int, int> &a, pair<int, int> &b){
          if(a.first == b.first) return a.second > b.second;
          return a.first < b.first;
        };
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(comp)> pq(comp);
        unordered_set<string> pos, neg;
        for(auto s: positive_feedback) pos.insert(s);
        for(auto s: negative_feedback) neg.insert(s);
        for(int i = 0; i < report.size(); ++i){
            int l = 0, r = 0, rew = 0;
            string t = report[i];
            while( r < t.size()){
                if(t[r] == ' '){
                    string s = t.substr(l, r-l); //cout<<s<<endl;
                    if(pos.find(s) != pos.end()) rew += 3;
                    else if(neg.find(s) != neg.end()) rew -= 1;
                    l = r+1;
                }
                r++;
            }
            string s = t.substr(l, r-l);
            if(pos.find(s) != pos.end()) rew += 3;
            else if(neg.find(s) != neg.end()) rew -= 1;
            pq.push({rew, student_id[i]});  
        }
        vector<int> ans;
        while(pq.size() > 0 && k--){
            ans.push_back(pq.top().second); //cout<<pq.top().first<<" "<<pq.top().second<<endl;
            pq.pop();
        }
        return ans;
    }
};
```