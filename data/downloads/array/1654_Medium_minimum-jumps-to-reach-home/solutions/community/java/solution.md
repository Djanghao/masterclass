# [JAVA] BFS and DFS solution

**Author:** ycj28c
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/935504/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/935504/)

---

Trick:
1.Need monitor both index and direction
2.Can't go back twice, so max is Math.max(max value in forbidden, 2000) + 2 * b;

DFS
```
class Solution {
    private Map<String/*idx + direction*/, Integer> cache;
    public int minimumJumps(int[] forbidden, int a, int b, int x) {
        cache = new HashMap<>();
        Set<Integer> visited = new HashSet<>(); 
        Set<Integer> forbit = new HashSet<>();
        int maxLimit = 2000 + 2 * b;
        for(int num : forbidden){
            forbit.add(num);
            maxLimit = Math.max(maxLimit, num + 2 * b);
        }
        int val = helper(0, x, a, b, forbit, visited, 0, maxLimit);
        return val == Integer.MAX_VALUE ? -1 : val;
    }
    private int helper(int idx, int x, int a, int b, Set<Integer> forbit, Set<Integer> visited, int dir, int maxLimit){
        if(cache.containsKey(idx+","+dir)){
            return cache.get(idx+","+dir);
        }
        if(idx == x) return 0;
        if(idx < 0 || idx > maxLimit) return Integer.MAX_VALUE;
        visited.add(idx);
        int min = Integer.MAX_VALUE;
		//try jump forward
        if(idx+a < maxLimit && !forbit.contains(idx+a) && !visited.contains(idx+a)){
            int step = helper(idx+a, x, a, b, forbit, visited, 0, maxLimit);
            if(step != Integer.MAX_VALUE){
                min = Math.min(min, step + 1);
            }
        }
		//try jump back
       if(idx-b >= 0 && !forbit.contains(idx-b) && !visited.contains(idx-b) && dir != 1){
            int step = helper(idx-b, x, a, b, forbit, visited, 1, maxLimit);
            if(step != Integer.MAX_VALUE){
                min = Math.min(min, step + 1);
            }
        }
        visited.remove(idx);
        cache.put(idx+","+dir, min);
        return min;
    }
}
```
BFS
```
class Solution {
    public int minimumJumps(int[] forbidden, int a, int b, int x) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a1,a2)-> a1[0] - a2[0]);
        pq.offer(new int[]{0,0,0});//step, current index, direction(0 is back, 1 is forward)
        Set<Integer> forbit = new HashSet<>();
        Set<String> visited = new HashSet<>();
        int maxLimit = 2000 + 2 * b;
        for(int num : forbidden){
            forbit.add(num);
            maxLimit = Math.max(maxLimit, num + 2 * b);
        }
        while(!pq.isEmpty()){
            int[] node = pq.poll();
            int step = node[0];
            int idx = node[1];
            int dir = node[2];
            if(idx == x) return step;
			//try jump forward
            if(idx+a < maxLimit && !forbit.contains(idx+a) && !visited.contains(idx+a+","+0)){
                visited.add(idx+a+","+0);
                pq.offer(new int[]{step+1, idx+a, 0});
            }
			//try jump back
            if(idx-b >= 0 && !forbit.contains(idx-b) && !visited.contains(idx-b+","+1) && dir != 1){
                visited.add(idx-b+","+1);
                pq.offer(new int[]{step+1, idx-b, 1});
            }
        }
        return -1;
    }
}
```