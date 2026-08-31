# Heavily commented JavaScript solution

**Author:** demiurg2000
**Votes:** 8
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/983648/](https://leetcode.com/problems/next-greater-element-iii/solutions/983648/)

---

Played around a little with **1234** and **4321**
        
You immediately notice **4321** is maxed out. Why is that?
It's because it's sorted descending. 

So if we find no spots where the number increases, it's a -1

if we do, we have work to do

**1234** increases every step, so we should swap 3 and 4 

**1243** now with this number we see we can't just swap the last increase
that'd be **1423** and that's not right.

It's not even the case that I can swap it with the lowest afterwards
that'd be **1342** and obviously **1324** is smaller

So what's the general formula? 

* Find the last increasing step, 
* swap with the lowest number coming after that
* sort the remainder after our swapped number

That would work for **1243**:
1->2 increase
2->4 increase
4->3 decrease, so 2->4 was the last increase, so **2** is our swapping candidate

So we mark **2** for swapping (at lastIncreasePosition in the code ) 
of the remaining numbers, 3 is the lowest (at smallestToSwapWithPosition in the code)
so we swap 2 and 3 and get 

**1342**

now we sort after the position 2 was in and we get

**1324**

-- It's an idea so let's try it out! coding.... --

It works on **1243**. I will test with some larger numbers and
check that 32bit integer edge too

I then added a 32 bit check, i think we should be good now.. submitting!

ERROR! There's a bug!
Input:
	**230241**
Output:
	**230124**
Expected:
	**230412**

Aha! I swapped 2 with the lowest number after it, (1) but that was lower
than 2, and thus illegal, I should check for that.

I expanded the if statement above the 
```smallestToSwapWithPosition = i;``` line
and that works, I am done!

```

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    
    var numbers = ("" + n).split('').map(n=>parseInt(n));
    var lastIncreasePosition = null;
    var smallestToSwapWithPosition;
    var i, l;
    
    for (i = 0, l = numbers.length; i < l; i++) {
        
        // Find the last increase to pin point which number needs to be increased
        // for the next lowest number
        if (numbers[i] < numbers[i + 1] && i + 1 < l) {
            
            // Save the position where we found that last increasing step
            lastIncreasePosition = i;
            
            // Our first candidate to swap with is simply the next number
            smallestToSwapWithPosition = i + 1;
        } else if (lastIncreasePosition !== null) {
            
            // Check if there is a better (smaller) number to swap with
            // Only numbers larger that the one we are swapping with are elligible
            if (numbers[smallestToSwapWithPosition] > numbers[i] && numbers[i] > numbers[lastIncreasePosition]) {
                smallestToSwapWithPosition = i;
            }
        }
    }

    // Check if we're not already at the maximum value (like 4321)
    if (lastIncreasePosition === null) {
        return -1;
    }
    
    // Do the swap. This will get us from 1243 to 1342
    let temp = numbers[lastIncreasePosition];
    numbers[lastIncreasePosition] = numbers[smallestToSwapWithPosition];
    numbers[smallestToSwapWithPosition] = temp
    
    // We're not done, we have to sort everything after lastIncreasePosition 
    // to get from 1342 to 1324
    // Slice up the part that is done and the part that needs sorting
    var sorted = numbers.slice(0, lastIncreasePosition + 1)
    var unsorted = numbers.slice(lastIncreasePosition + 1);
    
    unsorted = unsorted.sort((a,b) => a - b);
    // put em back together
    numbers = [...sorted, ...unsorted];
    
    // convert back to a number
    n = parseInt(numbers.join(''));
        
    // 32 bit int check
    if (n > 2147483647) {
        return -1;
    }
    
    return n;
};

```