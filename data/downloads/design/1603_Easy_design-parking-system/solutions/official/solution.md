# Official Solution

**Link:** [https://leetcode.com/problems/design-parking-system/solution/](https://leetcode.com/problems/design-parking-system/solution/)

---

[TOC]

## Solution

--- 

### Overview

The problem is to **design** a parking system. 

> A **design** problem is a problem where we have to **implement** a class or a data structure. This class usually has multiple functions that we have to implement. This falls under the category of [**Object Oriented Programming**](https://leetcode.com/tag/oop/)

In this problem, we have to implement the `ParkingSystem` class. It will have the following components:

- `ParkingSystem` constructor. Whenever any user or test case wants to create a new parking system, they will call this constructor. They need to specify the number of parking slots available for each type of car (`small`, `medium`, or `large`). 

    **We** have to write code to store this information in the class. This information will perhaps be used in other functions.

    > Different languages have different ways to implement constructors.   
    > - In Python, we use `__init__` function to implement the constructor. 
    > - In C++ and Java, the name of the constructor is the same as the name of the class.

- `addCar` function. Whenever any user or test case wants to add a car to the parking system, they will call this function. They need to specify the type of the car, `carType` using an integer.
    
    - if they want to add a `big` car, they will pass `1` as the argument.
    - if they want to add a `medium` car, they will pass `2` as the argument.
    - if they want to add a `small` car, they will pass `3` as the argument.
    
    <br/>  

    **We** have to write code to check if there is a parking slot available for the given type of car.
         
    - If there is a parking slot available, we have to add the car to the parking system and return `true`. 
    - Otherwise, we have to return `false`.

<details> <summary> In these problems, users often faces difficulty in understanding the <b>input</b> and <b>output</b> formats. Let's pick one <b>example</b> and understand its <b>input</b> and <b>output</b> structure. If you are not familiar with design problems, it is advisable to expand the section by clicking here.  

<br> 
</summary>   

<p>

<br>

```Input []
["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
[[1, 1, 0], [1], [2], [3], [1]]
```

This input is actually **NOT** an array. The array has been given to describe a **sequence of function calls** by the online judge.

> If readers want to explore more, they can read [Dispatch Table](https://en.wikipedia.org/wiki/Dispatch_table)

In our code, we **won't be able to access the array**. This array only helps in letting us know the function calls that will be made by the online judge.

More particularly, 
- the first array stores the sequence of function calls, and  
- the second array stores the **respective** arguments for each function call.

Thus, the above input can be interpreted as:

- First, the online judge will call the `ParkingSystem` constructor with arguments `1, 1, 0`.

    We were given in the description that `ParkingSystem` requires three arguments, `big`, `medium`, and `small`. These `[1, 1, 0]` are the respective values for these arguments.

    Do we have to return anything from the constructor? No. We just have to store some (or all) of these arguments so that we can use them in other functions if needed. Thus, the first element of the **output** array is `null`.

- Then, the online judge will call the `addCar` function with argument `1`.

    We were given in the description that `addCar` requires one argument, `carType`. This `1` is the value for this argument and represents a `big` car.

    This has to be interpreted as, "Is there a parking slot available for a `big` car?". If yes, then add the car to the parking system and return `true`. Otherwise, return `false`.

    Now, we know that while creating our object, we were given that there is `1` parking slot available for a `big` car. And we know that no car has been added to the parking system yet. Thus, we will return `true` and add the car to the slot available for a `big` car.

    Hence, the second element of the **output** array is `true`.

- Then, the online judge will call the `addCar` function with argument `2`.

    This `2` is the value for this argument and represents a `medium` car.
    
    This has to be interpreted as, "Is there a parking slot available for a `medium` car?". If yes, then add the car to the parking system and return `true`. Otherwise, return `false`.

    Now, we know that while creating our object, we were given that there is `1` parking slot available for a `medium` car. Additionally, we know that no car has been added to the parking system yet. Thus, we will return `true` and add the car to the slot available for a `medium` car.

    Hence, the third element of the **output** array is `true`.

- Then, the online judge will call the `addCar` function with argument `3`.
    
    This `3` is the value for this argument and represents a `small` car.
    
    This has to be interpreted as, "Is there a parking slot available for a `small` car?". If yes, then add the car to the parking system and return `true`. Otherwise, return `false`.

    Now, we know that while creating our object, we were given that there is `0` parking slot available for `small` car. Thus, we cannot add the car to the parking system because no slots are available. Hence, we will return `false`.

    Hence, the fourth element of the **output** array is `false`.

- Lastly, the online judge will call the `addCar` function with argument `1`.
    
    This `1` is the value for this argument and represents a `big` car.
    
    This has to be interpreted as, "Is there a parking slot available for `big` car?". If yes, then add the car to the parking system and return `true`. Otherwise, return `false`.

    Now, we know that while creating our object, we were given that there is `1` parking slot available for `big` car. And we know that one car has already been added to the parking system. Thus, we will return `false` because no slots are available.

    Hence, the fifth element of the **output** array is `false`.

Thus, the **output** array as illustrated in the example is

```Output []
[null, true, true, false, false]
```

It's worth mentioning that we **don't** have to return any array. We just have to make sure that all functions return the correct value. The array is just a representation of the correct output sequence, and need not be explicitly returned.

</p> </details>

$\downarrow_{\text{Section below structure}}$

There are tons of similar [Design Problems](https://leetcode.com/tag/design/) on LeetCode. A few of them are listed below:

- [LRU Cache](https://leetcode.com/problems/lru-cache/)
- [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)
- [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)
- [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
- [Design Browser History](https://leetcode.com/problems/design-browser-history/)
- [Design Linked List](https://leetcode.com/problems/design-linked-list/)

---

### Approach: Array for Parking Slots

#### Intuition

We want to initialize our object given slots for each type of car. 

**What exactly do we need to store in our object?**  
It depends on the desired function of the object. The required function is `addCar` and we should check if there is a parking space for `carType`. If so, then we should add the car to the parking system and return `true`. Otherwise, we should return `false`.

Thus, while creating an object, we *perhaps* need to store the  
- Parking limit for `big` cars
- Parking limit for `medium` cars
- Parking limit for `small` cars

**Do we need anything else in the constructor?**  
We know the limits for each type of car. But we don't know the number of cars parked in the parking system. We need to store this information as well.

Therefore, it may also be necessary to store the following three pieces of information in the object:
- Count of `big` cars parked in the parking system. 
- Count of `medium` cars parked in the parking system. 
- Count of `small` cars parked in the parking system.

All of them will be initialized to `0`.

Initially, **constructor** in pseudo-code will look like this:

```pseudocode []
ParkingSystem(int big, int medium, int small) {

    // Store the parking limit for each type of car
    this.bigLimit = big
    this.mediumLimit = medium
    this.smallLimit = small

    // Store the count of cars parked in the parking system
    this.bigCount = 0
    this.mediumCount = 0
    this.smallCount = 0
}
```

> The `this` keyword is used to access the current object's attributes and methods. Different languages have different ways to access the current object's attributes and methods. For example, in Python, we can use the `self` keyword to access the current object's attributes and methods. 

We are currently storing the count and limits of cars for each type in six variables. However, what if we have hundreds of types of cars? Is it a good idea to have two variables for each type of car?

It turns out that if data represents the same type of thing *(or data is **homogeneous**)*, then we can use an array to store them.

> An [Array](https://leetcode.com/explore/learn/card/fun-with-arrays/) is a data structure that stores a collection of elements. It is a linear data structure, which means that elements are stored sequentially. Each element in an array is identified by an index. Readers can learn more about Array from [Leetcode Explore Card](https://leetcode.com/explore/learn/card/fun-with-arrays/).

Thus, we can club the three variables `bigCount`, `mediumCount`, and `smallCount` into one array `count`. Also, we can club the three variables `bigLimit`, `mediumLimit`, and `smallLimit` into one array `limit`.

Hence, so far, we are planning to use two arrays, `count` and `limit`. Can we brainstorm a way to use only one array?

The condition to check if we can `addCar` or not will be

$\rightsquigarrow$ `count[i] < limit[i]`

$\rightsquigarrow$ `limit[i] > count[i]`

$\rightsquigarrow$ `limit[i] - count[i] > 0`

What exactly does `limit[i] - count[i]` represent? It represents the number of empty slots available for a particular type of car. Hence, we can use this value to store the empty slots for each type of car in one array, `empty`.

Initially, all available slots will be empty. Hence, we can initialize `empty` with the parking limit of each type of car provided as arguments to the **constructor**.

Now, does the order of these variables matter, or **can we gain any advantage if they are stored in one specific order instead of another?**   
For answering this, let's re-read the following portion of the problem statement

> `carType` can be of three kinds: big, medium, or small, which are represented by `1`, `2`, and `3` respectively.

This hints that if we store 

- big cars at index `1`,    
- medium cars at index `2`,   
- and small cars at index `3`, 

then we can directly access the count of cars of a particular type by using `carType` as the index.


**What about index-0, then?** 

> Arrays in most programming languages are 0-indexed. This means that the first element of the array is stored at index `0`.

There are two ways to handle this. 

1. We can allocate an array of size 4, and store the number of empty slots of cars at index `1`, `2`, and `3`. On Index `0`, we can store some dummy value. 
  
    The `carType` here will directly act as an index.

2. We can allocate an array of size 3, and store the number of empty slots of cars at index `0`, `1`, and `2`. 

    The `carType` here will act as an index after subtracting `1` from it.

Readers can choose any of the two ways. We will proceed with the second way.

Thus, now our **constructor** in pseudo-code will look like this

```pseudocode []
ParkingSystem(int big, int medium, int small) {

    // Store the empty slots for each type of car
    this.empty = [big, medium, small]
}
```

Readers can appreciate the compactness obtained by using an array. We have reduced the number of variables from six to one.

> **Interview Tip:** Reading the problem statement multiple times helps to formulate solutions elegantly.

In the `addCar` function, we check if the number of empty slots is greater than `0`. If it is, we add the car and decrement the number of empty slots by `1`. In this case, we return `true`. Otherwise, we return `false`.

```pseudocode []
boolean addCar(int carType) {

    // Depending on carType, decide
    if empty[carType - 1] > 0 {
        empty[carType - 1] -= 1
        return true
    }
    else {
        return false
    }
}
```

Thus using this approach we can solve the problem. Once solved, readers are advised to see codes in other languages and compare how classes and objects are implemented in different languages. Also, it's worth noting that we can also use a Hash map to solve this problem. Readers can try to solve the problem using a Hash map as well.

#### Algorithm

1. In the **constructor**, create one array of size 3. Let's call it `empty`.
    
    `empty` will store the number of empty slots available for each type of car. Index `0` will be used for big cars, index `1` will be used for medium cars, and index `2` will be used for small cars. These limits will be passed as `big`, `medium`, and `small` respectively as parameters to the **constructor**. Initially, all the empty slots will be equal to the parking limit of each type of car.

2. In the **addCar** function, if the number of empty slots for `carType` is greater than `0`, then decrement the number of empty slots by 1 and return `true`. Else, return `false`.

    The `if` condition will be similar to `if empty[carType - 1] > 0`.

<br/>
Here is the visual representation of the above algorithm.   
!?!../Documents/1603/1603_Array.json:1280,720!?!   
<br/>


#### Implementation

<iframe src="https://leetcode.com/playground/6FeuyXke/shared" frameBorder="0" width="100%" height="500" name="6FeuyXke"></iframe>

#### Complexity Analysis

Let $N$ be the number of function calls.

* Time complexity: $O(N)$.
    
    - In the **constructor**, we create one array of constant size, `empty`. Hence, the time complexity will be $O(1)$.

    - In the **addCar** function, we check if the number of empty slots for a particular type of car is greater than `0`. This is done in constant time.
    
    Hence, the overall time complexity will be $O(N)$ since there are $N$ function-calls.
  
* Space complexity: $O(1)$.
    
    - In the **constructor**, we create one array of constant size, `empty`. Hence, the space complexity will be $O(1)$.

    - In the **addCar** function, we do not use any extra space. Hence, the space complexity will be $O(1)$.

    Hence, the overall space complexity will be $O(1)$.
  
---

### Extra

<details><summary> Many Programming Language has some <b>cool functionalities</b> that can be used to solve problems smartly. While this way is often not beginner-friendly, they often compact the code. Sometimes, they are even faster than conventional approaches. A few times they are slower too.
<br/>
<br/>
These functionalities are not always intuitive and are not always easy to understand. But, they are worth learning. They are often labeled as syntactic sugar.
<br/>
<br/>
Readers can click here to go through some of these cool functionalities. </summary>

<p>

The condition to check if we can `addCar` was

```
if empty[carType - 1] > 0
```

We can use the decrement operator `--` to **post**-decrement the value of `empty[carType - 1]` by `1` and check if the value is greater than `0` in a single line. If greater than `0`, return `True`, decrementation already happened. Else, return `False`.

The `if` condition will be similar to what we have to return. Thus we can compact the code.

```java []
public boolean addCar(int carType) {
    return empty[carType - 1]-- > 0;
}
```

This will always decrement the value of `empty[carType - 1]` by `1` and then check if the value is positive. The value will be decremented always, even if the condition is `false`. Thus, `empty[carType - 1]` may be negative which is absurd logically. Although, the code will still work fine.

Moreover, in the **constraints**, it is mentioned that

> At most `1000` calls will be made to `addCar`

If we call `addCar` 1000 times, then `empty[carType - 1]` will be decremented 1000 times. 
  
  However, if there were more calls than the magnitude of `Integer.MIN_VALUE`, then the value of `empty[carType - 1]` from negative may **overflow** to positive. Thus, the code will not work as expected.

A minute change in the condition can solve this problem.

```java []
public boolean addCar(int carType) {
    return empty[carType - 1] > 0 && --empty[carType - 1] >= 0;
}
```

This uses the **short-circuiting** property of the `&&` operator. If the first condition is `false`, then the second condition will not be evaluated. Thus, the value of `empty[carType - 1]` will not be decremented.

Another minute optimization is that we can use `short` instead of `int` for an `empty` array. This will reduce the space complexity. This we are doing because the parking limit is less than `1000`. Thus, we can use `short` instead of `int`. However, if the parking limit was `1000000`, then we would have to use `int` instead of `short`.

Here is the new code.

```java []
class ParkingSystem {

    short[] empty;

    public ParkingSystem(int big, int medium, int small) {
        this.empty = new short[]{(short) big, (short) medium, (short) small};
    }

    public boolean addCar(int carType) {
        return empty[carType - 1] > 0 && --empty[carType - 1] >= 0;
    }
}
```

Programmers often use the `false` value of `0` to check if a variable is `false`. 

Thus, this line in Python3

```python3 []
if self.empty[carType - 1] > 0:
```

can be written as

```python3 []
if self.empty[carType - 1]:
```

All these small things are often impressive. Readers can gain these skills by solving more problems.


</p>
</details>

---