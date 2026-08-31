# Java TreeMap+prefix sum

**Author:** qiuwuxue
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3982203/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3982203/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->



# Code
```
class Solution {
    public long[] maximumCoins(int[] heroes, int[] monsters, int[] coins) {
        TreeMap<Integer, Long> tm = new TreeMap<>();
        for (int i=0; i<coins.length; i++)
            tm.put(monsters[i], tm.getOrDefault(monsters[i], 0L)+coins[i]);
        
        Integer key = tm.firstKey();
        long psum = 0;

        while(key!=null){
            psum+=tm.get(key);
            tm.put(key, psum);
            key = tm.higherKey(key);
        }

        long[] res = new long[heroes.length];
        for (int i=0; i<heroes.length; i++){
            Integer j = tm.floorKey(heroes[i]);
            if (j!=null) res[i] = tm.get(j);
        }

        return res;
    }
}
```