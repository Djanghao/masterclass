# [C++] Short top-down DP with comments

**Author:** jcfernandez
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximize-grid-happiness/solutions/1206789/](https://leetcode.com/problems/maximize-grid-happiness/solutions/1206789/)

---

##### **DP**[**row**][**intro**][**extro**][**iMask**][**eMask**] - maximum grid happiness upto row ```row``` with remainings ```into``` introverts and ```extro``` extroverts to be assigned, ```iMask``` & ```eMask``` are masks representing the allocation of introverts and extroverts at the previous row.


```
int R, C, DP[5][6 +1][6 +1][1 << 5][1 << 5];

int getMaxGridHappiness(int m, int n, int introvertsCount, int extrovertsCount) {
	R = m, C = n;
	memset(DP, -1, sizeof(DP));
	return solve(0, introvertsCount, extrovertsCount, 0, 0);
}

int solve(int row, int intro, int extro, int iMask, int eMask) {
	if (row == R) return 0; // base case: reach the last row

	int &best = DP[row][intro][extro][iMask][eMask];  // memorization
	if (best != -1) return best;
	best = 0;
	// assign columns for the remaining introverts
	int availableCols = (1 << C) - 1, iUsed, eUsed;
	for (int i = availableCols; ; i = (i - 1) & availableCols) {
		if ((iUsed = __builtin_popcount(i)) <= intro) {
			// assign columns for the remaining extroverts
			int remainingCols = availableCols ^ i;
			for (int e = remainingCols; ; e = (e - 1) & remainingCols) {
				if ((eUsed = __builtin_popcount(e)) <= extro) {
					// iUsed & eUsed are the masks of the columns used by introverts and extroverts
					int hapiness = iUsed * 120 + eUsed * 40;

					for(int j=0;j<C;j++) { // calculate losses/gains with neighbors
						int c = id(i, e, j);
						if (!c) continue; // current column used?

						int pL = id(i, e, j - 1); // left neighbor, same row
						if (pL) hapiness += value(c, pL);

						int pU = id(iMask, eMask, j); // up neighbor, previous row
						if (pU) hapiness += value(c, pU);
					}

					// transition: next row with the remainings introverts and extroverts
					hapiness += solve(row+1, intro - iUsed, extro - eUsed, i, e);
					best = max(best, hapiness);
				}       
				if (!e) break; // no remaining masks
			}
		}
		if (!i) break; // no remaining masks
	}

	return best;
}

int value(int a, int b) { // losses/gains by neighbors
	if (a != b) return -30 + 20;
	// a == b, equal neighbors
	if (a == 1) return -30 * 2; // both introverts, lose -60
	return +20 * 2; // both extroverts, gain +40
}

// identify introvert/extrovert from a mask
int id(int &iMask, int &eMask, int p) {
	if (p < 0) return 0; // invalid column
	if (iMask & (1 << p)) return 1; // introvert
	if (eMask & (1 << p)) return 2; // extrovert
	return 0; // unused column
}
```