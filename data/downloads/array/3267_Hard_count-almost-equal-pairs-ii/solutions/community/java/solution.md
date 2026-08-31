# O(N^2) -> O(N * D^4) | Brute force digits diff comparison in Java (barely passes time constraints)

**Author:** sergey_chebotarev
**Votes:** 19
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5686744/](https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5686744/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Similarly to [3265. Count Almost Equal Pairs I](/problems/count-almost-equal-pairs-i/), we can check all pairs for almost-equality.

To keep equlality check fast we want to test only numbers with less than 4 different digits.

**UPD**: fellow C++ users report getting TLE on the same code in case of multiple vector allocations during equality check. A better time complexity is needed to safely pass all tests.

**UPD**: also posted the suggested in hints hash-table version below. It passes all test cases 3 times faster.

# Approach
<!-- Describe your approach to solving the problem. -->

For any pair of numbers `a` and `b` find the first 4 mismatching digits, keep the unchecked head (or tail) of the numbers as is.

For the number of differences decide if swaps are possible:
- `0` differences - no need to swap any digits, return `true`
- `1` - impossible to swap any pair and get the same number
- `2`/`3` - possible if the digits match in any order
- `4` - possble if the mismatched digits match in pairs like in `1234` and `2143`, for `1234` and `2341` 2 swaps aren't enough though
- `5+` - impossible

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(N^2)$$ - 2 nested loops over the given array; Equality check is done in $$O(log10(max(nums)))$$ which is limited by 10 iterations for any integer, 4 elements diff array sorting and check takes constant time as well.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code - O(N^2)
```java []
class Solution {
    public int countPairs(int[] nums) {
        int n = nums.length;
        int result = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i+1; j < n; j++) {
                result += almostEqual(nums[i], nums[j]) ? 1 : 0;
            }
        }
        return result;
    }

    private boolean almostEqual(int a, int b) {
        int found = 0;
        // first 4 different digits for a and b
        int[] ad = new int[4];
        int[] bd = new int[4];
        while (a > 0 || b > 0) {
            if (a%10 != b%10) {
                ad[found] = a%10;
                bd[found] = b%10;
                found++;
            }
            a /= 10;
            b /= 10;
            if (found == 4) {
                break;
            } 
        }

        if (found <= 1) {
            return found == 0;
        }
        if (found == 2 || found == 3) {
            Arrays.sort(ad);
            Arrays.sort(bd);
            return a == b && Arrays.equals(ad, bd);
        }
        // found == 4
        // need to get a matching pair first with the same indices,
        // then all digits should match in any order
        for (int i = 0; i < 3; i++) {
            for (int j = i+1; j < 4; j++) {
                if (ad[i] == bd[j] && ad[j] == bd[i]) {
                    Arrays.sort(ad);
                    Arrays.sort(bd);
                    // a == b -> check if the rest digits are equal, found 5+ case
                    return a == b && Arrays.equals(ad, bd);
                }
            }
        }
        return false;
    }
}
```

# Code - O(N * D^4)

Another version based on hints from the task.
Computing all possible 2-swap variations on the fly and counting previously seen variations of the current number.
It's passes all test cases in **1.6s** -vs- **5.4s** for the O(N^2)  approach above.

```java []
class Solution {
    static int[] pow10 = {1, 10, 100, 1_000, 10_000, 100_000, 1_000_000};
    static Set<Integer> variations = new HashSet<>();

    public int countPairs(int[] nums) {
        // arr[seen_number_variation] = fequency
        Map<Integer, Integer> frequences = new HashMap<>();
        int result = 0;
        for (int value : nums) {
            result += frequences.getOrDefault(value, 0);
            // getting all potential 2-diff variations
            Set<Integer> twoSwapVariations = new HashSet<>();
            for (int oneSwapVariation : new HashSet<>(allOneSwapVariations(value))) {
                twoSwapVariations.addAll(allOneSwapVariations(oneSwapVariation));
            }
            for (int twoSwapVariation : twoSwapVariations) {
                frequences.compute(twoSwapVariation, (k,v) -> (v != null ? v : 0) + 1);
            }
        }
        return result;
    }

    private Set<Integer> allOneSwapVariations(int number) {
        variations.clear();
        variations.add(number);
        int maxDigits = 7;
        // try swaping any pair of digits
        for (int i = 0; i < maxDigits; i++) {
            for (int j = i+1; j < maxDigits; j++) {
                int di = (number / pow10[i]) % 10;
                int dj = (number / pow10[j]) % 10;
                if (di == dj) {
                    continue;
                }
                // swapping digits i and j
                int diff1variation = number
                    - di * pow10[i] + di * pow10[j]
                    - dj * pow10[j] + dj * pow10[i];
                variations.add(diff1variation);
            }
        }
        return variations;
    }
}
```