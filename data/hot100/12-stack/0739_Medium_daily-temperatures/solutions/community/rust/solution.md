# Beats 100% 🚀 ➡️💯 Full Explained ➡️ [Java/C++/C/JavaScript/Python3/Rust/C#]

**Author:** Shivansu_7
**Votes:** 12
**Link:** [https://leetcode.com/problems/daily-temperatures/solutions/4652993/](https://leetcode.com/problems/daily-temperatures/solutions/4652993/)

---

# Intuition
1. If the temperature is say, 70 today, then in the future a warmer temperature must be either 71, 72, 73, ..., 99, or 100. We could remember when all of them occur next.
2. So last day will have 0 as answer, since there is no next day.
3. We will STACK, and traverse temperature array form left to right, and keep the STACK monotonic, simple terms it will be in decreasing order, so that the temperature which is maximum encounterd so far will be on top of stack.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initialization:** Initialize variables including the length of the input array (`n`), an array to store the result (`ans`), and a stack (`st`) to keep track of indices.
2. **Iterating from Right to Left:** Start iterating through the temperatures array from right to left (`for(int i=n-1; i>=0; i--)`). This is because we're interested in finding warmer temperatures occurring after the current day.
3. **Stack for Indices:** Use a stack to keep track of indices of temperatures that we haven't found warmer temperatures for yet.
4. **While Loop:** Inside the loop, check if the stack is not empty and if the temperature at the current index is greater than or equal to the temperature at the index on the top of the stack (`while(!st.isEmpty() && temperatures[i] >= temperatures[st.peek()])`). If it is, pop elements from the stack until the temperature at the current index is less than the temperature at the top of the stack.
5. **Calculating Days Until Warmer:** After the while loop, if the stack is empty, it means there are no warmer temperatures ahead for the current day, so set the result at the current index (`ans[i]`) to 0. Otherwise, calculate the number of days until warmer temperatures occur by subtracting the current index from the index on the top of the stack and store it in the result array.
6. **Push Current Index to Stack:** Finally, push the current index onto the stack as it represents a potential warmer temperature for future days.
7. **Return Result:** After iterating through all days, return the result array containing the number of days until warmer temperatures occur for each day in the input array.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] ans = new int[n];
        Stack<Integer> st = new Stack<>();

        for(int i=n-1; i>=0; i--) {
            while(!st.isEmpty() && temperatures[i] >= temperatures[st.peek()]) {
                st.pop();
            }
            ans[i] = st.isEmpty() ? 0 : st.peek() - i;
            st.push(i);
        }
        return ans;
    }
}
```
```C++ []
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> ans(n, 0);
        stack<int> st;

        for (int i = n - 1; i >= 0; --i) {
            while (!st.empty() && temperatures[i] >= temperatures[st.top()]) {
                st.pop();
            }
            ans[i] = st.empty() ? 0 : st.top() - i;
            st.push(i);
        }

        return ans;
    }
};
```
```Python3 []
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        ans = [0] * n
        st = []

        for i in range(n - 1, -1, -1):
            while st and temperatures[i] >= temperatures[st[-1]]:
                st.pop()
            ans[i] = st[-1] - i if st else 0
            st.append(i)
        
        return ans
```
```JavaScript []
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const ans = new Array(n).fill(0);
    const st = [];

    for (let i = n - 1; i >= 0; i--) {
        while (st.length && temperatures[i] >= temperatures[st[st.length - 1]]) {
            st.pop();
        }
        ans[i] = st.length ? st[st.length - 1] - i : 0;
        st.push(i);
    }
    
    return ans;
};
```
```Rust []
pub fn daily_temperatures(temperatures: Vec<i32>) -> Vec<i32> {
    let n = temperatures.len();
    let mut ans = vec![0; n];
    let mut st = Vec::new();

    for i in (0..n).rev() {
        while !st.is_empty() && temperatures[i] >= temperatures[*st.last().unwrap()] {
            st.pop();
        }
        ans[i] = if !st.is_empty() { *st.last().unwrap() as i32 - i as i32 } else { 0 };
        st.push(i);
    }

    ans
}
```
```C []
#include <stdlib.h>

int* dailyTemperatures(int* temperatures, int temperaturesSize, int* returnSize) {
    int n = temperaturesSize;
    int* ans = (int*)malloc(n * sizeof(int));
    int* st = (int*)malloc(n * sizeof(int));
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top != -1 && temperatures[i] >= temperatures[st[top]]) {
            top--;
        }
        ans[i] = top != -1 ? st[top] - i : 0;
        st[++top] = i;
    }

    *returnSize = n;
    free(st);
    return ans;
}
```
```C# []
public class Solution {
    public int[] DailyTemperatures(int[] temperatures) {
        int n = temperatures.Length;
        int[] ans = new int[n];
        Stack<int> st = new Stack<int>();

        for (int i = n - 1; i >= 0; i--) {
            while (st.Count > 0 && temperatures[i] >= temperatures[st.Peek()]) {
                st.Pop();
            }
            ans[i] = st.Count == 0 ? 0 : st.Peek() - i;
            st.Push(i);
        }

        return ans;
    }
}
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)
