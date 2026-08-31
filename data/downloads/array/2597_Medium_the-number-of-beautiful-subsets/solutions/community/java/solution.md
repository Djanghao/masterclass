# [C++, Java, Python] Evolve Brute Force to DP | Explained 7 Approaches

**Author:** shivamaggarwal513
**Votes:** 260
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/3363862/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/3363862/)

---

For every element $x$, we have a choice to take or not take it to make the subset. So, maximum number of possible subsets can be $2^n$.

---

***\u2714\uFE0F Solution - I (Recursion + Backtracking) [Accepted]***

Let's say we have to decide to take or not take the element at index $i$. We can recursively make two calls, one for not taking it and another for taking it. Since, question says subset should be non-empty, $1$ is subtracted from final result.

To take the element at index $i$, the elements $nums[i] \\pm k$ should not be taken in the subset before. Frequency map can be made to keep the track of elements taken till now.

```C++ []
class Solution {
private:
    int _beautifulSubsets(vector<int>& nums, int k, unordered_map<int, int>& freq, int i) {
        if (i == nums.size()) { // base case
            return 1;
        }
        int result = _beautifulSubsets(nums, k, freq, i + 1); // nums[i] not taken
        if (!freq[nums[i] - k] && !freq[nums[i] + k]) { // check if we can take nums[i]
            freq[nums[i]]++;
            result += _beautifulSubsets(nums, k, freq, i + 1); // nums[i] taken
            freq[nums[i]]--;
        }
        return result;
    }
    
public:
    int beautifulSubsets(vector<int>& nums, int k) {
        unordered_map<int, int> freq;
        return _beautifulSubsets(nums, k, freq, 0) - 1; // -1 for empty subset
    }
};
```
```Java []
class Solution {
    private HashMap<Integer, Integer> freq;

    private int beautifulSubsets(int[] nums, int k, int i) {
        if (i == nums.length) { // base case
            return 1;
        }
        int result = beautifulSubsets(nums, k, i + 1); // nums[i] not taken
        if (!freq.containsKey(nums[i] - k) && !freq.containsKey(nums[i] + k)) { // check if we can take nums[i]
            freq.put(nums[i], freq.getOrDefault(nums[i], 0) + 1);
            result += beautifulSubsets(nums, k, i + 1); // nums[i] taken
            freq.put(nums[i], freq.get(nums[i]) - 1);
            if (freq.get(nums[i]) == 0) {
                freq.remove(nums[i]);
            }
        }
        return result;
    }

    public int beautifulSubsets(int[] nums, int k) {
        freq = new HashMap<Integer, Integer>();
        return beautifulSubsets(nums, k, 0) - 1; // -1 for empty subset
    }
}
```
```Python []
class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        freq = {}
        def f(i: int) -> int:
            if i == len(nums): # base case
                return 1
            result = f(i + 1) # nums[i] not taken
            if not nums[i] - k in freq and not nums[i] + k in freq: # check if we can take nums[i]
                freq[nums[i]] = freq.get(nums[i], 0) + 1
                result += f(i + 1) # nums[i] taken
                freq[nums[i]] -= 1
                if freq[nums[i]] == 0:
                    del freq[nums[i]]
            return result
        return f(0) - 1 # -1 for empty subset
```

Since, maximum no. of subsets can be $2^n$, time complexity will be $O(2^n)$.
Recursion stack space and frequency map will make space complexity $O(n)$.

- Time Complexity: $$O(2^n)$$
- Space Complexity: $$O(n)$$

---

***\u2714\uFE0F Solution - II (Recursion + Backtracking) [Accepted]***

Since time complexity is already $O(2^n)$, sorting the array beforehand, for $O(n \\log n)$, will not change it. Also, if we know that before the current index $i$, there were no larger elements, then we have to check just for the existence of $nums[i] - k$, and not for $nums[i] + k$. Therefore, we sort the array.

Time/Space Complexities will be same as before but LeetCode's Online Judge shows difference of $1200 ms$ and $800 ms$, so I thought to mention it too, as number of operations will be less.

