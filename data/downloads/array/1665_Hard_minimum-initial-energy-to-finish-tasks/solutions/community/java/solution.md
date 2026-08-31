# JAVA

**Author:** lankesh
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/1674512/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/1674512/)

---

This question revolves around finding minimum cost to complete all the task
We we will use the idea of sorting according to difference of ```Minimum - actual```
in Descending order. 
This will help us in setting the initial value for energy required in such 
a way that left over after using the energy can be used for further demands and if further demand
is not  fulfilled, update the ```cur``` and ```initial``` requirement so that we can reach minimum
requirement of task.
repeat above process to finish all task....
Time Complexity : ```O(NlogN)```
Upvote if you like my explanation....!!!!

```class Solution {
    public int minimumEffort(int[][] tasks) {
        Arrays.sort(tasks,new Comparator<int[]>(){
                    public int compare(int[] a,int[] b){
                        if((a[1] - a[0]) > (b[1] - b[0]))
                            return -1;
                        else return 1;
                    }
                    });
        int initial = tasks[0][1];
        int cur = initial;
        for(int i[] : tasks){
            if(cur >= i[1]){
                cur -= i[0];
            }
            else{
                initial = initial + i[1] - cur;
                cur = i[1]-i[0];
            }
        } 
        return initial;
        
    }
}