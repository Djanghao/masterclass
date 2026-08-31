# Easy Code With Explanation Javascript and TypeScript

**Author:** hashcoderz
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5686763/](https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5686763/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem of counting pairs (i, j) in an array where the numbers are "almost equal," we need to identify pairs where one number can be converted to the other by swapping up to two pairs of digits. Given that this is a combinatorial problem, we will use string manipulations to generate all possible variations of each number by swapping digits.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Generate Variations:

- For each number in the array, generate all possible numbers that can be formed by swapping two digits once and then by swapping two digits twice.
- We use a set to store these variations to avoid duplicates.
2. Count Matches:

- Use a map to count occurrences of each number in its zero-padded string form.
- For each number, look up how many times its variations have been seen before in the map.
3. Update Map:

- Update the map with the current number\u2019s zero-padded string form to count future occurrences.

## Explanation of Each Function
1. countPairs(nums: number[]): number:

- Initialize a counter count and a map seen to track occurrences of each number.
- For each number, generate all possible variations and update the count based on previously seen variations.
- Update the map with the current number for future reference.
2. generateVariations(num: number): Set<string>:

- Convert the number to a zero-padded string.
- Generate all possible variations by swapping each pair of digits once and twice.
- Return a set of these variations to ensure uniqueness.

3. swap(str: string, i: number, j: number): string:

- Convert the string to an array, swap the characters at indices i and j, and convert it back to a string.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Generating variations involves swapping digits and can be $$O(d^2 )$$ where, $$d$$ is the number of digits in the largest number. Since we generate variations for up to two swaps, the complexity of generating variations can be $$O(d^4 )$$ in the worst case. If n is the number of elements in nums, the total time complexity can be $$O(n\u22C5d^4)$$ where d is the average number of digits in the numbers.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- The space complexity is primarily due to the space required for storing the variations and the map. If there are v unique variations, the space complexity is $$O(v)$$. The map stores occurrences of variations, which also contributes to the space complexity.

# Code
```typescript []
function countPairs(nums: number[]): number {
    let count = 0;
    const seen = new Map<string, number>();

    for (const num of nums) {
        const variations = generateVariations(num);
        for (const variation of variations) {
            count += seen.get(variation) || 0;
        }
        const key = num.toString().padStart(7, '0');
        seen.set(key, (seen.get(key) || 0) + 1);
    }

    return count;
}

function generateVariations(num: number): Set<string> {
    const str = num.toString().padStart(7, '0');
    const variations = new Set<string>([str]);

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            variations.add(swap(str, i, j));
        }
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            const swapped = swap(str, i, j);
            for (let k = 0; k < str.length; k++) {
                for (let l = k + 1; l < str.length; l++) {
                    variations.add(swap(swapped, k, l));
                }
            }
        }
    }

    return variations;
}

function swap(str: string, i: number, j: number): string {
    const arr = str.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join('');
}
```

## If you like the solution then please upvote........