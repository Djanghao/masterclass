# Easy and Understandable approach

**Author:** DnyaneshwarPatil
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/3545281/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/3545281/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create an empty HashMap to store the frequency of each number in the array. The keys of the HashMap will represent the numbers, and the values will represent their frequencies.

2. Iterate through the array and update the frequency of each number in the HashMap:

3. For each number in the array, check if it already exists as a key in the HashMap.
a. If it does, increment its corresponding frequency value by 1.
b. If it doesn't, add it as a new key to the HashMap with an initial frequency of 1.

4. Iterate through the array again and identify the lonely numbers. 
5. For each number in the array, retrieve its frequency from the HashMap. If the frequency is 1, it means the number might be lonely. To find out if it's really lonely check for 2 more conditions.
6. Check by incrementing the number by 1 or decrementing number by 1 to see if next or previous adjacent number is present or not. If present means it's not lonely else it's lonely. 
7. Add the lonely number to a result list.
8. Return the result list containing all the lonely numbers.

# Code
```
class Solution {
    fun findLonely(nums: IntArray): List<Int> {
         val frequencyMap = HashMap<Int, Int>()

    // First find the number of same num occurance in nums list
    for (num in nums) {
        frequencyMap[num] = frequencyMap.getOrDefault(num, 0) + 1
    }

    val lonelyNumbers = mutableListOf<Int>()

    // Identify the lonely numbers
    // 1. If the frequency of num is more then 1 means it's not lonley
    // 2. Check by incrementing the num by 1 or decrementing num by 1 to see if next or previous number is present
    // a. In case of present means it's not lonely
    // b. In case of not present means it's lonely as frequency of that number is also once
    for (num in nums) {
        if (frequencyMap[num] == 1) {
            var isLonely = if (frequencyMap.containsKey(num - 1) || frequencyMap.containsKey(num + 1)){
                false
            } else {
                true
            }

            if (isLonely) {
                lonelyNumbers.add(num)
            }
        }

    }

        return lonelyNumbers
    }
}
```