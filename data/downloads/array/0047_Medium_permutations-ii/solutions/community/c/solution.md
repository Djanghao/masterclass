# [C++] 4 different solutions with explanations and tips

**Author:** shlom
**Votes:** 108
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/933190/](https://leetcode.com/problems/permutations-ii/solutions/933190/)

---

**First solution**
Starting with the simplest solution using `std::next_permutation`. This may not be acceptable in a 1:1 interview, but it's a good start. If you are doing a technical evaluation, this may be acceptable. Note that I'm sorting the elements as `std::next_permutation` returns `false` once it reaches the last lexicographically sorted permutation.

```cpp
class Solution {
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        sort(begin(nums), end(nums));
		
        vector<vector<int>> output;
        output.emplace_back(nums);
        while (next_permutation(begin(nums), end(nums))) {
            output.emplace_back(nums);
        }
        return output;
    }
};
```

**Second Solution**
In the previous solution, I used `std::sort` which increases the time complexity, but it's not entirely necessary. We could simply record the initial state of the array and keep generating the next permutation until we completed a cycle. To provide an acceptable solution for this approach, I implemented `next_permutation` myself. The great thing about this solution is that it solves 4 different problems that I know of: [Permutations I](https://leetcode.com/problems/permutations/), [Permutation II](https://leetcode.com/problems/permutations-ii/), [Next Permutation problem](https://leetcode.com/problems/next-permutation/), and [Next Greater Element iii](https://leetcode.com/problems/next-greater-element-iii/) so it's worth practicing it.

```cpp
class Solution {
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        vector<int> initial_state(nums);
        vector<vector<int>> output;
        do {
            output.emplace_back(nums);
            nextPermutation(nums);
        } while (nums != initial_state);
        return output;
    }
private:
    void nextPermutation(vector<int>& nums) {
        if (size(nums) <= 1) return;
        auto pos = 0;
        for (int i = size(nums) - 2; i >= 0; --i) {
            if (nums[i] < nums[i + 1]) {
                pos = i;
                break;
            }
        }
        for (int i = size(nums) - 1; i >= pos; --i) {
            if (nums[pos] < nums[i]) {
                swap(nums[i], nums[pos]);
                ++pos;
                break;
            }
        }
        reverse(begin(nums) + pos, end(nums));
    }
};
```

**Third Solution**
My intuition to solving this problem was using a similar solution to the [Permutations problem](https://leetcode.com/problems/permutations/) but skipping iterations for duplicate numbers. In order to do that I had to sort the array first. That approach on its own wasn't enough. Swapping numbers twice proved to be challenging. To prevent duplicates, I ended up removing the second swap and passing the array by value.

```cpp
class Solution {
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        vector<vector<int>> output;
        sort(begin(nums), end(nums));
        generatePermutations(nums, output, 0);
        return output;
    }
private:
    void generatePermutations(vector<int> nums, vector<vector<int>>& output, int idx) {
        if (idx == size(nums)) {
            output.emplace_back(nums);
        }
        for (int i = idx; i < size(nums); ++i) {
            if (i != idx && nums[i] == nums[idx]) continue;
            swap(nums[i], nums[idx]);
            generatePermutations(nums, output, idx + 1);
        }
    }
};
```

**Fourth solution**
Backtracking using a hash table. This is the same solution you'd find in the `Solution` tab. The key insight here is that by iterating through unique numbers, we can avoid duplication. If you practice the [Permutations problem](https://leetcode.com/problems/permutations/) first, identifying this solution might be challenging, but it's easy enough to understand when you consider it on its own.

```cpp
class Solution {
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        vector<vector<int>> output;
        vector<int> curr;
        unordered_map<int, int> counter;
        for (auto x : nums) ++counter[x];
        generatePermutations(counter, curr, output, size(nums));
        return output;
    }
private:
    void generatePermutations(unordered_map<int, int>& counter, vector<int>& curr, vector<vector<int>>& output, int n) {
        if (size(curr) == n) {
            output.emplace_back(curr);
            return;
        }
        for (auto [key, value] : counter) {
            if (value == 0) continue;
            curr.emplace_back(key); --counter[key];
            generatePermutations(counter, curr, output, n);
            curr.pop_back(); ++counter[key];
        }
    }
};
```