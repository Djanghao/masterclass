# Java Solution DFS

**Author:** ndsjqwbbb
**Votes:** 1
**Link:** [https://leetcode.com/problems/kill-process/solutions/4621987/](https://leetcode.com/problems/kill-process/solutions/4621987/)

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
    public List<Integer> killProcess(List<Integer> pid, List<Integer> ppid, int kill) {
        List<Integer> result = new ArrayList<>();
        Map<Integer, List<Integer>> map = new HashMap<>();
        for(int i = 0; i < pid.size(); i++){
            int child = pid.get(i);
            int parent = ppid.get(i);
            map.putIfAbsent(parent, new ArrayList<>());
            map.get(parent).add(child);
        }
        helper(kill, result, map);
        return result;
    }
    private void helper(int start, List<Integer> result, Map<Integer, List<Integer>> map){
        result.add(start);
        List<Integer> children = map.get(start);
        if(children == null){
            return;
        }
        for(int child : children){
            helper(child, result, map);
        }
    }
}
```