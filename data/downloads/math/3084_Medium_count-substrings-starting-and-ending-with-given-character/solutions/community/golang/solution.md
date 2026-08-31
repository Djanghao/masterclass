# Easy Solution | Beats 100 % | Explanation

**Author:** kmuhammadjon
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/5050199/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/5050199/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
Based on Dynamic Programming concept
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countSubstrings(s string, c byte) int64 {
    // 2 variables for previous number of subarrays and
    // total number numbers grow like that 
    // 1 2 3 4 5 previousSubarray grows like that as it is process c
    // 1 3 6 10 15 numberOfSubarraysProcessed grows like that as it is process c
    // hope that you got is you can you array to store it if
    // you are struggling to understand but then make it 
    // optimal and use 2 variables that is enough and it
    // will be fast also memory efficient
    var numberOfSubarraysProcessed int64
    var previousSubarray int64

    for i := 0; i < len(s); i++{
        if s[i] == c {
            previousSubarray = previousSubarray + 1
            numberOfSubarraysProcessed += previousSubarray
        }
    }
    return numberOfSubarraysProcessed
}
```