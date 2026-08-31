# Explanation of thought process and Bitmask solution. One Liner Solution.

**Author:** Aryan3212
**Votes:** 30
**Link:** [https://leetcode.com/problems/single-number/solutions/3224500/](https://leetcode.com/problems/single-number/solutions/3224500/)

---

# Intuition
The question stated some key things, my initial thoughts were:
1. Non-empty array of integers, -3 * 10^4 <= nums[i] <= 3 * 10^4, therefore numbers can be negative.
2. Every number appears 2 times, except one number. Maybe this piece of info has the key?
3. Time Complexity must be O(N).
4. Space Complexity must be O(1).
5. Therefore, Brute force solution (time complexity -> O(n^2)). Maps (space complexity -> O(n)) won't cut it.
6. However, there must be something I can use to '**memorize**' or '**remember**' where each element is, or else, how will I identify/track my count of numbers.

# Approach
1. I'm not gonna lie, the only reason I knew how to do this was because I read a similar solution before. The answer was using a bit manipulation of the numbers.
2. On a high level we can think of bits or bitmasks as able to "store/remember" information using the position of the bits.
3. In this case whenever 2 same numbers are XOR'ed with each other, they cancel out to form 0, on the other hand if 0 and any number are XOR'ed the output is the number itself. So,

    7^7 = 0, simple?

    7^7^7 =  what will this be? Well XOR's are associative so let's break it down.

    7^7 will be 0

    111 (7)
    111 (7)
    ^__
    000 (0)

    so now it's 0 ^ 7, which is

    000 (0)
    111 (7)
    ^__
    111 (7)

    So therefore 7^7^7 = 7, similarly 1^1^2 = 2, 

    4^1^2^1^2 = will be what?

    In this case, the 1's and 2's cancel out and we're left with 4^0 = 4, which is the only number with 1 occurrence and our answer in this case.

# Complexity
- Time complexity: O(n), we're iterating through the array once.

- Space complexity: O(1), no extra space is used, we're using the initial bitmask which is `0` and using XORs with the subsequent numbers/calculations.

# Code

To anyone who doesn't understand this code(JavaScript) when we use the `reduce` method of an array we pass a `function(callback)` to it, as the 1st argument and an `accumulator` as the 2nd argument(in this case 0).

Inside the callback, the first argument being passed is the `accumulator` and in the first iteration this will be `0` that we passed to `reduce`, for all subsequent iterations it will be the value passed by the `callback function`. The function is called for each element of the array and we also get the previous return value as `prev` to the function.

So, for nums = [4, 1, 2, 1, 2]. The function will calculate 0^4^1^2^1^2.

```
function singleNumber(nums: number[]): number {
    return nums.reduce((prev, val) => prev ^ val, 0)
};
```