# beat 100% c++ dp solution

**Author:** Starvalley
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-number-of-k-even-arrays/solutions/5993859/](https://leetcode.com/problems/find-the-number-of-k-even-arrays/solutions/5993859/)

---

# Intuition
Only consecutive even numbver fullfill the condition:
 - (arr[i] * arr[i + 1]) - arr[i] - arr[i + 1] is even.

# Approach
Go thorugh the size of the array (n) and use dp and keep track of the number of j-even array ends with odd (dp_odd[j]) and even number (dp_even[j]).

dp_odd[k] + dp_even[k] is the answer

# Complexity
- Time complexity:
O(n*k)

- Space complexity:
O(2k) ~ O(k) (2 dp with k index)

# Code
```cpp []
        int modulo = 1000000007;
        // total odd number count is (m+1)/2 ; total even number count is (m/2)
        int odd_count = (m+1)/2, even_count = (m/2);
        // dp_odd[j] -> j-even array which ends with odd number
        // dp_even[j] -> j-even array which ends with even number
        vector<long> dp_odd(k+1), dp_even(k+1);
        // the number of 0-even array ends with odd number is odd_count
        dp_odd[0] = odd_count;
        // the number of 0-even array ends with even number is even_count
        dp_even[0] = even_count;
        for (int i = 1 ; i < n; i++){
            for (int j = k; j >= 0; j--){
                long tmp = dp_odd[j];
                dp_odd[j] = ((dp_even[j] + dp_odd[j]) * odd_count) % modulo;
                if (j > 0)
                    dp_even[j] = ((dp_even[j-1] + tmp )* even_count) % modulo;
                else
                    dp_even[j] = ( tmp * even_count) % modulo;
            }
        }
        return (dp_odd[k] + dp_even[k]) % modulo;
```