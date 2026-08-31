# [Python] Simple Solution with Clear Explanation

**Author:** jeffwei
**Votes:** 585
**Link:** [https://leetcode.com/problems/counting-bits/solutions/656849/](https://leetcode.com/problems/counting-bits/solutions/656849/)

---

# Solution Code
```
def countBits(self, num: int) -> List[int]:
    counter = [0]
    for i in range(1, num+1):
        counter.append(counter[i >> 1] + i % 2)
    return counter
```

# Analysis
To understand the solution, we remember the following two points from math:
* All whole numbers can be represented by **2N** (*even*) and **2N+1** (*odd*).
* For a given binary number, multiplying by 2 is the same as adding a zero at the end (just as we just add a zero when multiplying by ten in base 10).

Since multiplying by 2 just adds a zero, then any number and its double will have the same number of 1's. Likewise, doubling a number and adding one will increase the count by exactly 1. Or:
* ```countBits(N) = countBits(2N)```
* ```countBits(N)+1 = countBits(2N+1)```

Thus we can see that any number will have the same *bit count* as half that number, with an extra one if it's an odd number. We iterate through the range of numbers and calculate each bit count successively in this manner:
```
for i in range(num):
    counter[i] = counter[i // 2] + i % 2
```
With a few modifications:
* Define the base case of ```counter[0] = 0```, and start at ```1```.
* We need to include ```num```, so use ```num+1``` as the bound on the ```range```.
* Bit-shifting 1 has the same effect as dividing by 2, and is faster, so replace ```i // 2``` with ```i >> 1```.
* We can choose to either initiate our list with ```counter = [0] * (num+1)``` or just ```counter = [0]``` and then ```append``` to it (which has O(1)). It's a little faster to initiate it with zeroes and then access it rather than appending each time, but I've chosen the latter for better readibility.
* Some solutions use ```i & 1``` to determine the parity of ```i```. While this accomplishes the same purpose as ```i % 2``` and keeps with the bitwise-operator theme, it is faster to calculate the modulus.

## Time and Space Complexity
Time: O(n) - We iterate through the range of numbers once.
Space: O(n) - We use a ```num```-sized array.
## Examples
Let's take the number 7, represented in binary as 111.
```
Base 2: 111    Base 10: 7    
Base 2: 1110   Base 10: 14  
Base 2: 11100  Base 10: 28 
Base 2: 11101  Base 10: 29
```
# Analysis of Other Approaches
While we're here, let's take a look at some other approaches:
## Brute Force
The most straightforward solution is simply to convert each number to a binary string and count the 1's in the resulting string. This has time complexity of O(n * length of binary number) and is discouraged in the problem prompt. Regardless, the test cases do not punish this approach very much:
```
def countBits(self, num: int) -> List[int]:
    return [bin(i).count('1') for i in range(num+1)]
```
or
```
def countBits(self, num: int) -> List[int]:
    return list(map(lambda x:bin(x).count('1'), range(num+1)))
```
## Extend and Slice
Personally, this is my least favourite approach because it performs more work than needed. If you take a look at the pattern that emerges when you start counting bits, you will notice that each successive power of two is the same as the previous set, plus one. This makes sense, since you're just adding a one to the most significant bit. So we can just keep extending the list with itself until we have enough to cover up to ```num+1``` and then return just the list up to ```num``` (by slicing). However, as before, the test cases don't really punish this approach:
```
def countBits(self, num: int) -> List[int]:
    counter = [0]
    while len(counter) < num+1:
        counter.extend([i+1 for i in counter])
    return counter[:num+1]
```
## Awkward Counting
And finally, this is the most awkward solution I could come up with. It uses the same concept as the previous one, by starting over every power of 2 and adding 1, except instead of extending the list, it tracks when it's time to start the next order of 2, and stops once it reaches ```num+1```. The only reason I'm including it is because it's technically the fastest solution, garnering a 99.55% on one lucky submission.
```
def countBits(self, num: int) -> List[int]:
    nextOrder = 2
    tracker = 0
    counter = [0]*(num+1)

    for i in range(1, num+1):
        if i == nextOrder:
            nextOrder *= 2
            tracker = 0
        counter[i] = counter[tracker] + 1
        tracker += 1
    return counter
```
