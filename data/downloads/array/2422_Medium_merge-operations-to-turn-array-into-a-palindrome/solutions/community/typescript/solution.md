# Smart solution

**Author:** MishaKonki
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/5500508/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/5500508/)

---



# Code
```
    function minimumOperations(nums: number[]): number {
        let startIndex = 0;
        let endIndex = nums.length - 1;

        let count = 0;
        while (startIndex < endIndex) {
            if (nums[startIndex] === nums[endIndex]) {
                startIndex++; 
                endIndex--;
                continue;
            }

            if (nums[startIndex] > nums[endIndex]) {
                nums[endIndex - 1] += nums[endIndex];
                endIndex--
                count++
            } else {
                nums[startIndex + 1] += nums[startIndex];
                startIndex++
                count++
            }
        }
        return count;
    }
```