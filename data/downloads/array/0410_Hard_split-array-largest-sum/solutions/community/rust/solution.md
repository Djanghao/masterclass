# simple and readable solution using binary search | Typescript/JS

**Author:** garbagedevvv
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/3068264/](https://leetcode.com/problems/split-array-largest-sum/solutions/3068264/)

---

# Rust Code
```
impl Solution {
    pub fn split_array(nums: Vec<i32>, k: i32) -> i32 {
        let mut start_sum: i32 = *nums.iter().max().unwrap();
        let mut end_sum: i32 = nums.iter().sum::<i32>();

        while start_sum < end_sum{
            let mid: i32 = (start_sum+end_sum)/2;
            if Self::is_feasible(mid, &nums, k){
                end_sum = mid;
                continue;
            }
            start_sum = mid + 1;
        }

        return start_sum;
    }
    pub fn is_feasible(group_sum: i32, nums: &Vec<i32>, groups: i32) -> bool{
        let mut temp_sum: i32 = 0;
        let mut count_groups: i32 = 1;
        for num in nums{
            temp_sum += num;
            if temp_sum > group_sum{
                temp_sum = *num;
                count_groups += 1;
                if count_groups > groups{
                    return false;
                }
            }
        }
        return true;
    }
}
```

# Typescript Code
```
function splitArray(nums: number[], k: number): number {
    const max: number = Math.max(...nums);
    const sum: number = nums.reduce((prev_sum, curr_num)=> prev_sum+curr_num, 0);
    // max ::: the smllest possible sum of an subarray
    // sum ::: the largest possible sum of an subarray

    // BINARY SEARCH : 100% faster
    let start: number = max;
    let end: number = sum;
    while (start < end){
        const mid: number = Math.floor((start+end)/2);
        if (is_feasible(mid, nums, k)){
            end = mid
            continue;
        }
        start = mid + 1;
    }
    return start;

    // linear : TLE
    for (let sum_increase = max; sum_increase <= sum; sum_increase += 1){
        if (is_feasible(sum_increase, nums, k)) return sum_increase;
    }
};

const is_feasible = (group_sum: number,nums: number[], group: number): boolean=>{
    let temp_sum: number = 0;
    let count_group: number = 1;
    for (let i = 0; i < nums.length; i += 1){
        temp_sum += nums[i];
        if (temp_sum > group_sum){
            temp_sum = nums[i];
            count_group += 1;
            if (count_group > group) return false;
        }
    }
    return true;
}
```