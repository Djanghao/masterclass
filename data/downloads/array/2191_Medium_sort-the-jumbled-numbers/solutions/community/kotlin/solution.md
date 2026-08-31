# 10 lines - no String Conversion

**Author:** kotlincheck
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/1822594/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/1822594/)

---

Quick and Efficient: 
* Define local conversion function
* Use modulo arithmetic to access each digit individually
	* If you find this part confusing replace the mapping call with just `d%10` - this will rebuild the original number
* Use *do while* to handle the case of 0
* Pass to sortedBy (creates custom comparator implicitly with lambda function and sorts according to it - it's literally just a wrapper for lazy people to not have to define a comparator)
```
class Solution {
    fun sortJumbled(mapping: IntArray, nums: IntArray): IntArray {
        fun convert(input : Int) : Int {
            var d = input; var pot = 1; var nuNum = 0
            do  {
                nuNum += pot*mapping[d % 10]
                pot *= 10
                d /= 10
            } while (d > 0)        
            return nuNum
        }
        return nums.sortedBy{convert(it)}.toIntArray()
    }
}
```