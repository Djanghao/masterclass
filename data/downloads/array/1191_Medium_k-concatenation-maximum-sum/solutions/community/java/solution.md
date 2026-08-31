# [JAVA] Java Solution with Explanation

**Author:** UMN-HKC
**Votes:** 12
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/382889/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/382889/)

---

The key is to figure out couple of cases that the answer could be derived from.
Case 1: when k == 1, then the question is just asking max subarray sum since there's only 1 array
Case 2: when k > 1:
- Case2(1): when sum >= 0: we can use ((k - 2) * sum of array) as 'free' sum since they are positive and why not add them to our answer. Then, only add max prefix sum and max suffix sum from the rest two arrays to add to our final answer.
- Case2(2): when sum < 0: if sum < 0, there's no need to add any of (k - 2) 'free' sum, they are only going to make our final answer smaller. So we only pick the max prefix sum + max suffix sum as our answer.
- Note that for both cases in  case2, we need also compare final answer with kaden.

Hope it helpes.
```
public static int mod = (int)(Math.pow(10, 9) + 7);
public int kConcatenationMaxSum(int[] arr, int k) {
	// 3 cases to consider:
	// case1: max = max subarray (k == 1)
	// case2: max = max(kaden, maxPrefixSum + maxSuffixSum + (k - 2) * sum) (sum >=0 && k > 1)
	// case3: max = max(kaden, maxPrefixSum + maxSuffixSum) (sum < 0 && k > 1)

	int n = arr.length;
	long sum = 0;
	// calculate sum of whole array
	for (int i = 0; i < n; i++) {
		sum += arr[i];
	}
	int kaden = kadenAlg(arr);
	// case1
	// if only 1 array, then answer is the max subarray sum
	if (k == 1) {
		return kaden;
	}  
	// calculate max value of prefix sum and max value of suffix sum
	long prefixSum = 0;
	long suffixSum = 0;
	long maxPrefixSum = 0;
	long maxSuffixSum = 0;
	for (int i = 0; i < n; i++) {
		prefixSum = (prefixSum+ arr[i]) % mod;
		maxPrefixSum = Math.max(maxPrefixSum, prefixSum);
	}
	for (int i = n - 1; i >= 0; i--) {
		suffixSum = (suffixSum + arr[i]) % mod;
		maxSuffixSum = Math.max(maxSuffixSum, suffixSum);
	}

	// case 2:
	if (sum >= 0) {
		return Math.max(kaden, (int)((sum * (k - 2)  + maxSuffixSum + maxPrefixSum) % mod));
	}
	// case 3:
	else {
		return Math.max(kaden, (int)((maxSuffixSum + maxPrefixSum) % mod));
	}
}
public int kadenAlg(int[] arr) {
	long maxSoFar = 0, maxEndingHere = 0;
	for (int i = 0; i < arr.length; i++) {
		maxEndingHere = (maxEndingHere + arr[i]) % mod;
		if (maxEndingHere < 0) maxEndingHere = 0;
		else {
			maxSoFar = Math.max(maxSoFar, maxEndingHere);
		}
	}
	return (int)maxSoFar;
}

```