# Concise Union-Find

**Author:** anikit
**Votes:** 4
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2626037/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2626037/)

---

```csharp
public bool EquationsPossible(string[] equations)
{
	var uf = Enumerable.Range(0, 26 + 'a').ToArray();
	var eqs = equations.Where(x => x[1] == '=').Select(x => (x[0], x[3]));
	var neqs = equations.Where(x => x[1] == '!').Select(x => (x[0], x[3]));

	foreach (var (a, b) in eqs)
	{
		uf[GetRoot(a)] = GetRoot(b);
	}

	foreach (var (a, b) in neqs)
	{
		if (GetRoot(a) == GetRoot(b)) return false;
	}

	return true;

	int GetRoot(int i)
	{
		while(uf[i] != i)
		{
			i = uf[i] = uf[uf[i]];
		}
		
		return i;
	}
}
```