# Detailed & Simple: Euclid_formula for Interview🔥 with O(1) space✅

**Author:** subashm
**Votes:** 44
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/4983515/](https://leetcode.com/problems/build-array-from-permutation/solutions/4983515/)

---

# Approach
Detailed explanation of solution from [IndecisionTree](https://leetcode.com/problems/build-array-from-permutation/solutions/1315926/python-o-n-time-o-1-space-w-full-explanation/) and [devlak](https://leetcode.com/problems/build-array-from-permutation/solutions/1692310/easy-explanation-for-o-1-space-complexity/).


##### Catch
One catch with in-place array operation is that, we must keep nums[i] intact because if, for example, at a later position of the array, say j, has a value nums[j] = i (where i < j), but we've overwrote the value at i (nums[i]) with nums[nums[i]] already, then we're out of luck.

##### Intuition
If we can find some function to encode both the new value and the old value into the same value, then we can reach O(1) space. (from [user4718i](https://leetcode.com/problems/build-array-from-permutation/solutions/1315926/python-o-n-time-o-1-space-w-full-explanation/comments/1360114))

##### Solution
* For given two positive integers, 'a' and 'b', there exist unique integers, 'q' and 'r', such that: `a = bq + r`, where `0 \u2264r <b`.
* To accomplish in-place execution, we're going to use the Euclid formula  to encode old(nums[i]) and new value(nums[nums[i]]) in the form 
`a = bq + r` and store 'a' as encoded value in the nums array
* From the above equation, we can retrieve b and r as
    * `b = a // q` (where // is integer division)
    * `r = a % q`
* Let 'r' be the old value and 'b' be the new value. In order to use the fact that `b = a // q` and `r = a % q` to recover either the old or new value from the encoding 'a', the choice of 'q' must satisfy: (r < q) i.e., the remainder 'r' must be strictly less than the divisor 'q'.
* The convenient value for 'q' is num.len, which is always 1 greater than the maximum value of the index 'm'. (from [Monophase](https://leetcode.com/problems/build-array-from-permutation/solutions/1315926/python-o-n-time-o-1-space-w-full-explanation/comments/1952074))
* Encoded value: `a =  nums[i] + (nums[nums[i]] * length)`
* Once we finish encoding the original array with both old and new value, then we can then extract the desired new value by `b = a // q`.
Final result: `nums[i] = nums[i] / length`
##### Another Catch
* At a later position of the original array, say j, has a value `nums[j] = i` (where i < j) and we need `nums[nums[j]]` (`= nums[i]`) to compute encoded value, but we've overwrote the value at 'i' (nums[i]) with encoded value already
* We can retrieve the old value of 'i' from encoded value with the formula `r = a % q`
* Hence, the updated equation for calculating encoded value will be 
Encoded value: `a =  nums[i] + ((nums[nums[i]] % length) * length)`

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)
![Upvote.jpeg](./images/0.jpeg)


# Code

<iframe src="https://leetcode.com/playground/HtdZdm98/shared" frameBorder="0" width="600" height="400"></iframe>
