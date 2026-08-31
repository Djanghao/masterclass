# Monostack

**Author:** votrubac
**Votes:** 86
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/1359702/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/1359702/)

---

This 'hard' problem was easier than both medium problems for me. We process heights right-to-left, and use a monostack to track visible heights.

For each person, we remove all smaller heights from the stack, increasing number of people this person can see (`cnt`).
If there is a larger height in the stack, we can see one more person (`+ !mono.empty()`).
Finally, we push the current person's height to the stack.

**C++**
```cpp
vector<int> canSeePersonsCount(vector<int>& heights) {
    vector<int> mono;
    for (int i = heights.size() - 1; i >= 0; --i) {
        int h = heights[i], cnt = 0;
        for (; !mono.empty() && mono.back() < h; ++cnt)
            mono.pop_back();
        heights[i] = cnt + !mono.empty();
        mono.push_back(h);
    }
    return heights;
}
```
**Java**
```java
public int[] canSeePersonsCount(int[] heights) {
    Stack<Integer> mono = new Stack();
    for (int i = heights.length - 1; i >= 0; --i) {
        int h = heights[i], cnt = 0;
        for (; !mono.isEmpty() && mono.peek() < h; ++cnt)
            mono.pop();
        heights[i] = cnt + (mono.isEmpty() ? 0 : 1);
        mono.push(h);
    }
    return heights;        
}
```
