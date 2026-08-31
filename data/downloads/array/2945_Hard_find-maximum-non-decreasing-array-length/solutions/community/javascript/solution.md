# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4328881/](https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4328881/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. **Prefix Sum Array:**

    - `pre` is a prefix sum array storing cumulative sums of the elements in `nums`.
1. **Dynamic Programming Approach:**

    - `dp[i]` represents the maximum length of a subarray ending at index `i` and its last element value.
1. **Initialization:**

    - `dp[0]` is initialized with `{0, 0}` as there's no subarray for index `0`.
1. **Loop Through Elements:**

    - The loop iterates through each element of the `nums` array.
1. **Subarray Comparison:**

    - Compares the current element with the last element of the previous subarray and updates dp[i] accordingly.
1. **Finding Index with Binary Search:**

    - Calculates `lbneed`, the value needed to achieve the sum with the current element.
    - Uses binary search (`lower_bound`) to find the index `id` where the sum reaches `lbneed`.
    - Updates `dp[id]` if a valid index is found.
1. **Return:**

    - Returns the maximum length of the subarray, stored in `dp[N]`.first.


# Complexity
- *Time complexity:*
   $$O(nlogn)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
#define ll long long

class Solution {
public:
    int findMaximumLength(vector<int>& nums) {
        int N = nums.size();
        
        // Creating a prefix sum array to store cumulative sums of the elements in nums
        vector<ll> pre;
        pre.push_back(0); // Initializing with 0 as the first element
        for(auto x : nums) 
            pre.push_back((ll)x); // Converting int to ll and storing cumulative sum
        for(ll i = 1; i <= N; i++)
            pre[i] += pre[i - 1]; // Calculating cumulative sum
        
        // Using a dynamic programming approach to solve the problem
        // dp[i] stores the maximum length of a subarray ending at index i and its last element value
        
        // Initializing dp array with pair {0, 0}
        vector<pair<ll, ll>> dp(N + 1, {0, 0});
        dp[0] = {0, 0};

        for(ll i = 1; i <= N; i++) {
            auto [len, x] = dp[i - 1]; // Extracting length and last element value from previous state

            x *= -1LL; // Multiplying by -1 for comparison purposes
            
            // Comparing current element with the last element of the previous subarray
            if(x <= nums[i - 1]) {
                dp[i] = max(dp[i], {len + 1, -1LL * nums[i - 1]});
            } else {
                dp[i] = max(dp[i], {len, -1LL * (x + (ll)nums[i - 1])});
            }

            // Finding the index where the sum would be equal to lbneed using binary search
            ll lbneed = pre[i] - nums[i - 1] + x;
            ll id = lower_bound(pre.begin(), pre.end(), lbneed) - pre.begin();
            
            // Updating dp[id] if valid index is found
            if(id <= N)
                dp[id] = max(dp[id], {len + 1, -1LL * (x + pre[id] - lbneed)});
        }
        
        // Returning the maximum length of the subarray
        return dp[N].first;
    }
};



```
```C []
#define MAX_SIZE 10000

typedef long long ll;

struct Pair {
    ll first;
    ll second;
};

int findMaximumLength(int nums[], int numsSize) {
    ll pre[MAX_SIZE + 1];
    struct Pair dp[MAX_SIZE + 1];

    pre[0] = 0;
    for (int i = 0; i < numsSize; i++) {
        pre[i + 1] = (ll)nums[i];
    }
    for (ll i = 1; i <= numsSize; i++) {
        pre[i] += pre[i - 1];
    }
    dp[0].first = 0;
    dp[0].second = 0;

    for (ll i = 1; i <= numsSize; i++) {
        ll len = dp[i - 1].first;
        ll x = dp[i - 1].second;
        x *= -1LL;
        if (x <= nums[i - 1]) {
            if (dp[i].first < len + 1) {
                dp[i].first = len + 1;
                dp[i].second = -1LL * nums[i - 1];
            }
        } else {
            if (dp[i].first < len) {
                dp[i].first = len;
                dp[i].second = -1LL * (x + (ll)nums[i - 1]);
            }
        }
        ll lbneed = pre[i] - nums[i - 1] + x;
        ll id = 0;
        for (int j = 0; j <= numsSize; j++) {
            if (pre[j] < lbneed) {
                id = j;
            } else {
                break;
            }
        }
        if (id <= numsSize) {
            if (dp[id].first < len + 1) {
                dp[id].first = len + 1;
                dp[id].second = -1LL * (x + pre[id] - lbneed);
            }
        }
    }
    return dp[numsSize].first;
}



