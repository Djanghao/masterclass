# Golang one liner with a quick explanation

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/1207984/](https://leetcode.com/problems/truncate-sentence/solutions/1207984/)

---

[1816. Truncate Sentence](https://leetcode.com/problems/truncate-sentence/)

*Note: If you don't understand the solution comment below because this solution could be kind of hard to understand for someone who doesn't code in golang.*

Since the solution wants us to return the first `k` words 

* We can split the words
* Then we can return the the first `k` words joined together seperated by spaces.

**The Solution**

``` go
func truncateSentence(s string, k int) string {
	return strings.Join(strings.Split(s, " ")[:k], " ")
}
```

**Edited Solution for readability**

``` go
func truncateSentence(s string, k int) string {
	arr := strings.Split(s, " ")
	return strings.Join(arr[:k], " ")
}
```