```C++ []
class Solution {
private:
    int _beautifulSubsets(vector<int>& nums, int k, unordered_map<int, int>& freq, int i) {
        if (i == nums.size()) { // base case
            return 1;
        }
        int result = _beautifulSubsets(nums, k, freq, i + 1); // nums[i] not taken
        if (!freq[nums[i] - k]) { // check if we can take nums[i]
            freq[nums[i]]++;
            result += _beautifulSubsets(nums, k, freq, i + 1); // nums[i] taken
            freq[nums[i]]--;
        }
        return result;
    }
    
public:
    int beautifulSubsets(vector<int>& nums, int k) {
        unordered_map<int, int> freq;
        sort(nums.begin(), nums.end());
        return _beautifulSubsets(nums, k, freq, 0) - 1; // -1 for empty subset
    }
};
```
```Java []
class Solution {
    private HashMap<Integer, Integer> freq;

    private int beautifulSubsets(int[] nums, int k, int i) {
        if (i == nums.length) { // base case
            return 1;
        }
        int result = beautifulSubsets(nums, k, i + 1); // nums[i] not taken
        if (!freq.containsKey(nums[i] - k)) { // check if we can take nums[i]
            freq.put(nums[i], freq.getOrDefault(nums[i], 0) + 1);
            result += beautifulSubsets(nums, k, i + 1); // nums[i] taken
            freq.put(nums[i], freq.get(nums[i]) - 1);
            if (freq.get(nums[i]) == 0) {
                freq.remove(nums[i]);
            }
        }
        return result;
    }

    public int beautifulSubsets(int[] nums, int k) {
        freq = new HashMap<Integer, Integer>();
        Arrays.sort(nums);
        return beautifulSubsets(nums, k, 0) - 1; // -1 for empty subset
    }
}
```
```Python []
class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        freq = {}
        nums.sort()
        def f(i: int) -> int:
            if i == len(nums): # base case
                return 1
            result = f(i + 1) # nums[i] not taken
            if not nums[i] - k in freq: # check if we can take nums[i]
                freq[nums[i]] = freq.get(nums[i], 0) + 1
                result += f(i + 1) # nums[i] taken
                freq[nums[i]] -= 1
                if freq[nums[i]] == 0:
                    del freq[nums[i]]
            return result
        return f(0) - 1 # -1 for empty subset
```

- Time Complexity: $$O(2^n)$$
- Space Complexity: $$O(n)$$

---

***\u2714\uFE0F Solution - III (Recursion Optimized) [Accepted]***

In the above approach, we are trying to make every possible subset. The reason why we can't directly return $2^n$ without going to every subset, is that we don't know how many of them will satisfy the condition of *beautiful*. But what if there are no elements in the array whose difference is $k$?

**Example 1**
Suppose $nums = [1, 3, 5, 7]$, $k = 1$. We have differences of $2, 4, 6$ but never $1$. So, if we knew this before, we could have directly returned $2^n - 1 = 15$, ($-1$ for empty subset) without actually going to every subset by backtracking.

**Example 2**
Now, suppose $nums = [1, 2, 3, 4]$, $k = 2$. Difference of $2$ can be made by $4-2$, and $3-1$. That means $[2, 4]$ can't be in the same subset. Also, $[1, 3]$ can't be in the same subset. So, how can we write the answer if we knew this before?
We have two sets,
$s_1 = [1, 3]$
$s_2 = [2, 4]$
We can calculate number of *beautiful* subsets for $s_1$ and $s_2$ separately because the choices in $s_1$ is independent of $s_2$ and vice versa. Let the answers be $f(s_1)$ and $f(s_2)$.
For final answer, we can multiply both of them because there is no pair $(x_1,x_2)$ such that $x_1 \\in s_1$, $x_2 \\in s_2$ and $|x_1-x_2| = k$.
$f(nums) = f(s_1) \	imes f(s_2) - 1$ ($-1$ for empty subset)

