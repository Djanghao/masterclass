# Official Solution

**Link:** [https://leetcode.com/problems/valid-number/solution/](https://leetcode.com/problems/valid-number/solution/)

---

[TOC]

## Solution

--- 

### Overview

You're browsing through LeetCode's problems and notice a problem marked as hard with a 16% acceptance rate, the lowest you've ever seen. What could it be? 4D Dynamic Programming + binary search? An esoteric graph algorithm with a name you can't pronounce?

Actually, it's "determine if a string is a number". What gives? In my opinion, the reason this problem is so "difficult" isn't necessarily because it is **super** hard. I think it's just really hard to approach the problem in a way that covers *all* possible edge cases - something this problem definitely does not lack. Additionally, this is not your typical LeetCode problem, but a problem that is highly representative of a "real world" problem - a seemingly simple task that is frustratingly full of edge cases.

Don't feel discouraged if you're struggling with this problem. When we solve a lot of problems, we discover common patterns, algorithms, and neat tricks that stick with us. We can then apply this knowledge to solve similar problems in the future. The issue with this problem is that there isn't really any other problem on LeetCode that prepares you for it. The key to solving this problem is to carefully read the problem statement, think about edge cases, and keep your code ***simple***.  

> **Interview Tip:** Asked a question like this in an interview? Be sure to communicate thoroughly with your interviewer to make sure you're covering all cases.

</br>

---

### Approach 1: Follow The Rules!

**Intuition**

The problem statement outlines a very specific set of rules. Let's put all possible characters into groups, and then create a set of rules for each group. Then, we can iterate through the input and evaluate if the characters are following the rules or not.

What are all of the possible character groups, and what can we say about them? Reading through the problem statement **very carefully**, we can ascertain:

1. Digits (one of `["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]`)
    - Both **decimal numbers** and **integers** must contain at least one digit.

2. A sign (`"+"` or `"-"`)
    - Sign characters are optional for both **decimal numbers** and **integers**, but if one is present, it will always be the first character. Note, this means that a sign character can also appear immediately after an exponent.

3. An exponent (`"e"` or `"E"`)
    - Exponents are also optional, but if the string contains one then it must be after a **decimal number** or an **integer**.
    - An **integer** must follow the exponent.

4. A dot (`"."`)
    - A **decimal number** should only contain one dot. **Integers** cannot contain dots.

5. Anything else
    - There will never be anything else in a *valid number*.

From these facts, we can logically determine a set of rules to follow in our algorithm.

**Rules**

1. Digits
    - First of all, there must always be at least one digit in the input for it to form a valid number. Let's use a variable `seenDigit` to indicate whether we have seen a digit yet.

2. Signs
    - If a sign is present, it must be the first character in a **decimal number** or **integer**. In a valid number, there are two possible locations for these signs - at the front of the number, or right after an exponent (`"e"` or `"E"`) e.g., `-63e+7`. Therefore, if we see a sign, and it is not the first character of the input, and does not come immediately after an exponent (`"e"` or `"E"`), then we know the number is not valid.

3. Exponents (`"e"` or `"E"`)
    - There cannot be more than one exponent in a *valid number*, so we will use a variable `seenExponent` to indicate whether we have already seen an exponent.
    - An exponent must appear after a **decimal number** or an **integer**. This means if we see an exponent, we must have already seen a digit.

4. Dots
    - There cannot be more than one dot in a *valid number*, since only **integers** are allowed after an exponent, so there cannot be more than one **decimal number**. We will use a variable `seenDot` to indicate whether we have seen a dot.
    - If we see a dot appear after an exponent, the number is not valid, because **integers** cannot have dots.

5. Anything else
    - Seeing anything else instantly invalidates the input.

**Algorithm**

Now that we have laid out the rules, let's iterate over the input. For each character, determine what group it belongs to, and verify that it follows the rules.

1. Declare 3 variables `seenDigit`, `seenExponent`, and `seenDot`. Set all of them to `false`.

2. Iterate over the input.

3. If the character is a digit, set `seenDigit = true`.

4. If the character is a sign, check if it is either the first character of the input, or if the character before it is an exponent. If not, `return false`.

5. If the character is an exponent, first check if we have already seen an exponent **or** if we have not yet seen a digit. If either is true, then `return false`. Otherwise, set `seenExponent = true`, and `seenDigit = false`. We need to reset `seenDigit` because after an exponent, we must construct a new **integer**.

6. If the character is a dot, first check if we have already seen either a dot or an exponent. If so, `return false`. Otherwise, set `seenDot = true`.

7. If the character is anything else, `return false`.

8. At the end, return `seenDigit`. This is one reason why we have to reset `seenDigit` after seeing an exponent - otherwise an input like `"21e"` would be incorrectly judged as valid.

**Implementation**

<iframe src="https://leetcode.com/playground/n7s7rL5M/shared" frameBorder="0" width="100%" height="500" name="n7s7rL5M"></iframe>

*"One day I will find the right words, and they will be simple."* - Jack Kerouac

**Complexity Analysis**

* Time complexity: $$O(N)$$, where $$N$$ is the length of `s`.

   We simply iterate over the input once. The number of operations we perform for each character in the input is _independent_ of the length of the string, and therefore only requires constant time. This results in $$N \cdot O(1) = O(N)$$.

* Space complexity: $$O(1)$$.

    Regardless of the input size, we only store 3 variables, `seenDigit`, `seenExponent`, and `seenDot`.
    
<br/>

---

### Approach 2: Deterministic Finite Automaton (DFA)

**Intuition**

Let's now view Approach 1 from a different angle. There were 3 boolean variables, and they can be either `true` or `false`. Each time we read a character in the string, we either stayed in the current state (boolean variables stayed the same) or we **transitioned** into a new state (boolean variables changed).
What we've described above is a lot like a  [deterministic finite automaton](https://en.wikipedia.org/wiki/Deterministic_finite_automaton). A DFA is a finite number of states with transition rules to move between them. However, keep in mind that the state depends on more than just those 3 boolean variables; it also depends on whether we have encountered a `+` or `-`. We will discuss this in more detail later.

> **Never heard of a DFA before?** 
>
> DFA's are useful for solving many problems, including advanced dynamic programming problems such as [1411. Number of Ways to Paint N X 3 Grid](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/). So if you're not yet familiar with them, we recommend that you read up on them. It will be worth it!
>
> DFAs share a lot of similarities with the trie data structure. Recall that a [trie](https://leetcode.com/explore/learn/card/trie/) is used to represent a dictionary of words, in a space-efficient manner.  To check whether or not a word is in the dictionary, we would simultaneously traverse through the word and the trie. If we end at a node that is marked as a valid end-point, then we would return true. Otherwise, if we get "stuck", or end at a node that is not an end-point, we would return false. It's the same for a DFA: we start at a "root" node, and then check each character one by one, checking whether or not there is a valid transition we can make. 
>
> There are a few key differences between DFA's and tries, so keep these in mind while reading through the remainder of this section. 
>
> 1. While a trie can only represent a _finite_ number of strings (the given dictionary), a DFA can represent an _infinite_ number of different strings. 
> 2. While a trie can only move down the implicit tree, a DFA can essentially "loopback" to a higher level, or stay on the same level, or even the same node.
> 3. A trie is a type of tree, and a DFA is a type of directed graph.
>
> Other than that, you can lean on your existing knowledge of tries to wrap your head around this new data structure.

**Algorithm**

The first step is to design our DFA. Picture the DFA as a directed graph, where each node is a state, and each edge is a transition labeled with a character group (digit, exponent, sign, or dot). There are two key steps to designing it.
1. Identify all valid combinations that the aforementioned boolean variables can be in. Each combination is a **state**. Draw a circle for each state, and label what it means.
2. For each **state**, consider what a character from each group would mean in the context of that state. Each group will either cause a **transition** into another state, or it will signify that the string is invalid. For each valid transition, draw a directed arrow between the two states and write the group next to the arrow.
> **Try this on your own before reading any further!** Take a few minutes and try to design the DFA. Keep in mind that a state can point to itself. For example, with the input `"12345"`, if we were to use the first approach, after the first character, none of the boolean variables change, so the state should not change. Therefore, the node should have an edge that points to itself, labeled by "digit". Another hint: the start node should have 3 outgoing edges labeled "digit", "sign", and "dot".

<br>

<img src="../Figures/65/dfa.png" width="960">

<br><br>

With our constructed DFA, our algorithm will be:

1. Initialize the DFA as an array of hash tables. Each hash table's keys will be a character group, and the values will be the state it should transition to. We can use the indexes of the array to handle state transitions. Set the `currentState = 0`.

2. Iterate through the input. For each character, first determine what group it belongs to. Then, check if that group exists in the current state's hash table. If it does, transition to the next state. Otherwise, return `false`.

3. At the end, check if we are currently in a valid end state: 1, 4, or 7.

If you're having trouble with your implementation, try to go through your DFA with a complicated case such as `-123.456E+789`. Follow along with your designed DFA, and if there is a bug, check which edge case went wrong and adjust the graph accordingly. Once your DFA is correctly designed, the coding part will be less challenging.

**Implementation**

<iframe src="https://leetcode.com/playground/fN7fujuU/shared" frameBorder="0" width="100%" height="500" name="fN7fujuU"></iframe>


**Complexity Analysis**

* Time complexity: $$O(N)$$, where $$N$$ is the length of `s`.

   We simply iterate through the input once. The number of operations we perform for each character in the input is _independent_ of the length of the string, and therefore each operation requires constant time. So we get $$N \cdot O(1) = O(N)$$.

* Space complexity: $$O(1)$$.

    We will construct the same DFA regardless of the input size.
    
<br/>

---