# C# Brute-Force with array keys - Straightforward

**Author:** Cocamo1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/4360157/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/4360157/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
From studying the given examples, and reading the problem carefully, here is what the problem wants us to do:

Count all unique subarrays of nums where the count of numbers evenly divisible by p in the subarray is no greater than k.

The keyword here is unique. For example:

if nums = [2, 2, 2], p = 5, and k = 3, the answer would be 3.

Even though, for example, there are 2 subarrays of [2, 2], we only count the first [2, 2] that appears, and none after. The same goes for the 3 subarrays of [2], we only count the first [2].

What is a data structure that only stores 1 instance of each element, and can quickly determine whether we've seen that element before or not? A HashSet!

# Approach
<!-- Describe your approach to solving the problem. -->
1. Instantiate a HashSet of strings - seenArr.

2. Initialize two integers - len = nums.Length and total (to count new sub arrays) = 0.

3. Instantiate a StringBuilder - sb - it will be used to build the array-keys that we will run against seenArr to determine if we've seen an array before.

4. Run a for-loop, starting at 0 and ending when i = len. Inside of this loop, initialize two integers - currP = 0 and ind = i. Also use sb.Clear() at the start to clear the StringBuilder without having to use memory by creating a new one. 

currP will be our count of elements in the sub array that are divisble by p, ind will be how we extend the range of our sub array.

5. Inside the for-loop, run a while-loop while ind is less than len, and in that while-loop:

First check to see if nums[ind] is divisible by p. If it is, check to see if your currP is equal to k. If currP == k, break from the loop. Otherwise if currP != k, increment currP by 1.

If the previous section didn't cause a break in the loop, then we can continue and append nums[ind] and a de-limiting character, '-', to sb.
Convert sb to a string with the .ToString() method and check if that string is contained in seenArr.

If it is not in seenArr, add it to seenArr and increment total by 1.

Finally at the end increment ind by 1.

6. Return total.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n * n)$$

The worst-case time complexity would be if every single ind can travel from the starting point all the way to len. This is tantamount to n squared run-time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n * n)$$

For every valid index we create 1 key from StringBuilder. Because the above could run n * n times, that means we may have to create n * n strings/keys.

# Code
```
public class Solution {
    public int CountDistinct(int[] nums, int k, int p) {
        HashSet<string> seenArr = new();
        // Each subarray will have a key - Only count new subarrays
        // if they aren't in seenArr.

        int len = nums.Length;
        int total = 0;

        StringBuilder sb = new(); // For building arr-keys

        for (int i = 0; i < len; i++){
            sb.Clear();
            int currP = 0;
            int ind = i;
            while (ind < len){
                if (nums[ind] % p == 0){
                    if (currP == k) break;
                    currP++;
                }
                sb.Append(nums[ind]).Append('-');
                var key = sb.ToString();
                if (!seenArr.Contains(key)){
                    seenArr.Add(key);
                    total++;
                }
                ind++;
            }
        }

        return total;
    }
}
```