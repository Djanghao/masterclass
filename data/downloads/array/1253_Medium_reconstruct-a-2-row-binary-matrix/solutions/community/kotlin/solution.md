# [kotlin] greedy solution

**Author:** lbrown26
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/2615691/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/2615691/)

---

~~~
class Solution {
    fun reconstructMatrix(up: Int, low: Int, colsum: IntArray): List<List<Int>> {
        var sum = 0
        for(num in colsum)sum+=num
        if(sum!=up+low)return listOf()
        var upper = up
        var lower = low
        var low = mutableListOf<Int>()
        var high = mutableListOf<Int>()
        for(num in colsum){
            when(num){
                1 -> {
                    if(upper<lower){
                        low.add(1)
                        --lower
                        high.add(0)
                    } else{
                        high.add(1)
                        --upper
                        low.add(0)
                    }
                }
                2 -> {
                    low.add(1)
                    high.add(1)
                    --lower
                    --upper
                }
                0 -> {
                    low.add(0)
                    high.add(0)
                }
            }
        }
        return if(upper==0&&lower==0)listOf(high,low) else listOf()
    }
}