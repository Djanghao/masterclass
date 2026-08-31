# Simple iterative solution, no recursion/DFS

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2522760/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2522760/)

---

```csharp
public int[] NumsSameConsecDiff(int n, int k)
{
	HashSet<int> res = new(new[]{ 1, 2, 3, 4, 5, 6, 7, 8, 9 });
	var maxOrder = Math.Pow(10, n - 1);
	int order = 1;

	while (order < maxOrder)
	{
		foreach (int num in res.Where(x => x >= order).ToArray())
		{
			int upper = num % 10 + k; //Candidate 1 for the next digit
			int lower = num % 10 - k; //Candidate 2 for the next digit

			if (upper <= 9) res.Add(num * 10 + upper);
			if (lower >= 0) res.Add(num * 10 + lower);
		}

		order *= 10;
	}

	return res.Where(x => x >= order).ToArray();
}
```

Explanation:
1. Initialize the hashset with single digits
2. In the outer loop, iterate until the required order of magnitude has been reached
3. In the inner loop, iterate over the numbers generated during the last run, i.e. over the numbers of one order of magnitude lower
4. Get two candidates for the next digit: `lastdigit + k` and `lastdigit - k`. If they are between 0 and 9, then add the new number to the hashset
5. Return all numbers that have reached the required order of magnitude