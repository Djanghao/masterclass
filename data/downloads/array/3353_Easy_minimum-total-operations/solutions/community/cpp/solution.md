# the count of numbers that differ from their left neighbour ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-operations/solutions/6052218/](https://leetcode.com/problems/minimum-total-operations/solutions/6052218/)

---

**time: `O(N)`; space: `O(1)`**
```
int minOperations(vector<int>& n) 
{
	int out{};
	for(int i{1}; i<size(n); ++i)
		out += n[i]!=n[i-1];
	return out;
}
```
P.S. What a long and convoluted way to ask you to count the number of numbers that differ from their left neighbour