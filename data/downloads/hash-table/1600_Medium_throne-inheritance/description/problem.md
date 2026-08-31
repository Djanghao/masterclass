# [1600. Throne Inheritance](https://leetcode.com/problems/throne-inheritance/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 315 | 338 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`design`](https://leetcode.com/tag/design)

**Companies:** `snowflake`, `google`

## Description

A kingdom consists of a king, his children, his grandchildren, and so on. Every once in a while, someone in the family dies or a child is born.

The kingdom has a well-defined order of inheritance that consists of the king as the first member. Let's define the recursive function `Successor(x, curOrder)`, which given a person `x` and the inheritance order so far, returns who should be the next person after `x` in the order of inheritance.

```

Successor(x, curOrder):
    if x has no children or all of x&#39;s children are in curOrder:
        if x is the king return null
        else return Successor(x&#39;s parent, curOrder)
    else return x&#39;s oldest child who&#39;s not in curOrder

```

For example, assume we have a kingdom that consists of the king, his children Alice and Bob (Alice is older than Bob), and finally Alice's son Jack.

	- In the beginning, `curOrder` will be `["king"]`.

	- Calling `Successor(king, curOrder)` will return Alice, so we append to `curOrder` to get `["king", "Alice"]`.

	- Calling `Successor(Alice, curOrder)` will return Jack, so we append to `curOrder` to get `["king", "Alice", "Jack"]`.

	- Calling `Successor(Jack, curOrder)` will return Bob, so we append to `curOrder` to get `["king", "Alice", "Jack", "Bob"]`.

	- Calling `Successor(Bob, curOrder)` will return `null`. Thus the order of inheritance will be `["king", "Alice", "Jack", "Bob"]`.

Using the above function, we can always obtain a unique order of inheritance.

Implement the `ThroneInheritance` class:

	- `ThroneInheritance(string kingName)` Initializes an object of the `ThroneInheritance` class. The name of the king is given as part of the constructor.

	- `void birth(string parentName, string childName)` Indicates that `parentName` gave birth to `childName`.

	- `void death(string name)` Indicates the death of `name`. The death of the person doesn't affect the `Successor` function nor the current inheritance order. You can treat it as just marking the person as dead.

	- `string[] getInheritanceOrder()` Returns a list representing the current order of inheritance **excluding** dead people.

 

**Example 1:**

```

Input
[&quot;ThroneInheritance&quot;, &quot;birth&quot;, &quot;birth&quot;, &quot;birth&quot;, &quot;birth&quot;, &quot;birth&quot;, &quot;birth&quot;, &quot;getInheritanceOrder&quot;, &quot;death&quot;, &quot;getInheritanceOrder&quot;]
[[&quot;king&quot;], [&quot;king&quot;, &quot;andy&quot;], [&quot;king&quot;, &quot;bob&quot;], [&quot;king&quot;, &quot;catherine&quot;], [&quot;andy&quot;, &quot;matthew&quot;], [&quot;bob&quot;, &quot;alex&quot;], [&quot;bob&quot;, &quot;asha&quot;], [null], [&quot;bob&quot;], [null]]
Output
[null, null, null, null, null, null, null, [&quot;king&quot;, &quot;andy&quot;, &quot;matthew&quot;, &quot;bob&quot;, &quot;alex&quot;, &quot;asha&quot;, &quot;catherine&quot;], null, [&quot;king&quot;, &quot;andy&quot;, &quot;matthew&quot;, &quot;alex&quot;, &quot;asha&quot;, &quot;catherine&quot;]]

Explanation
ThroneInheritance t= new ThroneInheritance(&quot;king&quot;); // order: king
t.birth(&quot;king&quot;, &quot;andy&quot;); // order: king &gt; andy
t.birth(&quot;king&quot;, &quot;bob&quot;); // order: king &gt; andy &gt; bob
t.birth(&quot;king&quot;, &quot;catherine&quot;); // order: king &gt; andy &gt; bob &gt; catherine
t.birth(&quot;andy&quot;, &quot;matthew&quot;); // order: king &gt; andy &gt; matthew &gt; bob &gt; catherine
t.birth(&quot;bob&quot;, &quot;alex&quot;); // order: king &gt; andy &gt; matthew &gt; bob &gt; alex &gt; catherine
t.birth(&quot;bob&quot;, &quot;asha&quot;); // order: king &gt; andy &gt; matthew &gt; bob &gt; alex &gt; asha &gt; catherine
t.getInheritanceOrder(); // return [&quot;king&quot;, &quot;andy&quot;, &quot;matthew&quot;, &quot;bob&quot;, &quot;alex&quot;, &quot;asha&quot;, &quot;catherine&quot;]
t.death(&quot;bob&quot;); // order: king &gt; andy &gt; matthew &gt; bob &gt; alex &gt; asha &gt; catherine
t.getInheritanceOrder(); // return [&quot;king&quot;, &quot;andy&quot;, &quot;matthew&quot;, &quot;alex&quot;, &quot;asha&quot;, &quot;catherine&quot;]

```

 

**Constraints:**

	- `1 <= kingName.length, parentName.length, childName.length, name.length <= 15`

	- `kingName`, `parentName`, `childName`, and `name` consist of lowercase English letters only.

	- All arguments `childName` and `kingName` are **distinct**.

	- All `name` arguments of `death` will be passed to either the constructor or as `childName` to `birth` first.

	- For each call to `birth(parentName, childName)`, it is guaranteed that `parentName` is alive.

	- At most `10^5` calls will be made to `birth` and `death`.

	- At most `10` calls will be made to `getInheritanceOrder`.

---

**Links:** [Submissions](https://leetcode.com/problems/throne-inheritance/) | [Solutions](https://leetcode.com/problems/throne-inheritance/)
