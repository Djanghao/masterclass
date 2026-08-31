# for, set, key

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/5228002/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/5228002/)

---


```
class Solution {
    func findKDistantIndices(_ nums: [Int], _ key: Int, _ k: Int) -> [Int] {
        var ans = [Int]()
        var arr_key = [Int]()
        var set_index : Set<Int> = []

        for (i, num) in nums.enumerated(){
            if num == key{
                arr_key.append(i)
            }
        }

        for i in 0..<arr_key.count{
            for j in max(0, arr_key[i] - k)..<min(nums.count, arr_key[i] + k + 1){
                set_index.insert(j)
            }
        }

        return set_index.sorted()
    }
}
```