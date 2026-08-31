# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 11
**Link:** [https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/4330471/](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/4330471/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. **Data Preparation:**

    - Pairs are created to store both the elements and their original indices from the `nums` array.
    - These pairs are sorted based on their values in ascending order.
1. **Array Grouping:**

    - The elements from 'nums' are grouped into `x` and `y` vectors based on the given `limit`.
    - `x` contains elements grouped within the limit, and `y` stores their corresponding indices.
1. **Rearrangement for Smallest Lexicographical Order:**

    - Sorts the indices (`y`) within each group to achieve the smallest lexicographical order.
1. **Creating the Smallest Array:**

    - Generates the final lexicographically smallest array by assigning the elements from `x` to `res` at their respective indices from `y`.


# Complexity
- *Time complexity:*
   $$O(nlogn)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    // Function to generate the lexicographically smallest array within the given limit
    vector<int> lexicographicallySmallestArray(vector<int>& nums, int limit) {
        // Create a vector of pairs to store indices along with elements of the 'nums' array
        vector<pair<int, int>> a;
        int n = nums.size();
        for(int i = 0; i < n; i++) {
            a.push_back({nums[i], i});
        }
        
        // Sort the array of pairs based on values (ascending order)
        sort(a.begin(), a.end());
        
        // Initialize vectors to hold elements and their corresponding indices after rearrangement
        vector<int> x[n];
        vector<int> y[n];
        int j = 0, cur = a[0].first;
        
        // Group elements by the given 'limit' condition
        x[j].push_back(a[0].first);
        y[j].push_back(a[0].second);
        for(int i = 1; i < n; i++) {
            if(a[i].first - cur > limit) {
                j++;
            }
            x[j].push_back(a[i].first);
            y[j].push_back(a[i].second);
            cur = a[i].first; 
        }
        
        // Sort indices to obtain the lexicographically smallest order
        for(int i = 0; i < n; i++) {
            sort(y[i].begin(), y[i].end());
        }
        
        // Generate the final lexicographically smallest array
        vector<int> res(n);
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < x[i].size(); j++) {
                res[y[i][j]] = x[i][j];
            }
        }
        
        return res;
    }
};



```
```C []


void sort(int* arr, int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int** lexicographicallySmallestArray(int* nums, int limit, int numsSize, int* returnSize, int** returnColumnSizes) {
    // Create an array of pairs to store indices along with elements of the 'nums' array
    int** a = (int**)malloc(numsSize * sizeof(int*));
    for (int i = 0; i < numsSize; i++) {
        a[i] = (int*)malloc(2 * sizeof(int));
        a[i][0] = nums[i];
        a[i][1] = i;
    }

    // Sort the array of pairs based on values (ascending order)
    sort(nums, numsSize);

    // Initialize arrays to hold elements and their corresponding indices after rearrangement
    int* x[numsSize];
    int* y[numsSize];
    int j = 0, cur = a[0][0];

    // Group elements by the given 'limit' condition
    x[j] = (int*)malloc(numsSize * sizeof(int));
    y[j] = (int*)malloc(numsSize * sizeof(int));
    x[j][0] = a[0][0];
    y[j][0] = a[0][1];
    for (int i = 1; i < numsSize; i++) {
        if (a[i][0] - cur > limit) {
            j++;
        }
        x[j] = (int*)malloc(numsSize * sizeof(int));
        y[j] = (int*)malloc(numsSize * sizeof(int));
        x[j][0] = a[i][0];
        y[j][0] = a[i][1];
        cur = a[i][0];
    }

    // Sort indices to obtain the lexicographically smallest order
    for (int i = 0; i < numsSize; i++) {
        sort(y[i], numsSize);
    }

    // Generate the final lexicographically smallest array
    int** res = (int**)malloc(numsSize * sizeof(int*));
    for (int i = 0; i < numsSize; i++) {
        res[i] = (int*)malloc(sizeof(int));
        for (int j = 0; j < numsSize; j++) {
            res[i][y[i][j]] = x[i][j];
        }
    }

    *returnSize = numsSize;
    *returnColumnSizes = (int*)malloc(numsSize * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        (*returnColumnSizes)[i] = numsSize;
    }

    return res;
}



```
```Java []


class Solution {
    public int[] lexicographicallySmallestArray(int[] nums, int limit) {
        int n = nums.length;
        Pair[] a = new Pair[n];
        for (int i = 0; i < n; i++) {
            a[i] = new Pair(nums[i], i);
        }
        
        Arrays.sort(a, (p1, p2) -> Integer.compare(p1.val, p2.val));
        
        List<Integer>[] x = new ArrayList[n];
        List<Integer>[] y = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            x[i] = new ArrayList<>();
            y[i] = new ArrayList<>();
        }
        
        int j = 0, cur = a[0].val;
        x[j].add(a[0].val);
        y[j].add(a[0].idx);
        for (int i = 1; i < n; i++) {
            if (a[i].val - cur > limit) {
                j++;
            }
            x[j].add(a[i].val);
            y[j].add(a[i].idx);
            cur = a[i].val;
        }
        
        for (int i = 0; i < n; i++) {
            Collections.sort(y[i]);
        }
        
        int[] res = new int[n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < x[i].size(); j++) {
                res[y[i].get(j)] = x[i].get(j);
            }
        }
        
        return res;
    }
    
    class Pair {
        int val, idx;
        Pair(int val, int idx) {
            this.val = val;
            this.idx = idx;
        }
    }
}



```
```python3 []

class Solution:
    def lexicographicallySmallestArray(self, nums, limit):
        a = [(nums[i], i) for i in range(len(nums))]
        a.sort(key=lambda x: x[0])
        
        x, y = [[] for _ in range(len(nums))], [[] for _ in range(len(nums))]
        
        j, cur = 0, a[0][0]
        x[j].append(a[0][0])
        y[j].append(a[0][1])
        for i in range(1, len(nums)):
            if a[i][0] - cur > limit:
                j += 1
            x[j].append(a[i][0])
            y[j].append(a[i][1])
            cur = a[i][0]
        
        for i in range(len(nums)):
            y[i].sort()
        
        res = [0] * len(nums)
        for i in range(len(nums)):
            for j in range(len(x[i])):
                res[y[i][j]] = x[i][j]
        
        return res


```
```javascript []
function lexicographicallySmallestArray(nums, limit) {
    // Create an array of pairs to store indices along with elements of the 'nums' array
    let a = nums.map((num, index) => [num, index]);

    // Sort the array of pairs based on values (ascending order)
    a.sort((a, b) => a[0] - b[0]);

    // Initialize arrays to hold elements and their corresponding indices after rearrangement
    let x = [];
    let y = [];
    let j = 0;
    let cur = a[0][0];

    // Group elements by the given 'limit' condition
    x[j] = [a[0][0]];
    y[j] = [a[0][1]];
    for (let i = 1; i < nums.length; i++) {
        if (a[i][0] - cur > limit) {
            j++;
        }
        x[j] = [a[i][0]];
        y[j] = [a[i][1]];
        cur = a[i][0];
    }

    // Sort indices to obtain the lexicographically smallest order
    for (let i = 0; i < nums.length; i++) {
        y[i].sort((a, b) => a - b);
    }

    // Generate the final lexicographically smallest array
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res[i] = [];
        for (let j = 0; j < nums.length; j++) {
            res[i][y[i][j]] = x[i][j];
        }
    }

   


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---