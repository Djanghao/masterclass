# 🔥🔥🔥Python O(N) solution || Faster than 99% submissions || Detailed explanation.

**Author:** litdatascience
**Votes:** 25
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/2074599/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/2074599/)

---

***Please Upvote, comment and share if you like the detailed explanation and the solution***

Let us understand with an example: 
`Number = 9515901 and digit = 9`

1. Since the occurence of the number `9` is happening twice in the string(number), and we can only remove one `9` from the string, we can achieve the Maximum possible outcome in the below cases:
	* `Case 1`: If the first occurence of 9 `is greater than` the next element at index `i+1`.
	* `Case 2`: If not the first occurence, we iterate till next/last occurence, and the next occurence has number 9 less than the index `i+1`.
	* `Case 3`: This would be if there is a number `9` present at the end of the string.
	

2. In the given example we have 2 possiblities: `515901` and `951501`.

3. As per the condition of the problem, the maximum returned value from the above sample should be `951501` as per **case 2**. 
4. Since `9` is less than `5` (if we consider the outcome `515901`), it would have resulted in a string with lower value. Hence we keep moving forward till we find this condition to be true `number[i]` is greater than `number[i-1]`. And remove the character from from that position.

5. `Edge Case`: This is the scenario where none of the above two cases holds true. In this case, we have to remove the last occurence of the digit, hence, `case 3` is added to find the last occurence of `9` and remove it.

```
class Solution:
    def removeDigit(self, number: str, digit: str) -> str:
        
        # Initializing the last index as zero
        last_index = 0
        
        #iterating each number to find the occurences, \\
        # and to find if the number is greater than the next element \\ 

        for num in range(1, len(number)):
            
            # Handling [case 1] and [case 2]
            if number[num-1] == digit:
                if int(number[num]) > int(number[num-1]):
                    return number[:num-1] + number[num:]
                else:
                    last_index = num - 1
        
        # If digit is the last number (last occurence) in the string [case 3]
        if number[-1] == digit:
            last_index = len(number) - 1

        return number[:last_index] + number[last_index + 1:]
```

Better and faster than **99% of submissions** \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25

![image](./images/0.png)
