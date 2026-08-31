# Java | HashSet + Queue

**Author:** luozhengjiafei
**Votes:** 1
**Link:** [https://leetcode.com/problems/alt-and-tab-simulation/solutions/5571204/](https://leetcode.com/problems/alt-and-tab-simulation/solutions/5571204/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int[] simulationResult(int[] windows, int[] queries) {
        HashSet<Integer> set = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        for(int i=queries.length-1;i>=0;i--){
            if(queue.isEmpty()){
                queue.add(queries[i]);
            }else{
                if(set.contains(queries[i])){
                    continue;
                }else{
                    queue.add(queries[i]);
                }
            }
            set.add(queries[i]);
        }

        int[] result = new int[windows.length];
        int index = 0;
        while(!queue.isEmpty()){
            result[index] = queue.poll();
            index++;
        }
        System.out.println(index);
        for(int i=0;i<windows.length;i++){
            if(!set.contains(windows[i])){
                result[index] = windows[i];
                index++;
            }
        }
        return result;
    }
}
```