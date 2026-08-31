# C# faster than 100% with explanation

**Author:** pawel753
**Votes:** 2
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/841469/](https://leetcode.com/problems/shifting-letters/solutions/841469/)

---

1. Iterate backwards from the last element and calculate `shift` for each index by adding shift for the given index and sum of all following shifts from `i+1` to the end of `shifts` array
2. Iterate string and shift each character by the given index ***modulo*** number of characters between `'a'` and `'z'` (inclusive)
3. Join both loops into one iteration

Runtime: 120 ms, faster than 100.00% of C# online submissions for Shifting Letters.
Memory Usage: 35 MB, less than 95.83% of C# online submissions for Shifting Letters.
```
public string ShiftingLetters(string S, int[] shifts)
{
	int len = S.Length;
	const int mod = 'z' - 'a' + 1;
	char[] res = new char[len];

	for (int i = len - 1; i >= 0; i--)
	{
		res[i] = (char)((S[i] - 'a' + shifts[i]) % mod + 'a');
		if(i > 0)
			shifts[i - 1] += shifts[i] % mod;
	}

	return new string(res);
}
```