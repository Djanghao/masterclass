# Official Solution

**Link:** [https://leetcode.com/problems/unique-email-addresses/solution/](https://leetcode.com/problems/unique-email-addresses/solution/)

---

[TOC]

## Solution

---

### Overview

We need to clean the emails given to us. The most intuitive solution will be to iterate over the emails and clean them one by one.  
Here, cleaning the email means removing unnecessary characters, per the rules given to us. Once an email has been cleaned, it can be pushed into a hash set. The size of this hash set will then equal the count of unique emails.

<br />

**Rules to clean email:**

-   If there are periods `'.'` in _local name_ ignore them.
-   If there is a plus `'+'` in _local name_ skip all local name characters till `'@'`.
-   There is only one `'@'` symbol and the substring after it is our _domain name_; we will keep the _domain name_ as it is.

---

### Approach 1: Linear Iteration

**Intuition**

We can iterate over an email from left to right, and add characters to local name until a `'+'` occurs, then we can skip all characters until `'@'` occurs, then we can again start appending the characters till the end of the email string to form the domain name.
 
Notice that per the rules, we do not need to read any characters between the first `'+'` and `'@'`.  While checking each character from left to right, after finding the first `'+'` in the local name we can directly find the domain name by switching to a reverse iteration as there is only one `'@'` and we will skip all characters in between `'+'` and `'@'`.

> This reduces the number of characters iterated, but the overall order time complexity remains the same.

> For example, consider `email = ab.c+abcdefghijklmnopqrstuvwxyz@leetcode.com`.  
> Performing a linear scan from left to right, we will traverse all the characters in the given email.  
> Using the method proposed above, we can skip the characters from index `5` to index `30`, thus saving time.
> However, keep in mind that because we read the domain name from right to left, we must also reverse the domain name before appending it to the local name.  Thus, this improvement will be less effective when the domain name is long compared to the number of characters skipped.

**Algorithm**

1. For each email present in the `emails` array:
    - Iterate over the characters in the email and append each character to the local name if it is not `'.'`.
    - If the character is `'+'`, do not append the character and break out of the loop.
2. Find the domain name using reverse traversal in the given email and append it to the string formed till now.
    - After cleaning the email insert it into the hash set.
3. Return the size of the hash set.

!?!../Documents/929/929_unique_email_addresses.json:960,540!?!

<br />

**Implementation**

<iframe src="https://leetcode.com/playground/7CVThSBg/shared" frameBorder="0" width="100%" height="500" name="7CVThSBg"></iframe>

**Complexity Analysis**

Let $$N$$ be the number of the emails and $$M$$ be the average length of an email.

-   Time Complexity: $$O(N \cdot M)$$  
    In the worst case, we iterate over all the characters of each of the emails given.  
    If we have `N` emails and each email has `M` characters in it.
    Then complexity is of order `(Number of emails) * (Number of characters in average email) = N*M`.

-   Space Complexity: $$O(N \cdot M)$$  
    In the worst case, when all emails are unique, we will store every email address given to us in the hash set.

<br/>

---

### Approach 2: Using String Split Method

**Intuition**

A more elegant way of cleaning emails is to leverage built-in functions such as `split` and `replace`.

-   The string `split()` method breaks a given string around matches of the given regular expression.
-   The string `replace()` method returns a new string after replacing all occurrences of some substring or character (in this case `'.'`) with a new substring or character (in this case `''`).

**Algorithm**

1. For each email present in the `emails` array:
    - Split the string into two parts separated by`'@'`, local name, and domain name.
    - Split the local name into parts separated by `'+'`. Since we do not need the part after `'+'`, let the first part be the local name.
    - Remove all `'.'` from the local name and append the domain name to it.
    - After cleaning the email, insert it into the hash set.
2. Return the size of the hash set.

<br />

**Implementation**

<iframe src="https://leetcode.com/playground/mBmUWSJ7/shared" frameBorder="0" width="100%" height="378" name="mBmUWSJ7"></iframe>

**Complexity Analysis**

Let $$N$$ be the number of the emails and $$M$$ be the average length of an email.

-   Time Complexity: $$O(N \cdot M)$$  
    The split method must iterate over all of the characters in each email and the replace method must iterate over all of the characters in each local name.  As such, they both require linear time and are $$O(M)$$ operations.
    Since there are `N` emails and the average email has `M` characters in it, the complexity is of order `(Number of emails) * (Number of characters in an email) = N*M`.

-   Space Complexity: $$O(N \cdot M)$$  
    In the worst case, when all emails are unique, we will store every email address given to us in the hash set.

<br/>

---