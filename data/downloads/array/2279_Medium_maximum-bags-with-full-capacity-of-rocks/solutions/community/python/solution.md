# [C++/Python] Greedy Solution

**Author:** lee215
**Votes:** 44
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2062185/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2062185/)

---

# **Explanation**
Calculate all empty space for each bag.
Sort them from small to big, including 0 empty space.

Greedily Fill the bags, from small empty space to bigger one.
return the number of full bags.
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>


**C++**
```cpp
    int maximumBags(vector<int>& capacity, vector<int>& rocks, int k) {
        vector<int> count;
        int n = rocks.size(), i;
        for (int i = 0; i < n; ++i) 
            count.push_back(capacity[i] - rocks[i]);
        sort(count.begin(), count.end());
        for (i = 0; i < n && k >= count[i]; ++i)
            k -= count[i];
        return i;
    }
```

**Python**
```py
    def maximumBags(self, capacity, rocks, x):
        count = sorted(c - r for c,r in zip(capacity, rocks))[::-1]
        while count and x and count[-1] <= x:
            x -= count.pop()
        return len(rocks) - len(count)
```
