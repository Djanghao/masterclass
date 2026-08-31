# 【Video】3 ways to solve this question - sliding window, set, hashing and the last position

**Author:** niits
**Votes:** 942
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/5111376/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/5111376/)

---

# Solution Video

https://youtu.be/n4zCTMh03_M

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,982
Thank you for your support!

---

# Approach
We have two conditions to solve this question. The longest string should be

---
- Substring
- Without repeating characters
---

You just need to check that there are no repeated characters within a consecutive string of characters. To achieve this, you need to keep track of the characters currently forming the string. For this purpose, I considered three algorithms: one combining a sliding window and a set, and the second using a sliding window and a hash-based algorithm. The thrid is that the last position where each character was seen.

I'll explain them one by one.

# Solution 1 - Sliding Window & Set

First of all, we create
```
left = 0 
max_length = 0 (returned value)
char_set = set() 
```
`left` is pointer of sliding window.
`max_length` is a value we should return.
`char_set` is to keep current characters forming the longest string with the two conditions above.

We will iterate through all characters one by one and create `right pointer` of sliding window with for loop.
```
for right in range(len(s)):
```
Let's begin!
```
Input: s = "abcabcbb"
```
```
"abcabcbb"
 r
 l

l is left of sliding window
r is right of sliding window
```
We found `a`. Every time we check `char_set` if we have the same character or not. In this case, we don't have `a` in `char_set`, so add `a` to `char_set`.
```
char_set = {a}
```
After that, we check `max length`.
```
max_length = 0
current length = right - left + 1
```
##### Why +1?

That's because current length of string is `1` which is only `a`, so if we don't add `1`, we will calculate `0(right) - 0(left) = 0` which is wrong answer.

This happens because index number usually starts from `0` but actual count we do in daily life starts `1`. That's why we need to kind of convert an index number to a real number by adding `+1`.

Let's go back to the main point.
```
max_length = 1
```
Next, only right pointer move next. I'll speed up.
```
"abcabcbb"
 lr

Do we have "b"? \u2192 No
char_set = {a, b}

max_length = 2 (right(1) - left(0) + 1)
```
Next, only right pointer move next.
```
"abcabcbb"
 l r

Do we have "c"? \u2192 No
char_set = {a,b,c}

max_length = 3 (right(2) - left(0) + 1)
```
Next, only right pointer move next.
```
"abcabcbb"
 l  r

Do we have "a"? \u2192 Yes
```
In this case, we have duplicate number `a`, so we can't continue to expand the string. That's why it's time to move `left` to the next. And we have important point.

---

\u2B50\uFE0F Points

When we move `left` to `index 1`, `a` at `index 0` will be out of bounds, so we should remove `a` from `char_set`, so that we can keep unique characters forming the current string.

In this case, we use `while` loop, I'll explain why later.

---
```
"abcabcbb"
 l  r

- Do we have "a"? \u2192 Yes, remove "a" in char_set
char_set = {b,c}

- move left to the next
"abcabcbb"
  l r

- There is no "a" in char_set, we stop while looping.
- And add crreunt "a" to char_set
char_set = {b,c,a}

max_length = 3 (right(3) - left(1) + 1)
```
Next, only right pointer move next.
```
"abcabcbb"
  l  r

- Do we have "b"? \u2192 Yes, remove "b" in char_set
char_set = {c,a}

- move left to the next
"abcabcbb"
   l r

- There is no "b" in char_set, we stop while looping.
- And add crreunt "b" to char_set
char_set = {c,a,b}

max_length = 3 (right(4) - left(2) + 1)
```
Next, only right pointer move next.
```
"abcabcbb"
   l  r

- Do we have "c"? \u2192 Yes, remove "c" in char_set
char_set = {a,b}

- move left to the next
"abcabcbb"
    l r

- There is no "c" in char_set, we stop while looping.
- And add crreunt "c" to char_set
char_set = {a,b,c}

max_length = 3 (right(5) - left(3) + 1)
```
Next, only right pointer move next.
```
"abcabcbb"
    l  r

- Do we have "b"? \u2192 Yes, remove "a" in char_set
```
Wait! Why do we have to remove `a` instead of `b`? That's because `b` is now duplicate character between `left` and `right`, so we have to remove chracters until we find `b` with `left` pointer.

