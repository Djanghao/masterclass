# [2618. Check if Object Instance of Class](https://leetcode.com/problems/check-if-object-instance-of-class/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 290 | 111 |



**Companies:** `microsoft`, `google`, `amazon`

## Description

Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be `undefined`.

 

**Example 1:**

```

Input: func = () =&gt; checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

```

**Example 2:**

```

Input: func = () =&gt; { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstanceOf(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
```

**Example 3:**

```

Input: func = () =&gt; checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.

```

**Example 4:**

```

Input: func = () =&gt; checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the &quot;instanceof&quot; keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example &quot;toFixed()&quot;.

```

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-object-instance-of-class/) | [Solutions](https://leetcode.com/problems/check-if-object-instance-of-class/)