**Example 3**
So, one thing we can do is to separate the given array into these subsets, such that there is no pair $(x_1,x_2)$, $x_1$ and $x_2$ belonging to different subsets and $|x_1-x_2| = k$.
In one subset, there will be elemenets of the form: $[x, x + k, x + 2k, ..., x + \\lambda k]$.
If we take $x$, then we can't take $x+k$, but can take $x+2k$ and so on.
All these elements have common remainder when divided by $k$. So we can make these subsets by separating on the basis of remainder ($\\mod k$ ).
For example, $nums = [1, 2, 3, 4, 5, 6]$, $k = 2$.
- $s_1$ : $nums[i] \\enspace \\% \\enspace k = 0$ : $[2,4,6]$
- $s_2$ : $nums[i] \\enspace \\% \\enspace k = 1$ : $[1,3,5]$

Note that all $x+\\lambda k$ might not be available in $s_1$. For example, there might be a possibility where $x+k$ is not present in $nums$ at all so subset will look like $[x, x+2k, ...]$.

**Example 4**
Now, suppose $nums = [5, 5, 5, 7, 7, 11, 11]$, $k = 2$. We can't take $[5, 7]$ in the same subset. Representing $s_1$ in $\\{value: frequency\\}$ form
$s_1 = [5: 3, 7: 2, 11: 2]$
Let's say $f(i)$ calculates number of beautiful subsets in $s_1$ starting from index $i$. We want to calculate $f(0)$.

- When $i = 0$, we are at $5$, there are two options, whether we skip it or take it. There are $2^3$ ways, out of which in $2^3-1=7$ ways, we take atleast one $5$, and one way where we skip $5$.
$take_5=7$, $skip_5=1$
- Now, next element at $i + 1$ is $7=5+2=5+k$, so we can't take it if we took $5$. Therefore, number of ways of taking $5$ will be $take_5 \	imes f(i + 2)$.
- Number of ways of skipping $5$ will be $skip_5 \	imes f(i + 1)$.
> $take_{s[i]} = 2 ^ {frequency(s[i])} - 1$
$skip_{s[i]} = 1$
$f(i) = take_{s[i]} \	imes f(i + 2) + skip_{s[i]} \	imes f(i + 1)$
- $f(0) = 7.f(2) + 1.f(1)$
- When $i=1$, we are at $7$, there are two options, $take_7=2^2-1=3$ and $skip_7=1$. Next element is $11 = 7 + 4 = 7 + 2k$, so we can take it even if we took $7$.
> $f(i) = take_{s[i]} \	imes f(i + 1) + skip_{s[i]} \	imes f(i + 1)$
- $f(1) = 3.f(2) + 1.f(2)$
- When $i=2$, we are at $11$, there are two options, $take_{11}=2^2-1=3$ and $skip_{11}=1$. Next element is nothing. So we will denote this as base case $f(n)=1$.
> $f(i) = take_{s[i]} \	imes f(i + 1) + skip_{s[i]} \	imes f(i + 1)$
- $f(2)=3.f(3)+1.f(3)=3.1+1.1=4$
- $f(1)=3.f(2)+1.f(2)=3.4+1.4=16$
- $f(0)=7.f(2)+1.f(1)=7.4+1.16=44$
- $answer=f(0)-1=43$

Now, general recurrence relation for $f(i)$ will be

$$
f(i) = skip_{s[i]} \	imes f(i + 1) + take_{s[i]} \	imes
\\begin{cases}
    f(i + 2) & \	ext{if } s[i + 1] - s[i] = k \\\\
    f(i + 1) & \	ext{otherwise}
\\end{cases}
$$

Split the array into different $s_i$'s based on their remainder with $k$. Sort them and represent in $\\{value : frequency\\}$ form. Final answer will be:

$$answer = \\Big(\\prod_i f_{s_i}(0)\\Big) - 1$$

