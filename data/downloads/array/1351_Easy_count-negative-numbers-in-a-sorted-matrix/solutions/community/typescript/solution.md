# Javascript, binary search

**Author:** Zhe1ka
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/2303839/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/2303839/)

---

It looks more bulky over a simple ```Array(...).flat().filter(...).length``` but this is a good exercise where we can train ourself of "Binary Search" algorithm and I guess the reviewer will expect using exactly this approach.

```
function countNegatives(grid: number[][]): number {
    let total = 0;
    
    const binarySearch = (arr) => {
        let left = 0;
        let right = arr.length - 1;
        let mid;
        
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            
            if (arr[mid] >= 0) {
                left = mid + 1; // we not interested in this element anymore so we shift our "cursor" by one
            } else {
                right = mid; // vice versa: this element fits our needs so we must keep the current position
            }
        }
        
        return arr[left] < 0 ? arr.slice(left).length : 0;
    };
    
    for (let i = 0; i < grid.length; i++) {
	    // small optimization: if the current array is started of fitable element (number) then this array and all consequent will have only needed numbers so we can just calculate them simply.
        if (grid[i][0] < 0) {
            total += grid.slice(i).flat().length;
            break;
        } else {
            total += binarySearch(grid[i]);
        }
    }
    
    return total;
};
```