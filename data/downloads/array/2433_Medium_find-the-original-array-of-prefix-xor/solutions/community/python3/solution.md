# 【Video】Give me 5 minutes - How we think about a solution - Python, JavaScript, Java, C++

**Author:** niits
**Votes:** 52
**Link:** [https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/4228796/](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/4228796/)

---

# Intuition
This is similar to prefix sum

---

# Solution Video

https://youtu.be/ck4dJURKAlA

\u25A0 Timeline of the video
`0:05` Solution code with build-in function
`0:06` quick recap of XOR calculation
`0:28` Demonstrate how to solve the question
`1:37` How you keep the original previous number
`2:29` Continue to demonstrate how to solve the question
`3:59` Coding
`4:43` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 2,898
My initial goal is 10,000
Thank you for your support!

---

# Approach

## How we think about a solution

To be honest, there is no complicated logic this time. This is similar to prefix sum, so we can calculate `XOR` with the input numbers one by one.

```
Input: pref = [5,2,0,3,1]
```

##### Quick recap of XOR caluclation
---
If one of numbers is 1 and the other is 0 \u2192 1
If both numbers are 1 \u2192 0
If both numbers are 0 \u2192 0

---



First of all, we calculate `5`, but there is no previous number, so it is considered as `0`

```
101 (= 5)
000 (= 0)
---
101 (= 5)

```
Actually, we can start from `index 1` in real solution code, becuase the number at index 0 never change.

My solution starts from here. In the solution code, I update input array `pref` itself.
```
index = 1

010 (= 2)
101 (= 5)
---
111 (= 7)

pref = [5, 7, 0, 3, 1]
```
But problem is we need `2` for the next calculation, because `2` is the previous original number of intput array. How do you get `2`.

It's simple.
```
2 ^ 5 = 7 
```
This is similar to 
```
80 + 20 = 100
\u2193
80 = 100 - 20
```
```
2 ^ 5 = 7 
\u2193
2 = 7 ^ 5

111 (= 7)
101 (= 5)
---
010 (= 2)

```
---

\u2B50\uFE0F Points

Calculate a previous number we need for the next calculation before we move the next iteration.
```
(next)prev = pref[i] ^ (current)prev

pref[i] is a current result
```
---

We use `prev` for the next calculation.
```
prev = 2
pref = [5, 7, 0, 3, 1]
```
```
index = 2

000 (= 0 from input array)
010 (= 2 from prev)
---
010 (= 2)

pref = [5, 7, 2, 3, 1]
prev = 0 (= 2 ^ 2) 
```
```
index = 3

011 (= 3 from input array)
000 (= 0 from prev)
---
011 (= 3)

pref = [5, 7, 2, 3, 1]
prev = 3 (= 0 ^ 3) 
```

```
index = 4

001 (= 1 from input array)
011 (= 3 from prev)
---
010 (= 2)

pref = [5, 7, 2, 3, 2]
prev = 1 (= 3 ^ 2) 
```
```
pref: [5,7,2,3,2] (Output)
```

---



### Algorithm Overview:
The algorithm takes an input list `pref` of integers and transforms it in-place.

### Detailed Explanation:
1. Initialize a variable `prev` with the value of the first element in the `pref` list.
2. Start a loop from the second element (index 1) to the last element of the `pref` list.
3. Inside the loop, perform a bitwise XOR operation (`^`) between the current element at index `i` and the `prev` value. This replaces the current element with the XOR result.
4. Update the `prev` value by performing a bitwise XOR operation between the previous `prev` value and the updated current element.
5. Repeat steps 3-4 for all elements in the `pref` list.
6. Return the modified `pref` list. The input list has been transformed in-place, with each element being XORed with the cumulative XOR of all previous elements.


---



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
If we can update input array. My solution code updates it directly. But if we can't, space complexity should be $$O(n)$$ for result array. You need to ask interviewers about it in real interviews.


```python []
class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        
        prev = pref[0]

        for i in range(1, len(pref)):
            pref[i] ^= prev
            prev ^= pref[i]
        
        return pref
```
```javascript []
/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let prev = pref[0];
    
    for (let i = 1; i < pref.length; i++) {
        pref[i] ^= prev;
        prev ^= pref[i];
    }
    
    return pref;    
};
```
```java []
class Solution {
    public int[] findArray(int[] pref) {
        int prev = pref[0];
        
        for (int i = 1; i < pref.length; i++) {
            pref[i] ^= prev;
            prev ^= pref[i];
        }
        
        return pref;        
    }
}
```
```C++ []
class Solution {
public:
    vector<int> findArray(vector<int>& pref) {
        int prev = pref[0];
        
        for (int i = 1; i < pref.size(); i++) {
            pref[i] ^= prev;
            prev ^= pref[i];
        }
        
        return pref;        
    }
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/4233557/video-give-me-5-minutes-how-we-think-about-a-solution-why-do-we-use-inorder-traversal/

video
https://youtu.be/0i1Ze62pTuU

\u25A0 Timeline of the video
`0:04` Which traversal do you use for this question?
`0:34` Properties of a Binary Search Tree
`1:31` Key point of my solution code
`3:09` How to write Inorder, Preorder, Postorder
`4:08` Coding
`7:13` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 2,908
My initial goal is 10,000
Thank you for your support!


### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/4225041/video-give-me-10-minutes-using-heap-without-build-in-function-such-as-sort-or-bit-count/

video
https://youtu.be/oqV8Ai0_UWA

\u25A0 Timeline
`0:05` Solution code with build-in function
`0:26` Two difficulties to solve the question
`0:41` How do you count 1 bits?
`1:05` Understanding to count 1 bits with an example
`3:02` How do you keep numbers in ascending order when multiple numbers have the same number of 1 bits?
`5:29` Coding
`7:54` Time Complexity and Space Complexity