---

\u2B50\uFE0F Points
Let's look at the string deeply.
```
"abcb"
 l  r
```
If we keep `a` in the string, we have to also keep the first `b` because `a` is outside of the first `b` in the string. If we want to remove the first `b`, we must remove `a` before we remove the first `b`. **This is substring.**

In the end,

```
"abcb"
   lr
```
Let's look at the process.
```
"abcabcbb"
    l  r

- Do we have "b"? \u2192 Yes, remove "a" in char_set
char_set = {b,c}

- Move left to the next
"abcabcbb"
     l r

- Do we have "b"? \u2192 Yes, remove "b" in char_set
char_set = {c}

- Move left to the next
"abcabcbb"
      lr

- Do we have "b"? \u2192 No, now we stop while loop

- Add current "b" to char_set
- char_set = {c,b}

max_length = 3 > (right(6) - left(5) + 1)

```

I hope now you understand why we use while loop when remove charcters. **There is an case where we remove multiple characters.**

---

I stop rest of explanation because we will repeat the same process.

```
return 3
```
As you can see, we keep `char_set` the same as the string between left and right when we add a current character to `char_set`. That's why we can check if current character is duplicate or not.

Easy\uD83D\uDE06!
Let's see solution codes and step by step algorithm!

---

https://youtu.be/5_lYYnSsOGU


---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$

Constraints say "s consists of English letters, digits, symbols and spaces". I think we have fixed max size of characters consisting of the input string.

```python []
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = max_length = 0
        char_set = set()
        
        for right in range(len(s)):
            while s[right] in char_set:
                char_set.remove(s[left])
                left += 1

            char_set.add(s[right])
            max_length = max(max_length, right - left + 1)
        
        return max_length
```
```javascript []
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;    
};
```
```java []
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int left = 0;
        int maxLength = 0;
        HashSet<Character> charSet = new HashSet<>();

        for (int right = 0; right < s.length(); right++) {
            while (charSet.contains(s.charAt(right))) {
                charSet.remove(s.charAt(left));
                left++;
            }

            charSet.add(s.charAt(right));
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;       
    }
}
```
```C++ []
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int left = 0;
        int maxLength = 0;
        unordered_set<char> charSet;

        for (int right = 0; right < s.length(); right++) {
            while (charSet.find(s[right]) != charSet.end()) {
                charSet.erase(s[left]);
                left++;
            }

            charSet.insert(s[right]);
            maxLength = max(maxLength, right - left + 1);
        }

        return maxLength;        
    }
};
```
## Step by step algorithm

1. **Initialization:**

```python
left = max_length = 0
char_set = set()
```

- `left`: Marks the start of the current substring.
- `max_length`: Tracks the length of the longest substring without repeating characters. Initialized to 0.
- `char_set`: Keeps track of unique characters encountered so far, initialized as an empty set.

2. **Iterating over the string characters:**

```python
for right in range(len(s)):
```

- `right`: Represents the end of the current substring. It moves from 0 to the end of the string.

3. **Checking for repeating characters:**

```python
while s[right] in char_set:
    char_set.remove(s[left])
    left += 1
```

- This loop executes when the character at the 'right' index is already in the `char_set`, meaning we have encountered a repeating character.
- It removes characters from the `char_set` and adjusts the 'left' pointer until the current character at 'right' is no longer in the `char_set`. This effectively removes the characters from the substring that are causing the repetition.

4. **Updating `char_set` and `max_length`:**

```python
char_set.add(s[right])
max_length = max(max_length, right - left + 1)
```

- Adds the current character to `char_set` since it's unique now.
- Updates `max_length` by taking the maximum between the current `max_length` and the length of the current substring (`right - left + 1`).

5. **Returning `max_length`:**

```python
return max_length
```

- After iterating through the entire string, the function returns the maximum length of the substring without repeating characters.

