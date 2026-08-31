# [JAVA] Using Tree Set

**Author:** miyamura
**Votes:** 65
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/806942/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/806942/)

---

Looking for the **last** step where length `m` was found coming from the **front** is the **same as** looking for the **first** step where length `m` was found coming from the **back**.
	So coming from back instead of adding **1**s we have to remove them, or we can say we are adding walls in between the **1**s. So if at any step we find two walls which are at a distance of `m`, means that there are `m` **1**s in between those two walls. Then this step we would be the answer.
`TreeSet.ceiling(pos)` finds nearest righside wall from `pos`.
`TreeSet.floor(pos)` finds nearest leftside wall from `pos`.
Here the set contains positions of walls.
```
		int n = arr.length;
        if(m == n)
            return n;
        
        TreeSet<Integer> walls = new TreeSet<Integer>();
        walls.add(0);
        walls.add(n+1);
        
        for(int i=n-1;i>=0;i--){
            int left = walls.floor(arr[i]);
            int right = walls.ceiling(arr[i]);
            if(arr[i]-left-1 == m || right-arr[i]-1 == m)
                return i;
            walls.add(arr[i]);
        }
        
        return -1;
```