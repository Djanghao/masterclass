# [2288. Apply Discount to Prices](https://leetcode.com/problems/apply-discount-to-prices/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 219 | 1123 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `amazon`

## Description

A **sentence** is a string of single-space separated words where each word can contain digits, lowercase letters, and the dollar sign `'$'`. A word represents a **price** if it is a sequence of digits preceded by a dollar sign.

	- For example, `"$100"`, `"$23"`, and `"$6"` represent prices while `"100"`, `"$"`, and `"$1e5"` do not.

You are given a string `sentence` representing a sentence and an integer `discount`. For each word representing a price, apply a discount of `discount%` on the price and **update** the word in the sentence. All updated prices should be represented with **exactly two** decimal places.

Return *a string representing the modified sentence*.

Note that all prices will contain **at most** `10` digits.

 

**Example 1:**

```

Input: sentence = &quot;there are $1 $2 and 5$ candies in the shop&quot;, discount = 50
Output: &quot;there are $0.50 $1.00 and 5$ candies in the shop&quot;
Explanation: 
The words which represent prices are &quot;$1&quot; and &quot;$2&quot;. 
- A 50% discount on &quot;$1&quot; yields &quot;$0.50&quot;, so &quot;$1&quot; is replaced by &quot;$0.50&quot;.
- A 50% discount on &quot;$2&quot; yields &quot;$1&quot;. Since we need to have exactly 2 decimal places after a price, we replace &quot;$2&quot; with &quot;$1.00&quot;.

```

**Example 2:**

```

Input: sentence = &quot;1 2 $3 4 $5 $6 7 8$ $9 $10___PRE_BLOCK_1___quot;, discount = 100
Output: &quot;1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10___PRE_BLOCK_1___quot;
Explanation: 
Applying a 100% discount on any price will result in 0.
The words representing prices are &quot;$3&quot;, &quot;$5&quot;, &quot;$6&quot;, and &quot;$9&quot;.
Each of them is replaced by &quot;$0.00&quot;.

```

 

**Constraints:**

	- `1 <= sentence.length <= 10^5`

	- `sentence` consists of lowercase English letters, digits, `' '`, and `'$'`.

	- `sentence` does not have leading or trailing spaces.

	- All words in `sentence` are separated by a single space.

	- All prices will be **positive** numbers without leading zeros.

	- All prices will have **at most** `10` digits.

	- `0 <= discount <= 100`

---

**Links:** [Submissions](https://leetcode.com/problems/apply-discount-to-prices/) | [Solutions](https://leetcode.com/problems/apply-discount-to-prices/)
