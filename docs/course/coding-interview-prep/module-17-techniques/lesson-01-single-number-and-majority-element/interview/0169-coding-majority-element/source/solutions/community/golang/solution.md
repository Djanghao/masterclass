# O(n) Time - O(1) Space ||  Beats 90% 🔥 || 5 line only 😎  ||  Let's Vote 🗳

**Author:** Escapist-007
**Votes:** 19
**Link:** [https://leetcode.com/problems/majority-element/solutions/3738432/](https://leetcode.com/problems/majority-element/solutions/3738432/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can store frequency of each element in a hashmap and later check which element has the highest frequency. Since it is gurranted that there will always be a majority element in the given array so we can return the element with highest frequency as majority element.

But if we think about the above approach then we will see that we are not using the condition that majority element needs to be appear `more than \u230An / 2\u230B times`. The condition indicates majority elements will appear at least  `(\u230An / 2\u230B + 1)` times. This indicates that majority element will always win if we there is a **voting** where majority element will be one party and all other elements will be opposite party \uD83D\uDE09 

Majority element will vote for itself (vote++) 
Other elements will vote against the majority element (vote--)

Since majority element is unknown so we will assume an element to be major element when vote count is 0

To understand this with simulation please take a look here - https://www.cs.utexas.edu/~moore/best-ideas/mjrty/

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ (Approach 01)
$$O(1)$$ (Approach 02)

# Code
### Approach 01:  `Hashmap to store frequency of each element`
```
# PYTHON Solution

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        highest_freq = 1
        majority_element = nums[0]
        num_to_freq = dict()
        num_to_freq[nums[0]] = 1
        for num in nums[1:]:
            num_to_freq[num] = num_to_freq.get(num, 0) + 1
            if  num_to_freq[num] > highest_freq:
                highest_freq += 1
                majority_element = num
        return majority_element
        
```

### Approach 02: `Boyer-Moore Majority Vote Algorithm`

```
# PYTHON SOLUTION

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        majority_element, majority_element_frequency = nums[0], 1 # Initialize first element as the majority element 

        for num in nums[1:]:
            if majority_element_frequency == 0: # Reset the majority element and frequency of majority element
                majority_element, majority_element_frequency = num, 1
            else:
                majority_element_frequency += (1 if num == majority_element else -1)
        
        # Checking whether the frequency of majority element is greater than \u230An / 2\u230B is not needed since
        # we may assume that the majority element always exists in the array for this problem

        return majority_element

# Shorter version - 5 line

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        majority_element, majority_element_frequency = None, 0
        for num in nums:
            if majority_element_frequency == 0: majority_element = num
            majority_element_frequency += (1 if num == majority_element else -1)
        return majority_element
                
```
```
// GO SOLUTION

func majorityElement(nums []int) int {
    majority_element, majority_element_frequency := nums[0], 1
    for i := 1; i < len(nums); i++ {
        if majority_element_frequency == 0 {
            majority_element, majority_element_frequency = nums[i], 1
        } else {
            if nums[i] == majority_element {
                majority_element_frequency += 1
            } else {
                majority_element_frequency -= 1
            }
        }
    }
    return majority_element
}
```

```