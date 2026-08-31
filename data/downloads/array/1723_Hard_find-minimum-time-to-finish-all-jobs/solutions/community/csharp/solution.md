# Binary search and backTracking solution

**Author:** prparihar
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/4084561/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/4084561/)

---


# Complexity
- Time complexity:
Sorting -> O(nlogn) where n is the length of jobs

- Space complexity:
 Workers -> O(k)

# Code
```
public class Solution {
    public int MinimumTimeRequired(int[] jobs, int k) {
        Array.Sort(jobs);
        int left = jobs.Max();
        int right = jobs.Sum();

        while(left< right){
            var mid = left+ (right-left)/2;
            if(CanAssign(jobs,0,k,mid)){
                right = mid;
            }else{
                left = mid+1;
            }
        }
        
        return left;
    }
    private bool CanAssign(int[] jobs, int index, int k, int maxTime){
        var workers = new int[k];
        return BackTrack( jobs, index, workers, maxTime);
    }
    private bool BackTrack(int[] jobs, int index, int[] workers, int maxTime){
        if(index == jobs.Length){
            return true;
        }

        for(var i = 0; i<workers.Length; i++){
            if(workers[i]+jobs[index]<= maxTime){
                workers[i]+=jobs[index];
                if(BackTrack(jobs,index+1,workers,maxTime)){
                    return true;
                }
                workers[i]-=jobs[index];
            }
            if(workers[i]==0 || workers[i]+jobs[index]== maxTime){
                break;
            }
        }
        return false;
    }
}
```