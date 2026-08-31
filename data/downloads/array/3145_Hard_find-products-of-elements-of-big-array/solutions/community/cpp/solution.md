# C++ Bit count and binary search, Clean code with a lot explanitions.

**Author:** cowtony
**Votes:** 31
**Link:** [https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5145201/](https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5145201/)

---

# Intuition

Let's think top-down and conquer each individual tasks one by one.

<!-- Describe your first thoughts on how to solve this problem. -->
1. The `big_nums` array is all power of 2. So we can represent it with the power only.
   ```
   [1, 2, 1, 2, 4, 1, 4, 2, 4, 1, 2, 4, 8, 1, 8, ...]  (2 ^ bit)
    -  -  ----  -  ----  ----  -------  -  ----
   [0, 1, 0, 1, 2, 0, 2, 1, 2, 0, 1, 2, 3, 0, 3, ...]  (bit)
    -  -  ----  -  ----  ----  -------  -  ----
2. Once converted, the **multiplication** will become **addition**. We will then need to sum the value from `from = query[0]` to `to = query[1]`.
   `2^i * 2^j = 2^(i + j)`
3. The above summation can also be converted as prefix sum, so that we can easily get `prefix_sum[to] - prefix_sum[from - 1]`.
4. Assuming we have a function `LL prefixSumTillIndex(index)` which can sum the value of each bit for the first `index` elements in the converted `big_nums` (took `log_2` of it).
   Then we can simplly calculate the result with some `mod` helper function:
    ```C++
    for (const auto& query : queries) {
        LL prefix_sum_1 = prefixSumTillIndex(query[0]);
        LL prefix_sum_2 = prefixSumTillIndex(query[1] + 1);
            
        // This is `2^sum % mod`
        result.push_back(pow(2, prefix_sum_2 - prefix_sum_1, query[2]));
        } 
    ```
   Where the helper `pow` function calculates `(x ^ y % mod)`:
    ```C++
    // Calculate `(x ^ y) % mod` by converting the y into binary bits.
    int pow(LL x, LL y, int mod) {
        if (y <= 0) {
            return 1 % mod;
        }
        x %= mod;
        LL result = 1;
        while (y) {
            if (y & 1) {
                result = multiply(result, x, mod);
            }
            x = multiply(x, x, mod);
            y >>= 1;
        }
        return result;
    }

    int multiply(LL x, LL y, int mod) {
        return ((x % mod) * (y % mod)) % mod;
    }
    ```
5. However now the problem is **how to implement function `prefixSumTillIndex`**, it seems simpler to sum bits from 1 to a **`value`**, instead of all bits which is **`index`** because it'a hard to control how many bits 1 (indexes occupied) per value. So we will need another helper function to find the value for a given index: `LL getValueFromIndex(LL index)`. But let's implement prefixSum first assuming that function is already done:
    ```C++
    LL prefixSumTillIndex(LL index) {
        LL value = getValueFromIndex(index);
        auto [bit_sum, bit_count] = sumAndCountBitsBeforeValue(value);
        // Also include the last value's partial bits.
        if (bit_count < index) {
            for (int bit = 0; bit_count < index; bit++, value >>= 1) {
                bit_sum += bit * (value % 2);
                bit_count += value % 2;
            }
        }
        return bit_sum;
    }

    // Count the bits for all numbers from 1 to `value - 1`.
    // Return the bit value sum and total count.
    pair<LL, LL> sumAndCountBitsBeforeValue(LL value) {
        LL bit_sum = 0;
        LL bit_count = 0;
        for (LL bit = 0, power = 1; power < value; bit++, power <<= 1) {
            LL cur = (value >> (bit + 1)) << bit;
            cur += max(0LL, (value % (power << 1)) - power);
            bit_count += cur;
            bit_sum += bit * cur;
        }
        return {bit_sum, bit_count};
    }
    ```
6. Now for `LL getValueFromIndex(LL index)`, this would lead me to think about binary serach, by reusing the function `sumAndCountBitsBeforeValue` above:
    ```C++
    LL getValueFromIndex(LL index) {
        index++;
        LL low = 1, high = 1LL << 50;

        while (low < high) {
            LL mid = low + (high - low) / 2;
            if (sumAndCountBitsBeforeValue(mid + 1).second < index) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
    ```
7. Finally we get every component ready, the finally solution is as follows.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++
using LL = long long;

class Solution {
public:
    vector<int> findProductsOfElements(vector<vector<LL>>& queries) {
        vector<int> result;
        result.reserve(queries.size());
        for (const auto& query : queries) {
            LL prefix_sum_1 = prefixSumTillIndex(query[0]);
            LL prefix_sum_2 = prefixSumTillIndex(query[1] + 1);

            result.push_back(pow(2, prefix_sum_2 - prefix_sum_1, query[2]));
        }

        return result;
    }

private:
    // Count the bits for all numbers from 1 to `value - 1`.
    // Return the bit value sum and total count.
    pair<LL, LL> sumAndCountBitsBeforeValue(LL value) {
        LL bit_sum = 0;
        LL bit_count = 0;
        for (LL bit = 0, power = 1; power < value; bit++, power <<= 1) {
            LL cur = (value >> (bit + 1)) << bit;
            cur += max(0LL, (value % (power << 1)) - power);
            bit_count += cur;
            bit_sum += bit * cur;
        }
        return {bit_sum, bit_count};
    }

    LL getValueFromIndex(LL index) {
        index++;
        LL low = 1, high = 1LL << 50;

        while (low < high) {
            LL mid = low + (high - low) / 2;
            if (sumAndCountBitsBeforeValue(mid + 1).second < index) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }

    LL prefixSumTillIndex(LL index) {
        LL value = getValueFromIndex(index);
        auto [bit_sum, bit_count] = sumAndCountBitsBeforeValue(value);
        // Also include the last value's partial bits.
        if (bit_count < index) {
            for (int bit = 0; bit_count < index; bit++, value >>= 1) {
                bit_sum += bit * (value % 2);
                bit_count += value % 2;
            }
        }
        return bit_sum;
    }

    // Calculate `(x ^ y) % mod` by converting the y into binary bits.
    int pow(LL x, LL y, int mod) {
        if (y <= 0) {
            return 1 % mod;
        }
        x %= mod;
        LL result = 1;
        while (y) {
            if (y & 1) {
                result = multiply(result, x, mod);
            }
            x = multiply(x, x, mod);
            y >>= 1;
        }
        return result;
    }

    int multiply(LL x, LL y, int mod) {
        return ((x % mod) * (y % mod)) % mod;
    }
};
```