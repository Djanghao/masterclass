# Sliding Window + Bit Manipulation || Easy and detailed solution || O(n)

**Author:** abhik2003
**Votes:** 96
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5428852/](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5428852/)

---

# Intuition
* For a subarray A[l..r] if AND is X then for all subarray of this subarray has an AND Y where Y>=X.

* Adding a number will cause decrease or unchange of AND.
* Removing a number will cause increase or unchange of AND.
# Approach
- AtLeastK(nums, k) -> will return number of subarray which has an AND atleast k
- `Ans = AtLeast(k) - AtLest(k+1)`
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(32*n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ Frequency vector of size 32.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# \uD83D\uDE4F \uD83D\uDE4F PLEASE UPVOTE IF U FIND IT USEFUL \uD83D\uDE4F\uD83D\uDE4F


# Code
```

class Solution
{
public:
    long long countSubarrays(vector<int> &nums, int k)
    {
        return atLeastK(nums, k) - atLeastK(nums, k + 1);
    }
    long long atLeastK(vector<int>& nums, int k){
        long long ans = 0;
        vector<int> temp(32, 0);

        int l = 0;
        for (int r = 0; r < nums.size(); r++)
        {
            for (int i = 0; i < 32; i++)
            {
                if ((1 << i) & nums[r])
                {
                    temp[i]++;
                }
            }

            while ((r - l + 1) > 0 && calc(temp, r - l + 1) < k)
            {
                for (int i = 0; i < 32; i++)
                {
                    if ((1 << i) & nums[l])
                    {
                        temp[i]--;
                    }
                }
                l++;
            }
            ans += (r - l + 1);
        }
 
        return ans;
    }

    //function to calculate the AND from frequency vector
    int calc(vector<int>& temp, int w){
        int ans = 0;
        for (int i = 0; i < 32;i++){
            if(temp[i]==w)
                ans += (1 << i);
        }

        return ans;
    }
};
```