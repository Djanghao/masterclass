# Java Simple Solution | Explained

**Author:** Student2091
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/1844073/](https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/1844073/)

---

The key to solve this problem is to notice the constraint for array element is from **1 to 100.** This means we can potentially exploit that and store the occurrence of each unique number and do some math. 

Now we have the count of each unique element, we can deduce the number of valid pairs, but there are two cases to consider.
1. All 3 values (i, j, k) are different: In this case, we can choose 1 from total count of value i, 1 from value j, 1 from value k. Meaning there are **6 * count_i * count_j * count_k** valid pairs.The 6 constant is there because we can permutate their location (i.e. **3 * 2 * 1 = 6**).

2. Two values are identical and one is different: In this case, we can choose 1 for the value that's unique, and we have to pick 2 from count_duplicate. In total, there are **6 * count_unique * count_duplicate * (count_duplicate - 1) / 2** valid pairs. We are dividing it by 2 because swapping the two duplicates results in the same pair.

Put all that together, we have the following solution:

**Solution**
```Java
class Solution {
    public long singleDivisorTriplet(int[] nums) {
        long ans = 0;
        int[] count = new int[101];
        for (int n : nums){
            count[n]++;
        }
        for (int i = 1; i <= 100; i++){
            for (int j = i; j <= 100 && count[i] > 0; j++){
                for (int k = j; k <= 100 && count[j] > 0; k++){
                    int sum = i + j + k;
                    int n = 0;
                    long add = 1L * count[i] * count[j] * count[k];
                    if (sum % i == 0) n++;
                    if (sum % j == 0) n++;
                    if (sum % k == 0) n++;
                    if (n != 1 || add == 0) continue;
                    if (i == j || j == k) add = (add * (count[j] - 1)) / (2 * count[j]);
                    ans += 6L * add;
                }
            }
        }

        return ans;
    }
}
```