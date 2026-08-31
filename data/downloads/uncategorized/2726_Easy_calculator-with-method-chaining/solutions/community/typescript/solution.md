# Simple TS / JS implementation

**Author:** FLlGHT
**Votes:** 2
**Link:** [https://leetcode.com/problems/calculator-with-method-chaining/solutions/3607264/](https://leetcode.com/problems/calculator-with-method-chaining/solutions/3607264/)

---

## TypeScript
```
class Calculator {
  private result: number

  constructor(value : number) {
      this.result = value
  }
    
  add(value : number) : Calculator {
    this.result += value
    return this
  }
    
  subtract(value : number) : Calculator {
    this.result -= value
    return this
  }
    
  multiply(value : number) : Calculator {
    this.result *= value
    return this
  }

  divide(value : number) : Calculator {
    if (value == 0)
      throw new Error("Division by zero is not allowed");
      
    this.result /= value
    return this
  }
    
  power(value : number) : Calculator {
    this.result = Math.pow(this.result, value)
    return this
  }

  getResult() : number {
    return this.result
  }
}
```

## JavaScript
```
class Calculator {
  
  /** 
   * @param {number} value
   */
  constructor(value) {
    this.result = value
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
    this.result += value
    return this
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
    this.result -= value
    return this
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {
    this.result *= value
    return this
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value == 0)
      throw new Error("Division by zero is not allowed");
      
    this.result /= value
    return this
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result = Math.pow(this.result, value)
    return this
  }
    
  /** 
   * @return {number}
   */
  getResult() {
    return this.result
  }
}
```