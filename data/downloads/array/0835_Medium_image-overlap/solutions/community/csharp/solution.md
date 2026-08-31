# Tuple Galore: A short and clear solution in O(n^4) Time

**Author:** anikit
**Votes:** 4
**Link:** [https://leetcode.com/problems/image-overlap/solutions/2750135/](https://leetcode.com/problems/image-overlap/solutions/2750135/)

---

```csharp
public int LargestOverlap(int[][] img1, int[][] img2)
{
	int n = img1.Length;

	List<(int, int)> ones1 = new();
	List<(int, int)> ones2 = new();
	Dictionary<(int, int), int> freq = new();

	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < n; j++)
		{
			if (img1[i][j] == 1) ones1.Add((i, j));
			if (img2[i][j] == 1) ones2.Add((i, j));
		}
	}

	foreach (var (i, j) in ones1)
	{
		foreach (var (k, l) in ones2)
		{
			var dist = (i - k, j - l);
			if (!freq.ContainsKey(dist)) freq[dist] = 0;
			freq[dist]++;
		}
	}

	return freq.Count > 0 ? freq.Values.Max() : 0;
}
```

Explanation:
1. Put coordinates of every `1` into two lists.
2. For every `1` in the first list, calculate the distances to every `1` in the second list. Count how often every distance comes up.
3. Return the counter for the most frequent distance.