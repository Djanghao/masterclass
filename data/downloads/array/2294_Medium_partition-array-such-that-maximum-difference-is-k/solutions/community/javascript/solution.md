# ✅ [Java/JavaScript] Simple Fast Solution || Faster Than 100%

**Author:** PoeticIvy302543
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2120216/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2120216/)

---

Java code:
```
    public int partitionArray(int[] nums, int k) {
        Arrays.sort(nums);
        var list = new ArrayList<Integer>();
        list.add(nums[0]);
        var count = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i]-list.get(0)>k) {
                count++;
                list = new ArrayList<>();
            }
            list.add(nums[i]);
        }
        if (!list.isEmpty()) {
            count++;
        }
        return count;
    }
```

JavaScript code:
```
var partitionArray = function(nums, k) {
    let sorted = nums.sort((a, b) => a-b)
    let list = []
    let count = 0
    list.push(sorted[0])
    for (i = 1; i < sorted.length; i++) {
        let num = sorted[i]
        if (num-list[0]>k) {
            count++
            list = []
        }
        list.push(num)
    } if (list.length) count++
    return count

};
```