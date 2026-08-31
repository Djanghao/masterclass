# Best Solution simplified || Easy approach || Java C++ Python

**Author:** raghavagarwal28
**Votes:** 146
**Link:** [https://leetcode.com/problems/largest-number/solutions/5785445/](https://leetcode.com/problems/largest-number/solutions/5785445/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve this, convert numbers to strings, sort them by custom logic (comparing concatenated values), and join them to form the largest possible number, handling leading zeros.

# Approach
<!-- Describe your approach to solving the problem. -->
1) Convert Integers to Strings: Since comparing individual digits of integers won't work directly for concatenation, first convert the integer array into an array of strings. This allows us to concatenate and compare the results of a + b and b + a.

2) Custom Sorting: Use a custom comparator to sort the string array. The comparator should compare two strings a and b by checking the results of a + b vs b + a. If a + b is larger, then a should come before b in the sorted array.

3) Edge Case: After sorting, if the largest number is "0" (i.e., if the first element in the sorted array is "0"), return "0", since this means all numbers were zeros.

4) Construct the Result: Use a StringBuilder to concatenate all the strings in the sorted array into the final result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
the total complexity is: O(nlogn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
the overall space complexity is: O(n)

# Code
```java []
class Solution {
    public String largestNumber(int[] nums) {
        String[] array =  new String[nums.length];
        for(int i=0; i<nums.length; i++){
            array[i] = String.valueOf(nums[i]);
        }
        Arrays.sort(array,(a,b)-> (b+a).compareTo(a+b));
        if(array[0].equals("0")){
            return "0";
        }
        StringBuilder largest = new StringBuilder();
        for(int i=0; i<array.length; i++){
            largest.append(array[i]);
        }
        return largest.toString();
    }
}
```
``` C++ []
class Solution {
public:
    string largestNumber(vector<int>& nums) {
        // Convert integers to strings
        vector<string> array;
        for (int num : nums) {
            array.push_back(to_string(num));
        }

        // Custom comparator for sorting
        sort(array.begin(), array.end(), [](const string &a, const string &b) {
            return (b + a) < (a + b);
        });

        // Handle the case where the largest number is "0"
        if (array[0] == "0") {
            return "0";
        }

        // Build the largest number from the sorted array
        string largest;
        for (const string &num : array) {
            largest += num;
        }

        return largest;
    }
};
```
``` Python []
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        # Convert integers to strings
        array = list(map(str, nums))
        
        # Custom sorting with a lambda function
        array.sort(key=lambda x: x*10, reverse=True)
        
        # Handle the case where the largest number is "0"
        if array[0] == "0":
            return "0"
        
        # Build the largest number from the sorted array
        largest = ''.join(array)
        
        return largest
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // Convert integers to strings
    let array = nums.map(String);
    
    // Custom sorting with a comparator function
    array.sort((a, b) => (b + a).localeCompare(a + b));
    
    // Handle the case where the largest number is "0"
    if (array[0] === "0") {
        return "0";
    }
    
    // Build the largest number from the sorted array
    return array.join('');
};
```
![_6f4be99b-b51c-45f2-ada4-de7d984e1fdc.jpg](./images/0.jpeg)