# Solution 2 - Sliding Window and Hashing

In solution 2, we use almost the same idea as solution 1 with Slinding Window and Hashing. In Python, we use `HashMap`.

In `HashMap`, we keep each character as a key and frequency of the characters as a value.

Every time we find a character, add `1 frequency` to `HashMap`. Since this question requires us to find the longest substring without repeating characters, so if we have more than `2 frequency` of the current character, we add `-1` to `HashMap` until we have `1 frequency` of the current character and move left pointer to the next at the same time.

After that, this is the same as solution 1. Just compare `max length`

```
max_length = max(max_length, right - left + 1)
```

Easy\uD83D\uDE04\uFF01
Let's see solution codes and step by step algorithm!


---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$

Constraints say "s consists of English letters, digits, symbols and spaces". I think we have fixed max size of characters consisting of the input string.

```python []
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        max_length = left = 0
        count = {}

        for right, c in enumerate(s):
            count[c] = 1 + count.get(c, 0)
            while count[c] > 1:
                count[s[left]] -= 1
                left += 1
        
            max_length = max(max_length, right - left + 1)

        return max_length
```
```javascript []
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    let count = {};

    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        count[c] = (count[c] || 0) + 1;
        
        while (count[c] > 1) {
            count[s[left]] -= 1;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;    
};
```
```java []
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int maxLength = 0;
        int left = 0;
        Map<Character, Integer> count = new HashMap<>();

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            count.put(c, count.getOrDefault(c, 0) + 1);
            
            while (count.get(c) > 1) {
                char leftChar = s.charAt(left);
                count.put(leftChar, count.get(leftChar) - 1);
                left++;
            }
            
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;       
    }
}
```
```C++ []
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int maxLength = 0;
        int left = 0;
        unordered_map<char, int> count;

        for (int right = 0; right < s.length(); right++) {
            char c = s[right];
            count[c] = count[c] + 1;
            
            while (count[c] > 1) {
                char leftChar = s[left];
                count[leftChar] = count[leftChar] - 1;
                left++;
            }
            
            maxLength = max(maxLength, right - left + 1);
        }
        
        return maxLength;        
    }
};
```

## Step by step algorithm

1. **Initialization:**

```python
max_length = left = 0
count = {}
```

- `max_length`: Represents the length of the longest substring without repeating characters found so far. Initialized to 0.
- `left`: Marks the start index of the current substring.
- `count`: A dictionary used to store the count of characters encountered in the current substring.

2. **Iterating Over the String:**

```python
for right, c in enumerate(s):
```

- `right`: Represents the end index of the current substring. It is updated using `enumerate(s)`, which returns both the index and the character at that index in the string.
- `c`: Represents the character at the current index.

3. **Updating the Character Count:**

```python
count[c] = 1 + count.get(c, 0)
```

- This line updates the count of the current character `c` in the `count` dictionary.
- If `c` is not present in the dictionary, it initializes its count to 1. Otherwise, it increments its count by 1.

4. **Adjusting the Left Pointer:**

```python
while count[c] > 1:
    count[s[left]] -= 1
    left += 1
```

- This while loop adjusts the `left` pointer as long as there are repeating characters in the current substring.
- It decreases the count of the character at index `left` and increments `left` by 1 until there are no repeating characters.

5. **Updating the Maximum Length:**

```python
max_length = max(max_length, right - left + 1)
```

- This line updates the maximum length (`max_length`) of the substring without repeating characters.
- It calculates the length of the current substring (`right - left + 1`) and compares it with the current maximum length (`max_length`). If the current substring is longer, it updates `max_length`.

6. **Returning the Result:**

```python
return max_length
```

- After iterating through the entire string, the function returns the maximum length of the substring without repeating characters.

In summary, this algorithm efficiently finds the length of the longest substring without repeating characters using two pointers (`left` and `right`) and a dictionary (`count`) to keep track of character counts. It iterates through the string once, making it a linear time complexity algorithm.

# Solution 3 - the last position where each character was seen

In the solution 3, we also iterate through all characters one by one. That is `right` pointer.

