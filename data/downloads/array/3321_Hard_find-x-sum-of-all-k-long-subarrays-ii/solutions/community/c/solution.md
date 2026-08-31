# Top and Bottom

**Author:** votrubac
**Votes:** 38
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/solutions/5905505/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/solutions/5905505/)

---

We use two sorted sets to store pairs of {count, n}:
- `top` set is to store up to top `x` elements.
- `bot` is to keep the rest.

We also use a hash map `cnt` to track the current count of each element `n`.

When we include element `nums[i]`, we increment its count:
- We remove the old pair (if exists) from either set.
- We add the new pair (with the incremented count) to the `top` set.
- If `top` size is greater than `x`, we move the smallest pair to the bottom set.

When we remove an element `nums[i - k]` (if `i >= k`), we decrement its count:
- We remove the old pair from either set.
- If the count is still positive, we add the new pair to the `bot` set.
- If `top` size is less than `x`, we move the largest pair from the bottom set.

When adding and removing elements from the `top` set, we update the `running_sum` of elements in that set.

As soon as we have `k` elements (`i + 1 >= k`), we add `running_sum` to the result.

**C++**
```cpp
vector<long long> findXSum(vector<int>& nums, int k, int x) {
    vector<long long> res;
    unordered_map<int, int> cnt;
    set<pair<long long, int>, greater<pair<long long, int>>> top, bot;
    long long running_sum = 0;
    for (int i = 0; i < nums.size(); ++i) {
        long long count = cnt[nums[i]];
        if (count) {
            if (auto it = bot.find({count, nums[i]}); it != end(bot))
                bot.erase(it);
            else {
                top.erase({count, nums[i]});
                running_sum -= count * nums[i];               
            }
        }
        cnt[nums[i]] = count + 1;
        top.insert({count + 1, nums[i]});
        running_sum += (count + 1) * nums[i];  
        if (top.size() > x) {
            auto it_top = prev(end(top));
            running_sum -= it_top->first * it_top->second;
            bot.insert({it_top->first, it_top->second});
            top.erase(it_top);
        }
        if (i >= k) {
            int count = cnt[nums[i - k]];
            if (auto it = bot.find({count, nums[i - k]}); it != end(bot))
                bot.erase(it);
            else {
                it = top.find({count, nums[i - k]});
                running_sum -= it->first * it->second; 
                top.erase(it);
            }
            if (count > 1)
                bot.insert({count - 1, nums[i - k]});
            --cnt[nums[i - k]];
            if (top.size() < x)
                if (auto it = begin(bot); it != end(bot)) {
                    running_sum += it->first * it->second;
                    top.insert({it->first, it->second});
                    bot.erase(it);
                }
        }
        if (i + 1 >= k)
            res.push_back(running_sum);
    }
    return res;
}  
```