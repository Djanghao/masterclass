# [Java-O(nlogn)] HashMap+TreeSet without sorting.

**Author:** mausami
**Votes:** 5
**Link:** [https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/878329/](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/878329/)

---

3 Key point to choosen data structure to avoid sorting:

a) As we need all value of keyTime for individual keyname : use HashMap to map key and time.
b) keyTime(TreeSet) : use TreeSet bacuse treeset has a property to store value in sorted order,  sorting matters because we need to calculate any worker uses the key-card three or more times in a one-hour period.
c) return result in soreted order so again store value in Treeset.

Algorithm:
1. Map keyname as key and keyTime as value with convert time in minutes.
2. Traverse map and check differnce every 3rd to 1st time within 1hour. 

```
public List<String> alertNames(String[] keyName, String[] keyTime) {
        Map<String, TreeSet<Integer>> map = new HashMap<>();
        Set<String> res = new TreeSet<>();
        for(int i=0; i<keyName.length; i++) {
            if(!map.containsKey(keyName[i])) {
                map.put(keyName[i], new TreeSet<>());
            }
            String[] time = keyTime[i].split(":");
            int min = Integer.parseInt(time[0])*60 + Integer.parseInt(time[1]);
            map.get(keyName[i]).add(min);
        }
        
        for(Map.Entry<String, TreeSet<Integer>> m : map.entrySet()) {
            List<Integer> time = new ArrayList<>(m.getValue());
            for(int i=2; i<time.size(); i++) {
            if((time.get(i)-time.get(i-2)) <= 60) {
                res.add(m.getKey());
                break;
                }
            }
        }
        return new ArrayList<>(res);
    }