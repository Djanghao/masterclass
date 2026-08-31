# Official Solution

**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solution/](https://leetcode.com/problems/encode-and-decode-strings/solution/)

---

[TOC]

## Solution

---

### Approach 1: Non-ASCII delimiter
	
#### Intuition

Our problem is to encode and decode strings, which includes creating a single string from a list of strings and then reverting it back to the original list of strings. This can be a bit tricky since any string can contain any ASCII character.

To accomplish this, we often use a *delimiter*, which is a special character or sequence of characters that we insert between each string when we combine them into one. The key thing about a delimiter is that it must be a character or sequence of characters that doesn't occur in the strings we're encoding. This allows us to correctly separate the strings when we decode them.

In many cases, we might use a common ASCII character as the delimiter. [ASCII (American Standard Code for Information Interchange)](https://en.wikipedia.org/wiki/ASCII) is a character encoding standard that includes most of the characters you see on a standard keyboard, like letters, digits, punctuation marks, and some control characters. For example, it is common to use a delimiter like a comma to separate integers. However, if the strings we're encoding could contain any ASCII character, then we can't use an ASCII character as the delimiter, because we wouldn't know whether that character is part of a string or a delimiter.

That's where the idea of a non-ASCII delimiter comes in. There are many more characters available than just the ones in the ASCII set. [Unicode](https://en.wikipedia.org/wiki/Unicode) is a character encoding standard that includes virtually every character from every writing system in the world, plus many symbols, control characters, and more. There are many Unicode characters that are not commonly used in text, and we can use one of these as our delimiter.

For example, let's say we have a list of strings `["abc", "d,ef"]` and we wanted to use a comma as a delimiter. We would end up with the string `"abc,d,ef"` which would be converted back as `["abc", "d", "ef"]`, which is incorrect. We can't tell the difference between a comma being a delimiter or part of a string.

In this approach, we could choose a Unicode character like `π`. We can use this character as our delimiter when we encode our list of strings, and then look for this character to find the boundaries between strings when we decode.

This non-ASCII delimiter approach is simple and effective as long as we can be sure that the delimiter character won't appear in the strings we're encoding. However, it's worth noting that non-ASCII characters can sometimes be tricky to handle correctly, because not all systems or software handle non-ASCII characters in the same way.

#### Algorithm

##### Encoding Process

* Initialize an empty string (or a string builder/stream for efficiency) to hold the encoded string.
* Iterate over the strings in the list. For each string:
	* Add the string to the encoded string.
	* After each string, add the non-ASCII delimiter `π` to the encoded string.
* Once you've processed all the strings in the list, the resulting encoded string should be a concatenation of all the strings in the list, each followed by the non-ASCII delimiter.

##### Decoding Process

* Initialize an empty list to hold the decoded strings.
* Split the encoded string by the non-ASCII delimiter `π`.
* The resulting list of strings is the decoded list.

#### Implementation

<iframe src="https://leetcode.com/playground/Q9iRRZsA/shared" frameBorder="0" width="100%" height="463" name="Q9iRRZsA"></iframe>


#### Complexity Analysis

Let $n$ denote the total number of characters across all strings in the input list and $k$ denote the number of strings.

* Time Complexity: $O(n)$.

	Both encoding and decoding processes iterate over every character in the input, thus they both have a linear time complexity of $O(n)$.
	
* Space Complexity: $O(k)$.

	We don't count the output as part of the space complexity, but for each word, we are using some space for the delimiter.

---

### Approach 2: Escaping

#### Intuition

While the non-ASCII delimiter approach can work well for many applications, it assumes that the delimiter character will not appear in the strings to be encoded. However, in many practical situations, we cannot make this assumption. The strings might contain any possible character, including our chosen delimiter. Therefore, we need a different approach that can handle this situation.

For our purpose, we select `/:` as the delimiter. This choice provides us with a unique pattern to signal the end of a string during the encoding and decoding process. However, there's still a potential issue: What happens if one of our strings naturally contains the sequence `/:`? Let's examine how we can resolve this situation.

**Example 1: Simple approach works**

Suppose we have the following list of strings: `["Hello", "World", "Nice", "To", "Meet", "You"]`.

If we use the simple approach to encode these strings, we just join them with our delimiter `/:` in between. This gives us: `Hello/:World/:Nice/:To/:Meet/:You/:`.

When we decode this string, we split it at every `/:`, which gives us back our original list of strings: `["Hello", "World", "Nice", "To", "Meet", "You"]`. So the simple approach works in this case.

**Example 2: Simple approach does not work**

Now suppose we have a different list of strings: `["Hello", "Wor/:ld", "Nice", "To", "Meet", "You"]`.

If we use the simple approach to encode these strings, we get: `Hello/:Wor/:ld/:Nice/:To/:Meet/:You/:`.

However, when we decode this string by splitting it at every `/:`, we get: `["Hello", "Wor", "ld", "Nice", "To", "Meet", "You"]`, which is not the same as our original list of strings.

The string `Wor/:ld` has been incorrectly split into two strings: `Wor` and `ld`. The problem is that our delimiter `/:` appears in the original string `Wor/:ld`, which confuses our simple encoding and decoding approach.

To handle this, we use a technique called *escaping*. This is a common concept in computer programming.

So, what's the purpose of escaping? Let's say you have a character that has a special meaning in a certain context, like our delimiter `/:`. If this character sequence appears in our original strings, it might confuse our encoding and decoding process. We need a way to signal that in this particular instance, we don't want to treat `/:` as a delimiter but as a part of the original string.

This is where escaping comes in. By choosing a specific character to act as an "escape character", we can denote that any special character following the escape character should be treated as a normal character instead of its special meaning. Here we choose the slash character `/` as our escape character.

Let's illustrate with an example. Consider we have a string `Wor/:ld`. To avoid our delimiter `/:` being misinterpreted, we would "escape" the slash before the colon, making it `//:`. So, the string becomes `Wor//:ld`. Now, our encoding and decoding process will understand that `/:` in this context is not a delimiter, but a part of the original string.

Let's consider another example using the escaping approach for the problem. In this case, our input list of strings is: `["Hello", "World/:", "How/are you?"]`.

We have one string `World/:` that contains our delimiter sequence `/:` and another string `How/are you?` that contains the slash character `/`.

First, we'll encode the list of strings into a single string.

We iterate over each string in the list, and for each string, we iterate over each character. If a character is a slash `/`, we add another slash to escape it, resulting in `//`. If a character is not a slash, we simply add it to the output string. After we've processed all the characters in a string, we append our delimiter `/:` to mark the end of that string.

This gives us the following encoded string: `Hello/:World//:/:How//are you?/:`.

Now, we'll decode the encoded string back into a list of strings.

We initialize an empty list to hold the decoded strings and an empty string to build the current string. Then, we iterate over the characters in the encoded string.

If a character is our escape character `/`, we check the next character. If the next character is also a slash (so we have `//`), it indicates that the original string had a `/` and we just escaped it. However, if the next character is a `:` (so we have `/:`), it is our delimiter.

1. If we find two characters `//`, it indicates an escaped slash. We add `/` to the current string and move on.
2. If we find two characters `/:`, it indicates our delimiter. We add the current string to the output, clear it, and move on.

So, how does the algorithm detect when the delimiter `/:` is part of a string? In the encoded string, `/:` is converted to `//:`. As we iterate over the encoded string, we see `//` (case 1), add `/`, and then move on to the `:`. To summarize:

1. If we see `//:`, it means `/:` was part of a string, not a delimiter. The first slash is the escape character and what comes after it is the contents of the string.
2. If we see `/:`, it must be a delimiter, because if it wasn't then it would have been escaped to `//:`.

After we've processed all the characters in the encoded string, we return the list of decoded strings.

This gives us our original list of strings: `["Hello", "World/:", "How/are you?"]`.

When we decode the string, we would recognize the escape character and understand that the `/:` sequence that follows is not a delimiter but part of the original string.

The concept of escaping in computing is widely used and has many real-world applications. Here are a few examples:

* **HTML and XML**: In these markup languages, the characters `<`, `>`, and `&` have special meanings and are used to denote tags and entities. If you want to include these characters as text in a document, you need to use their escaped versions: `&lt;`, `&gt;`, and `&amp;`.

* **SQL Queries**: In SQL, single quotes are used to denote string literals. To include a single quote within the string itself, you need to escape it using two single quotes: `'It''s a sunny day'`.

* **Regular Expressions**: In regex, many characters like `.`, `*`, `+`, `?`, `^`, `(`, `)`, `{`, `}`, `[`, `]`, `\`, `|`, `/` have special meanings. If you want to match these characters literally, you need to escape them using a backslash.

* **Programming Languages**: Almost all programming languages have some form of escape sequences to denote special characters. For example, in Python, Java, and C++, `\\n` denotes a newline, `\\t` denotes a tab, `\\"` is used for a double quote within a string that is enclosed by double quotes, and `\\'` is used for a single quote within a string that is enclosed by single quotes.

These examples illustrate the escaping technique's importance in handling special characters across various domains in computing.

#### Algorithm

##### Encoding Process

* Initialize an empty string (or a string builder/stream for efficiency) to hold the encoded string.
* Iterate over each string in the input list. For each string:
	* Replace each occurrence of the slash character `/` with two slash characters `//`. This is our way of "escaping" the slash character.
	* Add the escaped string and our chosen delimiter `/:` to the encoded string.
* Return the encoded string after all strings in the input list have been processed.

##### Decoding Process

* Initialize an empty list to hold the decoded strings.
* Initialize an empty string to build the current string being decoded.
* Iterate over the characters in the encoded string. For each character:
	* If the character and the next one form the delimiter `/:`, add the current string to the list of decoded strings and clear the current string for the next one. Skip the next character in the string.
	* If the character and the next one form the escaped slash `//`, add a single slash to the current string. Skip the next character in the string.
	* Otherwise, add the character to the current string.
* Return the list of decoded strings after all characters in the encoded string have been processed.

#### Implementation

<iframe src="https://leetcode.com/playground/nCtxRa7K/shared" frameBorder="0" width="100%" height="500" name="nCtxRa7K"></iframe>


#### Complexity Analysis

Let $n$ denote the total number of characters across all strings in the input list and $k$ denote the number of strings.

* Time Complexity: $O(n)$.

	Both encoding and decoding processes iterate over every character in the input, thus they both have a linear time complexity of $O(n)$.
	
* Space Complexity: $O(k)$.

	We don't count the output as part of the space complexity, but for each word, we are using some space for the escape character and delimiter.

---

### Approach 3: Chunked Transfer Encoding

#### Intuition

Chunked transfer encoding is a method used in data communication protocols to send data in self-contained *chunks*, each of which is accompanied by its length or size. In the context of our problem, this technique can be very useful.

In our encoding process, instead of just joining all the strings together with a delimiter, we would precede each string with its length, followed by a delimiter, and then the string itself. This way, even if our string contains the delimiter, we can correctly identify the string boundaries.

When we decode our encoded string, we know that the first item before the delimiter is the length of the string.

Consider an example for a list of strings using chunked transfer encoding.

Suppose we have the following list of strings: `["Hello", "World", "/:Example/:"]`. As you can see, our last string even contains the `/:` character sequence that we might choose as our delimiter.

Let's see how we would encode and decode this using chunked transfer encoding.

**Encoding:**

For the encoding, we take each string's length, followed by a delimiter (we'll use `/:`), and then the string itself.

For `"Hello"`, the length is $5$. So we start our encoded string with `5/:Hello`.

Next, for `"World"`, the length is $5$ as well. So we add `5/:World` to our encoded string.

Finally, for `"/:Example/:"`, the length is $11$. We add `11/:/:Example/:` to our encoded string.

After processing all strings, our encoded string becomes `5/:Hello5/:World11/:/:Example/:`.

**Decoding:**

For the decoding process, we start reading the encoded string.

First, we read until we encounter `/:`, which gives us `5`. This tells us that the length of our first string is $5$. So, we read the next $5$ characters to get `"Hello"`.

Next, we again read until `/:` to get `5`, indicating that our next string is of length $5$. Reading the next $5$ characters gives us `"World"`.

Finally, reading until the next `/:` gives us $11$. Reading the next $11$ characters gives us `"/:Example/:"`.

After processing the whole encoded string, we are left with the original list of strings: `["Hello", "World", "/:Example/:"]`.

Through this process, we have successfully encoded and decoded our list of strings using chunked transfer encoding. Even though our list contained a string with the delimiter sequence, we were still able to accurately encode and decode the list.

The advantage of this method is that it doesn't matter what characters our string consists of. It could include the delimiter, or any other special or non-ASCII characters, and we would still correctly encode and decode the list of strings. This is because we always know where each string starts and ends, thanks to the length prefix.

Numbers being in the string can't confuse the algorithm either since the number characters would be after the delimiter `/:`. For example, let's say we had `["Hello", "32World", "Example"]`. It would encode to `"5/:Hello7:/32World7:/Example"`. We read the `7`, then stop upon seeing the delimiter, and the $32$ being a number is irrelevant.

#### Algorithm

> Note: we are using `/:` as a delimiter solely for continuity (as we used it in the previous approach). However, we could use any non-digit delimiter for this approach, like `#` for example.

##### Encoding Process

* Initialize an empty string (or a string builder/stream for efficiency) to hold the encoded string.
* Iterate over the list of strings. For each string:
	* Calculate the length of the string.
	* Append the string length to the encoded string, followed by the delimiter.
	* Append the string itself to the encoded string.

This way, each string in our encoded string is prefixed by its length and a delimiter.

##### Decoding Process

* Initialize an empty list to hold the decoded strings.
* Start reading the encoded string. Until you reach the end of the string:
	* First, read characters until you hit the delimiter. This part will be the string length (since we encoded it that way).
	* Convert this part to an integer. Let's call it $\text{length}$.
	* Read the next $\text{length}$ characters (not including the delimiter). This part will be the original string.
	* Add this string to our decoded strings list.

#### Implementation

<iframe src="https://leetcode.com/playground/JJvtdxqv/shared" frameBorder="0" width="100%" height="500" name="JJvtdxqv"></iframe>


#### Complexity Analysis

Let $n$ denote the total number of characters across all strings in the input list and $k$ denote the number of strings.

* Time Complexity: $O(n)$.

	We are iterating through each string once.

* Space Complexity: $O(k)$.

	We don't count the output as part of the space complexity, but for each word, we are using some space for the length and delimiter.