# O(n) with explanation

**Author:** VarunSharma86
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iv/solutions/5642068/](https://leetcode.com/problems/next-greater-element-iv/solutions/5642068/)

---

# Intuition
First though is to solve it with 2 Lists(or even stacks) but it fails in couple of corner cases apart from being slow

# Approach
We will be solving it with 3 Stacks. We could have solved it with Arrays(variable sized array) as-well but it will fail the test as it will take more time to complete compared to a Stack as we will have to always add an item at a given index(let  us say 0 to mimic pop and push) whose time complexity will not be constant i.e. O(1)

Now we will be using 3 stack to implement it. Why 3? Let me explain
Start iterating items in nums(input) and follow the steps below
1. stack s1 -> To push index of current item in nums(input) into s1 if it is less than existing items in s1.

2. stack temp -> To push all the indices from s1 which have their corresponding values smaller than the current item

3. stack s2 -> 
    1. Now whichever index in s2 has value less than current item, replace the value at that index in nums with current item. This will be our second greater element. This is because after step 1 all the items that had already found their first greatest element were moved to s2, so this time it is their second greatest element
    2. Now copy items from temp to s2.
        1. Doing this will reverse the order from temp to s2
        2. This is being done because if we don't do it, the items will be placed and thus compared in the wrong order.
        Let us say 
            1. tmp has 15,13 - (values, not indices)
            2. s2 has  16, 17
        If we push values directly to s2 the order will be 15,13,16,17 which will lead to wrong results if the next value in nums is 14.
        We will never be comparing 14 wth thirteen as the value before(15) it is greator than 14

s1 will always have all the values in non-decreasing order because all the values smaller than the current value from input will be moved to s2

s2 will always have all the values in non-decreasing order because
    1. Any value smaller than current value will be moved out of s2 first starting from the front
    2. Then any value smaller than current value in s1 will be placed in right order in s2 because there wasn't any value left in s2 after previous step which was greator than the current value, and only the values in s1 smaller than the current value will be placed in s2. This means any new values being added to s1 or s2 will always be less than the current values in them
# Complexity
- Time complexity:
O(n) as there is a single pass being done on input

# Code
```
class Solution {
    fun secondGreaterElement(nums: IntArray): IntArray {
        val n = nums.size
        val result = IntArray(n) { -1 }
        val stack1 = Stack<Int>()
        val stack2 = Stack<Int>()
        val tmp = Stack<Int>()

        for (i in nums.indices) {
            val current = nums[i]
            while (stack2.size > 0 && current > nums[stack2.peek()]) {
                result[stack2.pop()] = current
            }
            while (stack1.size > 0 && current > nums[stack1.peek()]) {
                tmp.push(stack1.pop())
            }
            while (tmp.isNotEmpty()) {
                stack2.push(tmp.pop())
            }
            stack1.push(i)
        }
        return result
    }
}

```