# TypeScript & JavaScript | Beats 100% time and 50% memory | Full explanation

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/4113017/](https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/4113017/)

---

# Code explanation
*1.* Initialize an empty array ***bits*** to store the bitwise OR values of subarrays and a variable l to keep track of the left pointer.
*2.* Start a loop that iterates through each element of the input array ***arr***.
*3.* Inside the loop, get the current length of the **bits** array and store it in ***r***.
*4.* Push the current element of ***arr*** into the ***bits*** array. This represents the bitwise OR of a subarray consisting of only the current element.
*5.* Start a while loop with the left pointer ***l*** initially set to 0. This loop is used to calculate the bitwise OR of subarrays that include the current element.
*6.* Inside the while loop, calculate the bitwise OR of the element at index ***l*** and the last element in the ***bits*** array, which is the current element from step 4.
*7.* If the calculated bitwise OR value is not equal to the previous value in the ***bits*** array, push this new value into the ***bits*** array. This step ensures that we add distinct bitwise OR values to the ***bits*** array.
*8.* Increment the left pointer ***l***.
*9.* Repeat steps 6-8 until ***l*** is less than ***r***. This loop processes all the subarrays that include the current element.
*10.* Continue with the outer loop, moving to the next element in the input array arr.
*11.* After processing all elements, return the size of a Set created from the ***bits*** array. Using a Set ensures that we only count distinct bitwise OR values.


# Complexity
- Time complexity:
The time complexity of this code is ***O(N * log(M))***, where **N** is the length of the input array ***arr***, and **M** is the maximum value in ***arr***. This is because, in the worst case, the while loop inside the for loop can iterate up to log2(M) times, where M is the maximum integer in the input array.

- Space complexity:
The space complexity of this code is ***O(N * log(M))***. This is because the bits array can potentially store up to O(N * log(M)) distinct bitwise OR values in the worst case, and the Set created from bits also takes up additional space.

# Code
```TypeScript []
function subarrayBitwiseORs(arr: number[]): number {
    const bits: number[] = []
    let l: number = 0

    for(let i = 0; i < arr.length; i++){
        const r: number = bits.length
        bits.push(arr[i])

        while(l < r){
            const prev: number = bits[bits.length - 1]
            const bitwise: number = bits[l] | prev

            if(bitwise !== prev) bits.push(bitwise)
            l++
        }
    }

    return new Set(bits).size
};

```
```JavaScript []
function subarrayBitwiseORs(arr) {
    const bits = []
    let l = 0

    for(let i = 0; i < arr.length; i++){
        const r = bits.length
        bits.push(arr[i])

        while(l < r){
            const prev = bits[bits.length - 1]
            const bitwise = bits[l] | prev

            if(bitwise !== prev) bits.push(bitwise)
            l++
        }
    }

    return new Set(bits).size
};
```

