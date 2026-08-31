# Java solution beats 100%

**Author:** vishalmusale
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/3046586/](https://leetcode.com/problems/design-log-storage-system/solutions/3046586/)

---

# Complexity
- Time complexity: O(n) where 'n' is size of the list.

- Space complexity: O(n) where 'n' is size of the list.

# Code
```
public class LogSystem {
    List<Pair<Integer, String>> logs;
    public LogSystem() {
        logs = new LinkedList<>();
    }
    
    public void put(int id, String timestamp) {
        logs.add(new Pair<>(id, timestamp));
    }
    
    public List<Integer> retrieve(String s, String e, String gra) {
        int x=0;
        switch (gra){
            case "Year":
                x=4; 
                break;
            case "Month":
                x=7;
                break;
            case "Day":
                x=10;
                break;
            case "Hour":
                x=13;
                break;
            case "Minute":
                x=16;
                break;
            case "Second":
                x=19;
                break;
        }
        s=s.substring(0,x);
        e=e.substring(0,x);
        List<Integer> ans=new ArrayList<>();
        for(Pair<Integer, String> p: logs) {
            String ss=p.getValue().substring(0,x);
            if (ss.compareTo(s)>=0 && ss.compareTo(e)<=0) ans.add(p.getKey());
        }
        return ans;
    }
}

/**
 * Your LogSystem object will be instantiated and called as such:
 * LogSystem obj = new LogSystem();
 * obj.put(id,timestamp);
 * List<Integer> param_2 = obj.retrieve(start,end,granularity);
 */
```