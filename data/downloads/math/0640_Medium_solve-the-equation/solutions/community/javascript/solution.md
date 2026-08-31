# Javascript O(n) solution

**Author:** salishoma
**Votes:** 1
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/655734/](https://leetcode.com/problems/solve-the-equation/solutions/655734/)

---

```
var solveEquation = function(equation) {
    const [left, right] = equation.split('=');
    const [lsv,lsc] = solve(left);
    const [rsv,rsc] = solve(right);
    const [variable,constant] = [lsv-rsv,rsc-lsc];
    return !variable ? (lsc === rsc ? "Infinite solutions":
   "No solution") : `x=${constant / variable}`
};

const solve = equation => {
    let x = 0;
    let num = 0;
    for(let i = 0; i < equation.length; i++){
        if(equation[i] === "x"){
            if(equation[i - 1] === "+") x += 1;
            else if(equation[i - 1] === "-") x -= 1;
            else x = 1;
        }else if(!isNaN(equation[i])){
            let str = equation[i];
            let k = i + 1;
            while(!isNaN(equation[k])){
                str += equation[k];
                k++;
            }
            let res = equation[k] === "x" ? x : num;
            if(equation[i - 1] === "-") res -= parseInt(str)
            else if(equation[i - 1] === "+") res += parseInt(str);
            else res = parseInt(str)
            if(equation[k] === "x") x = res;
            else num = res;
            i = k;
        }
    }
    return [x,num]
}
```