# Java Monostack for both directions O(mn)

**Author:** Student2091
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/2082660/](https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/2082660/)

---

Maintain a monostack and pop an element off and increment answer by 1 when the current height is more than the top element on the stack.

There is one thing to watch out for - when the current element is equal to the top element on the stack, do not push it onto the stack, just skip it. If we push onto the stack, it will lead to future bigger elements to over count. 

Time Complextiy: O(MN)
```Java
class Solution {
    public int[][] seePeople(int[][] heights) {
        int m = heights.length, n = heights[0].length;
        int[][] ans = new int[m][n];
        for (int i = 0; i < n; i++){ // DOWN
            Deque<Integer> stack = new ArrayDeque<>();
            for (int j = m - 1; j >= 0; j--){
                while(!stack.isEmpty() && heights[j][i] > stack.peek()){
                    ans[j][i]++;
                    stack.pop();
                }
                if (!stack.isEmpty()){
                    ans[j][i]++;
                }
                if (stack.isEmpty() || heights[j][i] != stack.peek()){
                    stack.push(heights[j][i]);
                }
            }
        }

        for (int i = 0; i < m; i++){ // RIGHT
            Deque<Integer> stack = new ArrayDeque<>();
            for (int j = n - 1; j >= 0; j--){
                while(!stack.isEmpty() && heights[i][j] > stack.peek()){
                    ans[i][j]++;
                    stack.pop();
                }
                if (!stack.isEmpty()){
                    ans[i][j]++;
                }
                if (stack.isEmpty() || heights[i][j] != stack.peek()){
                    stack.push(heights[i][j]);
                }
            }
        }

        return ans;
    }
}
```