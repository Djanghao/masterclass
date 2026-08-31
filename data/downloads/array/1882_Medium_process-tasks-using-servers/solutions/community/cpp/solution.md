# Poorly worded problem. Better explanation and C++ Priority Queue solution.

**Author:** buttercup_powerPuff
**Votes:** 19
**Link:** [https://leetcode.com/problems/process-tasks-using-servers/solutions/1240218/](https://leetcode.com/problems/process-tasks-using-servers/solutions/1240218/)

---

The problem is explained terribly in the statement and it is easy to miss the salient details.

**Actual Problem Statement**
	There is a queue of `M` tasks where `ith` task becomes available at the `ith` second and takes a duration of `tasks[i]` to be processed. We have `N` servers each with a `weight` and `index` of their own. When we have to schedule a task, we find a server that is free. If multiple servers are free, then we pick the one with least `weight`. If there are multiple servers with same `weight`, we pick the one with lowest `index`. When scheduling at time `t`, the selected server will be free again at `t + tasks[i]`.
	
Scheduling a task onto a server takes no time, so we can possibly schedule multiple tasks on multiple servers at the same time if we have the resources. If a task cannot be scheduled when it arrives, it must wait until there are free servers.

**Solution**
1. We maintain a task_queue which represents all the tasks that have arrived *so far*, in order.
2. We maintain a queue of free servers sorted first by their weight and then by their index.
3. We maintain a queue of busy servers sorted by when they will be free so that they can be moved onto free server queue later.

We can implement (2) and (3) by using priority queue. For (1), we can keep track of an extrinsic time variable and push new tasks to task_queue as and when we are ready to receive them.

```
class Solution {
public:
    vector<int> assignTasks(vector<int>& servers, vector<int>& tasks) {
        priority_queue<vector<long long>, vector<vector<long long>>, greater<vector<long long>>> free, busy; 
        for (int i = 0; i < servers.size(); ++i) {
            free.push(vector<long long>{servers[i], i});
        }
        vector<int> ans;
        long long time = 0;
        queue<int> task_queue;
        while (ans.size() < tasks.size()) { 
            // Bring all eligible tasks to task_queue.
            for (int i = ans.size() + task_queue.size(); i <= time && i < tasks.size(); ++i) {
                task_queue.push(tasks[i]);
            }
            // Bring all eligible servers to free queue.
            while (!busy.empty() && busy.top()[0] <= time) {
                auto& top = busy.top();
                free.push(vector<long long>{top[1], top[2]});
                busy.pop();
            }
            // If we have no servers, we cannot match until one of the servers becomes free.
            if (free.empty()) {
                time = busy.top()[0];
                continue;
            }
            while(!task_queue.empty() && !free.empty()) {
                // Now we just take the first task and first server as per defined priority and match the two.
                int task = task_queue.front(); 
                auto& top = free.top();
                ans.push_back(top[1]);
                busy.push(vector<long long>{time + task, top[0], top[1]});
                task_queue.pop();
                free.pop();
            }
            // Only increment time to receive new tasks once we have processed all tasks so far.
            if (task_queue.empty()) time++;
        }
        return ans;
    }
};
```