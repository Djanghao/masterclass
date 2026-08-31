# [C++ / Go] Sort only - O(nlogn) solution

**Author:** mikazuki4712
**Votes:** 2
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4892634/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4892634/)

---

# Approach
- We create a sorted copy of `nums` with pair of value and index. This helps efficiently mark smallest unmarked elements using `index` attribute.

# Code
```C++ []
class Solution {
public:
    vector<long long> unmarkedSumArray(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        long long sum = 0;
        vector<pair<int, int>> pairs(n);

        // Create copy of nums and calculate total sum
        for (int i = 0; i < n; i++) {
            sum += nums[i];
            pairs[i] = {i, nums[i]};
        }

        // Sort the new array
        sort(pairs.begin(), pairs.end(), 
        [](const pair<int, int>& x, const pair<int, int>& y) {
            if (x.second == y.second) {
                return x.first < y.first;
            }
            return x.second < y.second;
        });

        vector<bool> marked(n, false);
        int m = queries.size();
        vector<long long> res(m);

        // Iterator of new array for smallest value
        int cur = 0; 

        for (int i = 0; i < m; i++) {
            int deleteId = queries[i][0];
            int k = queries[i][1];

            // Mark if target index isn't marked.
            if (!marked[deleteId]) {
                marked[deleteId] = true;
                sum -= nums[deleteId];
            }

            // Get k smallest values
            while (k > 0 && cur < n) {
                int id = pairs[cur].first;
                int val = pairs[cur].second;

                if (!marked[id]) {
                    marked[id] = true;
                    sum -= val;
                    k--;
                }
                cur++;
            }

            res[i] = sum;
        }

        return res;
    }
};
```
```Go []
type Pair struct {
    id int
    val int
}

func unmarkedSumArray(nums []int, queries [][]int) []int64 {
    n := len(nums)
    sum := int64(0)
    pairs := make([]Pair, n)

    // Create copy of nums and calculate total sum
    for id, val := range nums {
        sum += int64(val)
        pairs[id] = Pair{id : id, val: val}
    }

    // Sort the new array
    sort.Slice(pairs, func(x, y int)bool {
        if pairs[x].val == pairs[y].val {
            return pairs[x].id < pairs[y].id
        }
        return pairs[x].val < pairs[y].val;
    })

    marked := make([]bool, n)
    res := make([]int64, len(queries))

    // Iterator of new array for smallest value
    cur := 0

    for i, query := range queries {
        deleteId := query[0]
        k := query[1]

        // Mark if target index isn't marked.
        if !marked[deleteId] {
            marked[deleteId] = true
            sum -= int64(nums[deleteId])
        }

        // Get k smallest values
        for ; k > 0 && cur < n; cur++ {
            pair := pairs[cur]

            if id, val := pair.id, pair.val; !marked[id] {
                marked[id] = true
                sum -= int64(val)
                k--
            }
        }

        res[i] = sum
    }

    return res
}
```

# Complexity
- Time complexity: $O(nlogn)$
- Space complexity: $O(n)$