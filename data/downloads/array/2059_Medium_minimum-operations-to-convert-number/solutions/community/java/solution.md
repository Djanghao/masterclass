# Bottom-Up DP

**Author:** votrubac
**Votes:** 33
**Link:** [https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/1549956/](https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/1549956/)

---

Somehow I could not get a top-down DP accepted. For the bottom-up one, we start from the goal, and fill the range [0, 1000] with the minimum operations to reach the goal.

We use queue `q` to maintain the reachable numbers for `cnt` number of operations.

The complexity of this solution is *O(n * m)* where *n* is the length of the `nums` array, and *m* - size of the range.

**C++**
```cpp
int minimumOperations(vector<int>& nums, int start, int goal) {
    short seen[1001] = {}, cnt = 0;
    vector<int> q{goal};
    while (!q.empty()) {
        ++cnt;
        vector<int> q1;
        for (auto x : q)
            for (int n : nums)
                for (int xn : {x + n, x - n, x ^ n})
                    if (xn >= 0 && xn <= 1000 && !seen[xn]) {
                        if (xn == start)
                            return cnt;
                        seen[xn] = true; 
                        q1.push_back(xn);
                    }
        swap(q, q1);
    }
    return -1;
}
```
**Java**
```java
public int minimumOperations(int[] nums, int start, int goal) {
    boolean seen[] = new boolean[1001];
    List<Integer> q = Arrays.asList(goal);
    int cnt = 0;
    while(!q.isEmpty()) {
        ++cnt;
        List<Integer> q1 = new ArrayList<>();
        for (int x : q)
            for (int n : nums) {
                for (int xn : new int[] {x + n, x - n, x ^ n})
                    if (xn >= 0 && xn <= 1000 && !seen[xn]) {
                        if (xn == start)
                            return cnt;
                        seen[xn] = true; 
                        q1.add(xn);
                    }
            }
        q = q1;
    }    
    return -1;
}
```