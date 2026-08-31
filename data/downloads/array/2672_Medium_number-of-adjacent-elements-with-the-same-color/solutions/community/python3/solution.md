# [C++, Java, Python3] Simple Counting

**Author:** tojuna
**Votes:** 65
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3494883/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3494883/)

---



# Intuition
Create the nums array and track the count of adjacent numbers that are same

# Approach
* Create the array `nums`
* For each query first check if the values at `index - 1` or `index + 1` are the same as `nums[index]`. If any of them are equal, **decrement** the counter
* Update the value of `nums[index]`
* Now check if values at `index - 1` or `index + 1` are the same as `nums[index]`. If any of them are equal, **increment** the counter

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
**Python3**:
```
def colorTheArray(self, n: int, queries):
    nums, c = [0] * n, 0
    for index, color in queries:
        pre, nex = nums[index - 1] if index > 0 else 0, nums[index + 1] if index < n-1 else 0
        if nums[index] and nums[index] == pre: c -= 1
        if nums[index] and nums[index] == nex: c -= 1
        nums[index] = color
        if nums[index] == pre: c += 1
        if nums[index] == nex: c += 1
        yield c
```

**C++**:
```
vector<int> colorTheArray(int n, vector<vector<int>>& queries) {
    vector<int> nums(n, 0), result;
    int c = 0;

    for (auto query : queries) {
        int index = query[0], color = query[1];
        int pre = (index > 0) ? nums[index - 1] : 0;
        int nex = (index < n-1) ? nums[index + 1] : 0;

        if (nums[index] && nums[index] == pre) c--;
        if (nums[index] && nums[index] == nex) c--;
        nums[index] = color;
        if (nums[index] == pre) c++;
        if (nums[index] == nex) c++;

        result.push_back(c);
    }
    return result;
}
```

**Java**:
```
public int[] colorTheArray(int n, int[][] queries) {
    int[] nums = new int[n], result = new int[queries.length];
    int c = 0;

    for (int i = 0; i < queries.length; i++) {
        int index = queries[i][0], color = queries[i][1];
        int pre = (index > 0) ? nums[index - 1] : 0;
        int nex = (index < n-1) ? nums[index + 1] : 0;

        if (nums[index] != 0 && nums[index] == pre) c--;
        if (nums[index] != 0 && nums[index] == nex) c--;
        nums[index] = color;
        if (nums[index] == pre) c++;
        if (nums[index] == nex) c++;

        result[i] = c;
    }
    return result;
}
```

## Shorter Version
**Python3**:
```
def colorTheArray(self, n: int, queries: List[List[int]]) -> List[int]:
    nums, c = [0] * n, 0
    for index, color in queries:
        pre, nex = nums[index-1] if index > 0 else 0, nums[index+1] if index < n-1 else 0
        if nums[index]: c -= (nums[index] == pre) + (nums[index] == nex)
        nums[index] = color
        c += (nums[index] == pre) + (nums[index] == nex)
        yield c
```

**C++**:
```
vector<int> colorTheArray(int n, vector<vector<int>>& queries) {
    vector<int> nums(n, 0), result;
    int c = 0;

    for (auto query : queries) {
        int index = query[0], color = query[1];
        int pre = (index > 0) ? nums[index - 1] : 0;
        int nex = (index < n-1) ? nums[index + 1] : 0;
        if (nums[index]) c -= (nums[index] == pre) + (nums[index] == nex);
        nums[index] = color;
        c += (nums[index] == pre) + (nums[index] == nex);
        result.push_back(c);
    }
    return result;
}
```