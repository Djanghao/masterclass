# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4304430/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4304430/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. **Preparing Queries and Heights:**

    - The code prepares the queries with their maximum height and details, as well as sorts the heights in decreasing order to efficiently handle the leftmost building queries.
1. **Processing Queries:**

    - It iterates through each query and checks for buildings taller than the current max height, finding the leftmost building among them.
1. **Handling Edge Cases:**

    - Considers scenarios where buildings have equal heights, different indices, and handles edge cases while determining the leftmost building index for the queries.


# Complexity
- *Time complexity:*
   $$O((n+q)logn)$$
    

- *Space complexity:*
   $$O(n+q)$$
    


# Code
```C++ []
class Solution {
public:
    vector<int> leftmostBuildingQueries(vector<int>& heights, vector<vector<int>>& queries) {
        // Storing the queries along with their indices in a vector for easier sorting
        vector<vector<int>> que;
        int ind = 0;
        for (auto x : queries) {
            // Creating temporary vector for each query containing max height and query details
            vector<int> tmp = {max(heights[x[0]], heights[x[1]])};
            tmp.push_back(x[0]);
            tmp.push_back(x[1]);
            tmp.push_back(ind);
            que.push_back(tmp);
            ind++;
        }
        
        // Sorting queries in decreasing order of max height
        sort(que.begin(), que.end());
        reverse(que.begin(), que.end());

        // Storing building heights with their indices
        vector<pair<int, int>> arr;
        int n = heights.size();
        for (int i = 0; i < n; i++) {
            arr.push_back({heights[i], i});
        }
        // Sorting building heights in decreasing order
        sort(arr.begin(), arr.end());
        reverse(arr.begin(), arr.end());

        // Using a set to store the indices of buildings taller than current max height
        set<int> st;
        int inf = 1000000000;
        st.insert(inf);

        int sz = queries.size();
        // Initializing answer vector with -1
        vector<int> ans(sz, -1);
        ind = 0;

        for (int i = 0; i < sz; i++) {
            // Adding buildings taller than current max height to the set
            while (ind < n && arr[ind].first > que[i][0]) {
                st.insert(arr[ind].second);
                ind++;
            }

            // Finding the leftmost building among the buildings taller than the current max height
            int mx = max(que[i][1], que[i][2]);
            int value = *st.upper_bound(mx);
            if (value == inf) value = -1;

            // Checking for edge cases and conditions for setting the leftmost building index
            int a = que[i][1];
            int b = que[i][2];
            if ((a < b && heights[a] < heights[b]) || (a > b && heights[a] > heights[b])) value = max(a, b);
            if (que[i][1] == que[i][2]) value = que[i][1];
            ans[que[i][3]] = value;
        }

        return ans;
    }
};



```
```C []


void reverse(int *arr, int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

void leftmostBuildingQueries(int *heights, int heightsSize, int **queries, int queriesSize, int *queriesColSize, int *returnSize) {
    int ind = 0;
    int **que = (int **)malloc(queriesSize * sizeof(int *));
    for (int i = 0; i < queriesSize; i++) {
        que[i] = (int *)malloc(4 * sizeof(int));
        que[i][0] = (heights[queries[i][0]] > heights[queries[i][1]]) ? heights[queries[i][0]] : heights[queries[i][1]];
        que[i][1] = queries[i][0];
        que[i][2] = queries[i][1];
        que[i][3] = ind++;
    }
    
    qsort(que, queriesSize, sizeof(int *), cmpfunc);
    reverse(que, queriesSize);
    
    int **arr = (int **)malloc(heightsSize * sizeof(int *));
    for (int i = 0; i < heightsSize; i++) {
        arr[i] = (int *)malloc(2 * sizeof(int));
        arr[i][0] = heights[i];
        arr[i][1] = i;
    }
    qsort(arr, heightsSize, sizeof(int *), cmpfunc);
    reverse(arr, heightsSize);
    
    int inf = 1000000000;
    int *st = (int *)malloc((heightsSize + 1) * sizeof(int));
    for (int i = 0; i <= heightsSize; i++) {
        st[i] = inf;
    }
    st[0] = inf;
    
    int sz = queriesSize;
    int *ans = (int *)malloc(sz * sizeof(int));
    ind = 0;
    
    for (int i = 0; i < sz; i++) {
        while (ind < heightsSize && arr[ind][0] > que[i][0]) {
            st[++ind] = arr[ind][1];
        }
        
        int mx = (que[i][1] > que[i][2]) ? que[i][1] : que[i][2];
        int value = -1;
        for (int j = 1; j <= heightsSize; j++) {
            if (st[j] > mx) {
                value = st[j];
                break;
            }
        }
        if (value == inf) value = -1;
        int a = que[i][1];
        int b = que[i][2];
        if ((a < b && heights[a] < heights[b]) || (a > b && heights[a] > heights[b])) {
            value = (a > b) ? a : b;
        }
        if (que[i][1] == que[i][2]) value = que[i][1];
        ans[que[i][3]] = value;
    }
    
    *returnSize = sz;
    for (int i = 0; i < sz; i++) {
        printf("%d ", ans[i]);
    }
    
    free(que);
    free(arr);
    free(st);
    free(ans);
}


```
```Java []


class Solution {
    public int[] leftmostBuildingQueries(int[] heights, int[][] queries) {
        List<int[]> que = new ArrayList<>();
        int ind = 0;
        for (int[] x : queries) {
            int[] tmp = {Math.max(heights[x[0]], heights[x[1]]), x[0], x[1], ind};
            que.add(tmp);
            ind++;
        }
        Collections.sort(que, (a, b) -> Integer.compare(b[0], a[0]));

        List<int[]> arr = new ArrayList<>();
        int n = heights.length;
        for (int i = 0; i < n; i++) {
            int[] pair = {heights[i], i};
            arr.add(pair);
        }
        arr.sort((a, b) -> Integer.compare(b[0], a[0]));

        TreeSet<Integer> st = new TreeSet<>();
        int inf = 1000000000;
        st.add(inf);

        int sz = queries.length;
        int[] ans = new int[sz];
        ind = 0;

        for (int i = 0; i < sz; i++) {
            while (ind < n && arr.get(ind)[0] > que.get(i)[0]) {
                st.add(arr.get(ind)[1]);
                ind++;
            }

            int mx = Math.max(que.get(i)[1], que.get(i)[2]);
            int value = st.higher(mx);
            if (value == inf) value = -1;
            int a = que.get(i)[1];
            int b = que.get(i)[2];
            if ((a < b && heights[a] < heights[b]) || (a > b && heights[a] > heights[b]))
                value = Math.max(a, b);
            if (que.get(i)[1] == que.get(i)[2]) value = que.get(i)[1];
            ans[que.get(i)[3]] = value;
        }

        return ans;
    }
}



```
```python3 []



class Solution:
    def leftmostBuildingQueries(self, heights: List[int], queries: List[List[int]]) -> List[int]:
        que = []
        ind = 0
        for x in queries:
            que.append([max(heights[x[0]], heights[x[1]]), x[0], x[1], ind])
            ind += 1
        que.sort(reverse=True)

        arr = [[heights[i], i] for i in range(len(heights))]
        arr.sort(reverse=True)

        st = [float('inf')]
        sz = len(queries)
        ans = [-1] * sz
        ind = 0

        for i in range(sz):
            while ind < len(heights) and arr[ind][0] > que[i][0]:
                st.append(arr[ind][1])
                ind += 1

            mx = max(que[i][1], que[i][2])
            value = st[bisect_right(st, mx)]
            if value == float('inf'):
                value = -1
            a, b = que[i][1], que[i][2]
            if (a < b and heights[a] < heights[b]) or (a > b and heights[a] > heights[b]):
                value = max(a, b)
            if que[i][1] == que[i][2]:
                value = que[i][1]
            ans[que[i][3]] = value

        return ans


```
```javascript []
function leftmostBuildingQueries(heights, queries) {
    let que = [];
    let ind = 0;
    for (let x of queries) {
        let tmp = [Math.max(heights[x[0]], heights[x[1]]), x[0], x[1], ind++];
        que.push(tmp);
    }

    que.sort((a, b) => b[0] - a[0]);

    let arr = heights.map((val, i) => [val, i]);
    arr.sort((a, b) => b[0] - a[0]);

    let inf = 1000000000;
    let st = new Array(heights.length + 1).fill(inf);

    let sz = queries.length;
    let ans = new Array(sz).fill(-1);
    ind = 0;

    for (let i = 0; i < sz; i++) {
        while (ind < heights.length && arr[ind][0] > que[i][0]) {
            st[++ind] = arr[ind][1];
        }

        let mx = Math.max(que[i][1], que[i][2]);
        let value = -1;
        for (let j = 1; j <= heights.length; j++) {
            if (st[j] > mx) {
                value = st[j];
                break;
            }
        }
        if (value === inf) value = -1;
        let a = que[i][1];
        let b = que[i][2];
        if ((a < b && heights[a] < heights[b]) || (a > b && heights[a] > heights[b])) {
            value = (a > b) ? a : b;
        }
        if (que[i][1] === que[i][2]) value = que[i][1];
        ans[que[i][3]] = value;
    }

    return ans;
}


```


---



# PLEASE UPVOTE IF IT HELPED

---
---


---