# Dictionary solution with Ranges, no Trie

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/palindrome-pairs/solutions/2586672/](https://leetcode.com/problems/palindrome-pairs/solutions/2586672/)

---

```csharp
public IList<IList<int>> PalindromePairs(string[] words)
{
	List<IList<int>> res = new();
	var dict = Enumerable.Range(0, words.Length).ToDictionary(x => words[x], x => x);

	foreach (var (word, i) in dict)
	{
		int j = 0;
		string r = string.Concat(word.Reverse());

		if (dict.TryGetValue(r, out j) && j != i) res.Add(new List<int>{ i, j });

		for (int k = 0; k < word.Length; k++)
		{
			if (IsPalindrome(r[..^k]) && dict.TryGetValue(r[^k..], out j)) res.Add(new List<int>{ i, j });
			if (IsPalindrome(r[k..]) && dict.TryGetValue(r[..k], out j)) res.Add(new List<int>{ j, i });
		}
	}

	return res;
}

private bool IsPalindrome(string s)
{
	int i = 0;

	while (i < s.Length / 2)
	{
		if (s[i++] != s[^i]) return false;
	}

	return true;
}
```