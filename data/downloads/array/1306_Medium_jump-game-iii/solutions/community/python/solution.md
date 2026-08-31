# [Java/C++/Python]Simple DFS

**Author:** abhi9720
**Votes:** 23
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/1619067/](https://leetcode.com/problems/jump-game-iii/solutions/1619067/)

---

**SIMPLE DFS STEPS :**
* Simply make all possible calls from current start positions.
```
	 canReach(arr,start+arr[start])
	 canReach(arr,start-arr[start])
```
* Mark current start positon by making it **negative** in pre area.
```
     arr[start] = -arr[start];
```
* and, **undo** **Pre area** work in **post area** of recursive call [doing this step important for interviews, as we are modifying data , need to set back to orginal  ]
```
	  arr[start]=-arr[start];// change data back to orginal 
```

Some checks need to take care :
	* if **start < 0** or **start > length of arr** , `return false`
	* it current start position already visted , **arr[start]<0** , `return false`
	
	
	
	
---
###  Java Code 
---
```
class Solution {
    public boolean canReach(int[] arr, int start) {
        if(start<0 || start>=arr.length || arr[start]<0){
            return false;
        }
        if(arr[start]==0){
            return true;
        }
        arr[start] = -arr[start];
        
        boolean ans1 = canReach(arr,start+arr[start]);
        boolean ans2 = canReach(arr,start-arr[start]);
        
        arr[start]=-arr[start];// change data back to orginal 
        return ans1||ans2;
        
    }
}
```

---
### C++ Code 
---

```
class Solution {
public:
    bool canReach(vector<int>& arr, int start) {
        if(start<0 || start>=arr.size() || arr[start]<0){
            return false;
        }
        if(arr[start]==0) return true;
        
        arr[start]= -arr[start];
        
        bool ans1 =  canReach(arr,start+arr[start]);
        bool ans2 =  canReach(arr,start-arr[start]);
        
        arr[start]= -arr[start];// change data back to orginal 
        
        return ans1 || ans2;
        
        
    }
};
```

---
### Python Code 
---
```
class Solution(object):
    def canReach(self, arr, start):
        if(start<0 or start>=len(arr) or arr[start]<0):
            return False
        
        if(arr[start]==0):
            return True
        
        arr[start]=-arr[start]
        ans1 =  self.canReach(arr,start+arr[start])
        ans2 =  self.canReach(arr,start-arr[start])
        
        arr[start] =  -arr[start] # change data back to orginal 
        
        return ans1 or ans2
```