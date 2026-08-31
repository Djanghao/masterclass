# [TypeScript] substring-xor-queries

**Author:** imcyber-sector
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/3180869/](https://leetcode.com/problems/substring-xor-queries/solutions/3180869/)

---


# Code
```
function getBinary(num:number): string {
    let str = new Array(30).fill(0);
    let temp = 30;
    let firstOne = -1;
    while(temp >= 0 && num > 0) {
        if(num - 2**temp >= 0) {
            if(firstOne < 0) {
                firstOne = 30-temp-1;
            }
            str[30-temp-1] = 1;
            num = num - 2**temp;
        }
        temp--;
    }
    return str.slice(firstOne).join('');
}

function substringXorQueries(s: string, queries: number[][]): number[][] {
    let ans = [];
    for(let i=0; i<queries.length; i++) {
        let findNum = getBinary(queries[i][0] ^ queries[i][1]);
        let index = s.indexOf(findNum);
        index > -1 ? ans.push([index, index+findNum.length-1]) : ans.push([-1, -1])
    }
    return ans;
};
```