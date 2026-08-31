# Official Solution

**Link:** [https://leetcode.com/problems/string-transforms-into-another-string/solution/](https://leetcode.com/problems/string-transforms-into-another-string/solution/)

---

[TOC]

## Solution

--- 
### Approach 1: Greedy + Hashing

**Intuition**

We want to convert the string `str1` to `str2` with the help of some conversions. We can convert all occurrences of a character in `str1` to any other lowercase English character in a single conversion. Both strings `str1` and `str2` contain only lowercase English letters. 

Let's walk through some examples to better understand the problem statement and the solution.

We will cover all of the scenarios that may arise and discuss for which scenarios a valid transformation exists. We can then use the findings from these examples to create rules that will help us determine if `str1` can be transformed into `str2` for any possible combination of `str1` and `str2`.

* *Example 1: One to One Mapping*

  In the first example, let's take two simple strings both have different characters, and each character from `str1` is mapped to another character in `str2`.

  ![fig](../Figures/1153/1153A.png)
  
  In the above example, with the help of four conversions (`a` to `p`, `b` to `q`, `c` to `r` and `d` to `s`) we are able to convert `str1` ("abcd") to `str2` ("pqrs"). Hence, the answer is true.
    
* *Example 2: One to Many Mapping*

  What if the characters in `str1` are not different and one of the same characters in `str1` is mapped to another character in `str2`.
  
  ![fig](../Figures/1153/1153B.png)
  
  In the above example, we have two possible ways to convert character `c` - either into `r` or `s`. If we follow the first conversion option, i.e., `c` to `r`, meaning all `c`s will become `r`s; thus, we can no longer convert `c` to `s`. 

  Similarly, if we operate the second conversion (`c` to `s`), we no longer can convert `c` to `r`. Thus, these two conversions cannot take place simultaneously. Hence, the answer is false. 

  From this example, we understand that the conversion is impossible if a character in string `str1` is mapped to two or more characters in `str2`.

* *Example 3: Linked List*
  
  The following example is slightly different as we get to deal with overlapping mappings.

  ![fig](../Figures/1153/1153C.png)
  
  In the above example, we have five possible conversion mappings. The mappings form a linked list with every connection denoting a conversion. However, as shown above, we cannot convert `str1` to `str2` if we convert from left to right in the linked list. The reason is, every time we do a conversion, the resultant letter gets converted to another character as per the subsequent conversion mapping. Therefore, we must convert each character in `str1` to a character that a subsequent conversion won't eventually use.

  From this example, we can conclude, if the conversion mappings form a linked list, we can convert the string `str1` to `str2` by making the conversions in the reverse order of the linked list.

* *Example 4: Cyclic Linked List*

  The LinkedList in the previous example could be circular as well. The following example demonstrates this scenario.

  ![fig](../Figures/1153/1153D.png)
  
  In the above example, the three conversion mappings (`a` to `c`, `c` to `b` and `b` to `a`) form a cyclic linked list which prevents us from being able to convert `str1` to `str2` regardless of the order of doing the conversions (from right to left, or left to right). The reason is that there is no such character that is not on the left-hand side of any conversion mapping, which violates the conclusion we have from example 3. So, for example, when we convert `b` to `a` we convert all occurrences of `b` in `str1` to `a`, but when we convert `a` to `c`, we change all the `a`s in `str1` including the ones previously converted from `b` using the first conversion. So we end up mapping `b` to `c` instead of `b` to `a`.
  
  ![fig](../Figures/1153/1153E.png)
  
  To tackle this we introduced a new character `z` and instead of directly converting `b` to `a` we first convert `b` to `z` and then `z` to `a`. Now, this helps us to prevent `b` from converting to `c` as we will convert `b` to `z` and then follow the conversions from right to left. In the end, we will convert `z` to `a`.

  We learned from the above example that whenever the conversion mappings make a cyclic linked list, we must have a temporary character to break the loop. The temporary character should not be present in the string `str1`; otherwise, the other instances of that character in the string `str1` will also change.

* *Example 5: Multiple Cyclic Linked Lists*
  
  ![fig](../Figures/1153/1153F.png)
  
  In the above example, there are two linked list cycles; one includes the conversion mappings (`a` to `c`, `c` to `b` and `b` to `a`), and the other includes (`d` to `e`, `e` to `f` and `f` to `d`). Notice that we can use a **single** temporary character, `z`, to break the loop for both the cycles.

  This example demonstrates that we only need **one** temporary character to break the loops for all the cycles regardless of the number of cycles. Because each loop does not contain any of the same characters as another loop, we can transform the loops one at a time, and hence we can use the same dummy character for all the cycles.

* *Example 6: Cyclic Linked List with $$26$$ Letters*
  
  ![fig](../Figures/1153/1153G.png)
  
  In the diagram above, the conversion mappings form a cyclic linked list again. In the previous example, we discovered that we can break the loop by introducing a temporary character. But there's a problem. The string `str1` contains all $$26$$ lowercase English letters. So there are no temporary characters for us to choose from. Hence, it is impossible to convert `str1` to `str2`.

  From the above example, it might be tempting to say that it's impossible to convert `str1` to `str2` if `str1` contains every lowercase English letter. But it's not true. So let's go through one last example to get a different perspective about such scenarios.

* *Example 7: Linked List with $$26$$ Letters and One Loop*
  
  ![fig](../Figures/1153/1153H.png)
  
  In the above example, `str1` has $$26$$ lowercase English letters. But, we can convert it to `str2`. The reason is that the string `str2` has $$25$$ unique letters, implying that two characters from string `str1` map to the same character (`y` and `z` from `str1` map to `z` in `str2`). So, we can follow a greedy approach and convert `y` to `z` or `z` to `y`. The idea is to make these two characters (`y` and `z`) the same since, in the end, both will be converted to `z`.

  From the above example, it is evident that even if the string `str1` has $$26$$ unique characters, it is still possible to convert `str1` to `str2` as long as `str2` has less than $$26$$ characters. Because in that case, there will be multiple characters in `str1` mapped to the same character in `str2`. Hence we can convert all these letters to a single letter, and then there will be less than $$26$$ unique characters in `str1`.
  
  Thus, if `str1` has $$26$$ unique characters and `str2` does not, there will always be a way to transform `str1` into `str2`.

**Conclusion**

We can conclude from the above examples that to be able to convert `str1` to `str2`, the following conditions must be satisfied:

1. No character in `str1` is mapped to multiple characters in `str2`.
2. If the number of unique characters in `str1` is $$26$$, then either the number of unique letters in `str2` should be strictly less than $$26$$ or `str1` equals `str2`.

> **Note:** If the first condition is satisfied, we don't need to check the number of unique characters in `str1` (as mentioned in the 2nd point). Suppose the number of unique characters in `str1` is `|str1|` and that in `str2` is `|str2|` then it can be proved that `|str1| >= |str2|` is satisfied if there is no one to more mapping from `str1` to `str2`. Because if `|str1| < |str2|` (`length(str1) = length(str2)`) then at least one of the `str1` characters is mapped to two or more characters in `str2`.

Therefore, we can revise the required conditions as follows:

1. No character in `str1` is mapped to multiple characters in `str2`.
2. The number of unique letters in `str2` should be strictly less than $$26$$ unless `str1` equals `str2`.

**Algorithm**

1. Iterate over string `str1`. 
2. For each character:
   - If the current character does not exist in the mapping, then store this mapping in `conversionMappings` and also store the corresponding character in `str2` in a HashSet `uniqueCharactersInStr2`.
   - If the current character exists in the mapping and it is mapped to a different character than the current corresponding character in `str2`, then we can return false.
3. After iterating over all of the characters, if the HashSet `uniqueCharactersInStr2` contains $$26$$ entries, then return false, otherwise return true.

**Implementation**


<iframe src="https://leetcode.com/playground/adqt2TJH/shared" frameBorder="0" width="100%" height="500" name="adqt2TJH"></iframe>


**Complexity Analysis**

Here $$N$$ is the length of string `str1` or `str2` and $$K$$ is the maximum number of distinct characters in `str1` or `str2`.

* Time complexity: $$O(N)$$
  
  We iterate over string `str1`. Then, we search or insert a key in a map that is $$O(1)$$ for each character. Also, adding character to HashSet takes $$O(1)$$. Hence the time complexity is $$O(N)$$.

* Space complexity: $$O(K)$$

  The maximum possible number of mappings stored in the map is $$K$$. Additionally, HashSet will contain at most $$K$$ characters. Since the maximum value of $$K$$ is fixed at $$26$$, we could consider the space complexity to be constant for this problem.
    

<br/>

---