# My solution/Kotlin

**Author:** superManZhu
**Votes:** 13
**Link:** [https://leetcode.com/problems/3sum/solutions/266514/](https://leetcode.com/problems/3sum/solutions/266514/)

---

```
fun threeSum(nums: IntArray): List<List<Int>> {
        var set = HashSet<List<Int>>()
        if(nums.size <= 2) {
            return set.toList()
        }

        nums.sort()
        for(i in 0 until nums.size - 2) {
            var low = i + 1
            var high = nums.size - 1
            while (low < high) {
                var sum = nums[i] + nums[low] + nums[high]
                when {
                    sum == 0 -> {
                        set.add(listOf(nums[i], nums[low], nums[high]))
                        low++
                        high--
                    }
                    sum < 0 -> low++
                    else -> high--
                }
            }
        }

        return set.toList()
    }
```