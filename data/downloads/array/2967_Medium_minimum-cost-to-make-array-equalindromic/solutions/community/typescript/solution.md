# Brute Force with Binary Search

**Author:** yfyau
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4414842/](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4414842/)

---

# Approach
1. Sort
2. Apply Binary search approach
3. Start with upper and lower palindromic of middle
4. If lower palindromic has lower cost, try a lower palindrome further
5. Else try a higher palindrome
6. Stop when cost is no decreasing anymore

# Complexity
- Time complexity: O(n log n) as sorting

- Space complexity: O(n)

# Code
```
function minimumCost(nums: number[]): number {
    nums.sort((a, b) => a - b);
    
    const isPalindromic = (np: number) => {
        const str = np.toString();
        for (let i = 0; i < str.length / 2; i++) {
            if (str.charAt(i) !== str.charAt(str.length - 1 - i))
                return false;
        }
        
        return true;
    }
    
    const getLowerPalindromic = (ncp: number) => {
        let i = 0;
        while(true) {
            if (isPalindromic(ncp-i)) return ncp-i;
            i++;
        }
    }
    
    const getUpperPalindromic = (ncp: number) => {
        let i = 0;
        while(true) {
            if (isPalindromic(ncp+i)) return ncp+i;
            i++;
        }
    }
    
    let middle;
    const midIndex = Math.ceil((nums.length - 1) / 2);
    if (nums.length % 2 === 0) {
        middle = Math.ceil((nums[midIndex - 1] + nums[midIndex]) / 2);
    } else {
        middle = nums[midIndex];
    }
    
    const getCost = (x) => {
        let cost = 0;
        for (const num of nums) {
            cost += Math.abs(num - x);
        }
        
        return cost;
    }
    
    let result = Infinity;
    while (true) {
        const p1 = getLowerPalindromic(middle);
        const p2 = getUpperPalindromic(middle);
        
        const c1 = getCost(p1);
        const c2 = getCost(p2);

        // console.log(result, c1, c2);
        
        if (c1 >= result && c2 >= result) {
            break;
        } else if (c1 < c2) {
            middle = p1 - 1;
            result = Math.min(result, c1);
        } else {
            middle = p2;
            result = Math.min(result, c2);
        }
    }
    
    return result;
};
```