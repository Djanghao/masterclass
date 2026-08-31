# My kotlin solution with time O(MN) and space O(MN)

**Author:** hj-core
**Votes:** 2
**Link:** [https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6070861/](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6070861/)

---

The first idea that comes to my mind is brute force: what we want is a series of decisions, for each column whether to flip it or not. After flipping, there will be some unique value rows. Although we don't know which row will become a unique value row under the optimal flipping, we can try them all. For each row, flip it to a unique value row and count how many unique value rows are in the matrix, and return the maximum count.

Soon you will find that the unique value rows caused by a flipping share the same structure, e.g. xoring them to their first value will be the same. We can group the rows in matrix according to their structure. Furthermore, we cannot make rows with different structures to become unique value rows at the same time. So, the result is the size of the largest group.

One potential improvement learned from comments is to use Trie to merge the description of rows, which may improve space complexity.

Actually, what you want is a fingerprint of the structure. You may convert the XORed row into a list of 32-bit numbers, or build the trie in 32-bit chunks, or apply a magic hash function to the XORed row, or devise other clever schemes.


Below is my implementations,
```Kotlin [kotlin]
class Solution {
    /* Complexity:
     * Time O(MN) and Space O(MN) where M is the number of rows in matrix
     * and N is the number of columns in matrix.
     */
    fun maxEqualRowsAfterFlips(matrix: Array<IntArray>): Int = 
        matrix
            .groupingBy { describeStructure(it) }
            .eachCount()
            .values
            .max()

    private fun describeStructure(row: IntArray): List<Int> =
        row.map { it xor row[0] }
}
```
```Kotlin [kotlin/32bit]
class Solution {
    /* Complexity:
     * Time O(MN) and Space O(MN) where M is the number of rows in matrix
     * and N is the number of columns in matrix.
     */
    fun maxEqualRowsAfterFlips(matrix: Array<IntArray>): Int =
        matrix
            .groupingBy { describeStructure(it) }
            .eachCount()
            .values
            .max()

    private fun describeStructure(row: IntArray): List<Int> =
        buildList {
            val bitWidth = 32
            for (i in row.indices step bitWidth) {
                var component = 0
                for (j in i..<min(i + bitWidth, row.size)) {
                    component = (component shl 1) + (row[j] xor row[0])
                }
                add(component)
            }
        }
}
```
```Rust [rust]
use std::collections::HashMap;

impl Solution {
    // Complexity:
    // Time O(MN) and Space O(MN) where M is the number of rows in matrix
    // and N is the number of columns in matrix.
    pub fn max_equal_rows_after_flips(matrix: Vec<Vec<i32>>) -> i32 {
        *matrix
            .iter()
            .map(|row| Self::describe_structure(row))
            .fold(HashMap::new(), |mut acc, description| {
                acc.entry(description).and_modify(|e| *e += 1).or_insert(1);
                acc
            })
            .values()
            .max()
            .unwrap()
    }

    fn describe_structure(row: &[i32]) -> Vec<i32> {
        row.iter().map(|&v| v ^ row[0]).collect()
    }
}
```
```Go [go/hash]
// Complexity:
// Time O(MN) and Space O(M) where M is the number of rows in matrix
// and N is the number of columns in matrix.
func maxEqualRowsAfterFlips(matrix [][]int) int {
	counter := make(map[int]int)
	for _, row := range matrix {
		counter[describeStructure(row)]++
	}

	result := 0
	for _, value := range counter {
		result = max(result, value)
	}
	return result
}

// WARNING!! Potential collision risk; probability I don't know...
func describeStructure(row []int) int {
	result := 0
	for _, v := range row {
		result = 31*result + (v ^ row[0])
	}
	return result
}
```
```Python3 [python3]
class Solution:
    # Complexity:
    # Time O(MN) and Space O(MN) where M is the number of rows in matrix
    # and N is the number of columns in matrix.
    def maxEqualRowsAfterFlips(self, matrix: List[List[int]]) -> int:
        counter = collections.Counter()
        for row in matrix:
            counter[self._describe_structure(row)] += 1
        return max(counter.values())

    @staticmethod
    def _describe_structure(row: List[int]) -> tuple[int, ...]:
        return tuple(v ^ row[0] for v in row)
```
