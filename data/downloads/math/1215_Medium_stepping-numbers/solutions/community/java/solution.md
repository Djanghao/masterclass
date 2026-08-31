# Java Solution BFS

**Author:** ndsjqwbbb
**Votes:** 0
**Link:** [https://leetcode.com/problems/stepping-numbers/solutions/4925633/](https://leetcode.com/problems/stepping-numbers/solutions/4925633/)

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
    public List<Integer> countSteppingNumbers(int low, int high) {
        List<Integer> result = new ArrayList<>();
        Queue<Integer> queue = new ArrayDeque<>();
        if(low == 0){
            result.add(0);
        }
        for(int i = 1; i <= 9; i++){
            queue.offer(i);
        }
        while(!queue.isEmpty()){
            int current = queue.poll();
            if(current >= low && current <= high){
                result.add(current);
            }
            if(current > high / 10){
                continue;
            }
            int lastdigit = current % 10;
            if(lastdigit != 0){
                int pre = lastdigit - 1;
                int num = current * 10 + pre;
                queue.offer(num);
            }
            if(lastdigit != 9){
                int next = lastdigit + 1;
                int num = current * 10 + next;
                queue.offer(num);
            }
        }
        return result;
    }
}
```