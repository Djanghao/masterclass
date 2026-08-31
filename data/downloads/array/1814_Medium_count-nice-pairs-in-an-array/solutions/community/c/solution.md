# ✅ Count Frequency of difference of number & its reverse | Easy Hashmap Explained

**Author:** archit91
**Votes:** 128
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/1140487/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/1140487/)

---

\u2714\uFE0F ***Solution (using HashMap)***

We are asked to find pair `(i, j)` such that `i < j` and `num[i] + rev(num[j]) = num[j] + rev(num[i])`. Obviously looking for each pair `(i, j)` won't work. So, we need to find a better time complexity than `O(n^2)`

The above equation can be modified as -

```
num[i] - rev(num[i]) = num[j] - rev(num[j])
```

We can see that we are required to find **number of pairs whose difference between original number and reversed number is the same**. So, we can just count the frequency of numbers having a particular `n - rev(n)` value and store them in a hashmap. Finally, we just have to count the pairs which can be formed which is `freq[i] * (freq[i] - 1) / 2`.

----

***C++***

```
int countNicePairs(vector<int>& nums) {
	long count = 0;
	unordered_map<int, long> mp;
	for(auto& num : nums) mp[num - rev(num)]++;        // counting frequency of each n - rev(n)
	for(auto& pair : mp)  // with each value, we can form n*(n-1)/2 pairs
		count = (count + (pair.second * (pair.second - 1)) / 2) % 1000000007; 
	/* Infact, the above can be done in a single pass as well which I didn't realise at the first try -
	for(auto& num : nums) count = (count + mp[num - reverseNum(num)]++) % 1000000007;
	*/
	return count;
}
int rev(int n){
	int revNum = 0;
	while(n) revNum = revNum * 10 + (n % 10), n /= 10;
	return revNum;
}
```

----

***Python***

```
def countNicePairs(self, nums: List[int]) -> int:
	freqs = Counter(num - int(str(num)[::-1]) for num in nums)
	return sum(freq * (freq - 1) // 2 for freq in freqs.values()) % 1000000007
```

----

***Time Complexity :*** **`O(N*log10(L))`**, where *`N`* is the number of elements in array and *`L`* is average length of each element (`0 <= L <= 9`).
***Space Complexity :*** **`O(N)`**

----

**Fun Fact :** All the numbers have the difference between the original number and its reverse as a **multiple of 9**.