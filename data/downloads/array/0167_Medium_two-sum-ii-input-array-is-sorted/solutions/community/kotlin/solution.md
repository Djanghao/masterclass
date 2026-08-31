# [Kotlin] 100% faster & 100% memory effecient | 2 pointer solution | O(N) time |  Clean Kotlin Syntax

**Author:** minchaej
**Votes:** 4
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/1273272/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/1273272/)

---

	fun twoSum(numbers: IntArray, target: Int): IntArray {
		var i = 1
		var j = numbers.size

		while (true) { //Use of `while` is ok since an answer is guaranteed 
			val sumIJ = numbers[i-1] + numbers[j-1]
			when { //Use of `when` to promote kotlin clean coding convention
				sumIJ == target -> return intArrayOf(i, j)
				sumIJ < target -> i++ //shift pointer to the right
				sumIJ > target -> j-- //shift pointer to the left
				i == j -> throw IllegalArgumentException("No sum")
			}
		}
    }
	
Please Upvote if you like my answer.