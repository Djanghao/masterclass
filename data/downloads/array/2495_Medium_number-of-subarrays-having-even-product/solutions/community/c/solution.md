# Reverse

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/2885481/](https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/2885481/)

---

How many total subarrays there are?
- `sz * (sz +1) / 2`.

When a subarray product is odd? 
- When all elements in that subarrays are odd.

To get the number of odd subarrays, we count the number of consequitive odd numbers.

To get the result, we subtract the number of odd subarrays from the total.

**C++**
```cpp
long long evenProduct(vector<int>& nums) {
    long long even_subs = nums.size() * (nums.size() + 1) / 2, odd_cnt = 0;
    for (auto n : nums) {
        odd_cnt = n % 2 ? odd_cnt + 1 : 0;
        even_subs -= odd_cnt;
    }
    return even_subs;
}
```