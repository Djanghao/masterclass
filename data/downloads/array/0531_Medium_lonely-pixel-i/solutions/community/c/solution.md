# Only 1 array is needed. It doesn't get easier to understand than this.

**Author:** terrificP
**Votes:** 0
**Link:** [https://leetcode.com/problems/lonely-pixel-i/solutions/4942133/](https://leetcode.com/problems/lonely-pixel-i/solutions/4942133/)

---

Space complexity is reduced to $$O(n)$$. Runtime stays $$O(nm)$$. Iterate over array row by row. If you find a second black pixel in a row, break. At the end of each row, record in `lonelyOnRow` array if there was only a single black pixel in it.

When iterating over columns, do the same thing, but also record the row you found the black pixel in, to check the `lonelyOnRow` array with.
```
#include <stdbool.h>
#include <stdlib.h>

int findLonelyPixel(char **picture, int pictureSize, int *pictureColSize)
{
	int n = pictureSize;
	int m = pictureColSize[0];
	bool *lonelyOnRow = (bool *)calloc(m, sizeof(bool));
	int lonelyBlacks = 0;

	for (int i = 0; i < n; ++i) {
		int foundInCurrentRow = 0;
		for (int j = 0; j < m; ++j) {
			if (picture[i][j] == 'B') {
				if (++foundInCurrentRow > 1) {
					break;
				}
			}
		}
		if (foundInCurrentRow == 1) {
			lonelyOnRow[i] = true;
		}
	}

	for (int j = 0; j < m; ++j) {
		int foundInCurrentCol = 0;
		int rowFoundIn = -1;
		for (int i = 0; i < n; ++i) {
			if (picture[i][j] == 'B') {
				++foundInCurrentCol;
				rowFoundIn = i;
				if (foundInCurrentCol > 1) {
					break;
				}
			}
		}
		if (foundInCurrentCol == 1 && lonelyOnRow[rowFoundIn]) {
			++lonelyBlacks;
		}
	}
	free(lonelyOnRow);
	return lonelyBlacks;
}
```