# Python version of the most voted post (backtracking) + well commented

**Author:** coffee513
**Votes:** 4
**Link:** [https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/427830/](https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/427830/)

---

Python3 version of this post
https://leetcode.com/problems/split-array-into-fibonacci-sequence/discuss/133936/short-and-fast-backtracking-solution

```
# return True if ans[-1] + ans[-1] == num[start_idx:start_idx+digit+1]
def is_fibo_eligible(s, ans, start_idx):
    # check if this is the end of str
    if (start_idx == len(s) and len(ans) >= 3):
        return True

    # choose start_idx..end_idx
    # loop from start_idx+1 to end of string +1 because
    # we are going to use s[start_idx:end_idx]
    for end_idx in range(start_idx + 1, len(s) + 1):
        current_number = int(s[start_idx:end_idx])
        current_number_digit = end_idx - start_idx
        # starts with 0 while digit > 1
        if (current_number_digit > 1) and s[start_idx:end_idx][0] == '0':
            return False
        # valid case where len(ans) <= 1 or fibo valid
        if (current_number > 2**31 - 1):
            return False
        # early termination because there is no way current_number 
        # would be smaller in the next iteration
        elif (len(ans) >= 2 and (current_number > ans[-2] + ans[-1])):
        	return False
        elif (len(ans) <= 1 or (ans[-2] + ans[-1] == current_number)):
            ans.append(current_number)
            # move the index
            # short-cut if is_fibo_eligible = True
            if is_fibo_eligible(s, ans, start_idx + current_number_digit):
                return True
            else:
                # else remove the last element because it is wrong
                ans.pop()
    return False


class Solution:
    def splitIntoFibonacci(self, S: str) -> List[int]:
        # store the answer
        answer = []
        is_fibo_eligible(S, answer, 0)
        return answer
    
```

P.S. The key difference between C++ version and Python version is on how to get the substring.
```
for end_idx in range(start_idx + 1, len(s) + 1):
        current_number = int(s[start_idx:end_idx])
```

Some output to visualize what the code is doing with input "123456579"
```
leetcode python3 splitarray.py
[] 1
[1] 2
[1, 2] 3
[1, 2, 3] 4
[1, 2, 3] 45
early termination
[1, 2] 34
early termination
[1] 23
[1, 23] 4
[1, 23] 45
early termination
[1] 234
[1, 234] 5
[1, 234] 56
[1, 234] 565
early termination
[1] 2345
[1, 2345] 6
[1, 2345] 65
[1, 2345] 657
[1, 2345] 6579
early termination
[1] 23456
[1, 23456] 5
[1, 23456] 57
[1, 23456] 579
[1] 234565
[1, 234565] 7
[1, 234565] 79
[1] 2345657
[1, 2345657] 9
[1] 23456579
...
```


