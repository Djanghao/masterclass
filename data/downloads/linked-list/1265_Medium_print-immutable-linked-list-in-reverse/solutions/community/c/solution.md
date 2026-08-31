# Sqrt decomposition solution + explanation.

**Author:** Byobe
**Votes:** 6
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/510913/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/510913/)

---

Disclaimer: this is not to show off the fastest solution but to explain the technique which may be useful. For instance, it might be that my code could be greatly optimized in various ways.

I would like to start with apparently the easiest solution for this problem:
```c++
void PrintDummy(ImmutableListNode* head, ImmutableListNode* tail) {
	std::vector<ImmutableListNode*> storage;
	for (auto it = head; it != tail; it = it->getNext()) {
		storage.push_back(it);
	}
	for (size_t idx = storage.size(); idx --> 0; ) {
		storage[idx]->printValue();
	}
}
```
As you see, it does not even use a recursion. Its complexity is `O(n)` both for space and time, where `n` is the length of a list.

Now let us try to elaborate on the better solution using this. The general technique I will be applying is called [sqrt decomposition](https://cp-algorithms.com/data_structures/sqrt_decomposition.html), the gist of the method is to apply a dumb solution for blocks of the data multiple times instead of the whole data.

In particular, what will happen with the space and time complexity if we use our easy solution for all blocks of length `a`? -- The time complexity would be `O(n / a * a) = O(n)`, and space complexity would be `O(a) + O(n / a)` where the latter summand is used to store the partition of a list into blocks of length `a`.

It is not hard to realise that the optimal value of `a` is somewhere around `sqrt(n)`. I believe that due to the fact that optimal length of blocks is usually a square root of something the method is called sqrt decomposition.

My own implementation of the described solution is below. But I am sure you can do better :)

```c++
size_t CountNodes(ImmutableListNode* head) {
	size_t len = 0;
	for (auto it = head; it != nullptr; it = it->getNext()) {
		++len;
	}
	return len;
}

void printLinkedListInReverse(ImmutableListNode* head) {
	size_t chunk_size = 1 + std::sqrt(CountNodes(head));

	std::vector<ImmutableListNode*> storage = {head};
	size_t count = 0;
	for (auto it = head; it != nullptr; it = it->getNext()) {
		++count;

		if (count > chunk_size) {
			count = 0;
			storage.push_back(it);
		}
	}
	for (size_t idx = storage.size(); idx --> 0; ) {
		ImmutableListNode* tail = nullptr;
		if (idx + 1 < storage.size()) {
			tail = storage[idx + 1];
		}
		PrintDummy(storage[idx], tail);
	}
}
```