```C++ []
class Solution {
private:
    int beautifulSubsets(vector<pair<int, int>>& s, int n, int k, int i) {
        if (i == n) {
            return 1;
        }
        int skip = beautifulSubsets(s, n, k, i + 1); // 1 * f(i + 1)
        int take = (1 << s[i].second) - 1; // take s[i]
        if (i + 1 < n && s[i + 1].first - s[i].first == k) { // next number is s[i] + k
            take *= beautifulSubsets(s, n, k, i + 2);
        } else {
            take *= beautifulSubsets(s, n, k, i + 1);
        }
        return skip + take;
    }

public:
    int beautifulSubsets(vector<int>& nums, int k) {
        int result = 1;
        map<int,     map<int,  int>> freq;
        // {remainder : {num : frequency}}
        // map is sorted based on num to get subset of form [x, x + k, x + 2k, ...]
        for (int& x: nums) { // splitting subsets based on remainder and calculating frequency
            freq[x % k][x]++;
        }
        for (auto& fr: freq) { // loop for s1, s2, ...
            vector<pair<int, int>> s(fr.second.begin(), fr.second.end());
            result *= beautifulSubsets(s, s.size(), k, 0); // f(s1) * f(s2) ...
        }
        return result - 1; // -1 for empty subset
    }
};
```
```Java []
class Solution {
    int[][] s;

    private int beautifulSubsets(int n, int k, int i) {
        if (i == n) {
            return 1;
        }
        int skip = beautifulSubsets(n, k, i + 1); // 1 * f(i + 1)
        int take = (1 << s[i][1]) - 1; // take s[i]
        if (i + 1 < n && s[i + 1][0] - s[i][0] == k) { // next number is s[i] + k
            take *= beautifulSubsets(n, k, i + 2);
        } else {
            take *= beautifulSubsets(n, k, i + 1);
        }
        return skip + take;
    }

    public int beautifulSubsets(int[] nums, int k) {
        int result = 1;
        Map<Integer, Map<Integer, Integer>> freq = new TreeMap<>();
        // {remainder : {num :    frequency}}
        // map is sorted based on num to get subset of form [x, x + k, x + 2k, ...]
        for (int x: nums) { // splitting subsets based on remainder and calculating frequency
            Map<Integer, Integer> fr = freq.getOrDefault(x % k, new TreeMap<>());
            fr.put(x, fr.getOrDefault(x, 0) + 1);
            freq.put(x % k, fr);
        }
        for (Map<Integer, Integer> fr: freq.values()) { // loop for s1, s2, ...
            s = fr.entrySet().stream()
                  .map(e -> new int[]{e.getKey(), e.getValue()})
                  .toArray(int[][]::new);
            result *= beautifulSubsets(s.length, k, 0); // f(s1) * f(s2) ...
        }
        return result - 1; // -1 for empty subset
    }
}
```
```Python []
class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        result = 1
        freq = defaultdict(collections.Counter)
        # {remainder : {num : frequency}}
        for x in nums:
            freq[x % k][x] += 1
        for fr in freq.values(): # loop for s1, s2, ...
            s = sorted(fr.items())
            def f(i: int) -> int:
                if i == len(s):
                    return 1
                skip = f(i + 1) # 1 * f(i + 1)
                take = 2 ** s[i][1] - 1 # take s[i]
                if i + 1 < len(s) and s[i + 1][0] - s[i][0] == k: # next number is s[i] + k
                    take *= f(i + 2)
                else:
                    take *= f(i + 1)
                return skip + take
            result *= f(0) # f(s1) * f(s2) ...
        return result - 1 # -1 for empty subset
```

Since map is sorted, it is implemented by Self Balancing BST. Insert operation is $O(\\log n)$, it will take $O(n \\log n)$ to make map. There can be $k$ different remainders, meaning maximum $k$ subset splits.
Worst case hits when remainder is same for all numbers (i.e., all comes in same subset $s_1$) and no number is repeated ($frequency = 1$), time is still $O(2^n)$.

- Time Complexity: $$O(n \\log n + 2^n) = O(2^n)$$
- Space Complexity: $$O(n + k)$$

---

***\u2714\uFE0F Solution - IV (DP: Recursion + Memoization) [Accepted]***

