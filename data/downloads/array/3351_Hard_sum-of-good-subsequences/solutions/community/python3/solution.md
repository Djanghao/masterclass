# Python3 || 8 lines, iterate and count  || T/S: 99% / 86%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/sum-of-good-subsequences/solutions/6098144/](https://leetcode.com/problems/sum-of-good-subsequences/solutions/6098144/)

---

Here's the intuition:
- We understand that an integer *num* may occur a number of times as particular elements of `nums`.
- We iterate through `nums` to determine the count of good sequences end with each particular element `num` as well as the total of good sequences ending the totla of good sequences ending in the integer *num*.


Here's the plan:
1. We use two arrays as hashmaps to store intermediate results of these counts during the interation.

2. For each particular element `num`, we count the the number of subsequences ending in `nums \xB1 1` plus one for the subsequence `[num]`(which is a good subsequence by definition).
3. The sum of all good subsequences that end in the integer *num* is accumulated in `good[num]`.


```python3 []
class Solution:
    
    def sumOfGoodSubsequences(self, nums: List[int]) -> int:

        arr_len, mod_ = max(nums) + 2, 1_000_000_007                    #<- 1)
        cnt, good = [0] * arr_len, [0] * arr_len

        for num in nums:
            
            change = (1 + cnt[num - 1] + cnt[num + 1]) %mod_            #<- 2) 
            cnt[num]+= change

            good[num]+= good[num - 1] + good[num + 1] + num * change    #<- )
            good[num]%= mod_
        
        return sum(good) %mod_
```
```cpp []
class Solution {
public:
    int sumOfGoodSubsequences(vector<int>& nums) {
        int arr_len = *max_element(nums.begin(), nums.end()) + 2;
        const int mod_ = 1'000'000'007;
        
        vector<long long> cnt(arr_len, 0), good(arr_len, 0);

        for (int num : nums) {
            long long change = 1; 

            if (num - 1 >= 0) change = (change + cnt[num - 1]) % mod_;
            if (num + 1 < arr_len) change = (change + cnt[num + 1]) % mod_;

            cnt[num] = (cnt[num] + change) % mod_;

            good[num] = (good[num] + num * change % mod_) % mod_;
            if (num - 1 >= 0) good[num] = (good[num] + good[num - 1]) % mod_;
            if (num + 1 < arr_len) good[num] = (good[num] + good[num + 1]) % mod_;
        }

        return accumulate(good.begin(), good.end(), 0LL) % mod_;
    }
};

```
```java []
class Solution {
    public int sumOfGoodSubsequences(int[] nums) {
        int arr_len = Arrays.stream(nums).max().orElse(0) + 2;
        final int mod_ = 1_000_000_007;

        long[] cnt = new long[arr_len];
        long[] good = new long[arr_len];

        for (int num : nums) {
            long change = 1;

            if (num - 1 >= 0) change = (change + cnt[num - 1]) % mod_;
            if (num + 1 < arr_len) change = (change + cnt[num + 1]) % mod_;

            cnt[num] = (cnt[num] + change) % mod_;

            good[num] = (good[num] + num * change % mod_) % mod_;
            if (num - 1 >= 0) good[num] = (good[num] + good[num - 1]) % mod_;
            if (num + 1 < arr_len) good[num] = (good[num] + good[num + 1]) % mod_;}

        long sum = 0;
        for (long val : good) sum = (sum + val) % mod_;
        return (int) sum;}
}
```

[https://leetcode.com/problems/sum-of-good-subsequences/submissions/1466747696/](https://leetcode.com/problems/sum-of-good-subsequences/submissions/1466747696/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*M*), in which *N* ~ `len(nums)` and *N* ~ `max(nums)`.