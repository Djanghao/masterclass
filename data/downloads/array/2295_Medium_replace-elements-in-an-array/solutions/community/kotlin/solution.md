# ✔ Simple Fast Java and Kotlin Solution || Faster Than 100%

**Author:** PoeticIvy302543
**Votes:** 2
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/2120221/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/2120221/)

---

Java code:
```
    public int[] arrayChange(int[] nums, int[][] operations) {
        var hashMap = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            hashMap.put( nums[i],i);
        }
        for (int[] i : operations) {
            var index = hashMap.get(i[0]);
            nums[index] = i[1];
            hashMap.remove(i[0]);
            hashMap.put(i[1], index);
        }
        return nums;
    }
```

Kotlin code:
```
    fun arrayChange(nums: IntArray, operations: Array<IntArray>): IntArray {
        val hashMap = HashMap<Int, Int>()
        for (i in nums.indices) hashMap[nums[i]] = i
        for (i in operations) {
            val index = hashMap[i[0]]
            nums[index!!] = i[1]
            hashMap.remove(i[0])
            hashMap[i[1]] = index
        }
        return nums
    }
```