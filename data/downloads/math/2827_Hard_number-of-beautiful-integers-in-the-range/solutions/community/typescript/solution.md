# Straightforward TS solution

**Author:** assorium
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3937986/](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3937986/)

---

# Intuition
Ideally this problem can be solved using combinatorics, but I'm not really good at complex combinatorics, so I tried to optimize straightforward solution.

# Approach
The problem is solved as it sounds, we go from `low` to `high` and check every number if it is `beautiful`. Of course it will not work, because of time constraints.
I made 2 optimizations:
1. Skip not devidable numbers by `k` this will in fact speed up the loop `*k` times
2. Skip uneven decimal bases, another `x2` increase for big ranges

TODO optimizations:
- loops can be more gradual and on `ideal loops` (100000-200000, etc) we can just add-up calculated amount of `beautiful` numbers. Then there is still question on how to calculate assuming `k` factor.

# Code
```
// Ugly helper function to create even lengthed number loops
function createDecimalLoopsOfEvenLengthNumbers(start, finish) {
    let loops = [];
    let finished = false;

    while (!finished) {

		// check if start is even lengthed
		if (start.toString().length % 2 === 0) {
			// then first loop must be till the end of the first even lengthed number
            const endOfFirstEvenLengthedNumber = Math.pow(10, start.toString().length) - 1;
            if (finish <= endOfFirstEvenLengthedNumber) {
                loops.push([start, finish]);
                finished = true;
            } else {
                loops.push([start, endOfFirstEvenLengthedNumber]);

                // Start then goes to the next even lengthed number
                start = (endOfFirstEvenLengthedNumber + 1) * 10;
                if(start > finish) {
                    finished = true;
                }
            }
        } else {
            // start is odd lengthed
            start = Math.pow(10, start.toString().length);
            if(start > finish) {
                finished = true;
            }

            const endOfFirstEvenLengthedNumber = Math.pow(10, start.toString().length) - 1;

            if (finish <= endOfFirstEvenLengthedNumber) {
				loops.push([start, finish]);
				finished = true;
			} else {
				loops.push([start, endOfFirstEvenLengthedNumber]);

				// Start then goes to the next even lengthed number
				start = (endOfFirstEvenLengthedNumber + 1) * 10;
				if (start > finish) {
					finished = true;
				}
			} 
        }
	}

    return loops;
}

function isOdd(n) {
    if (n === 1) return true;
    if (n === 3) return true;
    if (n === 5) return true;
    if (n === 7) return true;
    if (n === 9) return true;
    return false;
}

function isBeautiful(num) {
    // With same amount even/odd the sum will remain 0
    let sum = 0;

    // Decoupling the number
    while(true) {
        const digit = num % 10;
        sum += isOdd(digit) ? 1 : -1;
        num = (num - digit) / 10

        if(num < 1) break;
    }

    return sum === 0 ? true : false;
}

function numberOfBeautifulIntegers(low: number, high: number, k: number): number {
    let count = 0;


    let decimalLoops = createDecimalLoopsOfEvenLengthNumbers(low, high);

    // Going the loops
    for(let [start, finish] of decimalLoops) {

        // Start must meet `k` factor
        start = start % k === 0 ? start : start + k - start % k;
        
        // Skipping all none `k` devidable numbers
        for(let i = start; i <= finish; i += k) {
            if(isBeautiful(i)) count++;
        }
    }

    return count;
};
```