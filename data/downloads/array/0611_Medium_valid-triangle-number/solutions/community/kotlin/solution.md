# Kotlin: O(n^2) time and O(1) space with two pointers

**Author:** kotlinvim
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/891781/](https://leetcode.com/problems/valid-triangle-number/solutions/891781/)

---


    fun triangleNumber(nums: IntArray): Int {
        if (nums.size < 3) return 0

        nums.sortDescending()
        
        fun count(k: Int): Int {
            var cnt = 0
            var i = k + 1
            var j = nums.size - 1

            while (i < j) {
                if (nums[i] + nums[j] > nums[k]) {
                    cnt += j - i
                    i++
                } else j--
            }

            return cnt
        }

        var res = 0
        for (i in 0..nums.size - 3) {
            res += count(i)
        }
        return res
    }