$f(i)$ calculates number of beautiful subsets in $s$ starting from index $i$. Memoize the function $f(i)$.

```C++ []
class Solution {
private:
    int beautifulSubsets(vector<pair<int, int>>& s, int n, int k, int i, vector<int>& count) {
        if (i == n) {
            return 1;
        }
        if (count[i] != -1) {
            return count[i];
        }
        int skip = beautifulSubsets(s, n, k, i + 1, count);
        int take = (1 << s[i].second) - 1;
        if (i + 1 < n && s[i + 1].first - s[i].first == k) {
            take *= beautifulSubsets(s, n, k, i + 2, count);
        } else {
            take *= beautifulSubsets(s, n, k, i + 1, count);
        }
        return count[i] = skip + take;
    }

public:
    int beautifulSubsets(vector<int>& nums, int k) {
        int result = 1;
        map<int, map<int, int>> freq;
        for (int& x: nums) {
            freq[x % k][x]++;
        }
        for (auto& fr: freq) {
            vector<pair<int, int>> s(fr.second.begin(), fr.second.end());
            vector<int> count(s.size(), -1);
            result *= beautifulSubsets(s, s.size(), k, 0, count);
        }
        return result - 1;
    }
};
```
```Java []
class Solution {
    int[][] s;
    int[] count;

    private int beautifulSubsets(int n, int k, int i) {
        if (i == n) {
            return 1;
        }
        if (count[i] != -1) {
            return count[i];
        }
        int skip = beautifulSubsets(n, k, i + 1);
        int take = (1 << s[i][1]) - 1;
        if (i + 1 < n && s[i + 1][0] - s[i][0] == k) {
            take *= beautifulSubsets(n, k, i + 2);
        } else {
            take *= beautifulSubsets(n, k, i + 1);
        }
        return count[i] = skip + take;
    }

    public int beautifulSubsets(int[] nums, int k) {
        int result = 1;
        Map<Integer, Map<Integer, Integer>> freq = new TreeMap<>();
        for (int x: nums) {
            Map<Integer, Integer> fr = freq.getOrDefault(x % k, new TreeMap<>());
            fr.put(x, fr.getOrDefault(x, 0) + 1);
            freq.put(x % k, fr);
        }
        for (Map<Integer, Integer> fr: freq.values()) {
            s = fr.entrySet().stream()
                  .map(e -> new int[]{e.getKey(), e.getValue()})
                  .toArray(int[][]::new);
            count = new int[fr.size()];
            Arrays.fill(count, -1);
            result *= beautifulSubsets(s.length, k, 0);
        }
        return result - 1;
    }
}
```
```Python []
class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        result = 1
        freq = defaultdict(collections.Counter)
        for x in nums:
            freq[x % k][x] += 1
        for fr in freq.values():
            s = sorted(fr.items())
            @cache
            def f(i: int) -> int:
                if i == len(s):
                    return 1
                skip = f(i + 1)
                take = 2 ** s[i][1] - 1
                if i + 1 < len(s) and s[i + 1][0] - s[i][0] == k:
                    take *= f(i + 2)
                else:
                    take *= f(i + 1)
                return skip + take
            result *= f(0)
        return result - 1
```

Making map is still $O(n \\log n)$. Calculating answer for one subset will be equal to number of states in DP which makes it $O(n)$.

- Time Complexity: $$O(n \\log n + n) = O(n \\log n)$$
- Space Complexity: $$O(n + k)$$

---

***\u2714\uFE0F Solution - V (Iterative DP) [Accepted]***

Changing recursion to iteration. To calculate $f(i)$, we need to know $f(i + 1)$ and $f(i + 2)$. So DP should be filled right to left.

