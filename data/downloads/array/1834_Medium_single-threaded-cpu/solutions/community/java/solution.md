# Simple Java Solution with detailed explanation (97% Faster)

**Author:** Sarthak_Singh_
**Votes:** 45
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2965290/](https://leetcode.com/problems/single-threaded-cpu/solutions/2965290/)

---

# Approach
- First of all we should see to it that if enqueue time of a task less than or equal to currentTime, then, all these tasks will be added into our available list.
- So we have to choose from the available list, some tasks that have less amount of required completion time.
- Also if many tasks have same completion time we will have to take the task with least index.
- Since we will be adding task to our available list at anytime, we use a priority queue so that when the task is added, we need not sort the array once again. Add operation in priority queue only takes logN time.

# Required Preprocessing
- Since we are to consider 3 factors, i.e enqueueTime, requiredTime and index, we will add index to every tasks[i].
- Also we will sort the tasks array based on it's enqueueTime, requiredTime and index respectively. We do this so that we can get all available tasks based on its enqueueTime.

# Base Case to Consider
- Consider the case [[20, 20], [60, 60]].
- Here after the 0th task gets completed, we will not be having any task in our queue.
- So we will ensure that, if our queue is empty, we will add next available task from our tasks list.

# Code
```
// TC = O(nlogn)
// SC = O(n)

class Solution {
    public int[] getOrder(int[][] tasks) {
        int n = tasks.length;
        Task [] arr = new Task[n];
        for(int i = 0 ;i<n;i++){
            arr[i] = new Task(i, tasks[i][0],tasks[i][1]);
        }

        Arrays.sort(arr, (a,b)->{
            return Integer.compare(a.enqueueTime,b.enqueueTime);
        });

        PriorityQueue<Task> p = new PriorityQueue<>((a,b)->{
            if(a.processingTime == b.processingTime){
                return Integer.compare(a.idx,b.idx);
            }
            return Integer.compare(a.processingTime,b.processingTime);
        });
        
        int[] ans = new int[n];
        int ansIdx = 0;
        int taskIdx = 0;
        int curTime= 0;

        while(ansIdx < n){
            while(taskIdx < n && arr[taskIdx].enqueueTime <= curTime){
                p.offer(arr[taskIdx++]);
            }
            if(p.isEmpty()){
                curTime = arr[taskIdx].enqueueTime;
            }else{
                curTime += p.peek().processingTime;
                ans[ansIdx++] = p.poll().idx;
            }
        }
        return ans;       
    }
    
    class Task {
        int idx;
        int enqueueTime;
        int processingTime;

        Task(int idx , int en , int pro){
            this.idx = idx;
            this.enqueueTime = en;
            this.processingTime = pro;
        }
    }
}
```