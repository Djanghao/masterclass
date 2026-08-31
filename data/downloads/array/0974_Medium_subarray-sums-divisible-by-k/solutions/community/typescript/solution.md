# Solution in Typescript |💯

**Author:** ranganathv415
**Votes:** 4
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5282734/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5282734/)

---

# Intuition

1. **Prefix Sum**:
    - The prefix sum of an array up to index `i` is the sum of all elements from the beginning of the array to the `i-th` element. If we know the prefix sums, we can easily compute the sum of any subarray.
2. **Modulo Operation**:
    - If two prefix sums have the same remainder when divided by `k`, the elements between these two indices sum up to a multiple of `k`. This is because the difference between the two sums is divisible by `k`.
# Detailed Explanation

#### Key Concept

1. **Prefix Sum**: 
   - A prefix sum is the cumulative sum of the elements of the array up to a certain index.
   - For example, if `nums = [4, 5, 0, -2, -3, 1]`, the prefix sums are `[4, 9, 9, 7, 4, 5]`.

2. **Remainder Handling**:
   - When we compute the prefix sum modulo `k`, the remainder tells us the remainder when the prefix sum is divided by `k`.
   - If two prefix sums have the same remainder, the subarray between these two prefix sums has a sum that is divisible by `k`.

3. **Hash Map Usage**:
   - We use a hash map to count the occurrences of each remainder.
   - This helps us to determine the number of subarrays that have a sum divisible by `k` efficiently.

# Approach

1. **Initialize Variables**:
   - A hash map `prefixCount` to store the frequency of each remainder. Initialize with `{0: 1}` to handle the case where the prefix sum itself is divisible by `k`.
   - `prefixSum` to keep track of the cumulative sum of the array elements.
   - `count` to store the number of valid subarrays.

2. **Iterate Through Array**:
   - For each element in the array, update the `prefixSum`.
   - Compute the remainder of `prefixSum` modulo `k`. Adjust it to be non-negative.
   - If this remainder has been seen before, it means there are subarrays ending at the current index that are divisible by `k`. Increment `count` by the number of times this remainder has been seen.
   - Update the hash map with the current remainder.

3. **Return Result**:
   - After processing all elements, `count` will contain the number of subarrays with a sum divisible by `k`.

# Code
```typescript
function subarraysDivByK(nums: number[], k: number): number {
    const prefixCount = new Map<number, number>();
    prefixCount.set(0, 1);

    let prefixSum = 0;
    let count = 0;

    for (let num of nums) {
        prefixSum += num;
        let remainder = ((prefixSum % k) + k) % k;

        if (prefixCount.has(remainder)) {
            count += prefixCount.get(remainder)!;
        }

        prefixCount.set(remainder, (prefixCount.get(remainder) || 0) + 1);
    }

    return count;
};

```