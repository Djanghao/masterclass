# Neat & clean explanation || Clean code || C++ || MinHeap.

**Author:** binayKr
**Votes:** 47
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2236294/](https://leetcode.com/problems/single-threaded-cpu/solutions/2236294/)

---


##  ***EXPLANATION USING COMMENTS :***
---------------------------------------------------------------------------------------------------------------------------------------------------------

***--> Indexing all the tasks so they dont loose their identity while calculating the answer.***

***--> Sort  the tasks.***

***--> Keep pushing tasks into queue while the enqueueing time of next task is lower than the current time.***

***--> If queue is empty and still the outer loop is running...then this means we still have tasks and also the queue is empty ---> CPU is idle from 't'(current time) to tasks[i][0](next enqueueing time).***

***--> If queue is not empty and also the next enqueueing time is greater than curr time!! that means we do the task having shortest burst time untill our current time is equal of greater than the enqueueing time of next task.***

***--> While poping from queue, keep pushing every index in answer vector.***




```
class Solution {
public:
    vector<int> getOrder(vector<vector<int>>& tasks) {
       int n = tasks.size();
        for(int i=0; i<n; i++) tasks[i].push_back(i); //indexing all the tasks so they dont loose their identity
        sort(tasks.begin(),tasks.end());
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq; //min heap
        vector<int> ans;
        
        int i =0;
        long long t = tasks[0][0]; // current time
        
        while(!pq.empty() or i<n)
        {
            while(i<n && t>=tasks[i][0]) //keep pushing tasks into queue while the enqueueing time of next task is lower than the current time!!
             {
                pq.push({tasks[i][1],tasks[i][2]});
                i++;
             }
           
            if(pq.empty()) //if queue is empty and still the outer loop is running...then this means we still have tasks and also the queue is empty ---> CPU is idle from 't'(current time) t0 tasks[i][0](next enqueueing time)!!
            {
                t = tasks[i][0];
            }
            
            else  //queue is not empty and also the next enqueueing time is greater than curr time!! that means we do the task having shortest burst time untill our current time is equal of greater than the enqueueing time of next task
            {
               pair<int,int> p = pq.top();
               pq.pop();
               ans.push_back(p.second);
               t += p.first; 
            }  
        }
        return ans;
    }
};
```

#### *Also if you really like the Explanation please do upvote to keep me motivated to write such solution.*

