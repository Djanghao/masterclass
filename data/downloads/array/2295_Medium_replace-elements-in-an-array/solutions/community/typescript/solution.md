# 100% runtime and 100% memory beats

**Author:** salisbury-espinosa
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/5778127/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/5778127/)

---

![2024-09-12_19-43.png](./images/0.png)

# Code
```typescript []
function arrayChange(nums: number[], operations: number[][]): number[] {
    const index = new Map();
    const lenNums = nums.length;
    for (let i = 0; i < lenNums; i += 1) {
        index.set(nums[i], i);
    }
    for (const operation of operations) {
        const seq = index.get(operation[0]);
        nums[seq] = operation[1];
        index.set(operation[1], seq);
    }
    return nums;
};
```
```Java []
class Solution {
    public int[] arrayChange(int[] nums, int[][] operations) {
        Map<Integer, Integer> index = new HashMap<>();
        int lenNums = nums.length;
        for (int i = 0; i < lenNums; i++) {
            index.put(nums[i], i);
        }
        for (int[] operation : operations) {
            int seq = index.get(operation[0]);
            nums[seq] = operation[1];
            index.put(operation[1], seq);
        }
        return nums;
    }
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer[][] $operations
     * @return Integer[]
     */
    function arrayChange($nums, $operations) {
        $index = [];
        $lenNums = count($nums);
        
        for ($i = 0; $i < $lenNums; $i++) {
            $index[$nums[$i]] = $i;
        }
        
        foreach ($operations as $operation) {
            $seq = $index[$operation[0]];
            $nums[$seq] = $operation[1];
            $index[$operation[1]] = $seq;
        }
        
        return $nums;
    }

}
```
```C++ []
class Solution {
public:
    vector<int> arrayChange(vector<int>& nums, vector<vector<int>>& operations) {
        std::unordered_map<int, int> index;
        int lenNums = nums.size();
        for (int i = 0; i < lenNums; i += 1) {
            index[nums[i]] = i;
        }
        for (const auto& operation : operations) {
            int seq = index[operation[0]];
            nums[seq] = operation[1];
            index[operation[1]] = seq;
        }
        return nums;
    }
};
```