# [JAVA] [BFS] [Detailed Analysis] O(n) BFS Solution

**Author:** watson_vj
**Votes:** 69
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/1236272/](https://leetcode.com/problems/jump-game-vii/solutions/1236272/)

---

Let's first understand the normal bfs approach in this problem. One might simply use a queue and add all the indexes which they can visit from current index (i.e all index in `[curr_idx + minJump, curr_idx + maxJump]`). And if one reaches the end index then return true. Simple! 

But now we can see that there are overlapping indexes which needs to be removed. So what one can do is simply use `visited` array/set to track the processed indexes and if it comes in next traversal it can be ignored. 

Approach (using visited array/set ) **[Will Give TLE]**

```
    public boolean canReach(String s, int minJump, int maxJump) {
        if(s.charAt(s.length() - 1) != '0')
            return false;
        
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[s.length()];
        queue.add(0);
        
        while(!queue.isEmpty()){
            int idx = queue.remove();
            if(idx == s.length() - 1)
                return true;
            for(int i = idx + minJump; i <= idx + maxJump && i < s.length(); i++){
                if(!visited[i] && s.charAt(i) == '0'){
                    visited[i] = true;
                    queue.add(i);
                }   
            }
        }
        
        return false;
    }
```

Let's now analyze why exactly we are facing TLE. Even though we are using set then also we are processing the already processed indexes. (How? Actually processing is happening in the inner loop, and in this solution also we are checking if the index is visited or not in the loop only so in worst case it will hit `O(N^2)`.

So how to avoid already processed indexes? What we can do is simply start our processing from the index till which we have already processed. For this we will keep track of **the maximum index till we have processed** and update it accordingly.

**Optimized Solution** [Time Complexity - O(N)]

```
class Solution {
    public boolean canReach(String s, int minJump, int maxJump) {
        if(s.charAt(s.length() - 1) != '0')
            return false;
        
        Queue<Integer> queue = new LinkedList<>();
        queue.add(0);
        
        // This variable tells us till which index we have processed
        int maxReach = 0;
        
        while(!queue.isEmpty()){
            int idx = queue.remove();
            // If we reached the last index
            if(idx == s.length() - 1)
                return true;
            
            // start the loop from max of [current maximum (idx + minJump), maximum processed index (maxReach)]
            for(int j = Math.max(idx + minJump, maxReach); j <= Math.min(idx + maxJump, s.length() - 1); j++){
                if(s.charAt(j) == '0')
                    queue.add(j);
            }
            
            // since we have processed till idx + maxJump so update maxReach to next index
            maxReach = Math.min(idx + maxJump + 1, s.length() - 1);
        }
        
        return false;
    }
}
```

I hope this helps!


