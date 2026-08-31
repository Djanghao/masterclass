# Easy Solution in JS with Explaination

**Author:** hashcoderz
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/5686816/](https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/5686816/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem of counting pairs (i, j) in the array where the numbers are "almost equal," we need to determine if two numbers can be made equal by swapping digits in either of the numbers at most twice. This involves generating all possible variations of a number by performing up to two swaps and checking if these variations match.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Generate Variations:

- For each number in the array, generate all possible numbers that can be formed by swapping two digits once and then by swapping two digits twice.
Use a set to store these variations to avoid duplicates.
Count Matches:

2. Iterate through pairs (i, j) in the array.
- For each pair, check if one number can become the other by performing up to two swaps using the helper function.
Keep a count of such valid pairs.
3. Helper Function:

- The helper function generates variations of a number by swapping digits and checks if these variations match the second number.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

For each pair (i,j), the helper function is called. Inside helper, generating variations by swapping digits has a complexity of O(d^2 ), where \uD835\uDC51 is the number of digits. Each variation is checked, and this process is repeated for each pair. Thus, the total time complexity is: $$O(n^2 \u22C5d^2 )$$ where \uD835\uDC5B is the number of elements in nums and \uD835\uDC51 is the maximum number of digits in any number.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Certainly! Here is the space complexity in the requested format:

The space complexity is primarily due to storing the variations and the strings. Each string in the set of variations is a different combination of digits, leading to $$O(d^2)$$ space usage for storing variations. Thus, the space complexity is: $$O(d^2)$$ where \uD835\uDC51 is the maximum number of digits in any number.



# Code
```typescript []
function countPairs(nums: number[]): number {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (helper(nums[i], nums[j])) {
                count++;
            }
        }
    }

    return count;
}

function helper(num1: number, num2: number): boolean {
    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1 === str2) {
        return true;
    }

    for (let i = 0; i < str1.length; i++) {
        for (let j = i + 1; j < str1.length; j++) {
            const swappedStr1 = swap(str1, i, j);
            if (swappedStr1 === str2) {
                return true;
            }
        }
    }

    for (let i = 0; i < str2.length; i++) {
        for (let j = i + 1; j < str2.length; j++) {
            const swappedStr2 = swap(str2, i, j);
            if (swappedStr2 === str1) {
                return true;
            }
        }
    }

    return false;
}

function swap(str: string, i: number, j: number): string {
    const arr = str.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    let swappedStr = arr.join('');

    swappedStr = swappedStr.replace(/^0+/, '');

    return swappedStr === '' ? '0' : swappedStr;
}
```

## If you like the solution then please upvote me It helps me motivate myself.........