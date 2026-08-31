# Go. Two pointers. Time complexity O(n) and Space complexity O(1)

**Author:** sergei-m
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/3848870/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/3848870/)

---

# Intuition

##### Analyzing the problem, the following points can be emphasized:
1. We are given an array of integers sorted in ascending order.
1. We need to find pairs of values that will match the condition `y - x = diff && z - y = diff`.
1. This means that there is no need to look for a pair `z - y = diff` if we did not find `y - x = diff`.
The way to find the pairs is identical, so we can use the same approach to confirm the finding of the desired pair.

##### From the description, I can suggest the following solutions:
- Brute force with complexity: time $$O(n^3)$$, space $$O(1)$$
- Using a hash map with complexity: time $$O(n)$$, space $$O(n)$$
- Using the two pointer method with complexity: time $$O(n)$$, space $$O(1)$$

Personally, I like the option with complexity time $$O(n)$$ and space $$O(1)$$ aka the two pointer method.
If you want me to describe other implementations, let me know and I'll add them.

# Approach
Method of two pointers, about the fact that we have pointers and we move them (masterful explanation).Usually these pointers are called `r`ight & `l`eft And that's what we're going to do!

Instead of parsing the whole code, I want to focus on how we move the pointers to find all the `unique arithmetic triplets`.

Since the search for the first pair of values \u200B\u200Bis no different from the search for another pair. Then, having figured out the rules for finding the first pair, we can apply them to the search for the next pair.

##### We remember that we have a sorted array. Therefore, we can offer:

- If the statement `diff > r - l` is true, then
we can assume that the value of `r` is not large enough and we need to move the right pointer `r` forward.
- If the statement `diff < r - l` is true, then the value of `r` has become larger than necessary and must be reduced by shifting the left pointer `l` forward.

Pseudocode:
```
if diff > nums[r] - nums[l]
    r++
else if diff < nums[r] - nums[l]
    l++
else 
    // we have found a pair that matches the condition
```

Using our pseudocode, check the condition for finding the first pair:
```
// example
nums[0,1,4]; diff=3
l = 0; r = 1

// The first check will shift the right pointer
if diff > nums[r] - nums[l] // 3 > 1
    r++ // r = 2

// The second check will shift the left pointer
if diff < nums[r] - nums[l] // 3 < 4
    l++ // l = 1

// The last check will fulfill the condition
if diff == nums[r] - nums[l] // 3 == 3
 // we can start looking for the next pair that matches the condition
```

As you can see, we found the first pair in O(n). And since the further search will continue from the current pointers, the time complexity will remain $$O(n)$$.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
This algorithm can be better, if you know how, then let me know, I'll take it into account with pleasure.

```
func arithmeticTriplets(nums []int, diff int) int {
  triplets := 0
  i, j, k := 0, 1, 2

  for i < len(nums) - 2 && j < len(nums) - 1 && k < len(nums) {
    // Search for the first pair. Left pointer = i, right pointer = j
    if !foundPair(diff, &i, &j, &nums) {
      continue
    }
    // We found the first pair

    // Search for the second pair. Left pointer = j, right pointer = k
    if !foundPair(diff, &j, &k, &nums) {
      continue
    }
    // We found the second pair

    // Which means we can move the pointers to the right and increase the value of triplets
    i++
    j++
    k++
    triplets++
  }  

  return triplets
}

func foundPair(diff int, l, r *int, nums *[]int) bool {
  value := (*nums)[*r] - (*nums)[*l]

  if diff > value {
    *r++

    return false
  }

  if diff < value {
    *l++

    return false
  }

  return true
}
```
