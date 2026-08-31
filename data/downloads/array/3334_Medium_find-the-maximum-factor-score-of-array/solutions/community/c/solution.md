# [C] prefix & suffix | Time: O(n), Space: O(n)

**Author:** zhang_jiabo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/6018483/](https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/6018483/)

---

```C []
static int gcd(int a, int b){
	while (b != 0){
		const int c = a % b;

		a = b;
		b = c;
	}

	return a;
}

static int64_t gcd_int64(int64_t a, int64_t b){
	while (b != 0){
		const int64_t c = a % b;

		a = b;
		b = c;
	}

	return a;
}
static int64_t lcm_int64(const int64_t a, const int64_t b){
	return a / gcd_int64(a, b) * b;
}

int64_t maxScore(const int * const nums, const int numsLen){
	if (0 == numsLen){
		return 0;
	}
	assert(numsLen >= 1);

	typedef struct LcmGcd{
		int64_t lcm;
		int gcd;
	} LcmGcd;

	LcmGcd prefixs[numsLen];
	prefixs[0].lcm = 1;
	prefixs[0].gcd = 0;
	for (int i = 1; i < numsLen; i += 1){
		prefixs[i].lcm = lcm_int64(prefixs[i - 1].lcm, nums[i - 1]);
		prefixs[i].gcd = gcd(prefixs[i - 1].gcd, nums[i - 1]);
	}

	LcmGcd suffixs[numsLen];
	suffixs[numsLen - 1].lcm = 1;
	suffixs[numsLen - 1].gcd = 0;
	for (int i = numsLen - 2; i >= 0; i -= 1){
		suffixs[i].lcm = lcm_int64(suffixs[i + 1].lcm, nums[i + 1]);
		suffixs[i].gcd = gcd(suffixs[i + 1].gcd, nums[i + 1]);
	}

	int64_t maxFactorScore = lcm_int64(prefixs[numsLen - 1].lcm, nums[numsLen - 1]) *
		gcd(prefixs[numsLen - 1].gcd, nums[numsLen - 1]); //remove nothing
	for (int i = 0; i < numsLen; i += 1){
		const int64_t curFactorScore = lcm_int64(prefixs[i].lcm, suffixs[i].lcm) *
			gcd(prefixs[i].gcd, suffixs[i].gcd);
		if (curFactorScore > maxFactorScore){
			maxFactorScore = curFactorScore;
		}
	}
	return maxFactorScore;
}
```