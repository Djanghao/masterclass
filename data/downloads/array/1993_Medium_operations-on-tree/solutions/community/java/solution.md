# Java - Two HashMap + BFS

**Author:** LucidDream
**Votes:** 5
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/1468213/](https://leetcode.com/problems/operations-on-tree/solutions/1468213/)

---

Lock and unlock are intuitive by using one hashmap.
Upgrade requires another hashmap to pass OJ. I initially scan the parent array to get node's children, but got TLE. Therefore, I created another hashmap to store node's children. After having children map, we can traverse node's descendants by using a queue, basically a BFS.
```
class LockingTree {
    int[] p;
    Map<Integer, Integer> map = new HashMap<>();
    Map<Integer, List<Integer>> children = new HashMap<>();
    public LockingTree(int[] parent) {
        p = parent;
        for(int i = 0; i < p.length; i ++) {
            children.put(i, new ArrayList<>());
        }
        for(int i = 1; i < p.length; i ++) {
            children.get(p[i]).add(i);
        }
    }
    
    public boolean lock(int num, int user) {
        if(!map.containsKey(num)) {
            map.put(num, user);
            return true;
        } 
        return false;
    }
    
    public boolean unlock(int num, int user) {
        if(map.containsKey(num) && map.get(num) == user) {
            map.remove(num);
            return true;
        }
        return false;
    }
    
    public boolean upgrade(int num, int user) {
        //check the node
        if(map.containsKey(num)) return false;
        //check Ancestor
        int ori = num;
        while(p[num] != -1) {
            if(map.get(p[num]) != null) return false;
            num = p[num];
        }
        //check Decendant
        Queue<Integer> q = new LinkedList<>();
        List<Integer> child = children.get(ori);
        if(child != null) {
            for(int c : child) q.offer(c);
        }
        boolean lock = false;
        while(!q.isEmpty()) {
            int cur = q.poll();
            if(map.get(cur) != null) {
                lock = true;
                map.remove(cur); // unlock
            }
            List<Integer> cc = children.get(cur);
            if(cc != null) {
                for(int c : cc) q.offer(c);
            }
        }        
        if(!lock) return false;
        map.put(ori, user); // lock the original node
        return true;
    }
}
```