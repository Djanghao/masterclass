# C++ || iterate backward and forward using std::bitset || fast (39ms, 100%?)

**Author:** heder
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3497064/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3497064/)

---

**TODO(heder): Insert cute cat meme to ask for up-votes. ;)**

# Approach 1: using std::bitset
Since the input range is so limited we can using a ```std::bitset``` to count unique elements instead of ```std::unordered_map```. With only 64bit wide the compiler can use ```popcount``` to count the number of set bits / unique elments.

```cpp
    static vector<int> distinctDifferenceArray(const vector<int>& nums) {
        // scan backward
        bitset<64> bw;
        vector<int> cnt_bw(size(nums));
        for (int i = size(nums) - 1; i >= 0; --i) {
            cnt_bw[i] = bw.count();
            bw.set(nums[i]);
        }
        // scan forward
        bitset<64> fw;
        vector<int> ans;
        ans.reserve(size(nums));
        for (int i = 0; i < size(nums); ++i) {
            fw.set(nums[i]);
            ans.push_back(fw.count() - cnt_bw[i]);
        }
        return ans;
    }
```

**Complexity Analysis**
Let $$n$$ be the lenght of the input then
  * Time complexity is $$O(n)$$ as we need to scan it forward and backward and
  * Space complexity is $$O(1)$$.

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
