# ✅ [Rust/Python/C++/Java] Intuitive n^2 Hash Table Solution

**Author:** silver_wolf
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4402894/](https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4402894/)

---

# Intuition

This problem is really similar to [3Sum](https://leetcode.com/problems/3sum), which in turn is based off the infamous Two Sum and Two Sum II. However, one key difference is `i < j < k` and `(nums[i] + nums[j] + nums[k]) % d == 0`. One important thing to note is that we don't have to filter out duplicate triplets.

In other words,
> Input: `nums = [3,3,4,8], d = 15`
> Output: 2
> Explanation: The valid triplets are (0, 2, 4), (1, 2, 4). Since the elements in index 0 and 1 are the same, we can create two tuples where the elements are [3, 4, 8]

<hr>

## \u274C Solution #1: Brute Force [TLE]

Let's start with the naive idea: brute all possible combinations of i, j, and k. This is pretty easy since all we need to do is make sure j > i and k > j.

```python []
class Solution:
    def divisibleTripletCount(self, nums: List[int], d: int) -> int:
        n = len(nums)
        ans = 0
        for i in range(n - 2):
            for j in range(i + 1, n - 1):
                for k in range(j + 1, n):
                    if (nums[i] + nums[j] + nums[k]) % d == 0 :
                        ans += 1

        return ans
```
```cpp []
class Solution {
public:
    int divisibleTripletCount(vector<int>& nums, int d) {
        int n = nums.size();
        int ans = 0;

        for (int i = 0; i < n - 2; ++i) {
            for (int j = i + 1; j < n - 1; ++j) {
                for (int k = j + 1; k < n; ++k) {
                    if ((nums[i] + nums[j] + nums[k]) % d == 0) {
                        ans += 1;
                    }
                }
            }
        }

        return ans;
    }
};
```
```java []
class Solution {
    public int divisibleTripletCount(int[] nums, int d) {
        int n = nums.length;
        int ans = 0;

        for (int i = 0; i < n - 2; ++i) {
            for (int j = i + 1; j < n - 1; ++j) {
                for (int k = j + 1; k < n; ++k) {
                    if ((nums[i] + nums[j] + nums[k]) % d == 0) {
                        ans += 1;
                    }
                }
            }
        }

        return ans;
    }
}
```
```rust []
impl Solution {
    pub fn divisible_triplet_count(nums: Vec<i32>, d: i32) -> i32 {
        let n = nums.len();
        let mut ans = 0;

        for i in 0..n - 2 {
            for j in i + 1..n - 1 {
                for k in j + 1..n {
                    if (nums[i] + nums[j] + nums[k]) % d == 0 {
                        ans += 1;
                    }
                }
            }
        }

        ans
    }
}
```

### Complexity
- Time complexity: $\\mathcal{O}(n^3)$ with these triple nested loops

- Space complexity: $\\mathcal{O}(1)$ since we operate using only the given nums

<hr>

## \u2714\uFE0F Solution #2: Dynamic Programming

Similar to Two Sum, we can leverage a Hash Table to keep track of what we need to find as we iterate over `nums`. First, we build a Hash Table of all the valid `i < j` sums: `nums[i] + nums[j]`.

In modular arithmetic, we know 
$$
x + y + z \\equiv (x \\mod d + y \\mod d + z \\mod d) \\equiv ((x + y) \\mod d + z \\mod d) \\, \	ext{mod} \\, d 
$$

With our Hash Table, we can precalculate valid combinations for $(x + y) \\mod d$. That means as we loop over nums, we will have the value $z$ and need to find $(x + y) \\mod d$. The simplest valid solution would be $(x + y) \\mod d + z \\mod d= d$. This yields $(x + y) \\mod d = d - z \\mod d$.  Ok, my modular arithmetic is really shoddy, but you get what I mean.

| Language  | Runtime (ms) | Memory Usage (MB) |
|-----------|--------------:|-------------------:|
| Rust      | 81            | 16.8               |
| C++       | 200           | 116.1              |
| Java      | 171           | 68.7               |
| Python3   | 870           | 55.6               |


```python []
class Solution:
    def divisibleTripletCount(self, nums: List[int], d: int) -> int:
        duplet_sums = collections.defaultdict(list)
        ans = 0

        for i, j in itertools.combinations(range(len(nums)), 2):
            duplet_sums[(nums[i] + nums[j]) % d].append((i, j))

        for k, val in enumerate(nums):
            # x + y MOD d == 0 is congruent to (x MOD d + y MOD d) MOD d == 0
            # One solution is (x MOD d + y MOD d) == d
            target_key = (d - val % d) % d
            ans += sum(1 for (i, j) in duplet_sums[target_key] if j < k)

        return ans
```
```java []
class Solution {
    public int divisibleTripletCount(int[] nums, int d) {
        Map<Integer, List<int[]>> dupletSums = new HashMap<>();
        int ans = 0;

        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                int temp = (nums[i] + nums[j]) % d;
                dupletSums.putIfAbsent(temp, new ArrayList<>());
                dupletSums.get(temp).add(new int[]{i, j});
            }
        }

        for (int k = 0; k < nums.length; k++) {
            // x + y MOD d == 0 is congruent to (x MOD d + y MOD d) MOD d == 0
            // One solution is (x MOD d + y MOD d) == d

            int val = nums[k];
            int targetKey = (d - val % d) % d;
            final int kFinal = k;

            ans += dupletSums.getOrDefault(targetKey, Collections.emptyList())
                    .stream()
                    .filter(ijPair -> ijPair[1] < kFinal)
                    .count();
        }

        return ans;
    }
}
```
```cpp []
class Solution {
public:
    int divisibleTripletCount(vector<int>& nums, int d) {
        unordered_map<int, vector<pair<int, int>>> dupletSums;

        for (int i = 0; i < nums.size(); ++i) {
            for (int j = i + 1; j < nums.size(); ++j) {
                dupletSums[(nums[i] + nums[j]) % d].emplace_back(i, j);
            }
        }

        int ans = 0;
        for (auto k = 0; k < nums.size(); ++k) {
            // x + y MOD d == 0 is congruent to (x MOD d + y MOD d) MOD d == 0
            // One solution is (x MOD d + y MOD d) == d
            int targetKey = (d - nums[k] % d + d) % d;

            for (const auto& ijPair : dupletSums[targetKey]) {
                if (ijPair.second < k) {
                    ans++;
                }
            }
        }
        return ans;
    }
};
```
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn divisible_triplet_count(nums: Vec<i32>, d: i32) -> i32 {
        let mut duplet_sums: HashMap<i32, Vec<(usize, usize)>> = HashMap::new();
        let mut ans = 0;

        // Populate duplet_sums with combinations
        for i in 0..nums.len() {
            for j in (i + 1)..nums.len() {
                let key = (nums[i] + nums[j]) % d;
                duplet_sums.entry(key).or_default().push((i, j));
            }
        }

        // Calculate answer using iterators and closures
        for (k, &val) in nums.iter().enumerate() {
            let target_key = (d - val % d) % d;

            // If target_key exists, map to 0, otherwise, process using closure
            // pairs.iter() will return &usize, a pointer to the reference of the tuple
            ans += duplet_sums
                .get(&target_key)
                .map_or(0, |pairs| pairs.iter().filter(|&&(i, j)| j < k).count() as i32);
        }

        ans
    }
}
```

### Complexity
- Time complexity: $\\mathcal{O}(n^2)$ since we need to loop over pairs

- Space complexity: $\\mathcal{O}(n^2)$ since the HashMap will store pairs