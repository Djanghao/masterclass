# ✅Short & Easy w/ Explanation | Greedy Approach

**Author:** archit91
**Votes:** 53
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/1118806/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/1118806/)

---

We can understand this algorithm through an example. 
If we have coins `[1]`, we can form the sequence `0, 1`. For extending sequence we need coin <= 2.
If we have coing `[1, 2]`, we can form `0, 1, 2, 3`. For extending sequence we need coin <= 4.
If we have coing `[1, 2, 3]`, we can form `0, 1, 2, 3, 4, 5, 6`. For extending sequence we need coin <= 7.
In each of the above case, ***if the next coin we get is greater than the maximum sequence currently formed, we cannot extend the sequence in any case whatsoever***.

Suppose we get another 1 coin and have `[1,1,2,3]`, we can form `0, 1, 2, 3, 4, 5, 6, 7`. 
We can see we extended the previous sequence by 1 and now we would need coin of 8 or less value.

Now, if we get a coin 9, then there's no way we can extend the sequence. The sequence previously formed was upto 7 and we needed to get a coin of value less than or equal to 8 to extend the sequence.

------------

**We can generalize pattern** - we can extend the current consecutive sequence, if the coin we are going to choose is less than or equal to the `current sum + 1`.

```
int getMaximumConsecutive(vector<int>& coins) {
	sort(begin(coins), end(coins));
	int curSum = 0;
	for(auto& coin : coins)
		if(coin <= curSum + 1) curSum += coin;
		else break;

	return curSum + 1;
}
```

**Time Complexity :** **`O(NlogN)`**
**Space Complexity :** **`O(1)`**, ignoring the implicit space required by the sort algorithm

------------
------------