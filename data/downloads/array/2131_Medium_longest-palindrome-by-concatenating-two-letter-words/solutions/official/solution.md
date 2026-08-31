# Official Solution

**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solution/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solution/)

---

[TOC]

## Solution

---

### Overview

Let's look at two palindromes consisting of even and odd number
of words.

![Palindromes](../Documents/2131/2131_palindromes.drawio.svg)

We see that the last word is the reverse of the first one, the second
last word is the reverse of the second one, and so on. The
palindrome of odd length contains a word in the middle. We call
this word *central*. All other words except the central one pair with their respective
reversed words (e.g., $ab$ pairs with $ba$, $xy$ pairs with $yx$, $nn$
pairs with $nn$).

It means that if a word is not a palindrome itself, it occurs
the same number of times as its reverse in the final string
(e.g., the number of occurrences of $ab$ in the palindrome is
the same as the one of $ba$). The maximum possible number of
times such a word occurs in the palindrome
is the minimum number of times this word and its reverse occur in
the input (e.g., when there are $7$ $ab$'s and $4$ $ba$'s, we
can only use $4$ occurrences of $ab$ and $ba$ in the final string).

Now consider a word that is a palindrome (consists of two equal
letters). It occurs an odd number of times in the final string
if and only if it is a central word because each word
except the central one has a pair. Since there can be only one
word in the middle, thus there will be only one palindromic word
that occurs an odd number of times in the final string.

Have a look at some examples.

![Examples](../Documents/2131/2131_examples.drawio.svg)

* There are $4$ occurrences of $aa$, $2$ occurrences of $pp$ and
$6$ occurrences of $xx$ in the input. We can take all these words
to the answer. The answer will contain $4+2+6=12$ words.

* There are $6$ occurrences of $mm$, $4$ occurrences of $nn$ and
$5$ occurrences of $qq$ in the input. We can use each word an even
number of times ($6$ $mm$'s, $4$ $nn$'s and $4$ $qq$'s).
The total number of used words is $6+4+4=14$. But we haven't used
all the words. There is one $mm$ and one $qq$ unused. We
can use one of these as a central word, and the answer will
contain $15$ words.

So, now we have to count the words.

---

### Approach 1: A Hash Map Approach

#### Intuition

One possible way to count the words is to use a hash map,
maintaining the number of occurrences for each word.

> A hash map is a data structure that **maps keys to values**.
A hash map uses a hash function to compute an index in an array
of buckets or slots, from which we can obtain the value for the
key in **constant time**.
<br />
Here, we will not focus on the internal workings of the hash map.
But if you are unfamiliar with it, look at our [Hash Table Explore Card](https://leetcode.com/explore/learn/card/hash-table/182/practical-applications/).

#### Algorithm

1. Count the number of occurrences of each word using a hashmap
(can use a `Counter` in Python).

2. Initialize $answer = 0$, $central = false$. The $answer$ will denote
the number of words in the final string and
the boolean variable $central$ will denote whether we have a central word.

3. For each palindromic $word$ do the following. If $count[word]$ is even,
increase $answer$ by $count[word]$. Otherwise, if $count[word]$ is odd,
increase $answer$ by $count[word] - 1$ and set $central=true$ (we can use the
$word$ as a central word).

4. For each non-palindrome $word$ such that $word[0] < word[1]$
(we need this condition to consider each pair only once and not twice,
e.g. we don't want to consider both $ba$ and $ab$ separately)
increase $answer$ by $2 \cdot \min (count[word], count[reversedWord])$
(we use $\min (count[word], count[reversedWord])$ pairs of the corresponding words).

5. If $central = true$, increase $answer$ by $1$.

6. Return $2 \cdot answer$. (Because each word has a length of $2$).

#### Implementation

<iframe src="https://leetcode.com/playground/XNTccGHp/shared" frameBorder="0" width="100%" height="500" name="XNTccGHp"></iframe>

#### Complexity Analysis

Let $$N$$ be the number of words in the input array and $|\Sigma|$
be the size of the English alphabet ($|\Sigma|=26$).

* Time complexity: $O(N + \min(N, |\Sigma|^2))$.

    We count the words in $O(N)$ time (assuming one
    operation with a hash map takes $O(1)$ time). Calculating the
    answer after that takes $O(\min (N, |\Sigma|^2))$ time as we
    iterate all hash map elements, and the size of the hash map is
    $O(\min (N, |\Sigma|^2))$.

* Space complexity: $O(\min (N, |\Sigma|^2))$.
    
    There can be up to $|\Sigma|^2$ distinct words of two letters
    ($|\Sigma|$ options for the first letter and $|\Sigma|$ options
    for the second one). Also, the total number of words is $N$.

---

### Approach 2: A Two-Dimensional Array Approach

#### Intuition

We already know that there are not more than $|\Sigma|^2$
distinct words. Let's think about which data structure other than a
hash map we can use to count the words.

All possible two-letter words can be:

![Words table](../Documents/2131/2131_matrix.drawio.svg)

It's possible to arrange two-letter words
into a square table. Instead of a hash map, we can use a
two-dimensional array $count$ of size $|\Sigma| \times |\Sigma|$.
Each cell of the matrix will contain the number of occurrences
of the corresponding word.

The algorithm is almost the same as in the previous approach.

#### Algorithm

1. Count the number of occurrences of each word using a two-dimensional array.
When a $word$ occurs, increase $count[word[0]-‘a’][word[1]-‘a’]$
(the number $0$ corresponds to the letter $a$, $1$ corresponds to
$b$, $25$ – to $z$).

2. Initialize $answer = 0$, $central = false$. The $answer$ will denote
the number of words in the final string and
the boolean variable $central$ will denote whether we have a central word.
(The same as in the hash map approach.)

3. Iterate over $0 \le i < |\Sigma|$. If $count[i][i]$ is even,
increase $answer$ by $count[i][i]$. Otherwise, if $count[i][i]$ is odd,
increase $answer$ by $count[i][i] - 1$ and set $central=true$ (we can use the
corresponding word as central word).

4. For each pair $(i, j)$ such that $0 \le i < j < |\Sigma|$
increase $answer$ by $2 \cdot \min (count[i][j], count[j][i])$
(we use $\min (count[i][j], count[j][i])$ pairs of the corresponding words).

5. If $central = true$, increase $answer$ by $1$. (The same as in the hash map approach.)

6. Return $2 \cdot answer$. (The same as in the hash map approach.)

#### Implementation


<iframe src="https://leetcode.com/playground/Rd7AfKR9/shared" frameBorder="0" width="100%" height="500" name="Rd7AfKR9"></iframe>


#### Complexity Analysis

Let $$N$$ be the number of words in the input array.

* Time complexity: $O(N + |\Sigma|^2)$.

    We count the words in $O(N)$ time and then calculate the answer in $O(|\Sigma|^2)$ time.

* Space complexity: $O(|\Sigma|^2)$.

    We are using an auxilary two-dimensional array $count$ of size $|\Sigma|^2$.