```C++ []
class Solution {
public:
    int beautifulSubsets(vector<int>& nums, int k) {
        int result = 1;
        map<int, map<int, int>> freq;
        for (int& x: nums) {
            freq[x % k][x]++;
        }
        for (auto& fr: freq) {
            int n = fr.second.size();
            vector<pair<int, int>> s(fr.second.begin(), fr.second.end());
            vector<int> count(n + 1);
            count[n] = 1;
            for (int i = n - 1; i >= 0; i--) {
                int skip = count[i + 1];
                int take = (1 << s[i].second) - 1;
                if (i + 1 < n && s[i + 1].first - s[i].first == k) {
                    take *= count[i + 2];
                } else {
                    take *= count[i + 1];
                }
                count[i] = skip + take;
            }
            result *= count[0];
        }
        return result - 1;
    }
};
```
```Java []
class Solution {
    public int beautifulSubsets(int[] nums, int k) {
        int result = 1;
        Map<Integer, Map<Integer, Integer>> freq = new TreeMap<>();
        for (int x: nums) {
            Map<Integer, Integer> fr = freq.getOrDefault(x % k, new TreeMap<>());
            fr.put(x, fr.getOrDefault(x, 0) + 1);
            freq.put(x % k, fr);
        }
        for (Map<Integer, Integer> fr: freq.values()) {
            int n = fr.size();
            int[][] s = fr.entrySet().stream()
                          .map(e -> new int[]{e.getKey(), e.getValue()})
                          .toArray(int[][]::new);
            int[] count = new int[n + 1];
            count[n] = 1;
            for (int i = n - 1; i >= 0; i--) {
                int skip = count[i + 1];
                int take = (1 << s[i][1]) - 1;
                if (i + 1 < n && s[i + 1][0] - s[i][0] == k) {
                    take *= count[i + 2];
                } else {
                    take *= count[i + 1];
                }
                count[i] = skip + take;
            }
            result *= count[0];
        }
        return result - 1;
    }
}
```
```Python []
class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        result = 1
        freq = defaultdict(collections.Counter)
        for x in nums:
            freq[x % k][x] += 1
        for fr in freq.values():
            n = len(fr)
            s = sorted(fr.items())
            count = [0] * (n + 1)
            count[n] = 1
            for i in range(n - 1, -1, -1):
                skip = count[i + 1]
                take = 2 ** s[i][1] - 1
                if i + 1 < n and s[i + 1][0] - s[i][0] == k:
                    take *= count[i + 2]
                else:
                    take *= count[i + 1]
                count[i] = skip + take
            result *= count[0]
        return result - 1
```

- Time Complexity: $$O(n \\log n)$$
- Space Complexity: $$O(n + k)$$

---

***\u2714\uFE0F Solution - VI (Iterative DP Space Optimized) [Accepted]***

To calculate $f(i)$, we only need $f(i + 1)$ and $f(i + 2)$.
Storing $f(i + 3)$ onwards is useless.
- $curr = f(i)$
- $next_1 = f(i + 1)$
- $next_2 = f(i + 2)$

