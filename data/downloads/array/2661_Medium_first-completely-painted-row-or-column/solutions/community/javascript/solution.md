# js solution

**Author:** SilentDubich
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/5309365/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/5309365/)

---

# Code
```
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
	const rowsHash = {};
	const columnsHash = {};
	const matCache = {};
	const columnsLength = mat[0].length;
	const rowsLength = mat.length;
	mat.forEach((matItem, rowIndex) => {
		matItem.forEach((matItemX, colIndex) => {
			matCache[matItemX] = [ rowIndex, colIndex ];
		});
	});
	for (let i = 0; i <= arr.length - 1; i++) {
		const [ rowIndex, colIndex ] = matCache[arr[i]];
		if (!rowsHash[rowIndex]) rowsHash[rowIndex] = 1;
		else rowsHash[rowIndex]++;

		if (!columnsHash[colIndex]) columnsHash[colIndex] = 1;
		else columnsHash[colIndex]++;

		if (rowsHash[rowIndex] === columnsLength ||
			columnsHash[colIndex] === rowsLength) return i;
	}
};
```