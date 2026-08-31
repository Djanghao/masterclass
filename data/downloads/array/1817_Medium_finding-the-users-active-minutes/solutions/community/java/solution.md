# JAVA || HashMap + HashSet

**Author:** HIMANSHUCHHIKARA
**Votes:** 36
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1141528/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1141528/)

---

**Idea:**
* Goal is to get unique time for every id. Unique gives birth to HashMap or HashSet in 90% cases.
So we can Maintain a HashMap<Integer,HashSet< Integer>> where `key : ids and value:HashSet of time`

**Code:**
```
public int[] findingUsersActiveMinutes(int[][] logs, int k) {
        int[] result=new int[k];
        HashMap<Integer,HashSet<Integer>> map=new HashMap<>();
        
        for(int[] log:logs){
            int id=log[0];
            int t=log[1];
            if(!map.containsKey(id)) map.put(id,new HashSet<>());
            map.get(id).add(t);
        }
        
        for(int id:map.keySet()){
             int UAM=map.get(id).size();
             result[UAM-1]++;  
        }
        return result;
    }
```	

Complexity:
`Time:O(n) and O(n+k) where n=logs.length`

Please **UPVOTE** if found it helpful and feel free to reach out to me or comment down if you have any doubt.