```C++ []
class Solution {
public:
    int beautifulSubsets(vector<int>& nums, int k) {
        int result = 1;
        map<int, map<int, int>> freq;
        for (int& x: nums) {
            freq[x % k][x]++;
        }
        for (auto& fr: freq) {
            int n = fr.second.size(), curr, next1 = 1, next2;
            vector<pair<int, int>> s(fr.second.begin(), fr.second.end());
            for (int i = n - 1; i >= 0; i--) {
                int skip = next1;
                int take = (1 << s[i].second) - 1;
                if (i + 1 < n && s[i + 1].first - s[i].first == k) {
                    take *= next2;
                } else {
                    take *= next1;
                }
                curr = skip + take;
                next2 = next1; next1 = curr;
            }
            result *= curr;
        }
        return result - 1;
    }
};
```
```Java []
class Solution {
    public int beautifulSubsets(int[] nums, int k) {
        int result = 1;
        Map<Integer, Map<Integer, Integer>> freq = new TreeMap<>();
        for (int x: nums) {
            Map<Integer, Integer> fr = freq.getOrDefault(x % k, new TreeMap<>());
            fr.put(x, fr.getOrDefault(x, 0) + 1);
            freq.put(x % k, fr);
        }
        for (Map<Integer, Integer> fr: freq.values()) {
            int n = fr.size(), curr = 1, next1 = 1, next2 = 0;
            int[][] s = fr.entrySet().stream()
                          .map(e -> new int[]{e.getKey(), e.getValue()})
                          .toArray(int[][]::new);
            for (int i = n - 1; i >= 0; i--) {
                int skip = next1;
                int take = (1 << s[i][1]) - 1;
                if (i + 1 < n && s[i + 1][0] - s[i][0] == k) {
                    take *= next2;
                } else {
                    take *= next1;
                }
                curr = skip + take;
                next2 = next1; next1 = curr;
            }
            result *= curr;
        }
        return result - 1;
    }
}
```
```Python []
class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        result = 1
        freq = defaultdict(collections.Counter)
        for x in nums:
            freq[x % k][x] += 1
        for fr in freq.values():
            n, curr, next1, next2 = len(fr), 1, 1, 0
            s = sorted(fr.items())
            for i in range(n - 1, -1, -1):
                skip = next1
                take = 2 ** s[i][1] - 1
                if i + 1 < n and s[i + 1][0] - s[i][0] == k:
                    take *= next2
                else:
                    take *= next1
                curr = skip + take
                next2, next1 = next1, curr
            result *= curr
        return result - 1
```

- Time Complexity: $$O(n \\log n)$$
- Space Complexity: $$O(n + k)$$

---

***\u2714\uFE0F Solution - VII (Iterative DP: Forward) [Accepted]***

In previous approaches, we were calculating in reverse direction (right to left) of $s$. Due to this, we needed to convert sorted map to array first. It can be avoided if we traverse left to right.

```C++ []
class Solution {
public:
    int beautifulSubsets(vector<int>& nums, int k) {
        int result = 1;
        map<int, map<int, int>> freq;
        for (int& x: nums) {
            freq[x % k][x]++;
        }
        for (auto& fr: freq) {
            int prevNum = -k, prev2, prev1 = 1, curr;
            for (auto& [num, f]: fr.second) {
                int skip = prev1;
                int take = ((1 << f) - 1) * (num - prevNum == k ? prev2 : prev1);
                curr = skip + take;
                prev2 = prev1; prev1 = curr;
                prevNum = num;
            }
            result *= curr;
        }
        return result - 1;
    }
};
```
```Java []
class Solution {
    public int beautifulSubsets(int[] nums, int k) {
        int result = 1;
        Map<Integer, Map<Integer, Integer>> freq = new TreeMap<>();
        for (int x: nums) {
            Map<Integer, Integer> fr = freq.getOrDefault(x % k, new TreeMap<>());
            fr.put(x, fr.getOrDefault(x, 0) + 1);
            freq.put(x % k, fr);
        }
        for (Map<Integer, Integer> fr: freq.values()) {
            int prevNum = -k, prev2 = 0, prev1 = 1, curr = 1;
            for (Map.Entry<Integer, Integer> entry: fr.entrySet()) {
                int num = entry.getKey(), f = entry.getValue();
                int skip = prev1;
                int take = ((1 << f) - 1) * (num - prevNum == k ? prev2 : prev1);
                curr = skip + take;
                prev2 = prev1; prev1 = curr;
                prevNum = num;
            }
            result *= curr;
        }
        return result - 1;
    }
}
```
```Python []
class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        result = 1
        freq = defaultdict(collections.Counter)
        for x in nums:
            freq[x % k][x] += 1
        for fr in freq.values():
            prevNum, curr, prev1, prev2 = -k, 1, 1, 0
            for num in sorted(fr):
                skip = prev1
                take = (2 ** fr[num] - 1) * (prev2 if num - prevNum == k else prev1)
                curr = skip + take
                prev2, prev1 = prev1, curr
                prevNum = num
            result *= curr
        return result - 1
```

- Time Complexity: $O(n \\log n)$
- Space Complexity: $O(n + k)$

---

For any mistakes / suggestions / questions, please do comment below \uD83D\uDC47
Upvote if helps!