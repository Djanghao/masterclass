# intuition explained | Video Solution | just sort | greedy | C++, JAVA

**Author:** i_pranav
**Votes:** 80
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/3286311/](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/3286311/)

---

# Intuition
Can We do this greedily? 
Q. If a task has the earliest end time would it be beneficial for me to run it as late as possible or as early as possible?
A. Obviously I would want to run it as late so that it has maximum overlap (if any) with other tasks. 


# Approach
The above observation can be extended to all task, so we need to sort the tasks based on their end time. Now for its duration check for the time slices at which we are already having our system on. For those we can run this task too. Let\u2019s say for the time in the range of this task the system was on for x unit of time. Now if our task requires a runtime of d units where d>x, then we would try to greedily run this for another d-x units (as late as possible). Let's run it as late as possible and then move to the next task in order. 
The code is self-explanatory. 
Video solution: https://youtu.be/M7CHCuhkYrI


# Complexity
- Time complexity:
o(n*TotalTimeDuration)

- Space complexity:
O(Total Time Duration)

# Code
C++
```C++
class Solution {
public:
    int findMinimumTime(vector<vector<int>>& tasks) {
        sort(tasks.begin(),tasks.end(),[](vector<int>& a,vector<int>& b){
            return (a[1]!=b[1])?a[1]<b[1]:a[0]<b[0];
        });
        unordered_map<int,bool> used;       // time_slice... used or not ... 
        
        int count=0;
        for(auto& task:tasks){
            int usedTime=0;
            for(int t=task[0];t<=task[1];t++)   if(used.count(t))   usedTime++;      // have used this time slice

            for(int t=task[1];usedTime<task[2];t--){
                if(!used.count(t)){         // this time slice is available
                    usedTime++;             // duration for which I run it
                    used[t]=1;              // use this timeslice
                    count++;                // time for which my computer is on 
                }
            }
        }
        return count;
    }
};

```

JAVA
```JAVA
class Solution {
    public int findMinimumTime(int[][] tasks) {
        Arrays.sort(tasks,(t1,t2)->(t1[1]==t2[1])?t1[0]-t2[0]:t1[1]-t2[1]);
        Set<Integer> used = new HashSet<>();
        int answer = 0;
        for(int[] task: tasks){
            int usedTime = 0;
            for(int i=task[0];i<=task[1];i++) if(used.contains(i)) usedTime++;
            int time_left = task[2]-usedTime;
            for(int i=task[1];time_left>0;i--){
                if(used.add(i)){
                    answer++;
                    time_left--;
                }
            }
        }
        return answer;
    }
}
```
[Thanks a lot for upvoting and supporting, you can subscribe the channel if you want to see more content on CP, DSA and problem solving:), I am glad this solution helped you!]
Happy coding!