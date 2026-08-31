# Java Binary Search + TreeMap Solution with comments

**Author:** pathey
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/6059768/](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/6059768/)

---

So if you want to find maximum number of tasks that can be completed with given sets of workers, tasks and pills we can divide the problem in following way 

1) First if we are given n (The maximum number of tasks we can finish can we check if it possible to finish n tasks with workers & pills)
2) If we can efficiently check for any given n we can apply binary search to find the maximum value of n.

First sort the tasks & workers array.

Now in order to check if n tasks can be finished or not first step is to select which n tasks we want to finish & which n workers will finish those tasks. We can always take tasks which require least strength, so first n tasks and we can take workers with most strength so last n workers.  

Once we have selected tasks and workers now we have to see if workers can finish those tasks or not now checking part is a little tricky one first will take the worker with least strength & try to assign the smallest tasks to the worker now here two cases are possible

case 1) worker has enough strength to finish the task
case 2) worker does not have strength to finish the task

For case 1 we can simply move to next worker and next task
For case 2 we will have to give the worker a pill to increase the strength of the worker otherwise we won't be able to fullfill the number of tasks so if we have no pills left it is not possible to finish n tasks, Once worker has received the pill we will try to find the maximum strength task the worker can do out of all remaining tasks, We can use TreeMap to find such task with getFloorKey(x) function which will return largest key which is smaller or equal to x. And we will assign that task to the worker and move forward. If we reach till end we can complete n tasks so will return true


```
class Solution {
    public int maxTaskAssign(int[] tasks, int[] workers, int pills, int strength) {
        Arrays.sort(tasks);
        Arrays.sort(workers);
        int low=0;
        int high=tasks.length;
        int ans=0;
        while(low<=high)
        {
            int mid=(low+high)/2;
			//Check if  task assignment is possible
            if(isPossible(tasks,workers,pills,strength,mid))
            {
                ans=mid;
                low=mid+1;
            }else{
                high=mid-1;
            }
        }
        return ans;
        
    }
    
    public boolean isPossible(int tasks[],int workers[],int pills,int strength,int n)
    {
        if(Math.min(workers.length,tasks.length)<n)
            return false;
        TreeMap<Integer,Integer> tm=new TreeMap<>();
		
		//Will add smallest n tasks to treemap
        for(int i=0;i<n;i++)
        {
            tm.put(tasks[i],tm.getOrDefault(tasks[i],0)+1);
        }
		
		//Will take n workers with most strength
        for(int j=workers.length-n;j<workers.length;j++)
        {
            int smallest=tm.firstKey();
            if(workers[j]<smallest)
            {
				//case 2: worker can not finish the task without the pill
                if(pills==0)
                    return false;
                pills--;
                if(tm.floorKey(workers[j]+strength)!=null)
                    smallest=tm.floorKey(workers[j]+strength);
                else
                    return false;
                
            }
            //smallest is the task which workers[j] can do
            if(tm.get(smallest)==1)
                tm.remove(smallest);
            else
                tm.put(smallest,tm.get(smallest)-1);
        }
        return true;
    }
    
  
}
```