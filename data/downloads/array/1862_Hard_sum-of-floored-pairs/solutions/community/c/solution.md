# ✅ C++ Short & Easy | Frequency Prefix Sum Solution w/ Explanation

**Author:** archit91
**Votes:** 83
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/1210073/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/1210073/)

---

\u2714\uFE0F ***Solution (Frequency Prefix Sum)***

We can't iterate sum up for all the possible pairs since the given constraints would lead to TLE. 

We need to observe that the result of *`floor(nums[i] / nums[j])`*,  will be - 

* **`0`** if `nums[i] < nums[j]`
* **`1`** if `nums[j] <= nums[i] < (2 * nums[j])`
* **`2`** if `2 * nums[j] <= nums[i] < (3 * nums[j])`
* and so on...

We can use this to build a **frequency array** and then **calculate the prefix sum of it**. 

After this, for every *`num`* in *`nums`*, we will add the answer into *`sum`* as per the above observation. 

* All the numbers in the range `[0, num - 1]` will contribute **0** to the sum each. The **frequency of numbers in this range** will be given by *`freq[num - 1] - freq[0]`*.
* All the numbers in the range `[num, 2*num - 1]` will contribute **1** to the sum each. **Frequency:** *`freq[num] - freq[2num - 1]`*.
* Numbers in `[2*num, 3*num - 1]` will contribute **3** each. **Frequency:**  *`freq[2num] - freq[3num - 1]`*.
* And so on till our range covers the maximum element of the *`nums`* array...

**C++**
```
const int MAXN = 1e5 + 1, MOD = 1e9 + 7;
int sumOfFlooredPairs(vector<int>& nums) {
	vector<long> freq(2*MAXN+1);        
	long mx = 0, sum = 0;
	for(auto num : nums) ++freq[num], mx = max((int)mx, num);  // counting frequency of each element in nums
	for(int i = 1; i <= 2*MAXN; ++i) freq[i] += freq[i - 1];   // building prefix sum array of freq. Now freq[i] will hold the frequency of numbers less than or equal to i
	// Each num will be assumed in the denominator as floor(nums[i] / num) and 
	// using freq array, we can calculate the number of terms contributing 1, 2, 3... to the sum each.
	for(auto num : nums) { 
		long l = num, r = 2 * num - 1, divResult = 1;
		while(l <= mx) {                
			sum = (sum + divResult * (freq[r] - freq[l - 1])) % MOD;
			l += num, r += num;
			++divResult;
		}
	}
	return sum;
}
```

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---