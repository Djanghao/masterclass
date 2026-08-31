# Absolutely unreadable, but very short. O(1) space, O(n) time

**Author:** anikit
**Votes:** 4
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/2005466/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/2005466/)

---

```c#
public int FindUnsortedSubarray(int[] n)
{
    if (n.Zip(n.Skip(1), (a, b) => a <= b).All(x => x)) return 0;
	var (a, b, c, d) = (0, n.Length, 0, n.Length);
	while (n[a] <= n[a + 1]) a++;
	while (n[b - 2] <= n[b - 1]) b--;
	var (min, max) = (n[a..b].Min(), n[a..b].Max());
	while (n[c] <= min) c++;
	while (n[d - 1] >= max) d--;
	return d - c;
}
```