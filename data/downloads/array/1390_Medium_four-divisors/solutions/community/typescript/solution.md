# slow as hell, i tried, down to 2 second when i first submitted its 10 second LOL | Typescript/JS

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/four-divisors/solutions/2888077/](https://leetcode.com/problems/four-divisors/solutions/2888077/)

---


# Code
```
function sumFourDivisors(nums: number[]): number {
    const preCalculatedFour: {[num: number]: number} = {};
    const findDivisors: (num: number)=> number | boolean = (num: number): number | boolean=>{
        if (num < 6) return false;
        let sumDivisors: number = 1 + num;
        let countDiv: number = 2;
        for (let i = num % 2 === 0 ? 2 : 3; i <= num/2; i += 1){
            if (countDiv > 4) break;
            if (num % i === 0) {
                if (preCalculatedFour[i]) return false;
                sumDivisors += i;
                countDiv += 1;
            }
        }
        if (countDiv === 4){
            preCalculatedFour[num] = sumDivisors;
            return sumDivisors;
        }
        return false;
    }
    let sum: number = 0;
    for (let i = 0; i < nums.length; i += 1){
        if (preCalculatedFour[nums[i]]){
            sum += preCalculatedFour[nums[i]];
            continue;
        }
        const fourDivisors: number | boolean = findDivisors(nums[i]);
        if (fourDivisors && typeof fourDivisors === "number"){
            sum += fourDivisors;
        }
    }
    return sum;
}
```