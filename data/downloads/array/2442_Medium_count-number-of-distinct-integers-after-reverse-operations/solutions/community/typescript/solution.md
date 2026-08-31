# Somehow this beat 100% in memory and 95% runtime

**Author:** LordFarquaadtheCreator
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/5103180/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/5103180/)

---

# Intuition
Since we had to count *distinct* integers, I decided that using the **set** data structure was best since it only stores unique elements. I won't have to worry about checking if a number is already in the array since it'll handle that for me.
The next thing to do was to define a reverse function, which I borrowed from one of the approaches that I saw here.  
# Approach
To accomplish this, we first define the `reverse` function, which takes one integer input and enters a while loop to recursively remove the last digit from the number, and add it to the back of a new number.
Then, we just use the array method `forEach` to apply our reverse function to each element in the array and add it to the set. Again, here the set handles non-unique inputs for us.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$
# Code
```
function countDistinctIntegers(nums: number[]): number {
    // create a new array that is the result of each element reversed
    // create a reverse fn that treats ints as strings and reverses them

    const reverse = (x) => {
        let rev = 0;
        while (x!=0){
            rev = (rev*10) + (x%10);
            x = ~~(x/10)
        }
        return rev
    }

    let set = new Set(nums);
    nums.forEach(num => set.add(reverse(num)));

    return set.size;
};
```