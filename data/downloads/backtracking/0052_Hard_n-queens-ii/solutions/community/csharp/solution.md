# Easy recursive solution

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/2114396/](https://leetcode.com/problems/n-queens-ii/solutions/2114396/)

---

```csharp
public int TotalNQueens(int n)
{
	int count = 0;
	var rows = new bool[n];
	var diag1 = new bool[2 * n];
	var diag2 = new bool[2 * n];

	Helper(0); // start with the first column

	return count;

	void Helper(int col)
	{
		if (col == n) count++; // successfully placed n queens
		// in case col == n, we could return right away, but it is also alright to go on

		for (int row = 0; row < n; row++)
		{
			int a = row + col;
			int b = row - col + n;

			if (rows[row] || diag1[a] || diag2[b]) continue; // unable to place a queen

			rows[row] = diag1[a] = diag2[b] = true;  // place a queen
			Helper(col + 1);                         // go to the next column
			rows[row] = diag1[a] = diag2[b] = false; // remove the queen
		}
	}
}
```