```
```Java []


class Solution {
    public int findMaximumLength(int[] nums) {
        int N = nums.length;
        List<Long> pre = new ArrayList<>();
        pre.add(0L);
        for (int x : nums) pre.add((long) x);
        for (int i = 1; i <= N; i++)
            pre.set(i, pre.get(i) + pre.get(i - 1));

        List<Pair<Long, Long>> dp = new ArrayList<>(Collections.nCopies(N + 1, new Pair<>(0L, 0L)));
        dp.set(0, new Pair<>(0L, 0L));

        for (long i = 1; i <= N; i++) {
            Pair<Long, Long> pair = dp.get((int) (i - 1));
            long len = pair.getKey();
            long x = pair.getValue();
            x *= -1L;

            if (x <= nums[(int) (i - 1)]) {
                dp.set((int) i, max(dp.get((int) i), new Pair<>(len + 1, -1L * nums[(int) (i - 1)])));
            } else {
                dp.set((int) i, max(dp.get((int) i), new Pair<>(len, -1L * (x + (long) nums[(int) (i - 1)]))));
            }

            long lbneed = pre.get((int) i) - nums[(int) (i - 1)] + x;
            int id = Collections.binarySearch(pre, lbneed);
            if (id >= 0) id++;
            else id = -id - 1;
            if (id <= N)
                dp.set(id, max(dp.get(id), new Pair<>(len + 1, -1L * (x + pre.get(id) - lbneed))));
        }
        return dp.get(N).getKey().intValue();
    }

    private Pair<Long, Long> max(Pair<Long, Long> a, Pair<Long, Long> b) {
        return a.getKey() > b.getKey() ? a : b;
    }
}



```
```python3 []


class Solution:
    def findMaximumLength(self, nums):
        N = len(nums)
        pre = [0]
        pre.extend(nums)
        for i in range(1, N + 1):
            pre[i] += pre[i - 1]

        dp = defaultdict(lambda: (0, 0))
        dp[0] = (0, 0)

        for i in range(1, N + 1):
            length, x = dp[i - 1]
            x *= -1

            if x <= nums[i - 1]:
                dp[i] = max(dp[i], (length + 1, -1 * nums[i - 1]))
            else:
                dp[i] = max(dp[i], (length, -1 * (x + nums[i - 1])))

            lb_need = pre[i] - nums[i - 1] + x
            id = next((idx for idx, val in enumerate(pre) if val >= lb_need), N + 1)
            if id <= N:
                dp[id] = max(dp[id], (length + 1, -1 * (x + pre[id] - lb_need)))

        return dp[N][0]



```
```javascript []
function findMaximumLength(nums) {
    const N = nums.length;
    const pre = [0];
    for (const x of nums) {
        pre.push(BigInt(x));
    }
    for (let i = 1; i <= N; i++) {
        pre[i] += pre[i - 1];
    }
    const dp = Array(N + 1).fill({ first: 0, second: 0 });
    dp[0] = { first: 0, second: 0 };

    for (let i = 1; i <= N; i++) {
        const [len, x] = [dp[i - 1].first, dp[i - 1].second];
        let newX = -1n * x;
        if (newX <= BigInt(nums[i - 1])) {
            dp[i] = { first: Math.max(dp[i].first, len + 1), second: -1n * BigInt(nums[i - 1]) };
        } else {
            dp[i] = { first: Math.max(dp[i].first, len), second: -1n * (newX + BigInt(nums[i - 1])) };
        }
        const lbneed = pre[i] - BigInt(nums[i - 1]) + newX;
        const id = pre.findIndex((val) => val >= lbneed);
        if (id !== -1 && id <= N) {
            dp[id] = { first: Math.max(dp[id].first, len + 1), second: -1n * (newX + pre[id] - lbneed) };
        }
    }
    return dp[N].first;
}




```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---