We update `left` pointer with `HashMap`. In `HashMap`, we keep each character as a key and the last position where each character was seen\u3000as a value.

Do you remember this example in solution 1?

```
"abcb"
 l  r
```
Let's call HashMap `last_seen`.

In this case, `last_seen` should have this
```
last_seen = {a:0, b:1, c:2}

last position of a is 0
last position of b is 1
last position of c is 2

current max length shold be 3 (= abc)
```
Now we find the second `b` at index `3`. As I explain in solution 1, we have to remove characters until we have unique characters between `left` and `right`.

`left` pointer is at index `0` and the last position where `b` was seen is index `1`, so that's why we should update `left` pointer with `1`.

One more important thing is that if we update `left` with `1`, we have `bcb` as a string which is including duplicate characters.

That's why we should update `left` pointer with `the last position + 1`.

```
left = last_seen[character(= b)] + 1
= 2
```
Then compare max length
```
max_length = max(max_length, right - left + 1)
```

Easy\uD83D\uDE04!
Let's see solution codes and step by step algorithm!

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$

Constraints say "s consists of English letters, digits, symbols and spaces". I think we have fixed max size of characters consisting of the input string.


```python []
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_length = 0
        left = 0
        last_seen = {}

        for right, c in enumerate(s):
            if c in last_seen and last_seen[c] >= left:
                left = last_seen[c] + 1
            
            max_length = max(max_length, right - left + 1)
            last_seen[c] = right

        return max_length
```
```javascript []
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    let lastSeen = {};

    for (let right = 0; right < s.length; right++) {
        let c = s.charAt(right);
        if (c in lastSeen && lastSeen[c] >= left) {
            left = lastSeen[c] + 1;
        }
        maxLength = Math.max(maxLength, right - left + 1);
        lastSeen[c] = right;
    }

    return maxLength;     
};
```
```java []
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int maxLength = 0;
        int left = 0;
        Map<Character, Integer> lastSeen = new HashMap<>();

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (lastSeen.containsKey(c) && lastSeen.get(c) >= left) {
                left = lastSeen.get(c) + 1;
            }
            maxLength = Math.max(maxLength, right - left + 1);
            lastSeen.put(c, right);
        }

        return maxLength;       
    }
}
```
```C++ []
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int maxLength = 0;
        int left = 0;
        unordered_map<char, int> lastSeen;

        for (int right = 0; right < s.length(); right++) {
            char c = s[right];
            if (lastSeen.find(c) != lastSeen.end() && lastSeen[c] >= left) {
                left = lastSeen[c] + 1;
            }
            maxLength = max(maxLength, right - left + 1);
            lastSeen[c] = right;
        }

        return maxLength;        
    }
};
```

## Step by step algorithm

1. **Initialization:**

```python
max_length = 0
left = 0
last_seen = {}
```

- `max_length`: Keeps track of the length of the longest substring without repeating characters.
- `left`: Marks the start index of the current substring.
- `last_seen`: A dictionary to store the last seen index of each character in the string.

2. **Iterating Over the String:**

```python
for right, c in enumerate(s):
```

- `right`: Represents the current index of the character `c` being processed.
- `c`: Represents the current character being processed.

3. **Checking for Repeating Characters:**

```python
if c in last_seen and last_seen[c] >= left:
    left = last_seen[c] + 1
```

- If the character `c` is present in `last_seen` and its last seen index is greater than or equal to `left` (the start index of the current substring), it means that `c` is repeating within the current substring.
- In such a case, we update `left` to the index next to the last occurrence of `c`.

4. **Updating `max_length`:**

```python
max_length = max(max_length, right - left + 1)
```

- Update `max_length` with the maximum value between its current value and the length of the current substring (`right - left + 1`).
- `right - left + 1` represents the length of the current substring without repeating characters.

5. **Updating `last_seen`:**

```python
last_seen[c] = right
```

- Update the `last_seen` dictionary with the index `right` where the character `c` was last seen.

6. **Returning the Result:**

```python
return max_length
```

- After iterating through the entire string, return the maximum length of the substring without repeating characters.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