# Easy LinearTime Solution | Java| Kotlin | Hyder Nabi

**Author:** HyderNabi
**Votes:** 0
**Link:** [https://leetcode.com/problems/self-crossing/solutions/3936031/](https://leetcode.com/problems/self-crossing/solutions/3936031/)

---


# Java
```
class Solution {
    public boolean isSelfCrossing(int[] distance) {
        if(distance.length<=3)return false;
        for(int i=3;i<distance.length;i++){
            if(distance[i-1]<=distance[i-3] && distance[i]>=distance[i-2])return true;
            if(i>=4 && distance[i-1] == distance[i-3] && distance[i]+distance[i-4] >= distance [i-2])return true;
            if (i>=5 && distance[i-5]+distance[i-1] >= distance[i-3] && distance[i-2] <= distance[i]+distance[i-4] && distance[i-2] >= distance[i-4] && distance[i-1]<=distance[i-3])return true;
        }
        return false;
    }
}
```
# Kotlin
```
class Solution {
    fun isSelfCrossing(distance: IntArray): Boolean {
        if(distance.size<=3)return false
        for(i in 3..distance.size-1){
            if(distance[i-1]<=distance[i-3] && distance[i]>=distance[i-2])return true
            if(i>=4 && distance[i-1] == distance[i-3] && distance[i]+distance[i-4] >= distance [i-2])return true
            if (i>=5 && distance[i-5]+distance[i-1] >= distance[i-3] && distance[i-2] <= distance[i]+distance[i-4] && distance[i-2] >= distance[i-4] && distance[i-1]<=distance[i-3])return true
        }
        return false
    }
}
```