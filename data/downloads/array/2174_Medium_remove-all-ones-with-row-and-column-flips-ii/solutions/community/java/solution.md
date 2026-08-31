# Java Solution BFS + Bit Manipulation

**Author:** ndsjqwbbb
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/5154419/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/5154419/)

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
    public int removeOnes(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int initialstate = 0;
        for(int i = 0; i < rows; i++){
            for(int j = 0; j < cols; j++){
                if(grid[i][j] == 1){
                    initialstate |= 1 << (i * cols + j);
                }
            }
        }
        Deque<Integer> queue = new ArrayDeque<>();
        queue.offer(initialstate);
        Set<Integer> visited = new HashSet<>();
        visited.add(initialstate);
        int step = 0;
        while(!queue.isEmpty()){
            int size = queue.size();
            for(int k = 0; k < size; k++){
                int current = queue.poll();
                if(current == 0){
                    return step;
                }
                for(int i = 0; i < rows; i++){
                    for(int j = 0; j < cols; j++){
                        if(grid[i][j] == 0){
                            continue;
                        }
                        int next = current;
                        for(int r = 0; r < rows; r++){
                            next &= ~(1 << (r * cols + j));
                        }
                        for(int c = 0; c < cols; c++){
                            next &= ~(1 << (i * cols + c));
                        }
                        if(!visited.contains(next)){
                            visited.add(next);
                            queue.offer(next);
                        }
                    }
                }
            }
            step++;
        }
        return -1;
    }
}
```