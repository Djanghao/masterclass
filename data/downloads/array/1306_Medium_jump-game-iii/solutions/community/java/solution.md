# [JAVA/C++] | DFS | BFS | Detailed Explanation

**Author:** Chaitanya1706
**Votes:** 37
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/1618905/](https://leetcode.com/problems/jump-game-iii/solutions/1618905/)

---

**Intution:** Since you are given a starting index and you want to reach to the index where value is 0. So don't think much just start with your starting index and keep jumping to the index you can jump from the curr index until unless you reach index with value 0.
Now what should be the terminating conditions:
**1.)** if the curr index becomes out of range (i.e., 0>curIndex>=arr.length) then you cant reach any other index now, so no need to go further from there.
**2.)** If you reached the same index again, that means now you are stuck in a cycle, you will keep coming to and fro to this index so gain don't go further.
So if any of the two condition written above comes before reaching to the index having value 0 , directly leave checking further from there and check other direction because now its sure that you can't reach to your target indexat least from this index.

**Approach 1: BFS**
T.C : O(n)
S.C : O(n)

**JAVA**
```
class Solution{
    public static boolean canReach(int[] arr, int start) {
        int n = arr.length; 
        Queue<Integer> q = new LinkedList<>();
        q.add(start);
        
        while (!q.isEmpty()) {
            int curr = q.poll();
            
            if (arr[curr] == 0) return true;   // reached the target index
            
			// reached this index again, so not possible from this index but might be possible to reach from other direction, so check again in the queue
            if (arr[curr]<0) continue;   
            
            if (curr + arr[curr] < n)
                q.add(curr + arr[curr]);
            if (curr - arr[curr] >= 0)
                q.add(curr - arr[curr]);
            
            arr[curr] = -arr[curr];   // to distinguish between index coming first time or again
        }
        
        return false;
    }
}

```
**C++**
```
class Solution {
public:
    bool canReach(vector<int>& arr, int start) {
                
        int n=arr.size();
        
        queue<int> q;
        q.push(start);
    
        while(!q.empty()){
            int curr=q.front();
            q.pop();
                
            if(arr[curr]==0)
                return true;
            
            if(arr[curr]<0) continue;
            
            if (curr + arr[curr] < n)
                q.push(curr + arr[curr]);
            if (curr - arr[curr] >= 0)
                q.push(curr - arr[curr]);
            
            arr[curr] = -arr[curr];
            
        }
        return false;
    }
};
```

**Approach2: DFS**
T.C : O(n)
S.C : O(n) [memory used in recursion]

**JAVA**
```
class Solution {
    public boolean canReach(int[] arr, int start) {
	
        if(start<0 || start>=arr.length || arr[start]<0) return false;   // terminating conditions
        
        if(arr[start]==0){   //reached the target
            return true;
        }
        
        arr[start] = -arr[start];
        
        return canReach(arr,start+arr[start])||canReach(arr,start-arr[start]);   //checking in both direction
    }
}
```

**C++**
```
class Solution {
public:
    bool canReach(vector<int>& arr, int start) {
                
        if(start<0 || start >= arr.size() || arr[start]<0) return false;
        
        if(arr[start]==0) return true;
        
        arr[start] = -arr[start];
        
        return  canReach(arr, start + arr[start]) || canReach(arr, start - arr[start]);
    
    }
};

```
** In both the approaches if you don't want to change the value of given array then you can also use the extra space to keep track of visited indices using Array or HashSet.

Thanks for giving it a read!!