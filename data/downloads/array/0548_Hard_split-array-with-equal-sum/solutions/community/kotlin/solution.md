# Kotlin / C++: O(n^2) time and O(n) space with Prefix Sum and HashSet

**Author:** kotlinvim
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-with-equal-sum/solutions/973677/](https://leetcode.com/problems/split-array-with-equal-sum/solutions/973677/)

---

	// Kotlin

    fun splitArray(nums: IntArray): Boolean {
        if (nums.size < 7) return false

        val n = nums.size
        val presum = IntArray(n) { nums[0] }
        for (i in 1..n - 1) presum[i] = presum[i - 1] + nums[i]

        /*
             0 1 2 3 4 5 6
            [1,2,1,2,1,2,1]
               i   j   k
             A   B   C   D
        */
        for (j in 3..n - 1 - 3) {
            val seen = HashSet<Int>()
            
            for (i in 1..j - 1 - 1) {
                val secA = presum[i - 1]
                val secB = presum[j - 1] - presum[i]
                if (secA == secB) seen.add(secA)
            }
            
            for (k in j + 1 + 1..n - 1) {
                val secC = presum[k - 1] - presum[j]
                val secD = presum[n - 1] - presum[k]
                if (secC == secD && seen.contains(secC)) return true
            }
        }
        
        return false
    }

	// C++
	
    bool splitArray(vector<int>& nums) {
        int n = nums.size();

        if (n < 7) return false;

        vector<int> presum(n, nums[0]);
        for (int i = 1; i < n; i++) presum[i] = presum[i - 1] + nums[i];

        for (int j = 3; j < n - 2; j++) {
            unordered_set<int> seen;
            for (int i = 1; i < j - 1; i++) {
                int secA = presum[i - 1];
                int secB = presum[j - 1] - presum[i];
                if (secA == secB) seen.insert(secA);
            }
            for (int k = j + 2; k < n; k++) {
                int secC = presum[k - 1] - presum[j];
                int secD = presum[n - 1] - presum[k];
                if (secC == secD && seen.count(secC)) return true;
            }
        }
        
        return false;
    }