# Explanation in laymens terms [Easy to understand]

**Author:** darkmatter404
**Votes:** 3
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3065765/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3065765/)

---

# Intuition
Basically the idea is that once we reach a '1' we will start flipping '0's to 1s until the count for zeros is less than ones but as an when the count for zero increases more than that of ones as we are logically supposed to flip the 1s instead of zeroes. 

The way we will be able to acheive this is by considering count of 1 and number of flips(initially with the thought of flipping at 0s) and then we take a minimum of these two values to transition between these two flips min(counter_right, flips). 

```
    E.g. - 
        s ="00110100" 

        # string = "0" counter = 0, flips = 1 -> flips = min(0, 1) = 0
            - as bit is not '0' counter will be 0 and flips will be reset to zero as we don't need to flip anything yet

        # string = "00" counter = 0, flips = 1 -> flips = min(0, 1) = 0
            - as 1 is not reached counter will be 0 and flips will be reset to zero as we don't need to flip anything yet

        # string = "001" counter = 1, flips = 0 -> flips = min(1, 0) = 0
            - as we have a 1 now counter will be changed to 1 and the flip will still be zero as there is not to flip yet

        # string = "0011" counter = 2, flips = 0 -> flips = min(2, 0) = 0
            - as we have a 1 now counter will be changed to 2 and the flip will still be zero as there is not to flip yet

        # string = "00110" counter = 2, flips = 1 -> flips = min(2, 1) = 1
            - as bit is '0' counter will stay at 2 and the flip will changed to 1 with the idea that we need to have all 1s after the first 1 and as the minimum of counter and flips is 1 it will be saved

        # string = "001100" counter = 2, flips = 2 -> flips = min(2, 2) = 2
            - as bit is '0' counter will stay at 2 and the flip will changed to 2 and as the minimum of counter and flips is 2 it will be saved

        # string = "0011001" counter = 3, flips = 2 -> flips = min(3, 2) = 2
            - as now we encountered one more 1 our idea still holds true that we have to flip 0s to 1s so the value for flip will stay as 2 because of min and will be saved

        # string = "00110010" counter = 3, flips = 3 -> flips = min(3, 3) = 3
            - now we encountered '0' making its count same as the count for '1' (which means we will not care about if we are fliping 0 or 1) so we will increase the flips to 3. As min of counter and flips would be 3 which will be saved

        # string = "001100100" counter = 3, flips = 4 -> flips = min(3, 4) = 3
            - another '0' which makes its count more than that of '1' which will reset our idea that we have to flip 1s now. As we have the counter for 1s our min condition will support our idea and set the flips to min(3, 4) = 3


    This lands us to the conclusion that we had to flip 3 1s to make it binary monotonic and adds up to our solutions 
```

# Approach
- Take counter for 1s and flips
- Increase counter for 1s at every '1' encountered
- Increase the flips for every '0' encountered
- reset flips to minimum of flips and counter for 1s(this will help us transition between fliping 0s ar 1s)
- return flips

> Note: Try to write your own code after this if you get the idea. :-)

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        counter = 0
        flips = 0
        for ch in s:
            if ch == '1':
                counter += 1
            else:
                flips += 1
            flips = min(counter, flips)
        return flips
```