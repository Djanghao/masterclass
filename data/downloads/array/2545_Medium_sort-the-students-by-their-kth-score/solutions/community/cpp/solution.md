# ✅C++ | ✅Max Heap(priority-queue) | ✅Explained with comments

**Author:** shm_47
**Votes:** 25
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3083937/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3083937/)

---


# Code
```
class Solution {
public:
    vector<vector<int>> sortTheStudents(vector<vector<int>>& score, int k) {
        int m = score.size();
        int n = score[0].size();
        
        //store col value and index in max heap
        priority_queue<pair<int, int>> pq;
        for(int i=0; i<m; i++){
            pq.push({score[i][k], i});
        }

        
        //now place rows first which have higher col value
        vector<vector<int>> res;
        while(!pq.empty()){
            int row = pq.top().second;
            pq.pop();
            res.push_back(score[row]);
        }
        
        return res;
    }
};
```


Do upvote if it helps:)

Check out my youtube channel for related content
https://www.youtube.com/@ignition548/featured