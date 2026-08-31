# solution in kotlin

**Author:** shibuiwilliam
**Votes:** 2
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/381695/](https://leetcode.com/problems/combination-sum-ii/solutions/381695/)

---

```kotlin
class Solution {
    fun combinationSum2(candidates: IntArray, target: Int): List<List<Int>> {
        val ans = MutableList(0){MutableList(0){0}}
        comb(ans, candidates, target, 0, MutableList(0){0})
        return ans
    }
    fun comb(ans: MutableList<MutableList<Int>>, candidates: IntArray, target: Int, index: Int, tmp: MutableList<Int>){
        if (target<0){
            return
        }
        if (target==0){
            if(!ans.contains(tmp.sorted().toMutableList())){
                ans.add(tmp.sorted().toMutableList())
                return
            }
        }
        for (i in index until candidates.size){
            tmp.add(candidates[i])
            comb(ans, candidates, target-candidates[i], i+1, tmp)
            tmp.removeAt(tmp.size-1)
        }
    }
}
```