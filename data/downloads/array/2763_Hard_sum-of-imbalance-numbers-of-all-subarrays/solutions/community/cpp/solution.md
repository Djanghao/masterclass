# [C++, Java, Python3] Simple HashSet Solution

**Author:** tojuna
**Votes:** 36
**Link:** [https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/3706407/](https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/3706407/)

---


# Intuition

`O(n^3)` solution is trivial. We can use a hashset to reduce time complexity from `O(n^3)` to `O(n^2)`.

# Approach

1. Iterate over each element in the input array, determining the starting point of the subarray.
2. Within each subarray, track unique elements encountered and maintain a variable to count the imbalance numbers.
3. While iterating over the elements in each subarray, update the imbalance number based on the following conditions:

   a. If the current element `x` is already present in the set of unique elements `s`, it means `x` has been encountered before in the subarray. In this case, do nothing and proceed to the next element.

   b. If `x` is not present in `s`, check two conditions to determine whether to update the imbalance number:
    - If both `x - 1` and `x + 1` are present in `s`, it implies that the sorted order will not have a gap greater than one between `x - 1` and `x + 1`. Therefore, the current element `x` does not contribute to the imbalance number. In this case, decrement the `curr` variable by one.

    - If neither `x - 1` nor `x + 1` is present in `s` and the set `s` is not empty (indicating that `x` is not the first element encountered in the subarray), the current element `x` adds to the imbalance number. Therefore, increment the `curr` variable by one.

4. Accumulate the imbalance numbers of all subarrays and return the total sum as the final result.

# Complexity
- Time complexity: `O(n^2)`

- Space complexity: `O(n)`

# Code

**Python3**:
```
def sumImbalanceNumbers(self, nums):
    n = len(nums)
    ans = 0
    for i in range(n):
        s = set()
        curr = 0
        for x in nums[i:]:
            if x in s: 
                pass
            elif (x - 1 in s) and (x + 1 in s):
                curr -= 1
            elif (x - 1 not in s) and (x + 1 not in s) and s:
                curr += 1
            s.add(x)
            ans += curr
    return ans
```

**C++**:
```
    int sumImbalanceNumbers(vector<int>& nums) {
        int n = nums.size();
        int ans = 0;
        for (int i = 0; i < n; i++) {
            unordered_set<int> s;
            int curr = 0;
            for (int j = i; j < n; j++) {
                int x = nums[j];
                if (s.count(x)) {
                    // do nothing
                } else if (s.count(x - 1) && s.count(x + 1)) {
                    curr--;
                } else if (!s.count(x - 1) && !s.count(x + 1) && !s.empty()) {
                    curr++;
                }
                s.insert(x);
                ans += curr;
            }
        }
        return ans;
    }
```

**Java**:
```
public int sumImbalanceNumbers(int[] nums) {
    int n = nums.length;
    int ans = 0;
    for (int i = 0; i < n; i++) {
        Set<Integer> s = new HashSet<>();
        int curr = 0;
        for (int j = i; j < n; j++) {
            int x = nums[j];
            if (s.contains(x)) {
                // do nothing
            } else if (s.contains(x - 1) && s.contains(x + 1)) {
                curr--;
            } else if (!s.contains(x - 1) && !s.contains(x + 1) && !s.isEmpty()) {
                curr++;
            }
            s.add(x);
            ans += curr;
        }
    }
    return ans;
}
```
