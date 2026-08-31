# C++ || Math Observation || Easy and clear explanation of intuition || ✅✅

**Author:** akramshafeek
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4598792/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4598792/)

---


<!-- Describe your first thoughts on how to solve this problem. -->
This problem is pretty confusing. We need to look for two indices and then get the remainder between them and push them back to array and delete the previous two.... 

Relax! It's easier than you think

# Intuition
If there are two numbers `nums[i]` and `nums[j]` such that `nums[i] < nums[j]` then `nums[i] % nums[j] = nums[i]`

Example: `2 % 5 = 2`

- Hence performing the above operation and deleting the two numbers invloved in the operation and inserting the result is same as popping out the greater number.
- So a `min` element in the array can help in removing all the numbers that are greater than self
- After removing all other elements, the remaining occurences of `min` numbers can be paired within themselves where one pair of `min % min` will result in one `0`.
- Hence the final length of array will `(min+1)/2` (Consider ceil value)


---


Are we done? Not yet

- The `min` number cannot help in removing itself, when paired with other occurences of `min` number it will result in `min % min = 0` which cannot be removed from the array
- Is it possible to remove the extra occurences of `min` number as well? Yes, if we can find a result of some `nums[i] % nums[j]` such that the number is lesser than `min`, then we can easily remove all occurences of `min` along with other numbers in the array
- Now how to find that `num` lesser than `min`
- We can do that by pairing the `min` with every other `num` in the array and performing `num % min` which will obviously result an answer lesser than min
- If such a `num < min` has been found, then we can pop out every element in the array using `num` which will result in a final answer of `1`
- But in the above operation we are not interested in pairing the `min` with `min` itself or a multiple of `min`, as it will result in `0` which cannot be used for further operations


---


# Example
    .
        #Array
        [1, 1, 1, 5, 2, 10]
            ^
            |
        min element

        We cannot find any number lesser than min which is 1

        Do the operation -> 1 % nums[i] for every i where nums[i] != 1

        #Array after removing all nums by pairing with 1:
        [1, 1, 1]                   

        Now the remaining elements can be paired with itself

        #Final array
        [1, 0]
    .
    ------------------------------------------------------------------
    .
        #Array
        [9, 2, 2, 5, 2, 10]
            ^
            |
        min element

        We can do (5 % 2 = 1)

        #Array after above operation:
        [9, 2, 2, 10, 1]
                    ^
                    |
                    min element

        Now all other elements can be paired with 1 -> (1 % num) = 1

        #The final array:
        [1]
    .



# Code
```

class Solution {
public:
    int minimumArrayLength(vector<int>& nums) {
        // find the min element
        int mini = *min_element(nums.begin(), nums.end());
        int minCount = 0;

        for(int i = 0 ; i < nums.size() ; i++)
        {
            // keep a count of mini
            if(nums[i] == mini)
                minCount++;

            // if nums[i] is not a multiple of mini
            else if(nums[i] % mini != 0)
                return 1;
        }

        // if a num < mini wasn't been found through operations
        // then the length of final array is ceil(minCount/2)
        return (minCount + 1) / 2;
    }
};
```