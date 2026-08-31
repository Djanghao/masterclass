# Math way

**Author:** gormonn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-symmetric-integers/solutions/5642542/](https://leetcode.com/problems/count-symmetric-integers/solutions/5642542/)

---



# Code
```


function countSymmetricIntegers(low: number, high: number): number {
    let res = 0;
    for(let num = low; num <= high; num++){
        // isEvenDigitsCount
        const digitsCount = Math.floor(Math.log10(num)) + 1;
        if(digitsCount % 2 === 0){
            const sideDigitsCount = digitsCount / 2;
            const delimeter = Math.pow(10, sideDigitsCount);
            // 1221
            const lNum = Math.floor(num / delimeter); // 12
            const rNum = num % delimeter; // 21
            let lSum, rSum;

            if(sideDigitsCount === 1){
                lSum = lNum;
                rSum = rNum;
            }else{
                const sideDelimeter = Math.pow(10, (sideDigitsCount - 1));
                lSum = Math.floor(lNum / sideDelimeter) + lNum % sideDelimeter;
                rSum = Math.floor(rNum / sideDelimeter) + rNum % sideDelimeter;
            }


            if(lSum !== undefined && rSum !== undefined && lSum === rSum){
                res++;
            }
        }
    }
    return res;
};

```