# Count Ones

**Author:** votrubac
**Votes:** 25
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1730197/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1730197/)

---

#### Simplified Solution
Compared to the original solution, we can use one variable `score`, instead of two (`ones` and `zeros`).

Also, if we pre-assign the initial score for the `0` index, we can avoid going `i < nums.size()` check.

**C++**
```cpp
vector<int> maxScoreIndices(vector<int>& nums) {
    int score = accumulate(begin(nums), end(nums), 0), max_score = score;
    vector<int> res{0};
    for (int i = 0; i < nums.size(); ++i) {
        score += (nums[i] == 0) - nums[i];
        if (score > max_score) {
            max_score = score;
            res.clear();
        }
        if (score == max_score)
            res.push_back(i + 1);
    }
    return res;
}
```

#### Original Solution
Just for the refence.
**C++**
```cpp
vector<int> maxScoreIndices(vector<int>& nums) {
    int ones = accumulate(begin(nums), end(nums), 0), zeros = 0, score = 0;
    vector<int> res;
    for (int i = 0; i <= nums.size(); ++i) {
        if (ones + zeros > score) {
            score = ones + zeros;
            res.clear();
        }
        if (ones + zeros == score)
            res.push_back(i);
        if (i < nums.size()) {
            zeros += nums[i] == 0;
            ones -= nums[i];
        }
    }
    return res;
}
```