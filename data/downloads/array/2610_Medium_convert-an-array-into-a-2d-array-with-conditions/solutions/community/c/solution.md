# [Java/C++/Python] Maximum Frequence

**Author:** lee215
**Votes:** 96
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/3368523/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/3368523/)

---

# **Intuition**
Count the frequency of elements,
the rows we need is equal to the maximum frequency.
<br>

# **Explanation**
Iterate all `A[i]`,
and compare the current number of rows and `count[A[i]]`,
put it at row `res[count[A[i]]]`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public List<List<Integer>> findMatrix(int[] A) {
        ArrayList<List<Integer>> res = new ArrayList<>();
        int n = A.length, count[] = new int[n + 1];
        for (int a : A) {
            if (res.size() < ++count[a])
                res.add(new ArrayList<>());
            res.get(count[a]).add(a);
        }
        return res;
    }
```

**C++**
```cpp
    vector<vector<int>> findMatrix(vector<int>& A) {
        int n = A.size();
        vector<int> count(n + 10);
        vector<vector<int>> res;
        for (int a : A) {
            if (res.size() <= count[a])
                res.push_back({});
            res[count[a]++].push_back(a);
        }
        return res;
    }
```

**Python**
```py
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        count = Counter(nums)
        k = max(count.values())
        A = list(count.elements())
        return [A[i::k] for i in range(k)]
```
