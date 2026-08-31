# ✅ Detailed Explanation and implementation in Swift

**Author:** lebon
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5218260/](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5218260/)

---

## Intuition

The problem requires us to find pairs `(i, j)` such that `nums1[i]` is divisible by `nums2[j] * k`. The direct approach of checking each possible pair would be too slow for large input sizes. Instead, we can use a frequency dictionary to count occurrences of `nums2[j] * k` and then determine how many elements in `nums1` are divisible by each unique value in this dictionary. This approach leverages the properties of multiplication and counting to optimize the solution.

## Approach

1. **Initialize Frequency Dictionary**:
   - Create a dictionary to store the frequency of each value in `nums2` multiplied by `k`.
   
2. **Populate Frequency Dictionary**:
   - Iterate through each number in `nums2`, multiply it by `k`, and update the frequency dictionary with the resulting value as the key and its occurrence count as the value.

3. **Initialize Counts Array**:
   - Create an array to store the counts of good pairs for each possible value in `nums1`. The size of this array is the maximum value in `nums1` plus one.

4. **Update Counts Array**:
   - For each key-value pair in the frequency dictionary, update the counts array by incrementing indices that are multiples of the key by the corresponding count value.

5. **Calculate Total Good Pairs**:
   - Sum up the values in the counts array for each number in `nums1` to get the total number of good pairs.

# Complexity
- **Time complexity**:
  - **Initialization and Population**: Creating and populating the frequency dictionary takes $$O(m)$$ time, where $$m$$ is the length of `nums2`.
  - **Counts Array Update**: Updating the counts array involves iterating over the dictionary and updating multiple indices, leading to a time complexity of $$O(m \	imes \\frac{n}{k})$$ where $$n$$ is the length of `nums1` and assuming the average divisor size impacts the updates.
  - **Total Calculation**: Summing up values for each number in `nums1` takes $$O(n)$$ time.
  - Overall time complexity is approximately $$O(n + m + m \	imes \\frac{n}{k})$$.

- **Space complexity**:
  - The frequency dictionary and counts array both require $$O(n)$$ space.
  - Overall space complexity is $$O(n)$$.

## Code
```swift []
class Solution {
    func numberOfPairs(_ nums1: [Int], _ nums2: [Int], _ k: Int) -> Int {
        // Dictionary to store the frequency of each value in nums2 multiplied by k
        var frequencyDictionary: [Int: Int] = [:]

        // Populate the frequency dictionary
        for num in nums2 {
            let value = num * k
            frequencyDictionary[value, default: 0] += 1
        }

        // Array to store counts of good pairs for each number in nums1
        var counts = Array(repeating: 0, count: (nums1.max() ?? 0) + 1)

        // Update the counts array using the frequency dictionary
        for (num, count) in frequencyDictionary {
            var multiplier = num
            while multiplier < counts.count {
                counts[multiplier] += count
                multiplier += num
            }
        }

        // Calculate the total number of good pairs
        var totalGoodPairs = 0
        for num in nums1 {
            totalGoodPairs += counts[num]
        }

        return totalGoodPairs
    }
}
```