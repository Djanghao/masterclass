# Kotlin / C++: O(nlogn) time and O(n) space

**Author:** kotlinvim
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/934797/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/934797/)

---

	// Kotlin

    fun numSubseq(nums: IntArray, target: Int): Int {
        /*
           Math: for a <= b <= c when a + c <= target
           we have {a}, {a,b}, {a,c}, {a,b,c} => 2^(3 - 1)
           so, for a given num n, we have 2^(n - 1)
        */
        nums.sort()

        // notice this mod = 1e9 + 7
        val n = nums.size; val mod = 1e9 + 7
        /*
           Build the list for quickly check the numbers
           for satisfing 2^(n - 1)
        */
        val power = IntArray(n + 1) { 1 }
        for (i in 1..n) {
            power[i] = ((power[i - 1] * 2) % mod).toInt()
        }

        var res = 0
        var l = 0; var r = n - 1

        while (l <= r) {
            if (nums[l] + nums[r] > target) {
                r--
            } else {
                res = ((res + power[r - l]) % mod).toInt()
                l++
            }
        }

        return res
    }
	
	// C++

    int numSubseq(vector<int>& nums, int target) {
        // Math: for a <= b <= c when a + c <= target
        // we have {a}, {a,b}, {a,c}, {a,b,c} => 2^(3 - 1)
        // so, for a given num n, we have 2^(n - 1)

        const int n = nums.size();
        const int mod = 1e9 + 7;

        // Build the list for quickly check the numbers
        // for satisfing 2^(n - 1)
        vector<int> power(n + 1, 1);
        for (int i = 1; i < n + 1; i++) {
            power[i] = (power[i - 1] * 2) % mod;
        }
        
        sort(nums.begin(), nums.end());

        int l = 0, r = n - 1, res = 0;
        while (l <= r) {
            if (nums[l] + nums[r] <= target) {
                res = (res + power[r - l] ) % mod;
                l++;
            } else {
                r--;
            }
        }
        return res;
    }