# Kotlin solution

**Author:** BotirMuzaffariy
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/2565168/](https://leetcode.com/problems/distribute-candies-to-people/solutions/2565168/)

---

class Solution {

    fun distributeCandies(cands: Int, np: Int): IntArray {
        val rArr = IntArray(np)
        var count = 1
    	var sum = 0
    	var ind = 0
    
    	while(count <= (cands - sum)) {
            sum += count
            rArr[ind] = rArr[ind] + count
            if (ind == np - 1) ind = 0 else ind++
            count++
        }
        
        if (cands - sum != 0) rArr[ind] = rArr[ind] + (cands - sum)
    
        return rArr
    }
	
}