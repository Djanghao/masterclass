# Generalized for K with description (Kotlin/Java)

**Author:** sandeep549
**Votes:** 7
**Link:** [https://leetcode.com/problems/majority-element-ii/solutions/251442/](https://leetcode.com/problems/majority-element-ii/solutions/251442/)

---

**Kotlin**
```
fun majorityElement3(nums: IntArray): List<Int> {
    val K = 3
    val candidates = HashMap<Int, Int>()
    /**
     * Get all candidates.
     * Traverse through the array, maintain (K-1) slots for different type of elements and their counts.
     * For example for (1/2) case we have keep 1 slot and look for only 1 candidate.
     * When we encounter kth different element, we decrease the count for all and remove
     * all which have count 0
     */
    for (a in nums) {
        candidates[a] = candidates.getOrDefault(a, 0) + 1
        if (candidates.size == K) {
            val it = candidates.entries.iterator()
            while (it.hasNext()) {
                val item = it.next()
                item.setValue(item.value - 1)
                if (item.value == 0) it.remove()
            }
        }
    }

    //Check correctness of all candidates
    val ans = ArrayList<Int>()
    val it = candidates.entries.iterator()
    while (it.hasNext()) {
        val key = it.next().key
        var count = 0
        for (a in nums) {
            if (a == key) count++
            if (count > nums.size / K) {
                ans.add(key)
                break
            }
        }
    }
    return ans
}
```
**Java**
```
    public List<Integer> majorityElement(int[] nums) {
        int K = 3;
        Map<Integer, Integer> candidates = new HashMap<>();
        //get all candidates
        for(int a: nums){
            candidates.put(a, candidates.getOrDefault(a, 0) + 1);
            if(candidates.size() == K){
                Iterator<Map.Entry<Integer, Integer>> it = candidates.entrySet().iterator();
                while (it.hasNext()){
                      Map.Entry<Integer, Integer> item = it.next();
                      if(item.getValue() == 1) it.remove();
                      else item.setValue(item.getValue() - 1);
                }
            }
        }
        //check correctness of candidates
        List<Integer> ans = new ArrayList<>();
        Iterator<Map.Entry<Integer, Integer>> it = candidates.entrySet().iterator();
        while (it.hasNext()){
            int key = it.next().getKey();
            int count = 0;
            for(int a: nums){
                if(a == key) count++;
                if(count > nums.length/K){
                    ans.add(key);
                    break;
                }
            }                
        }        
        return ans;
    }
```