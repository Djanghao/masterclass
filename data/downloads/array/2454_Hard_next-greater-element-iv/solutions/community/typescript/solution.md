# TypeScript & JavaScript | Beats 100% time and space complexity

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iv/solutions/4195070/](https://leetcode.com/problems/next-greater-element-iv/solutions/4195070/)

---



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```TypeScript []
function secondGreaterElement(nums: number[]): number[] {
    const n: number = nums.length
    const res: number[] = new Array(n).fill(-1)
    const pre: number[] = []
    const cur: number[] = []

    for(let i = 0; i < n; i++){
        const num: number = nums[i]

        while(pre.length > 0 && nums[pre[pre.length - 1]] < num){
            res[pre.pop()] = num
        }

        const tmp: number[] = []

        while(cur.length > 0 && nums[cur[cur.length - 1]] < num){
            tmp.push(cur.pop())
        }

        while(tmp.length > 0){
            pre.push(tmp.pop())
        }

        cur.push(i)
    }

    return res
};
```
```JavaScript []
function secondGreaterElement(nums) {
    const n = nums.length
    const res = new Array(n).fill(-1)
    const pre = []
    const cur = []

    for(let i = 0; i < n; i++){
        const num = nums[i]

        while(pre.length > 0 && nums[pre[pre.length - 1]] < num){
            res[pre.pop()] = num
        }

        const tmp = []

        while(cur.length > 0 && nums[cur[cur.length - 1]] < num){
            tmp.push(cur.pop())
        }

        while(tmp.length > 0){
            pre.push(tmp.pop())
        }

        cur.push(i)
    }

    return res
};
```
