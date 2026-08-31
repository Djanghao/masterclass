# Javascript stack O(N)

**Author:** fbecker11
**Votes:** 32
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/597084/](https://leetcode.com/problems/basic-calculator-ii/solutions/597084/)

---

This solution is a simplified version of this [solution](https://leetcode.com/problems/basic-calculator-ii/discuss/345603/JavaScript-stack)
I've also added plenty of comments to make it easy to read.
```
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [];
  let num = '';
  let sign = null
  // we loop till the full length of the array to account for last sign
  for(let i = 0; i <= s.length; i++){    
    const curr = s[i];
    //handle space
    if(curr === ' ') continue;
    //if char is a number
    if(!isNaN(curr)) num+=curr;
    //if we have a  sign + - / *
    if(isNaN(curr)){
      num = Number(num)
      switch(sign){
        case '+':
        case null:
          //we push the initial number into the stack
          stack.push(num)
          break;
        case '-':
          //we push any values after the subtraction sign as negative
          stack.push(-num)
          break; 
        case '*':
          //we pop the stack then multiply and push back
          stack.push(stack.pop()*num)
          break;
        case '/':
          //we pop the stack then devide and push back
          stack.push(parseInt(stack.pop()/num, 10))
          break;           
      }
      // sign becomes current sign
      sign = curr;
      // we reset num
      num = '';
    }
  }
  //we reduce the array adding positive and negative numbers
  return stack.reduce((a,b)=>{
    return a+b
  },0)
};

```