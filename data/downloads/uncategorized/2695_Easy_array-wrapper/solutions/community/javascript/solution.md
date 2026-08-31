# ✔️2695. Array Wrapper()✔️Level up🚀your JS skills with these intuitive implementations󠁓🚀Day 28

**Author:** Vikas-Pathak-123
**Votes:** 105
**Link:** [https://leetcode.com/problems/array-wrapper/solutions/3584650/](https://leetcode.com/problems/array-wrapper/solutions/3584650/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
> The `ArrayWrapper` class is designed to encapsulate an array of integers and provide two features: computing the sum of all elements when two instances are added together, and returning a string representation of the array surrounded by brackets.

# Approach
<!-- Describe your approach to solving the problem. -->
>1. The `ArrayWrapper` class is defined as a function constructor that takes an array of numbers (`nums`) as an argument and assigns it to the instance property `this.nums`.

>2. The `valueOf` method is defined on the prototype of the `ArrayWrapper` class. This method is automatically called when the instance is used in a context where a primitive value is expected, such as addition with the `+` operator. It uses the `reduce` method to calculate the sum of all the numbers in the `this.nums` array.

>3. The `toString` method is also defined on the prototype of the `ArrayWrapper` class. This method is automatically called when the instance is converted to a string, such as when using `String(obj)` or implicitly during string concatenation. It uses the `join` method to convert the `this.nums` array into a comma-separated string, and surrounds it with square brackets to represent an array.
# Code
```JS []
/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
        this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((sum, num) => sum + num, 0);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
```
## Here are alternative implementations of the `ArrayWrapper` class:
## Implementation 1: 
>Using the spread operator and Array.prototype.reduce
```JS []
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return [...this.nums].reduce((sum, num) => sum + num, 0);
  }

  toString() {
    return `[${this.nums.join(',')}]`;
  }
}
```
## Implementation 2:
> Using a for loop
```JS []
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    let sum = 0;
    for (let i = 0; i < this.nums.length; i++) {
      sum += this.nums[i];
    }
    return sum;
  }

  toString() {
    let str = '[';
    for (let i = 0; i < this.nums.length; i++) {
      str += this.nums[i];
      if (i !== this.nums.length - 1) {
        str += ',';
      }
    }
    str += ']';
    return str;
  }
}

```
## Implementation 3:
>Using Array.prototype.reduce and template literals
```JS []
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((sum, num) => sum + num, 0);
  }

  toString() {
    return `[${this.nums.map(num => String(num)).join(',')}]`;
  }
}

```
## Implementation 4:
>Using Array.prototype.reduceRight
```JS []
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduceRight((sum, num) => sum + num, 0);
  }

  toString() {
    return `[${this.nums.reduceRight((str, num, index) => {
      if (index === this.nums.length - 1) {
        return String(num) + str;
      } else {
        return String(num) + ',' + str;
      }
    }, '')}]`;
  }
}

```

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
>The `valueOf` method computes the sum of the elements in the array, which requires iterating over all elements once. Thus, its time complexity is O(n), where n is the number of elements in the array.

>The `toString` method uses the `join` function, which concatenates allelements of the array into a string. Its time complexity is also O(n).


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
>The space complexity of the `ArrayWrapper` class is O(1) as it only stores the array as an instance variable and does not use any additional space that grows with the input size.



# Important topic to Learn 

| Sr No. | Topic | Sr No. | Topic |
|-----|-----|-----|-----|
1.|Arrays , Array methods() * |2.|Function programming *|
3.|Higher-order function|4.|Memoization|
5.|Currying|6.|Promises, async/await|
7.|Compare Objects|8.|Prototypes, inheritance|

>[ Note:- * marked is related to today's problem ]


<img src="https://media.giphy.com/media/Xd6WrGsyh1su7X0ZGF/giphy.gif" width="40">

# Please Comment\uD83D\uDC4D\uD83D\uDC4D 
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```