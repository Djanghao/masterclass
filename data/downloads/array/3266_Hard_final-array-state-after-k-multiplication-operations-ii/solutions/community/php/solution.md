# [PHP] 230ms/26.32MB

**Author:** HamishFleming
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5995815/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5995815/)

---

Based on Rust solution linked [here](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5686955/rust-min-heap-33ms-beats-100-time-space)
# Code
```php []

class Solution
{
    const MOD = 1000000007;

    /**
     * Get the final state of the array after k multiplication operations.
     *
     * @param Integer[] $nums
     * @param Integer $k
     * @param Integer $multiplier
     * @return Integer[]
     */
    function getFinalState($nums, $k, $multiplier)
    {
        $n = count($nums);

        if ($multiplier == 1) {
            return $nums;
        }

        $k = (int)$k;
        $multiplier = (int)$multiplier;
        $nums_i64 = array_map('intval', $nums);

        // Find the maximum element
        $m = max($nums_i64);

        // Compute the number of multiplications needed for each element to reach m
        $operations = array_fill(0, $n, 0);
        $total = 0;
        $fixed_state = [];

        for ($i = 0; $i < $n; $i++) {
            $c = 0;
            $value = $nums_i64[$i];
            while ($value < $m) {
                $value = $this->saturating_mul($value, $multiplier);
                $c += 1;
            }
            $operations[$i] = $c;
            $total += $c;
            $fixed_state[] = ['value' => $value, 'index' => $i]; // Store value after reaching fixed state
        }

        if ($total <= $k) {
            // Distribute remaining operations equally
            $remaining_ops = $k - $total;
            $repeated_ops = intdiv($remaining_ops, $n);
            $extra_ops = $remaining_ops % $n;

            for ($i = 0; $i < $n; $i++) {
                $operations[$i] += $repeated_ops;
            }

            // Sort fixed_state based on value and index
            usort($fixed_state, function ($a, $b) {
                if ($a['value'] != $b['value']) {
                    return $a['value'] - $b['value'];
                } else {
                    return $a['index'] - $b['index'];
                }
            });

            // Assign extra operations to elements with smallest fixed_state values
            for ($i = 0; $i < $extra_ops; $i++) {
                $index = $fixed_state[$i]['index'];
                $operations[$index] += 1;
            }
        } else {
            // When total > k, we need to simulate k operations
            // Initialize a min-heap with the initial nums
            $heap = new SplMinHeap();

            for ($i = 0; $i < $n; $i++) {
                $heap->insert(['value' => $nums_i64[$i], 'index' => $i]);
                $operations[$i] = 0;
            }

            $k_remaining = $k;

            while ($k_remaining > 0) {
                $current = $heap->extract();
                $value = $current['value'];
                $index = $current['index'];
                $new_value = $this->saturating_mul($value, $multiplier);
                $operations[$index] += 1;
                $heap->insert(['value' => $new_value, 'index' => $index]);
                $k_remaining -= 1;
            }
        }

        // Compute the final values
        $result = [];

        for ($i = 0; $i < $n; $i++) {
            $exponent = $operations[$i];
            $res = $this->mod_pow($multiplier, $exponent, self::MOD);
            $final_value = ($nums_i64[$i] % self::MOD) * $res % self::MOD;
            $result[$i] = (int)$final_value;
        }

        return $result;
    }

    // Helper function to handle multiplication without overflow
    private function saturating_mul($a, $b)
    {
        $result = $a * $b;
        if ($result > PHP_INT_MAX || $result < PHP_INT_MIN) {
            return PHP_INT_MAX;
        }
        return $result;
    }

    // Function to compute (base^exponent) % modulus using binary exponentiation
    private function mod_pow($base, $exponent, $modulus)
    {
        $result = 1;
        $base = $base % $modulus;
        while ($exponent > 0) {
            if ($exponent % 2 == 1) {
                $result = ($result * $base) % $modulus;
            }
            $exponent = intdiv($exponent, 2);
            $base = ($base * $base) % $modulus;
        }
        return $result;
    }
}

```