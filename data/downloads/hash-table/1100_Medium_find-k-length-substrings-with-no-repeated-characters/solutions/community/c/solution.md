# [C++] Sliding Window

**Author:** KasraGhodsi
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/322995/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/322995/)

---

First, we build our initial window: count up the first `K` letters of `S`. 
If there are no repeats, start `res` at 1. 

Then, repeatedly shift the window one spot to the right. 
At each shift, if the number of repeating letters is 0, increase `res` by 1.

```
int numKLenSubstrNoRepeats(string S, int K) {
	if (K > S.size()) return 0;

	int repeats = 0, res = 0;
	vector<int> window(26, 0);

	for(int i = 0; i < K; i++) 
		if(window[S[i] - 'a']++ == 1) 
			repeats++;

	if(!repeats) res++;

	for(int i = K; i < S.size(); i++) {
		if(--window[S[i - K] - 'a'] == 1) repeats--;
		if(window[S[i] - 'a']++ == 1) repeats++;
		if(!repeats) res++;
	}
	return res;
}
```