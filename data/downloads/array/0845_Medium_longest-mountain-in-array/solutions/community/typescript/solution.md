# Beats 90% || Easy to underStand

**Author:** abhinavleadsquared
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-mountain-in-array/solutions/5903014/](https://leetcode.com/problems/longest-mountain-in-array/solutions/5903014/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function longestMountain(arr: number[]): number {

let ans=0;
    for(let i=1;i<=arr.length-2;){

        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            let j=i;
            let count=1;
            while(j>0 && arr[j] > arr[j-1]){
                j--;
                count++;
            }
            while(i < arr.length-1 && arr[i] > arr[i+1]){
                i++;
                count++;
            }
        ans = Math.max(ans,count);
        }else{
            i++;
        }
    }
    return ans;
    
};
```