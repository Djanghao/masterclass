# Shortest recursive solution, super clear

**Author:** anikit
**Votes:** 20
**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/2738434/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/2738434/)

---

Please upvote if you like it:
```csharp
public int MaxLength(IList<string> arr, int i = 0, string s = "")
{
	if (s.Distinct().Count() < s.Length) return 0;

	if (arr.Count == i) return s.Length;

	return Math.Max(
		MaxLength(arr, i + 1, s),
		MaxLength(arr, i + 1, s + arr[i])
	);
}
```

And of course, we can put it all on one line, although we really shouldn't:
```csharp
public int MaxLength(IList<string> arr, int i = 0, string s = "") =>
	s.Distinct().Count() < s.Length ? 0 : arr.Count == i ? s.Length : Math.Max(MaxLength(arr, i + 1, s), MaxLength(arr, i + 1, s + arr[i]));
```