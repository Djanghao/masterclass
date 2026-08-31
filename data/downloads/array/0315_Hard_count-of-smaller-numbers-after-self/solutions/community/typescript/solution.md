# 💥 Runtime beats 88.89%, Memory beats 77.78%

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/5696289/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/5696289/)

---

# Intuition
Using modified merge sort is based on counting how many smaller elements are to the right of each element in the array.

# Approach
This approach works by sorting the array while counting the number of smaller elements on the right of each element.

# Complexity
- Time complexity:
O(nlogn) due to the merge sort.

- Space complexity:
O(n) for storing the indices and the result array.

# Code
```typescript []
function countSmaller(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(0);
    const indexes = nums.map((_, i) => i);
    
    function mergeSort(start: number, end: number) {
        if (end - start <= 1) return;
        
        const mid = Math.floor((start + end) / 2);
        mergeSort(start, mid);
        mergeSort(mid, end);
        
        const temp: number[] = [];
        let i = start, j = mid;
        while (i < mid || j < end) {
            if (j === end || (i < mid && nums[indexes[i]] <= nums[indexes[j]])) {
                temp.push(indexes[i]);
                result[indexes[i]] += j - mid;
                i++;
            } else {
                temp.push(indexes[j]);
                j++;
            }
        }
        
        for (let i = start; i < end; i++) {
            indexes[i] = temp[i - start];
        }
    }
    
    mergeSort(0, n);
    return result;
}

// Example usage:
const nums = [5, 2, 6, 1];
console.log(countSmaller(nums)); // Output: [2, 1, 1, 0]

```